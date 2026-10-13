// Spanish version of map_logic.js, used by map_es.html with load_state_dates_es.js.
// Same rules as map_logic.js (which rows show in a popup, which dates shade the map), applied to
// ES_state_dates_2026.csv. The rules match the Spanish CSV's categories and wording, all listed in
// RULES below: if the CSV's categoría names or labels change, update them here.

const RULES = {
  // categoría values
  registrationByMethod: "Inscripción del elector, por método",  // VOTE411: one deadline per method
  registration: "Inscripción del elector",                      // U.S. Vote and state sources
  mailRequest: "Solicitud de boletas de voto enviadas por correo",
  mailReturn: "Devolución de boletas de voto enviadas por correo",
  earlyVoting: "Votación anticipada",
  // wording matched in etiqueta / nota
  sameDay: /mismo día/i,                                        // same-day / Election Day registration labels
  excuse: /con excusa|obligatorio presentar excusa/i,           // excuse-only in-person absentee notes
  earlyVotingLabel: /^votación anticipada$/i,                   // plain early voting (vs. in-person absentee)
  postmarked: /sello postal/i                                   // "postmarked by Election Day" return labels
};

const rowsIn = (s, category) => s.rows.filter(r => r.category === category);
// early-voting rows minus excuse-only ones (e.g. Kentucky's and Missouri's in-person absentee windows)
const earlyVotingRows = s => rowsIn(s, RULES.earlyVoting).filter(r => !RULES.excuse.test(r.note || ""));
const isEarlyVoting = r => RULES.earlyVotingLabel.test(r.label || "Votación anticipada");

/* The rows a state's popup shows, as in map_logic.js:
     registrationByMethod -> every row
     registration         -> only same-day / Election Day registration rows (VOTE411's by-method dates are used instead)
     mailRequest, mailReturn -> every row
     earlyVoting          -> every row except excuse-only ones
   Any other categoría (e.g. one added to the CSV later) shows every row. */
function stateRows(s){
  const known = [RULES.registrationByMethod, RULES.registration, RULES.mailRequest, RULES.mailReturn, RULES.earlyVoting];
  return [
    ...rowsIn(s, RULES.registrationByMethod),
    ...rowsIn(s, RULES.registration).filter(r => RULES.sameDay.test(r.label)),
    ...rowsIn(s, RULES.mailRequest),
    ...rowsIn(s, RULES.mailReturn),
    ...earlyVotingRows(s),
    ...s.rows.filter(r => !known.includes(r.category))
  ];
}

/* A state's rows for its popup: `dated` as [date, entries] in date order. Within a date, as in map.html:
   early voting first, then the rest in stateRows() order (registration, mail request, mail return, …).
   An entry is { row, mark }: a date range is listed twice, under its start date (mark "begins") and its
   end date (mark "ends"); a single date has no mark. `undated` rows (no date at all) come after. */
function stateKeyDates(s){
  const entries = r => {
    if (r.date) return [{ date: r.date, row: r }];
    if (r.start && r.start === r.end) return [{ date: r.start, row: r }];
    return [r.start && { date: r.start, row: r, mark: "begins" }, r.end && { date: r.end, row: r, mark: "ends" }].filter(Boolean);
  };
  const rows = stateRows(s);
  const rank = e => (e.row.category === RULES.earlyVoting ? -rows.length : 0) + rows.indexOf(e.row);
  const byCategory = (a, b) => rank(a) - rank(b);
  const dated = d3.groups(rows.flatMap(entries), e => e.date)
    .sort(([a], [b]) => d3.ascending(a, b))
    .map(([date, list]) => [date, list.sort(byCategory)]);
  return { dated, undated: rows.filter(r => !entries(r).length).map(row => ({ row })).sort(byCategory) };
}

/* ---------- map: the events behind the tile shading and the date legend ----------
   One date per state per event type, picked exactly as buildEvents() in map_logic.js does.
   Each event has the CSV `category` and a `mark` ("begins" / "ends" or none) for the legend. */
const EVENT_TYPES = [  // legend order, as in map_logic.js
  "registration", "sameDayEnds", "mailRequest", "emergencyEnds",
  "earlyStart", "earlyEnd", "mailDue", "mailDuePostmarked"
];
const EVENT_MARKS = { sameDayEnds: "ends", emergencyEnds: "ends", earlyStart: "begins", earlyEnd: "ends" };

function buildEvents(states){
  const events = [];
  const add = (date, type, state, rows) => date && events.push({ date, type, state, rows,
    category: rows[0].category, mark: EVENT_MARKS[type] });

  Object.entries(states).forEach(([abbr, s]) => {
    // Registration deadline: VOTE411's by-method dates, one event per date; Election Day dates left out
    const byMethod = rowsIn(s, RULES.registrationByMethod).filter(r => r.date && r.date !== s.electionDate);
    d3.group(byMethod, r => r.date).forEach((rows, date) => add(date, "registration", abbr, rows));

    // Same-day registration: the latest end before Election Day
    const sdr = rowsIn(s, RULES.registration).filter(r => r.end && RULES.sameDay.test(r.label) && r.end !== s.electionDate)
      .sort((a, b) => d3.ascending(a.end, b.end));
    if (sdr.length) add(sdr[sdr.length - 1].end, "sameDayEnds", abbr, [sdr[sdr.length - 1]]);

    // Mail ballot request: the first single-date row; emergency periods (ranges): the latest end
    const requests = rowsIn(s, RULES.mailRequest);
    const req = requests.find(r => r.date);
    if (req) add(req.date, "mailRequest", abbr, [req]);
    const emerg = requests.filter(r => r.end).sort((a, b) => d3.ascending(a.end, b.end));
    if (emerg.length) add(emerg[emerg.length - 1].end, "emergencyEnds", abbr, [emerg[emerg.length - 1]]);

    // Early voting: earliest start and latest end across plain "Votación anticipada" rows,
    // or across in-person absentee windows when the state has no dated plain early-voting row
    const evDated = earlyVotingRows(s).filter(r => r.start || r.end);
    const ev = evDated.filter(isEarlyVoting);
    const evRows = ev.length ? ev : evDated;
    const starts = evRows.filter(r => r.start).sort((a, b) => d3.ascending(a.start, b.start));
    const ends = evRows.filter(r => r.end).sort((a, b) => d3.ascending(a.end, b.end));
    if (starts.length) add(starts[0].start, "earlyStart", abbr, [starts[0]]);
    if (ends.length) add(ends[ends.length - 1].end, "earlyEnd", abbr, [ends[ends.length - 1]]);

    // Mail ballots due: the first postmark row, and the latest of the other return rows
    const returns = rowsIn(s, RULES.mailReturn).filter(r => r.date);
    const post = returns.find(r => RULES.postmarked.test(r.label));
    if (post) add(post.date, "mailDuePostmarked", abbr, [post]);
    const received = returns.filter(r => r !== post).sort((a, b) => d3.ascending(a.date, b.date));
    if (received.length) add(received[received.length - 1].date, "mailDue", abbr, [received[received.length - 1]]);
  });
  return events;
}

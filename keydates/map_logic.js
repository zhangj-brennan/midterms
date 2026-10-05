// How the map turns STATE_DATES (from load_state_dates.js) into what it shows.
// Shared by map.html (which draws it) and mapcheck.html (which lists it next to the CSV rows),
// so the check page always reflects exactly what the map does.
//
// Every row and event carries `src`: the CSV rows it came from (see `csv` in load_state_dates.js).
// The map ignores `src`; mapcheck.html uses it to trace dates back to CSV lines.

/* ---------- popup parsing: CSV rows -> the lines in a state's popup ----------
   One state's deadlines as { date, what, how, time, note, src } rows; ranges become a start row and an end row.
   `dated` rows are grouped under date headings; `undated` rows go under "Other".

   Which CSV rows show up, and as what:
     Voter registration by method (VOTE411)  -> "Registration deadline — online, by mail (postmarked), …"
                                                (methods that share a date are merged into one line)
     Voter registration (U.S. Vote / state)  -> ONLY labels containing "Same Day" or "Election Day":
                                                a range becomes "Same-day registration begins/ends",
                                                a single date becomes "Election Day registration".
                                                All other U.S. Vote registration rows ("Received by",
                                                "Postmarked by", "In-Person, Received by", …) are NOT shown;
                                                VOTE411's by-method dates are used instead.
     Mail ballot request                     -> single date: "Mail ballot request deadline — <label>"
                                                range: "<Label> begins/ends" (e.g. "Emergency ballot period")
     Mail ballot return                      -> "Mail ballots due — <label>" (every row)
     Early voting                            -> range: "<Label> begins/ends"; no dates: listed under "Other"
     (always)                                -> "Election Day" on Nov 3
   The row's label becomes the "how" text after " — " with a trailing " by" dropped; times
   ("5:00PM" -> "5 p.m.") and abbreviated dates in labels/notes are rewritten by spellDates(), and
   everything is put in sentence case by sentenceCase(), both in map.html. The Election row's label and the State note are shown by renderPopup() directly. */
function stateKeyDates(s, electionDay){
  const dated = [], undated = [];
  const how = i => i.label ? i.label.replace(/\s+by$/i, "") : "";
  const sentence = t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(); // "Early Voting" -> "Early voting"
  const push = (date, what, i = {}, extra = {}) => (date ? dated : undated).push({
    date, what,
    how: how(i), time: i.time, note: i.note, text: date ? null : i.text,
    src: i.csv ? [i.csv] : [], ...extra
  });

  // registration deadlines by method, merged when methods share a date
  const r = s.registrationByMethod;
  const methods = [["online", "online"], ["mail", "by mail"], ["inPerson", "in person"]]
    .filter(([k]) => r[k])
    .map(([k, lab]) => ({ date: r[k].date, lab: lab + (r[k].qualifier ? ` (${r[k].qualifier})` : ""), csv: r[k].csv }));
  if (!methods.length) undated.push({ what: "No voter registration required", src: s.noRegistrationCsv ? [s.noRegistrationCsv] : [] });
  d3.groups(methods, m => m.date).forEach(([date, ms]) =>
    push(date, "Registration deadline", {}, { how: ms.map(m => m.lab).join(", "), src: ms.map(m => m.csv) }));
  // same-day / election-day registration windows from U.S. Vote (or a state's own source)
  (s.registration || []).filter(i => /Same Day|Election Day/i.test(i.label)).forEach(i => {
    if (i.start) {
      push(i.start, "Same-day registration begins", {}, { note: i.note, src: [i.csv] });
      if (i.end) push(i.end, "Same-day registration ends", {}, { src: [i.csv] });
    } else push(i.date, "Election Day registration", {}, { time: i.time, note: i.note, src: [i.csv] });
  });

  (s.mailRequest || []).forEach(i => {
    if (i.start) {
      push(i.start, `${sentence(how(i))} begins`, {}, { note: i.note, src: [i.csv] });
      if (i.end) push(i.end, `${sentence(how(i))} ends`, {}, { src: [i.csv] });
    } else push(i.date, "Mail ballot request deadline", i);
  });
  (s.mailReturn || []).forEach(i => push(i.date, "Mail ballots due", i));
  // "Early Voting" rows read "In-person early voting", since mail voting is early voting too;
  // rows with no dates saying there is none ("None on Record", "Not available…") read "No early in-person voting"
  (s.earlyVoting || []).forEach(i => {
    const what = /^early voting$/i.test(i.label || "Early voting") ? "In-person early voting" : sentence(i.label);
    if (i.start) {
      push(i.start, `${what} begins`, {}, { note: i.note, src: [i.csv] });
      if (i.end) push(i.end, `${what} ends`, {}, { src: [i.csv] });
    } else if (/None on Record|Not available/i.test(i.text || "")) push(null, "No early in-person voting", i, { how: "", text: null });
    else push(null, what, i, { how: "" });
  });
  push(electionDay, "Election Day");
  return { dated, undated };
}

/* ---------- map parsing: CSV rows -> the events behind the tile shading and legend ---------- */
// Event types, in the order they appear in the legend
const EVENT_TYPES = [
  "Election Day",
  "Registration deadline",
  "Same-day registration ends",
  "Mail ballot request deadline",
  "Emergency ballot period ends",
  "In-person early voting begins",
  "In-person early voting ends",
  "Mail ballots due",
  "Mail ballots due if postmarked by Election Day"
];

/* Flatten every state's record into { date, type, state, detail, src } events. Unlike the popup, this
   picks AT MOST ONE date per state per event type, so a state with several deadlines of one kind
   is represented by a single date here (the rule for each type is noted below). The "Today" and
   "Up next" legend lines and the yellow / half-yellow tiles are all built from these events. */
function buildEvents(stateDates, electionDay){
  const events = [];
  const add = (date, type, state, detail, src = []) => date && events.push({ date, type, state, detail, src });  // rows without a date are skipped

  Object.entries(stateDates).forEach(([abbr, s]) => {
    // Registration deadline: from VOTE411's by-method dates only (U.S. Vote registration rows are
    // not used). Methods closing on the same date become one event whose detail lists them
    // ("online, mail"); dates equal to Election Day are left out, since those are same-day
    // registration rather than a deadline to act on beforehand.
    const byDate = d3.group(
      [["online", "online"], ["mail", "mail"], ["inPerson", "in person"]]
        .filter(([k]) => s.registrationByMethod[k] && s.registrationByMethod[k].date !== electionDay)
        .map(([k, lab]) => ({ date: s.registrationByMethod[k].date, lab, csv: s.registrationByMethod[k].csv })),
      d => d.date
    );
    byDate.forEach((rows, date) => add(date, "Registration deadline", abbr, rows.map(r => r.lab).join(", "), rows.map(r => r.csv)));

    // Same-day registration ends: the LATEST end among the U.S. Vote registration ranges the popup
    // shows as same-day registration (labels containing "Same Day" or "Election Day"). Ends on
    // Election Day are left out, like the registration deadlines above.
    const sdr = (s.registration || []).filter(i => i.end && /Same Day|Election Day/i.test(i.label) && i.end !== electionDay)
      .sort((a, b) => d3.ascending(a.end, b.end));
    if (sdr.length) add(sdr[sdr.length - 1].end, "Same-day registration ends", abbr, undefined, [sdr[sdr.length - 1].csv]);

    // Mail ballot request deadline: the state's FIRST mail-request row (in CSV order) that has a
    // single date. Rows with a date range (e.g. emergency ballot periods) are skipped.
    const req = (s.mailRequest || []).find(i => i.date);
    if (req) add(req.date, "Mail ballot request deadline", abbr, undefined, [req.csv]);

    // Emergency ballot period ends: the LATEST end among the mail-request rows that have a date range
    // (the rows skipped above).
    const emerg = (s.mailRequest || []).filter(i => i.end).sort((a, b) => d3.ascending(a.end, b.end));
    if (emerg.length) add(emerg[emerg.length - 1].end, "Emergency ballot period ends", abbr, undefined, [emerg[emerg.length - 1].csv]);

    // Early voting begins / ends: the EARLIEST start and the LATEST end across the rows labeled "Early Voting".
    // A state can also list in-person absentee windows; those are used only when it has no dated "Early Voting" row.
    const evDated = (s.earlyVoting || []).filter(i => i.start || i.end);
    const ev = evDated.filter(i => /^early voting$/i.test(i.label || "Early voting"));
    const evRows = ev.length ? ev : evDated;
    const starts = evRows.filter(i => i.start).sort((a, b) => d3.ascending(a.start, b.start));
    const ends = evRows.filter(i => i.end).sort((a, b) => d3.ascending(a.end, b.end));
    if (starts.length) add(starts[0].start, "In-person early voting begins", abbr, undefined, [starts[0].csv]);
    if (ends.length) add(ends[ends.length - 1].end, "In-person early voting ends", abbr, undefined, [ends[ends.length - 1].csv]);

    // Mail ballots due: two event types.
    //   "…if postmarked by Election Day": the FIRST return row whose label contains "Postmarked".
    //   "Mail ballots due": the LATEST date among all the other return rows (received / hand-delivered /
    //   drop box).
    const returns = (s.mailReturn || []).filter(i => i.date);
    const post = returns.find(i => /Postmarked/i.test(i.label));
    if (post) add(post.date, "Mail ballots due if postmarked by Election Day", abbr, undefined, [post.csv]);
    const received = returns.filter(i => i !== post).sort((a, b) => d3.ascending(a.date, b.date));
    if (received.length) add(received[received.length - 1].date, "Mail ballots due", abbr, undefined, [received[received.length - 1].csv]);

    // Election Day for every state (left out of the shading and legend; see eventsOn in drawMap).
    add(electionDay, "Election Day", abbr);
  });
  return events;
}

// 2026 general election (Nov 3, 2026) key dates by state, read from state_dates_2026.csv.
// Sources: U.S. Vote Foundation state dates & deadlines (domestic voters) and VOTE411 state pages (registration deadlines by method).
// Scraped 2026-09-24.
//
// loadStateDates() resolves to STATE_DATES, keyed by state abbreviation:
//   { name, election, registration: [], mailRequest: [], mailReturn: [], earlyVoting: [], note,
//     registrationByMethod: { online, mail, inPerson }, usvoteUrl, vote411Url, officialSources: [{ label, url }] }
// Deadline items are { label, text, note, date, time, start, end }, with empty CSV cells left out.

const CSV_CATEGORY_KEYS = {
  "Voter registration": "registration",
  "Mail ballot request": "mailRequest",
  "Mail ballot return": "mailReturn",
  "Early voting": "earlyVoting"
};
const CSV_METHOD_KEYS = { "Online": "online", "By mail": "mail", "In person": "inPerson" };

/* Parsing, one CSV row at a time. Rows keep their CSV order within each list, which matters
   downstream (e.g. the map uses a state's FIRST dated mail-request row; see buildEvents in map.html).
   Columns the map never reads: source_text for non-deadline rows, conflict_note, checked_by_jia. */
function loadStateDates(){
  return d3.csv("state_dates_2026.csv").then(rows => {
    const out = {};
    rows.forEach(r => {
      // 1. Start the state's record the first time its abbreviation appears.
      const s = out[r.state] ||= {
        name: r.state_name, election: "",
        registration: [], mailRequest: [], mailReturn: [], earlyVoting: [],
        registrationByMethod: {}
      };
      // 2. Remember each source's page for the state (not shown on the map; kept for reference).
      if (r.source === "U.S. Vote Foundation") s.usvoteUrl = r.source_url;
      if (r.source === "VOTE411") s.vote411Url = r.source_url;

      // 3. Route the row by its category.
      if (r.category === "Official source") (s.officialSources ||= []).push({ label: r.label, url: r.source_url });
      // "Election" row: its label is the election's full name, shown under the state name in the popup.
      else if (r.category === "Election") s.election = r.label;
      // "State note": one sentence shown at the bottom of the popup.
      else if (r.category === "State note") s.note = r.note;
      // VOTE411 rows: one registration deadline per method. These are the ONLY registration
      // deadlines the map shades and the popup's "Registration deadline" lines use.
      else if (r.category === "Voter registration by method") {
        if (r.label === "No registration required") return;  // e.g. North Dakota: leave registrationByMethod empty
        // label is "<Method>" or "<Method> (<qualifier>)": "By mail (postmarked)" -> mail: { date, qualifier: "postmarked" }
        const [, method, qualifier] = r.label.match(/^(.*?)(?: \((.*)\))?$/);
        s.registrationByMethod[CSV_METHOD_KEYS[method]] = qualifier ? { date: r.date, qualifier } : { date: r.date };
      } else {
        // 4. Everything else is a deadline row (U.S. Vote Foundation, or a state's own source such as
        //    Connecticut's and Nevada's Election Day registration rows). It goes into the list for its
        //    category, keeping only the cells that are filled in:
        //    label -> label, source_text -> text, note, date, time, start_date -> start, end_date -> end.
        //    A category missing from CSV_CATEGORY_KEYS would throw here, so new categories must be added above.
        const item = { label: r.label, text: r.source_text };
        [["note", r.note], ["date", r.date], ["time", r.time], ["start", r.start_date], ["end", r.end_date]]
          .forEach(([k, v]) => { if (v) item[k] = v; });
        s[CSV_CATEGORY_KEYS[r.category]].push(item);
      }
    });
    return out;
  });
}

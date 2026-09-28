// 2026 general election (Nov 3, 2026) key dates by state, read from state_dates_2026.csv.
// Sources: U.S. Vote Foundation state dates & deadlines (domestic voters) and VOTE411 state pages (registration deadlines by method).
// Scraped 2026-09-24.
//
// loadStateDates() resolves to STATE_DATES, keyed by state abbreviation:
//   { name, election, registration: [], mailRequest: [], mailReturn: [], earlyVoting: [], note,
//     registrationByMethod: { online, mail, inPerson }, usvoteUrl, vote411Url }
// Deadline items are { label, text, note, date, time, start, end }, with empty CSV cells left out.

const CSV_CATEGORY_KEYS = {
  "Voter registration": "registration",
  "Mail ballot request": "mailRequest",
  "Mail ballot return": "mailReturn",
  "Early voting": "earlyVoting"
};
const CSV_METHOD_KEYS = { "Online": "online", "By mail": "mail", "In person": "inPerson" };

function loadStateDates(){
  return d3.csv("state_dates_2026.csv").then(rows => {
    const out = {};
    rows.forEach(r => {
      const s = out[r.state] ||= {
        name: r.state_name, election: "",
        registration: [], mailRequest: [], mailReturn: [], earlyVoting: [],
        registrationByMethod: {}
      };
      if (r.source === "U.S. Vote Foundation") s.usvoteUrl = r.source_url;
      if (r.source === "VOTE411") s.vote411Url = r.source_url;

      if (r.category === "Election") s.election = r.label;
      else if (r.category === "State note") s.note = r.note;
      else if (r.category === "Voter registration by method") {
        if (r.label === "No registration required") return;
        // "By mail (postmarked)" -> mail: { date, qualifier: "postmarked" }
        const [, method, qualifier] = r.label.match(/^(.*?)(?: \((.*)\))?$/);
        s.registrationByMethod[CSV_METHOD_KEYS[method]] = qualifier ? { date: r.date, qualifier } : { date: r.date };
      } else {
        const item = { label: r.label, text: r.source_text };
        [["note", r.note], ["date", r.date], ["time", r.time], ["start", r.start_date], ["end", r.end_date]]
          .forEach(([k, v]) => { if (v) item[k] = v; });
        s[CSV_CATEGORY_KEYS[r.category]].push(item);
      }
    });
    return out;
  });
}

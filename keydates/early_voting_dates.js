// Early voting rows for the early voting pages, with their dates taken from the master file.
// Needs d3, load_state_dates.js and map_logic.js loaded first.
//
// early_voting_data.csv (NCSL) still decides WHICH states have early voting and supplies the text
// (rules, hours, locations). The begin and end dates come from state_dates_2026.csv, through the same
// buildEvents() the key dates map uses, so both maps always show the same dates.
// Where the master's dates differ from NCSL's, the "Days Early Voting Takes Place" text is dropped,
// since it spells out NCSL's dates.

const EV_BEGIN = "Early Voting Begin Date", EV_END = "Early Voting End Date", EV_DAYS = "Days Early Voting Takes Place";

async function loadEarlyVotingRows(){
  const [rows, stateDates] = await Promise.all([d3.csv("early_voting_data.csv"), loadStateDates()]);
  const master = {}; // state name -> { start, end }
  buildEvents(stateDates, "2026-11-03").forEach(e => {
    const name = stateDates[e.state].name;
    if (e.type === "In-person early voting begins") (master[name] ||= {}).start = e.date;
    if (e.type === "In-person early voting ends") (master[name] ||= {}).end = e.date;
  });
  rows.forEach(r => {
    const m = master[(r["State/Territory"] || "").trim()];
    if (!m) return; // blank and "Source:" rows, and states with no dates in the master
    const start = m.start || r[EV_BEGIN], end = m.end || r[EV_END];
    if (start !== r[EV_BEGIN] || end !== r[EV_END]) {
      r[EV_BEGIN] = start;
      r[EV_END] = end;
      r[EV_DAYS] = "";
    }
  });
  return rows;
}

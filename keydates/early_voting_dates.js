// Early voting rows for the early voting pages. Needs d3 loaded first.
//
// newdata_10082026/10082026_early_voting_data_WITHNOTES.csv (NCSL, with resolution notes) decides WHICH
// states have early voting and supplies the text (rules, hours, locations). The begin and end dates are
// its "Updated Start Date" and "Updated End Date" columns, written into the begin/end date columns as
// YYYY-MM-DD for the pages to use.
// Where the updated dates differ from NCSL's, the "Days Early Voting Takes Place" text is dropped,
// since it spells out NCSL's dates.

const EV_CSV = "newdata_10082026/10082026_early_voting_data_WITHNOTES.csv";
const EV_BEGIN = "Early Voting Begin Date", EV_END = "Early Voting End Date", EV_DAYS = "Days Early Voting Takes Place";
const EV_NEW_BEGIN = "Updated Start Date", EV_NEW_END = "Updated End Date";

// "10/19/2026" -> "2026-10-19"; anything else -> ""
function evIsoDate(s){
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec((s || "").trim());
  return m ? `${m[3]}-${m[1].padStart(2, "0")}-${m[2].padStart(2, "0")}` : "";
}

async function loadEarlyVotingRows(){
  const rows = await d3.csv(EV_CSV);
  rows.forEach(r => {
    if (!evIsoDate(r[EV_NEW_BEGIN]) && !evIsoDate(r[EV_NEW_END])) return; // blank and "Source:" rows
    const start = evIsoDate(r[EV_NEW_BEGIN]), end = evIsoDate(r[EV_NEW_END]);
    if (start !== evIsoDate(r[EV_BEGIN]) || end !== evIsoDate(r[EV_END])) r[EV_DAYS] = "";
    r[EV_BEGIN] = start;
    r[EV_END] = end;
  });
  return rows;
}

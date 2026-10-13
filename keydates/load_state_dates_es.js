// Spanish version of load_state_dates.js, used by map_es.html. Reads ES_state_dates_2026.csv only.
//
// Every row is kept under its own `categoría`, so categories added or renamed in the CSV show up
// on the map as they are. Only these three categories are treated specially:
const SPECIAL = {
  election: "Elecciones",        // label = the election's name, fecha = Election Day (shown under the state name)
  note: "Nota del estado",       // nota = one sentence at the bottom of the popup
  source: "Fuente oficial"       // links to official sites (kept, not shown)
};

// loadStateDates() resolves to { states, categories }:
//   states: keyed by state abbreviation (estado):
//     { name, election, electionDate, note, officialSources: [{ label, url }], rows: [] }
//   categories: every other categoría, in the order it first appears in the CSV.
// Rows are { category, label, text, source, note, date, time, start, end, csv }, with empty cells left out;
// `csv` is the raw row (with `line`, its line number in the file).
function loadStateDates(){
  return d3.csv("ES_state_dates_2026.csv").then(rows => {
    const states = {}, categories = [];
    rows.forEach((r, idx) => {
      r.line = idx + 2;  // line 1 is the header
      const s = states[r.estado] ||= { name: r.nombre_estado, election: "", rows: [] };
      const cat = r["categoría"];
      if (cat === SPECIAL.election) { s.election = r.etiqueta; s.electionDate = r.fecha; }
      else if (cat === SPECIAL.note) s.note = r.nota;
      else if (cat === SPECIAL.source) (s.officialSources ||= []).push({ label: r.etiqueta, url: r.fuente_url });
      else {
        if (!categories.includes(cat)) categories.push(cat);
        const row = { category: cat, label: (r.etiqueta || "").trim(), text: r.texto_fuente, source: r.fuente, csv: r };
        [["note", r.nota], ["date", r.fecha], ["time", r.hora], ["start", r.fecha_inicio], ["end", r.fecha_finaliza]]
          .forEach(([k, v]) => { if (v) row[k] = v; });
        s.rows.push(row);
      }
    });
    return { states, categories };
  });
}

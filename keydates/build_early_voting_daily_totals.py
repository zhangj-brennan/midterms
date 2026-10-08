# Builds early_voting_daily_totals_master.csv: how many states and territories have early voting open each day.
# Dates: the reconciled Early Voting Begins/Ends in 2026_election_admin_dates_deadlines.csv.
# Days of the week: the "Hours and Days" text in early_voting_data.csv, turned into the per-state rules below
# (weekends, holidays and discretionary days are closed unless the text says otherwise).
# Columbus Day (Oct. 12) is counted as closed in every state.
# Run from keydates/:  python3 build_early_voting_daily_totals.py
import csv, datetime as dt, sys
D = dt.date
WD = {"Mon","Tue","Wed","Thu","Fri"}
def days(*names): return lambda d: d.strftime("%a") in names
weekdays = lambda d: d.strftime("%a") in WD
plus = lambda base, *extra: (lambda d: base(d) or d in extra)
every = lambda d: True
SAT31, SUN1 = D(2026,10,31), D(2026,11,1)
RULES = {  # state: (rule, reading of the Hours and Days text)
 "Alaska": (plus(weekdays, SAT31, SUN1), "weekdays + Sat and Sun before election"),
 "Arizona": (weekdays, "not specified -> weekdays"),
 "Arkansas": (plus(weekdays, SAT31), "weekdays + Sat before election"),
 "California": (weekdays, "varies by county -> weekdays"),
 "Colorado": (lambda d: d.strftime("%a") != "Sun", "every day but Sunday"),
 "Connecticut": (every, "every day"),
 "Delaware": (lambda d: d != D(2026,10,25), "authoritative schedule: every day except Oct 25"),
 "District of Columbia": (every, "8:30-7 daily, holidays excluded (none in range)"),
 "Florida": (every, "every day including weekends"),
 "Georgia": (plus(weekdays, D(2026,10,17), D(2026,10,24)), "weekdays + 2nd and 3rd Saturdays before; Sundays discretionary"),
 "Hawaii": (lambda d: d.strftime("%a") != "Sun", "Mon-Sat"),
 "Idaho": (weekdays, "not specified -> weekdays"),
 "Illinois": (plus(weekdays, SAT31, SUN1), "weekdays; Sat + Sun from 8 days before"),
 "Indiana": (plus(weekdays, D(2026,10,24), SAT31), "weekdays + two Saturdays before"),
 "Iowa": (weekdays, "normal weekday office hours"),
 "Kansas": (weekdays, "not specified -> weekdays"),
 "Kentucky": (every, "Thu, Fri, Sat before election (= whole range)"),
 "Louisiana": (lambda d: d.strftime("%a") != "Sun", "Mon-Sat, holidays excluded (none in range)"),
 "Maine": (weekdays, "days clerks' offices are open -> weekdays"),
 "Maryland": (every, "every day"),
 "Massachusetts": (every, "business hours + required weekend hours -> every day"),
 "Michigan": (every, "9 consecutive days"),
 "Minnesota": (plus(weekdays, D(2026,10,24), SAT31, SUN1), "weekdays + two Saturdays + Sunday before"),
 "Missouri": (weekdays, "not specified -> weekdays"),
 "Montana": (weekdays, "not specified -> weekdays"),
 "Nebraska": (weekdays, "not specified -> weekdays"),
 "Nevada": (lambda d: d.strftime("%a") != "Sun", "weekdays + Saturdays; Sundays discretionary"),
 "New Jersey": (every, "Mon-Sat + Sunday"),
 "New Mexico": (plus(weekdays, SAT31), "clerk's office: business hours + Sat before"),
 "New York": (every, "every day incl. weekends and holidays"),
 "North Carolina": (plus(weekdays, SAT31), "weekdays + last Saturday; other weekends discretionary"),
 "North Dakota": (weekdays, "set by county auditor -> weekdays"),
 "Ohio": (plus(lambda d: d.strftime("%a") != "Sun", SUN1), "Mon-Sat + Sunday before"),
 "Oklahoma": (every, "Wed-Sat before election (= whole range)"),
 "Oregon": (weekdays, "normal business hours"),
 "Pennsylvania": (weekdays, "regular business hours"),
 "Rhode Island": (weekdays, "regular business hours"),
 "South Carolina": (lambda d: d.strftime("%a") != "Sun", "Mon-Sat, not Sundays or legal holidays"),
 "South Dakota": (weekdays, "regular office hours"),
 "Tennessee": (lambda d: d.strftime("%a") != "Sun", "weekdays + Saturdays"),
 "Texas": (weekdays, "weekdays; no weekend requirement"),
 "Utah": (weekdays, "each weekday; weekends discretionary"),
 "Vermont": (weekdays, "town clerk business hours"),
 "Virginia": (plus(weekdays, D(2026,10,24), SAT31, D(2026,10,18), D(2026,10,25)), "weekdays + two Saturdays + 2nd and 3rd Sundays before"),
 "Washington": (weekdays, "normal business hours"),
 "West Virginia": (lambda d: d.strftime("%a") != "Sun", "weekdays + Saturdays"),
 "Wisconsin": (weekdays, "set by municipality -> weekdays"),
 "Wyoming": (weekdays, "regular hours on business days"),
}
CLOSED_EVERYWHERE = {D(2026, 10, 12)}  # Columbus Day
# Territories with early voting in 2026; not in the admin file, so their dates are here.
# (Puerto Rico has no general election in 2026.)
TERRITORIES = {
 # Tuesday-Saturday 10-6, Oct 8-28: gec.guam.gov/early-in-office-absentee-voting/ and /2026-important-dates/
 "Guam": (D(2026, 10, 8), D(2026, 10, 28), lambda d: d.strftime("%a") not in ("Sun", "Mon")),
 # "9:00 AM to 6:00 PM daily", Oct 16-31 (St. Croix, St. Thomas): vivote.gov/elections/early-voting/
 "U.S. Virgin Islands": (D(2026, 10, 16), D(2026, 10, 31), every),
}
admin = {r["State"].strip(): r for r in csv.DictReader(open("2026_election_admin_dates_deadlines.csv")) if r["Early Voting Begins"].strip()}
assert set(admin) == set(RULES), set(admin) ^ set(RULES)
iso = lambda s: dt.date.fromisoformat(s)
rows, d = [], D(2026, 9, 4)
while d <= D(2026, 11, 3):
    n = sum(1 for s, r in admin.items() if iso(r["Early Voting Begins"]) <= d <= iso(r["Early Voting Ends"]) and RULES[s][0](d) and d not in CLOSED_EVERYWHERE)
    n += sum(1 for a, b, rule in TERRITORIES.values() if a <= d <= b and rule(d) and d not in CLOSED_EVERYWHERE)
    rows.append((d.isoformat(), n)); d += dt.timedelta(1)
with open(sys.argv[1] if len(sys.argv) > 1 else "early_voting_daily_totals_master.csv", "w", newline="") as f:
    w = csv.writer(f); w.writerow(["Date", "States/Territories with Early Voting Available"]); w.writerows(rows)

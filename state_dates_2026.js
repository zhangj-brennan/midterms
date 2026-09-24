// 2026 general election (Nov 3, 2026) key dates by state.
// Sources: U.S. Vote Foundation state dates & deadlines (domestic voters) and VOTE411 state pages (registration deadlines by method).
// Scraped 2026-09-24.
const STATE_DATES = {
 "AL": {
  "election": "Alabama Congressional, State, Gubernatorial and Judicial General Election",
  "registration": [
   {
    "label": "Received by",
    "text": "Mon Oct 19, 2026",
    "date": "2026-10-19"
   }
  ],
  "mailRequest": [
   {
    "label": "Post Received by",
    "text": "Tue Oct 27, 2026",
    "date": "2026-10-27"
   },
   {
    "label": "In-Person, Received by",
    "text": "Thu Oct 29, 2026",
    "date": "2026-10-29"
   }
  ],
  "mailReturn": [
   {
    "label": "Hand Delivered by",
    "text": "Mon Nov 2, 2026 5:00PM",
    "date": "2026-11-02",
    "time": "5:00PM"
   },
   {
    "label": "Post Received by",
    "text": "Tue Nov 3, 2026 12:00PM",
    "date": "2026-11-03",
    "time": "12:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "",
    "text": "None on Record"
   }
  ],
  "note": "There is no Early Voting or In-Person Absentee Voting in Alabama.",
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-19",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-19"
   },
   "online": {
    "date": "2026-10-19"
   }
  },
  "name": "Alabama",
  "usvoteUrl": "https://www.usvotefoundation.org/alabama-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/alabama"
 },
 "AK": {
  "election": "Alaska Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Email or Fax by",
    "text": "Sun Oct 4, 2026",
    "date": "2026-10-04"
   },
   {
    "label": "In-Person, Received by",
    "text": "Sun Oct 4, 2026",
    "date": "2026-10-04"
   },
   {
    "label": "Online by",
    "text": "Sun Oct 4, 2026",
    "date": "2026-10-04"
   },
   {
    "label": "Postmarked by",
    "text": "Sun Oct 4, 2026",
    "date": "2026-10-04"
   }
  ],
  "mailRequest": [
   {
    "label": "Request to Receive Blank Ballot by Mail Received by",
    "text": "Sat Oct 24, 2026",
    "date": "2026-10-24"
   },
   {
    "label": "Request for Online or Fax Ballot",
    "text": "by Mon Nov 2, 2026 5:00PM",
    "date": "2026-11-02",
    "time": "5:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "Fax by",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Fri Nov 13, 2026",
    "note": "The \"Post received by\" date may differ for your municipality for local elections.",
    "date": "2026-11-13"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Mon Oct 19, 2026 to Tue Nov 3, 2026",
    "start": "2026-10-19",
    "end": "2026-11-03"
   },
   {
    "label": "Early Voting",
    "text": "From Mon Oct 19, 2026 to Mon Nov 2, 2026",
    "start": "2026-10-19",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-04",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-04"
   },
   "online": {
    "date": "2026-10-04"
   }
  },
  "name": "Alaska",
  "usvoteUrl": "https://www.usvotefoundation.org/alaska-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/alaska"
 },
 "AZ": {
  "election": "Arizona Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Received by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   },
   {
    "label": "US-based Military by",
    "text": "Fri Oct 30, 2026 5:00PM",
    "note": "Previous overseas voter who has been discharged or separated from that service or employment in the 90 days before Election Day.",
    "date": "2026-10-30",
    "time": "5:00PM"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Fri Oct 23, 2026 5:00PM",
    "date": "2026-10-23",
    "time": "5:00PM"
   },
   {
    "label": "Emergency Ballot Period",
    "text": "From Fri Oct 30, 2026 to Mon Nov 2, 2026",
    "note": "Voters experiencing an emergency that would prevent them from voting at the polls may request an emergency ballot. Contact your Local Election Office for details.",
    "start": "2026-10-30",
    "end": "2026-11-02"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Wed Oct 7, 2026 to Fri Oct 30, 2026",
    "start": "2026-10-07",
    "end": "2026-10-30"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-05"
   },
   "online": {
    "date": "2026-10-05"
   }
  },
  "name": "Arizona",
  "usvoteUrl": "https://www.usvotefoundation.org/arizona-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/arizona"
 },
 "AR": {
  "election": "Arkansas Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   }
  ],
  "mailRequest": [
   {
    "label": "Email or Fax by",
    "text": "Tue Oct 27, 2026",
    "date": "2026-10-27"
   },
   {
    "label": "Post Received by",
    "text": "Tue Oct 27, 2026",
    "date": "2026-10-27"
   },
   {
    "label": "In-Person, Received by",
    "text": "Fri Oct 30, 2026",
    "date": "2026-10-30"
   }
  ],
  "mailReturn": [
   {
    "label": "In-Person, Received by",
    "text": "Fri Oct 30, 2026",
    "date": "2026-10-30"
   },
   {
    "label": "Post Received by",
    "text": "Tue Nov 3, 2026 7:30PM",
    "date": "2026-11-03",
    "time": "7:30PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Mon Oct 19, 2026 to Mon Nov 2, 2026",
    "start": "2026-10-19",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-05"
   }
  },
  "name": "Arkansas",
  "usvoteUrl": "https://www.usvotefoundation.org/arkansas-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/arkansas"
 },
 "CA": {
  "election": "California Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Received by",
    "text": "Mon Oct 19, 2026",
    "date": "2026-10-19"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Mon Oct 5, 2026 to Tue Nov 3, 2026",
    "note": "From Oct 20 to Nov 3, Voters may \"conditionally register\" and vote a provisional ballot.",
    "start": "2026-10-05",
    "end": "2026-11-03"
   }
  ],
  "mailRequest": [
   {
    "label": "",
    "text": "Tue Oct 27, 2026",
    "date": "2026-10-27"
   },
   {
    "label": "In-person for Military or Overseas Voters Recalled to Service by",
    "text": "Mon Nov 2, 2026 5:00PM",
    "note": "A registered military or overseas voter recalled to service within 7 days prior to Election Day may obtain a ballot from the county elections office where they are registered or where they are recalled to service (if in California).",
    "date": "2026-11-02",
    "time": "5:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Tue Nov 10, 2026",
    "date": "2026-11-10"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Sat Oct 24, 2026 to Mon Nov 2, 2026",
    "note": "Contact your local election office for early voting locations.",
    "start": "2026-10-24",
    "end": "2026-11-02"
   },
   {
    "label": "In-person Absentee Voting",
    "text": "From Mon Oct 5, 2026 to Tue Nov 3, 2026",
    "start": "2026-10-05",
    "end": "2026-11-03"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-19",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-19"
   }
  },
  "name": "California",
  "usvoteUrl": "https://www.usvotefoundation.org/california-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/california"
 },
 "CO": {
  "election": "Colorado Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "At Registration Drive by",
    "text": "Tue Oct 13, 2026",
    "date": "2026-10-13"
   },
   {
    "label": "Online by",
    "text": "Mon Oct 26, 2026",
    "note": "In order to receive a ballot by mail, voter registration must be submitted by Oct 26th. Voters registered after this period must vote in person.",
    "date": "2026-10-26"
   },
   {
    "label": "Submitted by",
    "text": "Mon Oct 26, 2026",
    "note": "In order to receive a ballot by mail, voter registration must be submitted by Oct 26th. Voters registered after this period must vote in person.",
    "date": "2026-10-26"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   },
   {
    "label": "In-Person, Received by",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   }
  ],
  "mailRequest": [
   {
    "label": "",
    "text": "Not Necessary: All Elections in this State are Vote-by-Mail",
    "note": "Every voter receives a mail ballot. The ballot will be sent to the mailing address you provided for your voter registration file. You must have submitted for voter registration by Oct 26, to received a ballot by mail for this election."
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Mon Oct 19, 2026 to Mon Nov 2, 2026",
    "start": "2026-10-19",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-26",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-26"
   }
  },
  "name": "Colorado",
  "usvoteUrl": "https://www.usvotefoundation.org/colorado-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/colorado"
 },
 "CT": {
  "election": "Connecticut Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Received by",
    "text": "Fri Oct 16, 2026",
    "date": "2026-10-16"
   },
   {
    "label": "In-Person, Received by",
    "text": "Mon Nov 2, 2026 12:00PM",
    "date": "2026-11-02",
    "time": "12:00PM"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Mon Oct 19, 2026 to Sun Nov 1, 2026",
    "start": "2026-10-19",
    "end": "2026-11-01"
   }
  ],
  "mailRequest": [
   {
    "label": "Submitted by",
    "text": "Mon Nov 2, 2026",
    "date": "2026-11-02"
   },
   {
    "label": "Emergency Ballot Period",
    "text": "From Wed Oct 28, 2026 to Tue Nov 3, 2026",
    "start": "2026-10-28",
    "end": "2026-11-03"
   }
  ],
  "mailReturn": [
   {
    "label": "In-Person, Received by",
    "text": "Mon Nov 2, 2026",
    "date": "2026-11-02"
   },
   {
    "label": "Post Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Received in Dropbox by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Mon Oct 19, 2026 to Sun Nov 1, 2026",
    "start": "2026-10-19",
    "end": "2026-11-01"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-16",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-16"
   }
  },
  "name": "Connecticut",
  "usvoteUrl": "https://www.usvotefoundation.org/connecticut-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/connecticut"
 },
 "DE": {
  "election": "Delaware Congressional and State General Election",
  "registration": [
   {
    "label": "Received by",
    "text": "Sat Oct 10, 2026",
    "date": "2026-10-10"
   }
  ],
  "mailRequest": [
   {
    "label": "Request for Postal Ballot by",
    "text": "Fri Oct 30, 2026 12:00PM",
    "date": "2026-10-30",
    "time": "12:00PM"
   },
   {
    "label": "In-Person Request by",
    "text": "Mon Nov 2, 2026 12:00PM",
    "date": "2026-11-02",
    "time": "12:00PM"
   },
   {
    "label": "Request for Email, Online or Fax Ballot by",
    "text": "Mon Nov 2, 2026 12:00PM",
    "date": "2026-11-02",
    "time": "12:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Thu Oct 22, 2026 to Sun Nov 1, 2026",
    "note": "Check Delaware Department of Elections for locations, dates and times of early voting sites in your county.",
    "start": "2026-10-22",
    "end": "2026-11-01"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-10",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-10"
   },
   "online": {
    "date": "2026-10-10"
   }
  },
  "name": "Delaware",
  "usvoteUrl": "https://www.usvotefoundation.org/delaware-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/delaware"
 },
 "DC": {
  "election": "District of Columbia Congressional General Election",
  "registration": [
   {
    "label": "Email or Online by",
    "text": "Tue Oct 13, 2026",
    "date": "2026-10-13"
   },
   {
    "label": "Post Received by",
    "text": "Tue Oct 13, 2026",
    "date": "2026-10-13"
   },
   {
    "label": "In-Person Request by",
    "text": "Fri Oct 23, 2026",
    "note": "Register in-person at the Board of Elections or another voter registration agency.",
    "date": "2026-10-23"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Mon Oct 26, 2026 to Sun Nov 1, 2026",
    "start": "2026-10-26",
    "end": "2026-11-01"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Mon Oct 19, 2026",
    "date": "2026-10-19"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Fri Nov 13, 2026",
    "date": "2026-11-13"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Mon Oct 26, 2026 to Sun Nov 1, 2026",
    "start": "2026-10-26",
    "end": "2026-11-01"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-13",
    "qualifier": "received"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-13"
   }
  },
  "name": "District of Columbia",
  "usvoteUrl": "https://www.usvotefoundation.org/district-of-columbia-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/district-of-columbia"
 },
 "FL": {
  "election": "Florida Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   }
  ],
  "mailRequest": [
   {
    "label": "",
    "text": "Thu Oct 22, 2026 5:00PM",
    "date": "2026-10-22",
    "time": "5:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Sat Oct 24, 2026 to Sat Oct 31, 2026",
    "note": "Early Voting in your county may start earlier. Contact your County Supervisor of Elections for Early Voting dates specific to your county.",
    "start": "2026-10-24",
    "end": "2026-10-31"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-05"
   },
   "online": {
    "date": "2026-10-05"
   }
  },
  "name": "Florida",
  "usvoteUrl": "https://www.usvotefoundation.org/florida-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/florida"
 },
 "GA": {
  "election": "Georgia Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Postmarked by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   },
   {
    "label": "Submitted by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Fri Oct 23, 2026",
    "date": "2026-10-23"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Tue Oct 13, 2026 to Fri Oct 30, 2026",
    "start": "2026-10-13",
    "end": "2026-10-30"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-05"
   },
   "online": {
    "date": "2026-10-05"
   }
  },
  "name": "Georgia",
  "usvoteUrl": "https://www.usvotefoundation.org/georgia-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/georgia"
 },
 "HI": {
  "election": "Hawaii Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Same Day Registration & Voting",
    "text": "From Tue Oct 20, 2026 to Tue Nov 3, 2026",
    "note": "Vote centers open during business days.",
    "start": "2026-10-20",
    "end": "2026-11-03"
   },
   {
    "label": "Postmarked by",
    "text": "Mon Oct 26, 2026",
    "date": "2026-10-26"
   },
   {
    "label": "Online by",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   }
  ],
  "mailRequest": [
   {
    "label": "",
    "text": "Tue Oct 27, 2026 4:30PM",
    "date": "2026-10-27",
    "time": "4:30PM"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Tue Oct 20, 2026 to Tue Nov 3, 2026",
    "note": "Vote centers open during business days.",
    "start": "2026-10-20",
    "end": "2026-11-03"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-26",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-11-03"
   }
  },
  "name": "Hawaii",
  "usvoteUrl": "https://www.usvotefoundation.org/hawaii-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/hawaii"
 },
 "ID": {
  "election": "Idaho Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "In the Election Office by",
    "text": "Fri Oct 23, 2026",
    "date": "2026-10-23"
   },
   {
    "label": "Online by",
    "text": "Fri Oct 23, 2026",
    "date": "2026-10-23"
   },
   {
    "label": "Post Received by",
    "text": "Fri Oct 23, 2026",
    "date": "2026-10-23"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   }
  ],
  "mailRequest": [
   {
    "label": "Request for Postal Ballot by",
    "text": "Fri Oct 23, 2026 5:00PM",
    "date": "2026-10-23",
    "time": "5:00PM"
   },
   {
    "label": "Emergency Ballot Period",
    "text": "From Thu Oct 29, 2026 to Mon Nov 2, 2026",
    "note": "Voters who are physically unable to vote in person on Election Day because of an emergency hospitalization may request an emergency ballot. Contact your Local Election Office for more details.",
    "start": "2026-10-29",
    "end": "2026-11-02"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Tue Oct 13, 2026 to Fri Oct 30, 2026",
    "note": "Early Voting varies by county. Contact your local election office to confirm.",
    "start": "2026-10-13",
    "end": "2026-10-30"
   },
   {
    "label": "In-person Absentee Voting",
    "text": "From Tue Oct 13, 2026 to Fri Oct 30, 2026",
    "note": "In-Person Absentee Voting varies by county. The start date may be earlier. Contact your local election office to confirm dates and locations.",
    "start": "2026-10-13",
    "end": "2026-10-30"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-23",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-23"
   }
  },
  "name": "Idaho",
  "usvoteUrl": "https://www.usvotefoundation.org/idaho-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/idaho"
 },
 "IL": {
  "election": "Illinois Congressional, State, Gubernatorial and Judicial General Election",
  "registration": [
   {
    "label": "In-Person Request by",
    "text": "Tue Oct 6, 2026",
    "date": "2026-10-06"
   },
   {
    "label": "Postmarked by",
    "text": "Tue Oct 6, 2026",
    "date": "2026-10-06"
   },
   {
    "label": "At DMV and other State Agencies by",
    "text": "Sun Oct 18, 2026",
    "date": "2026-10-18"
   },
   {
    "label": "Online by",
    "text": "Sun Oct 18, 2026",
    "date": "2026-10-18"
   },
   {
    "label": "Grace Period",
    "text": "From Wed Oct 7, 2026 to Tue Nov 3, 2026",
    "note": "A voter who registers or changes their address during this grace period must vote via \"grace period voting.\"",
    "start": "2026-10-07",
    "end": "2026-11-03"
   }
  ],
  "mailRequest": [
   {
    "label": "Online by",
    "text": "Thu Oct 29, 2026",
    "date": "2026-10-29"
   },
   {
    "label": "Post Received by",
    "text": "Thu Oct 29, 2026",
    "date": "2026-10-29"
   },
   {
    "label": "In-Person Request by",
    "text": "Mon Nov 2, 2026",
    "date": "2026-11-02"
   }
  ],
  "mailReturn": [
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Tue Nov 17, 2026",
    "date": "2026-11-17"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Thu Sep 24, 2026 to Mon Nov 2, 2026",
    "start": "2026-09-24",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-06",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-18"
   }
  },
  "name": "Illinois",
  "usvoteUrl": "https://www.usvotefoundation.org/illinois-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/illinois"
 },
 "IN": {
  "election": "Indiana Congressional and State General Election",
  "registration": [
   {
    "label": "In-Person Request by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   },
   {
    "label": "Postmarked by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   },
   {
    "label": "Online by",
    "text": "Mon Oct 5, 2026 11:59PM",
    "date": "2026-10-05",
    "time": "11:59PM"
   }
  ],
  "mailRequest": [
   {
    "label": "Request From Voter with Print Disabilities by",
    "text": "Thu Oct 22, 2026",
    "note": "For voters with print disabilities who are requesting to vote by mail, fax or email. Applications may be submitted in person or by mail, fax, email or online at indianavoters.in.gov .",
    "date": "2026-10-22"
   },
   {
    "label": "Request for Postal Ballot by",
    "text": "Thu Oct 22, 2026",
    "date": "2026-10-22"
   },
   {
    "label": "In-Person Request by",
    "text": "Mon Nov 2, 2026 12:00PM",
    "date": "2026-11-02",
    "time": "12:00PM"
   },
   {
    "label": "Emergency Ballot Period",
    "text": "From Thu Oct 15, 2026 to Mon Nov 2, 2026",
    "note": "A confined voter, a voter caring for a confined person at a private residence, or a voter with disabilities may vote an absentee ballot before an absentee voter board at the voter's residence or place of confinement",
    "start": "2026-10-15",
    "end": "2026-11-02"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 6:00PM",
    "date": "2026-11-03",
    "time": "6:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Tue Oct 6, 2026 to Mon Nov 2, 2026",
    "note": "In-person absentee voting ends at noon the day before election day.",
    "start": "2026-10-06",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-05"
   },
   "online": {
    "date": "2026-10-05"
   }
  },
  "name": "Indiana",
  "usvoteUrl": "https://www.usvotefoundation.org/indiana-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/indiana"
 },
 "IA": {
  "election": "Iowa Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Received by",
    "text": "Mon Oct 19, 2026 5:00PM",
    "date": "2026-10-19",
    "time": "5:00PM"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Wed Oct 14, 2026 to Tue Nov 3, 2026",
    "start": "2026-10-14",
    "end": "2026-11-03"
   }
  ],
  "mailRequest": [
   {
    "label": "Request for Postal Ballot by",
    "text": "Mon Oct 19, 2026 5:00PM",
    "date": "2026-10-19",
    "time": "5:00PM"
   },
   {
    "label": "In-Person Request by",
    "text": "Mon Nov 2, 2026",
    "date": "2026-11-02"
   }
  ],
  "mailReturn": [
   {
    "label": "Delivered by Authorized Person to Election Office by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "In the Election Office by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Wed Oct 14, 2026 to Mon Nov 2, 2026",
    "note": "Confirm specific dates with your county election office.",
    "start": "2026-10-14",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-19",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-19"
   }
  },
  "name": "Iowa",
  "usvoteUrl": "https://www.usvotefoundation.org/iowa-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/iowa"
 },
 "KS": {
  "election": "Kansas Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "At DMV and other State Agencies by",
    "text": "Tue Oct 13, 2026",
    "date": "2026-10-13"
   },
   {
    "label": "Postmarked by",
    "text": "Tue Oct 13, 2026",
    "note": "If no postmark is available, registration must be received by 9 days prior to Election Day",
    "date": "2026-10-13"
   },
   {
    "label": "Discharged from federal service -In-person Request by",
    "text": "Mon Nov 2, 2026 12:00PM",
    "date": "2026-11-02",
    "time": "12:00PM"
   }
  ],
  "mailRequest": [
   {
    "label": "",
    "text": "Tue Oct 27, 2026",
    "date": "2026-10-27"
   }
  ],
  "mailReturn": [
   {
    "label": "In-Person, Received by",
    "text": "Tue Nov 3, 2026 12:00PM",
    "date": "2026-11-03",
    "time": "12:00PM"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Fri Nov 6, 2026",
    "note": "The ballot return received by date of Nov 6, if postmarked by Nov 3, is only recently confirmed by the Kansas Court of Appeals. Regardless, please consider ensuring your ballot is received by Election Day, Nov 3rd.",
    "date": "2026-11-06"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Wed Oct 14, 2026 to Mon Nov 2, 2026",
    "note": "Check with your county election office for specific times and locations.",
    "start": "2026-10-14",
    "end": "2026-11-02"
   },
   {
    "label": "Early Voting",
    "text": "From Wed Oct 14, 2026 to Mon Nov 2, 2026",
    "start": "2026-10-14",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-13",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-13"
   },
   "online": {
    "date": "2026-10-13"
   }
  },
  "name": "Kansas",
  "usvoteUrl": "https://www.usvotefoundation.org/kansas-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/kansas"
 },
 "KY": {
  "election": "Kentucky Congressional, State and Judicial General Election",
  "registration": [
   {
    "label": "Postmarked by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   },
   {
    "label": "In-Person, Received by",
    "text": "Mon Oct 5, 2026 4:00PM",
    "date": "2026-10-05",
    "time": "4:00PM"
   },
   {
    "label": "Online by",
    "text": "Mon Oct 5, 2026 4:00PM",
    "date": "2026-10-05",
    "time": "4:00PM"
   }
  ],
  "mailRequest": [
   {
    "label": "Online by",
    "text": "Tue Oct 20, 2026 11:59PM",
    "date": "2026-10-20",
    "time": "11:59PM"
   },
   {
    "label": "Emergency Ballot Period",
    "text": "From Tue Oct 20, 2026 to Tue Nov 3, 2026",
    "note": "The application to request a ballot during this period due to a medical emergency must be notarized.",
    "start": "2026-10-20",
    "end": "2026-11-03"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 6:00PM",
    "date": "2026-11-03",
    "time": "6:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Thu Oct 29, 2026 to Sat Oct 31, 2026",
    "note": "In-Person absentee voting without excuse",
    "start": "2026-10-29",
    "end": "2026-10-31"
   },
   {
    "label": "In-person Absentee Voting",
    "text": "From Thu Oct 22, 2026 to Wed Oct 28, 2026",
    "note": "In-Person absentee voting with excuse. No voting on Saturday or Sunday",
    "start": "2026-10-22",
    "end": "2026-10-28"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-05"
   },
   "online": {
    "date": "2026-10-05"
   }
  },
  "name": "Kentucky",
  "usvoteUrl": "https://www.usvotefoundation.org/kentucky-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/kentucky"
 },
 "LA": {
  "election": "Louisiana Congressional General Election",
  "registration": [
   {
    "label": "In-Person Request by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   },
   {
    "label": "Post Received by",
    "text": "Mon Oct 5, 2026",
    "note": "For voter registrations without a postmark",
    "date": "2026-10-05"
   },
   {
    "label": "Postmarked by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   },
   {
    "label": "Online by",
    "text": "Tue Oct 13, 2026",
    "date": "2026-10-13"
   }
  ],
  "mailRequest": [
   {
    "label": "",
    "text": "Fri Oct 30, 2026 4:30PM",
    "date": "2026-10-30",
    "time": "4:30PM"
   }
  ],
  "mailReturn": [
   {
    "label": "",
    "text": "Mon Nov 2, 2026 4:30PM",
    "date": "2026-11-02",
    "time": "4:30PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Tue Oct 20, 2026 to Tue Oct 27, 2026",
    "note": "8 am to 6 pm. No voting on Sunday.",
    "start": "2026-10-20",
    "end": "2026-10-27"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-05"
   },
   "online": {
    "date": "2026-10-13"
   }
  },
  "name": "Louisiana",
  "usvoteUrl": "https://www.usvotefoundation.org/louisiana-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/louisiana"
 },
 "ME": {
  "election": "Maine Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Online by",
    "text": "Tue Oct 13, 2026",
    "date": "2026-10-13"
   },
   {
    "label": "Post Received by",
    "text": "Tue Oct 13, 2026 5:00PM",
    "date": "2026-10-13",
    "time": "5:00PM"
   },
   {
    "label": "At DMV and other State Agencies by",
    "text": "Tue Oct 27, 2026 12:00AM",
    "date": "2026-10-27",
    "time": "12:00AM"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   },
   {
    "label": "In-Person Request by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Mon Oct 5, 2026 to Thu Oct 29, 2026",
    "start": "2026-10-05",
    "end": "2026-10-29"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Thu Oct 29, 2026",
    "date": "2026-10-29"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Mon Oct 5, 2026 to Thu Oct 29, 2026",
    "start": "2026-10-05",
    "end": "2026-10-29"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-13",
    "qualifier": "received"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-13"
   }
  },
  "name": "Maine",
  "usvoteUrl": "https://www.usvotefoundation.org/maine-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/maine"
 },
 "MD": {
  "election": "Maryland Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Postmarked by",
    "text": "Tue Oct 13, 2026",
    "date": "2026-10-13"
   },
   {
    "label": "Submitted by",
    "text": "Tue Oct 13, 2026 5:00PM",
    "date": "2026-10-13",
    "time": "5:00PM"
   },
   {
    "label": "Online by",
    "text": "Tue Oct 13, 2026 11:59PM",
    "date": "2026-10-13",
    "time": "11:59PM"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Thu Oct 22, 2026 to Thu Oct 29, 2026",
    "start": "2026-10-22",
    "end": "2026-10-29"
   }
  ],
  "mailRequest": [
   {
    "label": "Request for Fax Ballot by",
    "text": "Tue Oct 27, 2026",
    "date": "2026-10-27"
   },
   {
    "label": "Request for Postal Ballot by",
    "text": "Tue Oct 27, 2026",
    "date": "2026-10-27"
   },
   {
    "label": "Request for Email or Online Ballot by",
    "text": "Fri Oct 30, 2026",
    "date": "2026-10-30"
   },
   {
    "label": "In-Person Request by",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   }
  ],
  "mailReturn": [
   {
    "label": "Received in Dropbox by",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   },
   {
    "label": "In-Person, Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Fri Nov 13, 2026",
    "date": "2026-11-13"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Thu Oct 22, 2026 to Thu Oct 29, 2026",
    "start": "2026-10-22",
    "end": "2026-10-29"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-13",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-13"
   }
  },
  "name": "Maryland",
  "usvoteUrl": "https://www.usvotefoundation.org/maryland-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/maryland"
 },
 "MA": {
  "election": "Massachusetts Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Postmarked by",
    "text": "Sat Oct 24, 2026",
    "date": "2026-10-24"
   },
   {
    "label": "In-Person Request by",
    "text": "Sat Oct 24, 2026 5:00PM",
    "date": "2026-10-24",
    "time": "5:00PM"
   },
   {
    "label": "Online by",
    "text": "Sat Oct 24, 2026 11:59PM",
    "date": "2026-10-24",
    "time": "11:59PM"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Sat Oct 17, 2026 to Sat Oct 24, 2026",
    "start": "2026-10-17",
    "end": "2026-10-24"
   }
  ],
  "mailRequest": [
   {
    "label": "Request to Receive Blank Ballot by Mail Received by",
    "text": "Tue Oct 27, 2026 5:00PM",
    "date": "2026-10-27",
    "time": "5:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Fri Nov 6, 2026 8:00PM",
    "date": "2026-11-06",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Sat Oct 17, 2026 to Fri Oct 30, 2026",
    "start": "2026-10-17",
    "end": "2026-10-30"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-24",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-24"
   },
   "online": {
    "date": "2026-10-24"
   }
  },
  "name": "Massachusetts",
  "usvoteUrl": "https://www.usvotefoundation.org/massachusetts-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/massachusetts"
 },
 "MI": {
  "election": "Michigan Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Online by",
    "text": "Mon Oct 19, 2026",
    "date": "2026-10-19"
   },
   {
    "label": "Post Received by",
    "text": "Mon Oct 19, 2026",
    "date": "2026-10-19"
   },
   {
    "label": "In-Person Request by",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Thu Sep 24, 2026 to Mon Nov 2, 2026",
    "start": "2026-09-24",
    "end": "2026-11-02"
   }
  ],
  "mailRequest": [
   {
    "label": "Request to Receive Blank Ballot by Mail Received by",
    "text": "Fri Oct 30, 2026 5:00PM",
    "date": "2026-10-30",
    "time": "5:00PM"
   },
   {
    "label": "In-Person Request by",
    "text": "Mon Nov 2, 2026 4:00PM",
    "date": "2026-11-02",
    "time": "4:00PM"
   },
   {
    "label": "Emergency Ballot Request by",
    "text": "Tue Nov 3, 2026 4:00PM",
    "note": "Voters may request an emergency Absentee Ballot if the voter has become physically disabled or will be away because of sickness or death in the family. Contact your Local Election Office for details.",
    "date": "2026-11-03",
    "time": "4:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Sat Oct 24, 2026 to Sun Nov 1, 2026",
    "start": "2026-10-24",
    "end": "2026-11-01"
   },
   {
    "label": "In-person Absentee Voting",
    "text": "From Thu Sep 24, 2026 to Mon Nov 2, 2026",
    "start": "2026-09-24",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-19"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-19"
   }
  },
  "name": "Michigan",
  "usvoteUrl": "https://www.usvotefoundation.org/michigan-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/michigan"
 },
 "MN": {
  "election": "Minnesota Congressional, State, Gubernatorial and Judicial General Election",
  "registration": [
   {
    "label": "In-Person, Received by",
    "text": "Tue Oct 13, 2026 5:00PM",
    "date": "2026-10-13",
    "time": "5:00PM"
   },
   {
    "label": "Post Received by",
    "text": "Tue Oct 13, 2026 5:00PM",
    "date": "2026-10-13",
    "time": "5:00PM"
   },
   {
    "label": "Online by",
    "text": "Tue Oct 13, 2026 11:59PM",
    "date": "2026-10-13",
    "time": "11:59PM"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Fri Sep 18, 2026 to Mon Nov 2, 2026",
    "start": "2026-09-18",
    "end": "2026-11-02"
   }
  ],
  "mailRequest": [
   {
    "label": "Submitted by",
    "text": "Mon Nov 2, 2026",
    "date": "2026-11-02"
   }
  ],
  "mailReturn": [
   {
    "label": "In-Person, Received by",
    "text": "Tue Nov 3, 2026 5:00PM",
    "date": "2026-11-03",
    "time": "5:00PM"
   },
   {
    "label": "Post Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Fri Sep 18, 2026 to Mon Nov 2, 2026",
    "start": "2026-09-18",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-13",
    "qualifier": "received"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-13"
   }
  },
  "name": "Minnesota",
  "usvoteUrl": "https://www.usvotefoundation.org/minnesota-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/minnesota"
 },
 "MS": {
  "election": "Mississippi Congressional General Election",
  "registration": [
   {
    "label": "In-Person, Received by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   },
   {
    "label": "Postmarked by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   }
  ],
  "mailRequest": [
   {
    "label": "",
    "text": "No Deadline",
    "note": "Make your request early enough to receive, fill-out, and return your ballot by Election Day."
   }
  ],
  "mailReturn": [
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Tue Nov 10, 2026 5:00PM",
    "date": "2026-11-10",
    "time": "5:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Mon Sep 21, 2026 to Sat Oct 31, 2026",
    "note": "by noon on Oct 31st",
    "start": "2026-09-21",
    "end": "2026-10-31"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-05"
   }
  },
  "name": "Mississippi",
  "usvoteUrl": "https://www.usvotefoundation.org/mississippi-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/mississippi"
 },
 "MO": {
  "election": "Missouri Congressional and State General Election",
  "registration": [
   {
    "label": "Submitted by",
    "text": "Wed Oct 7, 2026 5:00PM",
    "date": "2026-10-07",
    "time": "5:00PM"
   },
   {
    "label": "In Person Request by",
    "text": "Fri Oct 30, 2026 5:00PM (For Discharged Military, Returned from deployment or activation or Overseas citizen returning from employment with proof)",
    "date": "2026-10-30",
    "time": "5:00PM"
   }
  ],
  "mailRequest": [
   {
    "label": "Email or Fax by",
    "text": "Wed Oct 21, 2026 5:00PM",
    "date": "2026-10-21",
    "time": "5:00PM"
   },
   {
    "label": "Post Received by",
    "text": "Wed Oct 21, 2026 5:00PM",
    "date": "2026-10-21",
    "time": "5:00PM"
   },
   {
    "label": "In-Person Request by",
    "text": "Mon Nov 2, 2026 5:00PM",
    "date": "2026-11-02",
    "time": "5:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "Submitted by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Tue Sep 22, 2026 to Mon Nov 2, 2026",
    "note": "In-Person absentee voting with excuse",
    "start": "2026-09-22",
    "end": "2026-11-02"
   },
   {
    "label": "In-person Absentee Voting",
    "text": "From Tue Oct 20, 2026 to Mon Nov 2, 2026",
    "note": "In-Person absentee voting without excuse",
    "start": "2026-10-20",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-07",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-07"
   },
   "online": {
    "date": "2026-10-07"
   }
  },
  "name": "Missouri",
  "usvoteUrl": "https://www.usvotefoundation.org/missouri-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/missouri"
 },
 "MT": {
  "election": "Montana Congressional, State and Judicial General Election",
  "registration": [
   {
    "label": "Postmarked by",
    "text": "Mon Oct 5, 2026",
    "note": "registration forms postmarked by this date and received within 3 days are accepted for regular registration",
    "date": "2026-10-05"
   },
   {
    "label": "Submitted by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026 8:00PM",
    "note": "Confirm the 8 pm deadline to REGISTER and vote with your local election office.",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Late Registration by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Mon Oct 5, 2026 to Mon Nov 2, 2026",
    "start": "2026-10-05",
    "end": "2026-11-02"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Mon Nov 2, 2026 12:00PM",
    "date": "2026-11-02",
    "time": "12:00PM"
   },
   {
    "label": "Emergency Ballot Period",
    "text": "From Fri Oct 30, 2026 to Tue Nov 3, 2026",
    "note": "Voters with an illness or health emergency between Friday 5 PM before the election and before the close of polls on election day may request an absentee ballot. Contact your Local Election Office .",
    "start": "2026-10-30",
    "end": "2026-11-03"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Mon Oct 5, 2026 to Mon Nov 2, 2026",
    "start": "2026-10-05",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   }
  },
  "name": "Montana",
  "usvoteUrl": "https://www.usvotefoundation.org/montana-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/montana"
 },
 "NE": {
  "election": "Nebraska Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "At DMV and other State Agencies by",
    "text": "Fri Oct 16, 2026",
    "date": "2026-10-16"
   },
   {
    "label": "Postmarked by",
    "text": "Fri Oct 16, 2026",
    "date": "2026-10-16"
   },
   {
    "label": "Online by",
    "text": "Fri Oct 16, 2026 11:59PM",
    "date": "2026-10-16",
    "time": "11:59PM"
   },
   {
    "label": "In-Person, Received by",
    "text": "Fri Oct 23, 2026 6:00PM",
    "date": "2026-10-23",
    "time": "6:00PM"
   }
  ],
  "mailRequest": [
   {
    "label": "Request for Postal Ballot by",
    "text": "Fri Oct 23, 2026",
    "date": "2026-10-23"
   },
   {
    "label": "In-Person, Received by",
    "text": "Tue Nov 3, 2026",
    "note": "Deadline for obtaining a replacement ballot in person.",
    "date": "2026-11-03"
   }
  ],
  "mailReturn": [
   {
    "label": "",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Mon Oct 5, 2026 to Mon Nov 2, 2026",
    "start": "2026-10-05",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-16",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-23"
   },
   "online": {
    "date": "2026-10-16"
   }
  },
  "name": "Nebraska",
  "usvoteUrl": "https://www.usvotefoundation.org/nebraska-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/nebraska"
 },
 "NV": {
  "election": "Nevada Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "In-Person Request by",
    "text": "Tue Oct 6, 2026",
    "date": "2026-10-06"
   },
   {
    "label": "Postmarked by",
    "text": "Tue Oct 6, 2026",
    "date": "2026-10-06"
   },
   {
    "label": "Online by",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Sat Oct 17, 2026 to Fri Oct 30, 2026",
    "start": "2026-10-17",
    "end": "2026-10-30"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Tue Oct 20, 2026",
    "date": "2026-10-20"
   },
   {
    "label": "",
    "text": "Automatic for Registered Voters",
    "note": "Ballots are automatically sent to the Voter's address listed on their Voter Registration record. If changes are needed, update your voter registration information prior to 14 days before the election."
   },
   {
    "label": "Emergency Ballot Request by",
    "text": "Tue Nov 3, 2026 5:00PM",
    "note": "Voters may request an emergency Absentee Ballot if they have a serious illness, stay at a medical facility, or are called away from home. Contact your Local Election Office for details.",
    "date": "2026-11-03",
    "time": "5:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "Received in Dropbox by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Sat Nov 7, 2026 5:00PM",
    "date": "2026-11-07",
    "time": "5:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Sat Oct 17, 2026 to Fri Oct 30, 2026",
    "start": "2026-10-17",
    "end": "2026-10-30"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-06",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-11-03"
   }
  },
  "name": "Nevada",
  "usvoteUrl": "https://www.usvotefoundation.org/nevada-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/nevada"
 },
 "NH": {
  "election": "New Hampshire Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "In-Person Request by",
    "text": "Wed Oct 21, 2026",
    "note": "Deadline for in-person voter registration is between 6 to 13 days before an election. Therefore, you may have up to Oct 28 to register; confirm with your local election office.",
    "date": "2026-10-21"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "mailRequest": [
   {
    "label": "Request for Postal Ballot by",
    "text": "Mon Nov 2, 2026 12:00PM",
    "date": "2026-11-02",
    "time": "12:00PM"
   },
   {
    "label": "In-Person Request by",
    "text": "Mon Nov 2, 2026 5:00PM",
    "date": "2026-11-02",
    "time": "5:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "In-Person, Received by",
    "text": "Tue Nov 3, 2026 5:00PM",
    "date": "2026-11-03",
    "time": "5:00PM"
   },
   {
    "label": "Post Received by",
    "text": "Tue Nov 3, 2026 5:00PM",
    "date": "2026-11-03",
    "time": "5:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "Not available for this election to -"
   }
  ],
  "registrationByMethod": {
   "inPerson": {
    "date": "2026-11-03"
   }
  },
  "name": "New Hampshire",
  "usvoteUrl": "https://www.usvotefoundation.org/new-hampshire-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/new-hampshire"
 },
 "NJ": {
  "election": "New Jersey Congressional General Election",
  "registration": [
   {
    "label": "Received by",
    "text": "Tue Oct 13, 2026",
    "date": "2026-10-13"
   }
  ],
  "mailRequest": [
   {
    "label": "Post Received by",
    "text": "Tue Oct 27, 2026",
    "date": "2026-10-27"
   },
   {
    "label": "In-Person, Received by",
    "text": "Mon Nov 2, 2026 3:00PM",
    "date": "2026-11-02",
    "time": "3:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "In-Person, Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Mon Nov 9, 2026 8:00PM",
    "date": "2026-11-09",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Sat Oct 24, 2026 to Sun Nov 1, 2026",
    "start": "2026-10-24",
    "end": "2026-11-01"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-13",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-13"
   },
   "online": {
    "date": "2026-10-13"
   }
  },
  "name": "New Jersey",
  "usvoteUrl": "https://www.usvotefoundation.org/new-jersey-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/new-jersey"
 },
 "NM": {
  "election": "New Mexico Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Postmarked by",
    "text": "Tue Oct 6, 2026",
    "date": "2026-10-06"
   },
   {
    "label": "Received by",
    "text": "Tue Oct 6, 2026",
    "date": "2026-10-06"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Tue Oct 6, 2026 to Sat Oct 31, 2026",
    "start": "2026-10-06",
    "end": "2026-10-31"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Tue Oct 20, 2026",
    "date": "2026-10-20"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Tue Oct 6, 2026 to Sat Oct 31, 2026",
    "start": "2026-10-06",
    "end": "2026-10-31"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-06",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-06"
   }
  },
  "name": "New Mexico",
  "usvoteUrl": "https://www.usvotefoundation.org/new-mexico-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/new-mexico"
 },
 "NY": {
  "election": "New York Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Same Day Registration & Voting",
    "text": "From Sat Oct 24, 2026 to Sat Oct 24, 2026",
    "note": "Since the last day of registration overlaps with the first day of Early Voting, you may register and vote on this day.",
    "start": "2026-10-24",
    "end": "2026-10-24"
   },
   {
    "label": "In-Person, Received by",
    "text": "Sat Oct 24, 2026",
    "date": "2026-10-24"
   },
   {
    "label": "Post Received by",
    "text": "Sat Oct 24, 2026",
    "date": "2026-10-24"
   },
   {
    "label": "Received by",
    "text": "Sat Oct 24, 2026",
    "note": "such as online or from a state agency like DMV",
    "date": "2026-10-24"
   }
  ],
  "mailRequest": [
   {
    "label": "Online by",
    "text": "Sat Oct 24, 2026",
    "date": "2026-10-24"
   },
   {
    "label": "Post Received by",
    "text": "Sat Oct 24, 2026",
    "date": "2026-10-24"
   },
   {
    "label": "In-Person Request by",
    "text": "Mon Nov 2, 2026",
    "date": "2026-11-02"
   }
  ],
  "mailReturn": [
   {
    "label": "In-Person, Received by",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   },
   {
    "label": "Post received by",
    "text": "Wed Nov 4, 2026 (when postmark is missing)",
    "date": "2026-11-04"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Tue Nov 10, 2026",
    "date": "2026-11-10"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Sat Oct 24, 2026 to Sun Nov 1, 2026",
    "start": "2026-10-24",
    "end": "2026-11-01"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-24",
    "qualifier": "received"
   },
   "inPerson": {
    "date": "2026-10-24"
   },
   "online": {
    "date": "2026-10-24"
   }
  },
  "name": "New York",
  "usvoteUrl": "https://www.usvotefoundation.org/new-york-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/new-york"
 },
 "NC": {
  "election": "North Carolina Congressional, State and Judicial General Election",
  "registration": [
   {
    "label": "In-Person Request by",
    "text": "Fri Oct 9, 2026",
    "note": "Contact Local Election Office to confirm dates when in-person voter registration is available.",
    "date": "2026-10-09"
   },
   {
    "label": "Postmarked by",
    "text": "Fri Oct 9, 2026",
    "date": "2026-10-09"
   },
   {
    "label": "Email, Online or Fax by",
    "text": "Fri Oct 9, 2026 5:00PM",
    "note": "Contact Local Election Office to confirm dates when voter registration by electronic submission will be accepted.",
    "date": "2026-10-09",
    "time": "5:00PM"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Thu Oct 15, 2026 to Sat Oct 31, 2026",
    "note": "For those who become qualified to register and vote during this period",
    "start": "2026-10-15",
    "end": "2026-10-31"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Tue Oct 20, 2026",
    "date": "2026-10-20"
   },
   {
    "label": "Emergency Ballot Period",
    "text": "From Tue Oct 27, 2026 to Mon Nov 2, 2026",
    "start": "2026-10-27",
    "end": "2026-11-02"
   }
  ],
  "mailReturn": [
   {
    "label": "In-Person, Received by",
    "text": "Tue Nov 3, 2026 7:30PM",
    "note": "When returning the ballot , both inner and outer envelopes must be sealed for the vote to count. Also, only the voter, a near relative, or a legal guardian may return the ballot.",
    "date": "2026-11-03",
    "time": "7:30PM"
   },
   {
    "label": "Post Received by",
    "text": "Tue Nov 3, 2026 7:30PM",
    "note": "When returning the ballot both inner and outer envelopes must be sealed for the vote to count. Also, only the voter, a near relative, or a legal guardian may return the ballot.",
    "date": "2026-11-03",
    "time": "7:30PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Thu Oct 15, 2026 to Sat Oct 31, 2026",
    "note": "Early Voting ends at 3 PM on Saturday before election.",
    "start": "2026-10-15",
    "end": "2026-10-31"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-09",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-09"
   },
   "online": {
    "date": "2026-10-09"
   }
  },
  "name": "North Carolina",
  "usvoteUrl": "https://www.usvotefoundation.org/north-carolina-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/north-carolina"
 },
 "ND": {
  "election": "North Dakota Congressional, State and Judicial General Election",
  "registration": [
   {
    "label": "",
    "text": "Not Required"
   }
  ],
  "mailRequest": [
   {
    "label": "Submitted by",
    "text": "Mon Nov 2, 2026",
    "date": "2026-11-02"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "Contact Local Election Office to Confirm Dates and Times"
   }
  ],
  "registrationByMethod": {},
  "name": "North Dakota",
  "usvoteUrl": "https://www.usvotefoundation.org/north-dakota-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/north-dakota"
 },
 "OH": {
  "election": "Ohio Congressional, State, Gubernatorial and Judicial General Election",
  "registration": [
   {
    "label": "Postmarked by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   },
   {
    "label": "Received by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Tue Oct 27, 2026",
    "date": "2026-10-27"
   }
  ],
  "mailReturn": [
   {
    "label": "Post Received by",
    "text": "Tue Nov 3, 2026 7:30PM",
    "date": "2026-11-03",
    "time": "7:30PM"
   },
   {
    "label": "Received in Dropbox by",
    "text": "Tue Nov 3, 2026 7:30PM",
    "date": "2026-11-03",
    "time": "7:30PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Tue Oct 6, 2026 to Sun Nov 1, 2026",
    "note": "until 5 PM on last Sunday.",
    "start": "2026-10-06",
    "end": "2026-11-01"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-05"
   },
   "online": {
    "date": "2026-10-05"
   }
  },
  "name": "Ohio",
  "usvoteUrl": "https://www.usvotefoundation.org/ohio-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/ohio"
 },
 "OK": {
  "election": "Oklahoma Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Received by",
    "text": "Fri Oct 9, 2026",
    "date": "2026-10-09"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Mon Oct 19, 2026 5:00PM",
    "date": "2026-10-19",
    "time": "5:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "Hand Delivered by",
    "text": "Mon Nov 2, 2026 5:00PM",
    "date": "2026-11-02",
    "time": "5:00PM"
   },
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Wed Oct 28, 2026 to Sat Oct 31, 2026",
    "start": "2026-10-28",
    "end": "2026-10-31"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-09",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-09"
   },
   "online": {
    "date": "2026-10-09"
   }
  },
  "name": "Oklahoma",
  "usvoteUrl": "https://www.usvotefoundation.org/oklahoma-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/oklahoma"
 },
 "OR": {
  "election": "Oregon Congressional, State, Gubernatorial and Judicial General Election",
  "registration": [
   {
    "label": "Submitted by",
    "text": "Tue Oct 13, 2026",
    "note": "Oregon has automatic voter registration through DMV. Update info at Oregon Voter Registration Election office must receive registration at least 21 days before Election.",
    "date": "2026-10-13"
   }
  ],
  "mailRequest": [
   {
    "label": "Submitted by",
    "text": "Thu Oct 29, 2026",
    "note": "Every voter receives a ballot by mail. This deadline is only for voters who have a change to their registration information after the ballots have been mailed.",
    "date": "2026-10-29"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Received in Dropbox by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Tue Nov 10, 2026",
    "date": "2026-11-10"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Wed Oct 14, 2026 to Tue Nov 3, 2026",
    "note": "Confirm in-person absentee voting dates and locations with your local election office.",
    "start": "2026-10-14",
    "end": "2026-11-03"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-13",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-13"
   },
   "online": {
    "date": "2026-10-13"
   }
  },
  "name": "Oregon",
  "usvoteUrl": "https://www.usvotefoundation.org/oregon-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/oregon"
 },
 "PA": {
  "election": "Pennsylvania Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Received by",
    "text": "Mon Oct 19, 2026",
    "date": "2026-10-19"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Tue Oct 27, 2026 5:00PM",
    "date": "2026-10-27",
    "time": "5:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Mon Sep 14, 2026 to Tue Oct 27, 2026",
    "note": "Not all counties start on Sep 14. Contact your county election office to learn the dates and times for your county.",
    "start": "2026-09-14",
    "end": "2026-10-27"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-19",
    "qualifier": "received"
   },
   "inPerson": {
    "date": "2026-10-19"
   },
   "online": {
    "date": "2026-10-19"
   }
  },
  "name": "Pennsylvania",
  "usvoteUrl": "https://www.usvotefoundation.org/pennsylvania-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/pennsylvania"
 },
 "RI": {
  "election": "Rhode Island Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Received by",
    "text": "Sun Oct 4, 2026",
    "date": "2026-10-04"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Tue Oct 13, 2026 4:00PM",
    "date": "2026-10-13",
    "time": "4:00PM"
   },
   {
    "label": "Emergency Ballot Period",
    "text": "From Wed Oct 14, 2026 to Mon Nov 2, 2026",
    "note": "Voters unable to vote at polls due to illness or physical disability may request absentee ballot from 5 PM Tuesday before election until 4 PM the day before election. Contact your Local Election Office",
    "start": "2026-10-14",
    "end": "2026-11-02"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Wed Oct 14, 2026 to Mon Nov 2, 2026",
    "start": "2026-10-14",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-04",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-04"
   },
   "online": {
    "date": "2026-10-04"
   }
  },
  "name": "Rhode Island",
  "usvoteUrl": "https://www.usvotefoundation.org/rhode-island-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/rhode-island"
 },
 "SC": {
  "election": "South Carolina Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "In-Person Request by",
    "text": "Fri Oct 2, 2026",
    "note": "Deadline is Oct 4th if county board holds weekend hours for voter registration.",
    "date": "2026-10-02"
   },
   {
    "label": "Email, Online or Fax by",
    "text": "Sun Oct 4, 2026",
    "date": "2026-10-04"
   },
   {
    "label": "Postmarked by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Fri Oct 23, 2026 5:00PM",
    "date": "2026-10-23",
    "time": "5:00PM"
   },
   {
    "label": "Emergency Ballot Period",
    "text": "From Fri Oct 30, 2026 to Tue Nov 3, 2026",
    "note": "Voters admitted to a hospital on or within 4 days before the election may request an Absentee Ballot. Contact your Local Election Office for details.",
    "start": "2026-10-30",
    "end": "2026-11-03"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Mon Oct 19, 2026 to Sat Oct 31, 2026",
    "note": "Mon thru Sat 8:30 AM to 6 PM. Closed Sun Oct 25.",
    "start": "2026-10-19",
    "end": "2026-10-31"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-02"
   },
   "online": {
    "date": "2026-10-04"
   }
  },
  "name": "South Carolina",
  "usvoteUrl": "https://www.usvotefoundation.org/south-carolina-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/south-carolina"
 },
 "SD": {
  "election": "South Dakota Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Received by",
    "text": "Mon Oct 19, 2026 5:00PM",
    "date": "2026-10-19",
    "time": "5:00PM"
   }
  ],
  "mailRequest": [
   {
    "label": "In-Person Request by",
    "text": "Mon Nov 2, 2026 5:00PM",
    "date": "2026-11-02",
    "time": "5:00PM"
   },
   {
    "label": "Emergency Ballot Request by",
    "text": "Tue Nov 3, 2026 3:00PM",
    "date": "2026-11-03",
    "time": "3:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Fri Sep 18, 2026 to Mon Nov 2, 2026",
    "start": "2026-09-18",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-19",
    "qualifier": "received"
   },
   "inPerson": {
    "date": "2026-10-19"
   }
  },
  "name": "South Dakota",
  "usvoteUrl": "https://www.usvotefoundation.org/south-dakota-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/south-dakota"
 },
 "TN": {
  "election": "Tennessee Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Hand Delivered by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   },
   {
    "label": "Online by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   },
   {
    "label": "Postmarked by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   }
  ],
  "mailRequest": [
   {
    "label": "Submitted by",
    "text": "Sat Oct 24, 2026",
    "date": "2026-10-24"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Wed Oct 14, 2026 to Thu Oct 29, 2026",
    "start": "2026-10-14",
    "end": "2026-10-29"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-05"
   },
   "online": {
    "date": "2026-10-05"
   }
  },
  "name": "Tennessee",
  "usvoteUrl": "https://www.usvotefoundation.org/tennessee-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/tennessee"
 },
 "TX": {
  "election": "Texas Congressional, State, Gubernatorial and Judicial General Election",
  "registration": [
   {
    "label": "Submitted by",
    "text": "Mon Oct 5, 2026",
    "date": "2026-10-05"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Fri Oct 23, 2026",
    "date": "2026-10-23"
   }
  ],
  "mailReturn": [
   {
    "label": "In-Person, Received by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Wed Nov 4, 2026 5:00PM",
    "date": "2026-11-04",
    "time": "5:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Mon Oct 19, 2026 to Fri Oct 30, 2026",
    "start": "2026-10-19",
    "end": "2026-10-30"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-05",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-05"
   }
  },
  "name": "Texas",
  "usvoteUrl": "https://www.usvotefoundation.org/texas-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/texas"
 },
 "UT": {
  "election": "Utah Congressional and State General Election",
  "registration": [
   {
    "label": "Received by",
    "text": "Fri Oct 23, 2026 5:00PM",
    "date": "2026-10-23",
    "time": "5:00PM"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026",
    "note": "You may be able to register on Election Day and vote using a provisional ballot. Contact your local election official to confirm.",
    "date": "2026-11-03"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Tue Oct 20, 2026 to Fri Oct 30, 2026",
    "note": "Contact your local election office to confirm the dates times and locations of Same Day Registration and Early Voting",
    "start": "2026-10-20",
    "end": "2026-10-30"
   }
  ],
  "mailRequest": [
   {
    "label": "",
    "text": "Last Day to Request Replacement Ballot Tue Oct 27, 2026",
    "note": "Ballots are automatically sent to registered voters. at the address on their voter registration. Absentee ballot request deadline is only for those who need their ballot mailed to a different address.",
    "date": "2026-10-27"
   }
  ],
  "mailReturn": [
   {
    "label": "Post Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Received in Dropbox by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Tue Oct 20, 2026 to Fri Oct 30, 2026",
    "note": "Contact your local election office to confirm the dates times and locations of Early Voting.",
    "start": "2026-10-20",
    "end": "2026-10-30"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-23",
    "qualifier": "received"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-23"
   }
  },
  "name": "Utah",
  "usvoteUrl": "https://www.usvotefoundation.org/utah-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/utah"
 },
 "VT": {
  "election": "Vermont Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Submitted by",
    "text": "Mon Nov 2, 2026 5:00PM",
    "date": "2026-11-02",
    "time": "5:00PM"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Mon Nov 2, 2026 5:00PM",
    "note": "Absentee ballots will be automatically mailed to all active registered voters.",
    "date": "2026-11-02",
    "time": "5:00PM"
   },
   {
    "label": "Emergency Ballot Request by",
    "text": "Tue Nov 3, 2026",
    "note": "In cases of emergency, the town clerk may accept a request for an absentee ballot after the Absentee Request deadline. Contact your Local Election Office for details.",
    "date": "2026-11-03"
   }
  ],
  "mailReturn": [
   {
    "label": "In the Election Office by",
    "text": "Mon Nov 2, 2026",
    "date": "2026-11-02"
   },
   {
    "label": "Received in Dropbox by",
    "text": "Mon Nov 2, 2026 5:00PM",
    "date": "2026-11-02",
    "time": "5:00PM"
   },
   {
    "label": "Hand Delivered by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "note": "Hand deliver ballot to polling place",
    "date": "2026-11-03",
    "time": "7:00PM"
   },
   {
    "label": "Post Received by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Sat Sep 19, 2026 to Tue Nov 3, 2026",
    "note": "Contact your local election official to confirm dates and locations.",
    "start": "2026-09-19",
    "end": "2026-11-03"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-11-03",
    "qualifier": "received"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-11-03"
   }
  },
  "name": "Vermont",
  "usvoteUrl": "https://www.usvotefoundation.org/vermont-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/vermont"
 },
 "VA": {
  "election": "Virginia Congressional General Election",
  "registration": [
   {
    "label": "Submitted by",
    "text": "Fri Oct 23, 2026",
    "note": "After the registration deadline date, voters may register and vote in person using a provisional ballot through election day.",
    "date": "2026-10-23"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Sat Oct 24, 2026 to Tue Nov 3, 2026",
    "note": "Voters may register and vote using a provisional ballot in-person.",
    "start": "2026-10-24",
    "end": "2026-11-03"
   }
  ],
  "mailRequest": [
   {
    "label": "Received by",
    "text": "Fri Oct 23, 2026 5:00PM",
    "date": "2026-10-23",
    "time": "5:00PM"
   },
   {
    "label": "Emergency Ballot Request by",
    "text": "Mon Nov 2, 2026 2:00PM",
    "note": "Due to unexpected obligation that arose after noon on Saturday, Oct 31. You must apply and vote in person by Nov 2, at 2 PM.",
    "date": "2026-11-02",
    "time": "2:00PM"
   },
   {
    "label": "Emergency Ballot Request by",
    "text": "Mon Nov 2, 2026 2:00PM",
    "note": "Due to hospitalization, illness or other emergency",
    "date": "2026-11-02",
    "time": "2:00PM"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Fri Nov 6, 2026 12:00PM",
    "date": "2026-11-06",
    "time": "12:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Fri Sep 18, 2026 to Sat Oct 31, 2026",
    "note": "Also referred to in Virginia as In-person Early Voting. Voter registration offices will be open for early voting on Sun Oct 17, Sat Oct 24, and Sun Oct 25.",
    "start": "2026-09-18",
    "end": "2026-10-31"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-23",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-23"
   }
  },
  "name": "Virginia",
  "usvoteUrl": "https://www.usvotefoundation.org/virginia-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/virginia"
 },
 "WA": {
  "election": "Washington Congressional, State and Judicial General Election",
  "registration": [
   {
    "label": "Post Received by",
    "text": "Mon Oct 26, 2026",
    "date": "2026-10-26"
   },
   {
    "label": "Email, Online or Fax by",
    "text": "Mon Oct 26, 2026 11:59PM",
    "date": "2026-10-26",
    "time": "11:59PM"
   },
   {
    "label": "In-Person, Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Fri Oct 16, 2026 to Tue Nov 3, 2026",
    "start": "2026-10-16",
    "end": "2026-11-03"
   }
  ],
  "mailRequest": [
   {
    "label": "",
    "text": "Last Day to Request Replacement Ballot Mon Oct 26, 2026",
    "note": "Ballots automatically mailed to registered voters. Voter registration updates returned by mail/email for voters already registered must be received by 8 days before Election Day or completed in person at a county elections office through Election Day.",
    "date": "2026-10-26"
   }
  ],
  "mailReturn": [
   {
    "label": "In the Election Office by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Mon Nov 23, 2026",
    "date": "2026-11-23"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Fri Oct 16, 2026 to Tue Nov 3, 2026",
    "start": "2026-10-16",
    "end": "2026-11-03"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-26",
    "qualifier": "received"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-26"
   }
  },
  "name": "Washington",
  "usvoteUrl": "https://www.usvotefoundation.org/washington-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/washington"
 },
 "WV": {
  "election": "West Virginia Congressional and State General Election",
  "registration": [
   {
    "label": "At DMV and other State Agencies by",
    "text": "Tue Oct 13, 2026",
    "date": "2026-10-13"
   },
   {
    "label": "Email, Online or Fax by",
    "text": "Tue Oct 13, 2026",
    "date": "2026-10-13"
   },
   {
    "label": "In-Person Request by",
    "text": "Tue Oct 13, 2026",
    "date": "2026-10-13"
   },
   {
    "label": "Postmarked by",
    "text": "Tue Oct 13, 2026",
    "date": "2026-10-13"
   }
  ],
  "mailRequest": [
   {
    "label": "Submitted by",
    "text": "Wed Oct 28, 2026",
    "date": "2026-10-28"
   },
   {
    "label": "Emergency Ballot Period",
    "text": "From Tue Oct 27, 2026 to Tue Nov 3, 2026",
    "note": "Ends at noon on Election Day",
    "start": "2026-10-27",
    "end": "2026-11-03"
   }
  ],
  "mailReturn": [
   {
    "label": "Hand Delivered by",
    "text": "Mon Nov 2, 2026",
    "date": "2026-11-02"
   },
   {
    "label": "Post Received by",
    "text": "Wed Nov 4, 2026",
    "note": "For Absentee Ballots received without a postmark",
    "date": "2026-11-04"
   },
   {
    "label": "Postmarked On or Before Election Day and Received by",
    "text": "Mon Nov 9, 2026",
    "date": "2026-11-09"
   }
  ],
  "earlyVoting": [
   {
    "label": "Early Voting",
    "text": "From Wed Oct 21, 2026 to Sat Oct 31, 2026",
    "start": "2026-10-21",
    "end": "2026-10-31"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-13",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-10-13"
   },
   "online": {
    "date": "2026-10-13"
   }
  },
  "name": "West Virginia",
  "usvoteUrl": "https://www.usvotefoundation.org/west-virginia-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/west-virginia"
 },
 "WI": {
  "election": "Wisconsin Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Postmarked by",
    "text": "Wed Oct 14, 2026",
    "date": "2026-10-14"
   },
   {
    "label": "Online by",
    "text": "Wed Oct 14, 2026 11:59PM",
    "date": "2026-10-14",
    "time": "11:59PM"
   },
   {
    "label": "In-Person Request by",
    "text": "Fri Oct 30, 2026 5:00PM",
    "date": "2026-10-30",
    "time": "5:00PM"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026",
    "date": "2026-11-03"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Tue Oct 20, 2026 to Fri Oct 30, 2026",
    "start": "2026-10-20",
    "end": "2026-10-30"
   }
  ],
  "mailRequest": [
   {
    "label": "Email, Online or Fax by",
    "text": "Thu Oct 29, 2026",
    "date": "2026-10-29"
   },
   {
    "label": "Post Received by",
    "text": "Thu Oct 29, 2026 5:00PM",
    "date": "2026-10-29",
    "time": "5:00PM"
   },
   {
    "label": "In-Person Request by",
    "text": "Sun Nov 1, 2026",
    "note": "In person ballot request cannot be made earlier than 14 days before election day. Contact your Local Election Office to confirm the dates, times and locations you may make an in-person ballot request.",
    "date": "2026-11-01"
   },
   {
    "label": "Emergency Ballot Period",
    "text": "From Tue Oct 27, 2026 to Tue Nov 3, 2026",
    "note": "Voters who are hospitalized may request an Absentee Ballot from 7 days before an election but not later than 5 PM on Election Day. Contact your Local Election Office for details.",
    "start": "2026-10-27",
    "end": "2026-11-03"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 8:00PM",
    "date": "2026-11-03",
    "time": "8:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Tue Oct 20, 2026 to Sun Nov 1, 2026",
    "start": "2026-10-20",
    "end": "2026-11-01"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-14",
    "qualifier": "postmarked"
   },
   "inPerson": {
    "date": "2026-11-03"
   },
   "online": {
    "date": "2026-10-14"
   }
  },
  "name": "Wisconsin",
  "usvoteUrl": "https://www.usvotefoundation.org/wisconsin-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/wisconsin"
 },
 "WY": {
  "election": "Wyoming Congressional, State and Gubernatorial General Election",
  "registration": [
   {
    "label": "Submitted by",
    "text": "Mon Oct 19, 2026",
    "date": "2026-10-19"
   },
   {
    "label": "Election Day Registration & Voting",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   },
   {
    "label": "Same Day Registration & Voting",
    "text": "From Tue Oct 6, 2026 to Mon Nov 2, 2026",
    "start": "2026-10-06",
    "end": "2026-11-02"
   }
  ],
  "mailRequest": [
   {
    "label": "Submitted by",
    "text": "Mon Nov 2, 2026",
    "date": "2026-11-02"
   }
  ],
  "mailReturn": [
   {
    "label": "Received by",
    "text": "Tue Nov 3, 2026 7:00PM",
    "date": "2026-11-03",
    "time": "7:00PM"
   }
  ],
  "earlyVoting": [
   {
    "label": "In-person Absentee Voting",
    "text": "From Tue Oct 6, 2026 to Mon Nov 2, 2026",
    "start": "2026-10-06",
    "end": "2026-11-02"
   }
  ],
  "registrationByMethod": {
   "mail": {
    "date": "2026-10-19",
    "qualifier": "received"
   },
   "inPerson": {
    "date": "2026-11-03"
   }
  },
  "name": "Wyoming",
  "usvoteUrl": "https://www.usvotefoundation.org/wyoming-election-dates-and-deadlines",
  "vote411Url": "https://www.vote411.org/wyoming"
 }
};

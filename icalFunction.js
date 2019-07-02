"use strict";

const ical = require("ical");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

ical.fromURL(
  "https://www.airbnb.com/calendar/ical/10149981.ics?s=975ab57d648fcfb3b5132fb5a657adea",
  {},
  function(err, data) {
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        var ev = data[k];
        if (data[k].type == "VEVENT") {
          console.log(
            ev.description
          );
        }
      }
    }
  }
);

// must pass URL and return dates and 4 digits for each event
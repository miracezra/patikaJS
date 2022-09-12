let meeting = prompt("Enter your name");
function digitalClock() {
  let date = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let meetingMessage = `Hi ${meeting} welcome <br>${
    days[date.getDay()]
  } <p>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  document.getElementById("meet").innerHTML = meetingMessage;
}
window.onload=digitalClock();
let time = setInterval("digitalClock()", 1000);

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


  let meetingMessage = `Hi ${meeting} welcome <br><p>${
    days[date.getDay()]
  } ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} </p> <p class="meetText"> You are in your first assignment of javascript. Congratulations for coming this far.</p>`;

  document.getElementById("meet").innerHTML = meetingMessage;
}
window.onload=digitalClock();
let time = setInterval("digitalClock()", 1000);

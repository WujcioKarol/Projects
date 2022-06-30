const stopwatch = document.getElementById("stopwatch");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let seconds = 0;
let minutes = 0;
let hours = 0;

start.addEventListener("click", function () {
  mytimer.start();
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;
});
stop.addEventListener("click", function () {
  mytimer.stop();
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
});
reset.addEventListener("click", function () {
  seconds = 0;
  minutes = 0;
  hours = 0;
  mytimer.reset();
  mytimer.stop();

  stopwatch.innerHTML = "00:00:00";
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
});
function decorator(time) {
  return time < 10 ? "0" + time : time;
}
var mytimer = new Timer(function () {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  stopwatch.innerHTML =
    decorator(hours) + ":" + decorator(minutes) + ":" + decorator(seconds);
}, 1000);
function Timer(fn, t) {
  var timerObj = setInterval(fn, t);

  this.stop = function () {
    if (timerObj) {
      clearInterval(timerObj);
      timerObj = null;
    }
    return this;
  };

  this.start = function () {
    if (!timerObj) {
      this.stop();
      timerObj = setInterval(fn, t);
    }
    return this;
  };

  this.reset = function (newT = t) {
    t = newT;
    return this.stop().start();
  };
}

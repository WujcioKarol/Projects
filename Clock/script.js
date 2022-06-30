const clock_el = document.getElementById("clock");

setInterval(function clock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clock_el.innerHTML = `${decorator(hours)}:${decorator(minutes)}:${decorator(
    seconds
  )}`;
}, 1000);

function decorator(time) {
  return time < 10 ? "0" + time : time;
}

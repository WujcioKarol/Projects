const buttons = document.querySelectorAll(".button-calc");
const display = document.querySelector("#display");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.getAttribute("data-value") === "=") {
      if (eval(display.innerHTML) === Infinity) {
        display.innerHTML = "Error";
      } else {
        display.innerHTML = eval(display.innerHTML);
      }
    } else if (button.getAttribute("data-value") === "clear") {
      display.innerHTML = "";
    } else if (button.getAttribute("data-value") === "%") {
      if (
        display.innerHTML.indexOf("+") == -1 &&
        display.innerHTML.indexOf("-") == -1 &&
        display.innerHTML.indexOf("*") == -1 &&
        display.innerHTML.indexOf("/") == -1
      ) {
        display.innerHTML = display.innerHTML / 100;
      }
    } else if (button.getAttribute("data-value") === "backspace") {
      display.innerHTML = display.innerHTML.slice(0, -1);
    } else if (
      button.getAttribute("data-value") !== "clear" &&
      button.getAttribute("data-value") !== "="
    ) {
      if (
        display.innerHTML.slice(-1) === "+" ||
        display.innerHTML.slice(-1) === "-" ||
        display.innerHTML.slice(-1) === "*" ||
        display.innerHTML.slice(-1) === "/"
      ) {
        if (
          button.getAttribute("data-value") !== "+" &&
          button.getAttribute("data-value") !== "-" &&
          button.getAttribute("data-value") !== "*" &&
          button.getAttribute("data-value") !== "/"
        ) {
          display.innerHTML += button.getAttribute("data-value");
        }
      } else {
        display.innerHTML += button.getAttribute("data-value");
      }
    }
  });
});

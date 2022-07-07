const guessBackground = document.getElementById("guess-background");
const guessText = document.getElementById("guess-text");
const form = document.getElementById("guess-form");
var score = document.getElementById("score");
let points = 0;
score.innerHTML = "Score: " + points;
let generatedcolor = "#" + generateRandomColorHex();

function guessColor(color) {
  guessBackground.style.backgroundColor = color;
  console.log(color);
}
function generateRandomColorHex() {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .toUpperCase();
}
//funtion to return color from rgb to hex
function rgbToHex(r, g, b) {
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const userInput = document.getElementById("user-input").value;
  if (userInput == generatedcolor) {
    guessText.innerHTML =
      "You guessed correctly! <button type='reset' onclick='reset()' id='won-btn'>Next color!</button>";
    points += 1;
  } else {
    colorArray = guessBackground.style.backgroundColor
      .replace(/\s/g, "")
      .slice(4, -1)
      .split(",");
    colorArray = colorArray.map(Number);
    guessText.innerHTML =
      "Wrong guess!<br>" +
      "The color was: " +
      rgbToHex(colorArray[0], colorArray[1], colorArray[2]) +
      "<button type='reset' onclick='reset()' id='lose-btn'>Try again!</button>";
    points = 0;
  }
  score.innerHTML = "Score: " + points;
});
function reset() {
  generatedcolor = "#" + generateRandomColorHex();
  guessBackground.style.backgroundColor = guessColor(generatedcolor);
  guessText.innerHTML = "";
}
guessColor(generatedcolor);

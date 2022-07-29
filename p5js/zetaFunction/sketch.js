const SIGMA = 1.0 / 2.0;
let points = new Array();
t = 1;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(150);
  translate(width / 2, height / 2);
  line(-200, 0, 200, 0);
  line(0, -200, 0, 200);
}
function zeta(s, n) {
  sum = 0;
  for (let i = n; i < 10000; i++) {
    sum += 1 / i ** s;
  }
  return sum;
}

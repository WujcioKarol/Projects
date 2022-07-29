let sigma = 10.0;
const RHO = 30.0;
const BETA = 8.0 / 3.0;
let x = 0.01;
let y = 0;
let z = 0;
let points = new Array();
var angle = 0;
function setup() {
  createCanvas(1000, 800, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  rotateX(angle);
  rotateY(angle * 0.5);
  rotateZ(angle * 0.25);

  background(40);
  let dt = 0.01;
  let dx = sigma * (y - x) * dt;
  let dy = (x * (RHO - z) - y) * dt;
  let dz = (x * y - BETA * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;
  points.push(new p5.Vector(x, y, z));

  translate(0, 0, -80);
  stroke(255);
  noFill();
  beginShape();
  scale(5);
  for (let vector of points) {
    stroke(255);
    vertex(vector.x, vector.y, vector.z);
  }
  endShape();
  angle += 0.1;
}

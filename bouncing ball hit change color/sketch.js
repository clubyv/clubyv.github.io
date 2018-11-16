// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let hit = false;

let colorOptions = ["red", "blue", "white", "black", "yellow", "purple", "pink", "green", "teal"];

let dx1, dy1;
let dx2, dy2;

let x1, y1;
let x2, y2;

let fillCircleOne, fillCircleTwo;

function setup() {

  createCanvas(windowWidth, windowHeight);

  background(255);

  x1 = width*(2/3);
  y1 = height*(2/3);

  x2 = width*(1/3);
  y2 = height*(1/3);

  dx1 = random(1, 6);
  dy1 = random(1, 6);

  dx2 = random(3, 12);
  dy2 = random(3, 12);

  fillCircleOne = random(colorOptions);
  fillCircleTwo = random(colorOptions);

}

function draw() {
  createCircles();
  moveCircles();
  checkHit();
}

function createCircles() {
  //circle one
  fill(fillCircleOne);
  ellipse(x1, y1, 60, 60);

  //circle two
  fill(fillCircleTwo);
  ellipse(x2, y2, 40, 40);
}

function moveCircles() {

  x1 += dx1;
  y1 += dy1;

  if (x1 + 60 > width || x1 < 0) {
    dx1 *= -1;
  }

  if (y1 + 60 > height || y1 < 0) {
    dy1 *= -1;
  }

  x2 += dx2;
  y2 += dy2;

  if (x2 + 40 > width || x2 < 0) {
    dx2 *= -1;
  }
  if (y2 + 40 > height || y2 < 0) {
    dy2 *= -1;
  }
}

function checkHit() {

  hit = collideCircleCircle(x1, y1, 60, x2, y2, 40);

  // if (hit) {
  //   fillCircleOne = random(colorOptions);
  //   fillCircleTwo = random(colorOptions);
  // }

}

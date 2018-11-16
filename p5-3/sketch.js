// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Tank {

  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.xSize = 30;
    this.ySize = 10;
    this.dx = 0;
    this.color = color;
    this.gun = 0;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.xSize, this.ySize);
    rect(this.x+10, this.y-3, this.xSize*0.75, this.ySize/2);
  }

}

let numberOfRects;
let rectWidth;
let time = 0;
let rects = [];
let gameState = 0;
let playerOne, playerTwo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = 500;
  rectWidth = width / numberOfRects;
  generateRectangles();
  playerOne = new Tank(50, 50, "green");
}

function draw() {
  background(220);
  fill(0);
  displayRects();
  playerOne.display();
}

function generateRectangles() {
  for (let i = 0; i < numberOfRects; i++) {
    let rectHeight = noise(time) * height;
    let someRect = {
      x: i * rectWidth,
      y: height - rectHeight,
      w: rectWidth,
      h: rectHeight
    };

    rects.push(someRect);
    time += 0.003;
  }
}

function displayRects() {
  for (let i = 0; i < rects.length; i++) {
    noStroke();
    fill(142, 86, 7);
    rect(rects[i].x,rects[i].y,rects[i].w,rects[i].h);
  }
}


class Duck {
  constructor(number) {
    this.x = random(200, width-200);
    this.y = height;
    this.xSpeed = random(5, 15);
    this.ySpeed = random(5, 15);
    this.color = color(random(255), random(255), random(255));
    this.duckNumber = number;

    let choice = random(100);
    if (choice < 50) {
      this.xSpeed *= -1;
    }
  }
  move() {

    this.x += this.xSpeed;
    this.y -= this.ySpeed;

    if (hit) {
      this.xSpeed = 0;
      this.ySpeed = -3;
    }

  }
  display() {
    fill(this.color);
    ellipse(this.x, this.y, 30, 67);
  }
}

class Timer {
  constructor() {
    this.counter = millis();
  }

  isFinished(waitTime) {

    if (millis() - this.counter > waitTime) {
      return true;
    }

  }

}

let score = 0;
let missCount = 0;
let reticle;
let hit = false;
let duckCount = 30;
let ducks = [];
let hitDucks = [];
let missedDucks = [];
let duck;

function preload() {
  reticle = loadImage("assets/crosshair.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < duckCount; i++) {
    let duck = new Duck(i);
    ducks.push(duck);
  }
  duckTimer();
}

function draw() {
  point(mouseX, mouseY);
  background(200);
  aimingReticle();
}

function aimingReticle() {
  imageMode(CENTER);
  image(reticle, mouseX, mouseY, 50, 50);
}

function duckTimer() {
  let timerCounter = new Timer();
  if (timerCounter.isFinished(5000)) {
    establishDucks();
  }
}

function establishDucks() {

  for (let i = 0; i < ducks.length; i++) {

    console.log("is true");
    ducks[i].display();
    checkHit(ducks[i]);
    ducks[i].move();
    checkMiss(ducks[i]);
  }
}

function checkHit(ducky) {

  if (mouseIsPressed && hit === false) {
    hit = collidePointCircle(mouseX, mouseY, ducky.x, ducky.y, 30, 67);
  }
  else {
    hit = false;
  }

  if (hit) {
    console.log("hit");
  }

}

function checkMiss(ducky) {

  if (ducky.x > width || ducky.x < 0 && ducky.y < 0) {
    if (missedDucks.includes(ducky.duckNumber)) {
      return;
    }
    else {
      missedDucks.push(ducky.duckNumber);
      missCount++;
    }
  }
}

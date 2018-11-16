// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  for (let i = 0; i < balls.length; i++) {

    fill(balls[i].ballColor);
    ellipse(balls[i].x, balls[i].y, balls[i].radius*2, balls[i].radius*2);

    balls[i].x += balls[i].dx;
    balls[i].y += balls[i].dy;

    if (balls[i].x > width-balls[i].radius || balls[i].x < balls[i].radius) {
      balls[i].dx *= -1;
    }
    if (balls[i].y > height-balls[i].radius || balls[i].y < balls[i].radius) {
      balls[i].dy *= -1;
    }
  }
}

function mousePressed() {
  let ball = {
    radius: random(5, 50),
    x: mouseX,
    y: mouseY,
    dx: random(-15, 15),
    dy: random(-15,15),
    ballColor: color(random(1, 255), random(1, 255), random(1, 255))
  };
  balls.push(ball);
}

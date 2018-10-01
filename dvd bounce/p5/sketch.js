// DVD Bounce
// Parker R
// 9/18/2018

let dvd;
let x, y;
let dx, dy;
let r, g, b;
let dr, dg, db;

function preload() {
  dvd = loadImage('assets/dvd logo.png');
}
function setup() {
  r = random(255);
  g = random(255);
  b = random(255);

  dr = 1;
  dg = 1;
  db = 1;

  createCanvas(windowWidth, windowHeight);
  background(40);

  x = width/2 - dvd.width/2;
  y = height/2 - dvd.height/2;
  dx = random(3,8);
  dy = random(3,8);
}

function draw() {
  changeColor();
  displayDvd();
  moveImage();
}

function changeColor() {
  r += dr;
  g += dg;
  b += db;

  if (r >= 255 || r <= 0){
    dr = dr * -1;
  }

  if (g >= 255 || g <= 0) {
    dg = dg * -1;
  }

  if (b >= 255 || b <= 0) {
    db = db * -1;
  }

  tint(r,g,b);
}

function moveImage() {
  x += dx;
  y += dy;

  if (y + dvd.height > height || y < 0) {
    dy = dy * -1;
  }
  if (x + dvd.width > width || x < 0) {
    dx = dx * -1;
  }
}

function displayDvd() {
  background(40);
  image(dvd,x,y);
}

//Parker Rogal
//Interactive Scene
//9/21/2018

//Press and hold 'Z' for a surprise!!!
//Hold down 'E' and click for circles
//Hold down 'R' and click for rectangles
//Press 'W' to clear the screen
//Press 'B' to clear the screen to black
//Up and down arrows to change shape size

let rectHeight = 12;
let rectWidth = 6;
let ellipseWidth = 15;
let scalar;

function preload(){
  clown = loadImage('assets/pennywise.png')

  soundFormats('mp3');
  whiteClear = loadSound('assets/clear throat.mp3');
  blackClear = loadSound('assets/man clear throat.mp3');
  ellipseDraw = loadSound('assets/dry cough.mp3');
  rectDraw = loadSound('assets/cough.mp3');
  sizeUp = loadSound('assets/gag.mp3');
  sizeDown = loadSound('assets/gagging.mp3');
  carniMusic = loadSound('assets/carni music.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  imageMode(CENTER);

  scalar = 0.001;
}

function draw() {
  if (keyIsDown(90)){
    scalar += 0.001;
    background(random(255),random(255),random(255));
    image(clown, width/2, height/2, clown.width*scalar, clown.height*scalar);
    fill(random(255),random(255),random(255),random(255));
    ellipse(random(width),random(height), random(90));
  }
}

function mousePressed() {
  if (keyIsDown(69)) {
    ellipse(mouseX,mouseY,ellipseWidth,ellipseWidth);
    ellipseDraw.play();
  }
  if (keyIsDown(82)) {
    rectDraw.play();
    rect(mouseX,mouseY,rectWidth,rectHeight);
  }
}

function keyPressed() {
  if (keyIsDown(38)) {
    sizeUp.play();
   	rectHeight += 3;
    rectWidth += 2;
    ellipseWidth += 3;
  }
  if (keyIsDown(40)) {
    sizeDown.play();
   	rectHeight -= 3;
    rectWidth -= 2;
    ellipseWidth -= 3;
  }
  if (keyIsDown(87)) {
    scalar = 0.001;
    carniMusic.stop();
    whiteClear.play();
   	background(255);
  }
  if(keyIsDown(66)) {
    scalar = 0.001;
    carniMusic.stop();
    blackClear.play();
    fill(255)
   	background(0);
  }
  if(keyIsDown(81)) {
   	fill(random(255),random(255),random(255));
  }
  if (keyIsDown(90)) {
    carniMusic.loop();
  }
}

function keyReleased() {
  if (keyCode === 90 && carniMusic.isPlaying()){
    carniMusic.pause();
  }
}

// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let state = 1;
let topLight;
let midLight;
let botLight;
let timeSeconds;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  timeSeconds = millis();
  background(255);
  drawOutlineOfLights();
  changeState();
}

function changeState() {
  if (timeSeconds >= 2000 && state === 1) {
    state = 2;
  }
  if (timeSeconds >= 4000 && state === 2){
    state = 3;
  }
  if (timeSeconds >= 6000 && state === 3) {
    state = 1;
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  if (state === 1){
    topLight = "red";
    midLight = "white";
    botLight = "white";
  }
  else if (state === 2){
    topLight = "white";
    midLight = "white";
    botLight = "green";
  }
  else if (state === 3){
    topLight = "white";
    midLight = "yellow";
    botLight = "white";
  }
  fill(topLight);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  fill(midLight);
  ellipse(width/2, height/2, 50, 50); //middle
  fill(botLight);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
  fill(255);
}

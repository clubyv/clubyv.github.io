// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let steve;
let graySteve;

function preload(){
  steve = loadImage('assets/steve.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  image(steve, width/2, height/2);
  graySteve = makeGrayscale(steve);
}

function draw() {

}



function makeGrayscale(sourceImage) {
    let img = createImage(sourceImage.width, sourceImage.height);

    sourceImage.loadPixels();
    img.loadPixels();

    for (let x = 0; x < img.width; x++) {
      for (let y = 0; y < img.height; y ++){
        let thisPixel = sourceImage.get(x, y);

        let r = red(thisPixel);
        let g = green(thisPixel);
        let b = blue(thisPixel);

        let average = (r+g+b)/3;

        let newPixel = color(average, average, average);

        img.set(x,y, newPixel);
      }
    }
    img.updatePixels();
    return img;
}

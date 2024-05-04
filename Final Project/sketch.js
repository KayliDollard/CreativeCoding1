let GeneMap;

function preload() {
  GeneMap = loadImage('mapforGE.png'); // Make sure to use the correct path to your image file
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  textSize(20);
  text("X: " + mouseX,100,200 );
  text("Y: " + mouseY,100,220 );
  
  let scaleFactor = min(width / GeneMap.width, height / GeneMap.height);
  
  let scaledWidth = GeneMap.width * scaleFactor;
  let scaledHeight = GeneMap.height * scaleFactor;
  
  let posX = width / 2;
  let posY = height / 2;
  
  imageMode(CENTER);
  image(GeneMap, posX, posY, scaledWidth, scaledHeight);

  //perimiter
  noFill();
  strokeWeight(4);
  stroke(20);
  circle(762, 351, 14);

  // checkIfMouseIsOverClickableArea();
}
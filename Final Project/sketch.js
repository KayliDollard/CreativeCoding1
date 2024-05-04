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

  strokeWeight(1)
  stroke(192, 57, 43)
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
  push()
  strokeWeight(4);
  stroke(192, 57, 43);
  circle(765, 359, 680);

  //garbage
  noFill();
  push()
  strokeWeight(4);
  stroke(192, 57, 43);
  circle(765, 359, 500);

  //the den

  //old town

  //reds

  //the pit

  //subs


  // checkIfMouseIsOverClickableArea();
}
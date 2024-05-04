let GeneMap;

function preload() {
  GeneMap = loadImage('mapforGE.png'); // Make sure to use the correct path to your image file
}

function setup() {
  // Set canvas size to match the image dimensions
  createCanvas(windowWidth, windowHeight);
  // Define clickable areas here
  // Example: { x1: 100, y1: 150, x2: 200, y2: 250, info: 'Room 1' }
  nofill();
  strokeWeight(4);
  circle(762, 351, 7);
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

  // Optional: Highlight area on hover
  // checkIfMouseIsOverClickableArea();
}

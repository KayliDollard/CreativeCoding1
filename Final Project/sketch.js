let GeneMap;

function preload() {
  GeneMap = loadImage('mapforGE.png'); // Make sure to use the correct path to your image file
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Define clickable areas here
  // Example: { x1: 100, y1: 150, x2: 200, y2: 250, info: 'Room 1' }
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(GeneMap, width, height);


  // Optional: Highlight area on hover
  // checkIfMouseIsOverClickableArea();
}

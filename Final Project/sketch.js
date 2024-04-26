let GeneMap;

function preload() {
  GeneMap = loadImage('mapforGE.png'); // Make sure to use the correct path to your image file
}

function setup() {
  createCanvas(500, 500);
  // Define clickable areas here
  // Example: { x1: 100, y1: 150, x2: 200, y2: 250, info: 'Room 1' }
}

function draw() {
  background(255);
  image(GeneMap, 100, 100, width, height); // Adjust if you need to scale the image

  // Optional: Highlight area on hover
  // checkIfMouseIsOverClickableArea();
}

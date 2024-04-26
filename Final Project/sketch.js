let GeneMap;
let scaledWidth, scaledHeight;
let posX, posY;

function preload() {
  GeneMap = loadImage('mapforGE.png'); // Make sure to use the correct path to your image file
}

function setup() {
  createCanvas(500, 500);
  // Define clickable areas here
  // Example: { x1: 100, y1: 150, x2: 200, y2: 250, info: 'Room 1' }
  
  // Calculate the scaled dimensions
  scaledWidth = GeneMap.width / 3;
  scaledHeight = GeneMap.height / 3;
  
  // Calculate the position to center the image
  posX = (width - scaledWidth) / 2;
  posY = (height - scaledHeight) / 2;
}

function draw() {
  background(255);
  
  // Draw the image at the scaled size and centered position
  image(GeneMap, posX, posY, scaledWidth, scaledHeight);

  // Optional: Highlight area on hover
  // checkIfMouseIsOverClickableArea();
}
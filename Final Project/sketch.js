let GeneMap;
let scaledWidth, scaledHeight;
let posX, posY;

function preload() {
  GeneMap = loadImage('mapforGE.png'); // Make sure to use the correct path to your image file
}

function setup() {
  // Calculate the scaled dimensions
  scaledWidth = GeneMap.width / 3;
  scaledHeight = GeneMap.height / 3;
  
  // Calculate the position to center the image
  posX = (windowWidth - scaledWidth) / 2;
  posY = (windowHeight - scaledHeight) / 2;
  
  // Set canvas size to match the scaled image dimensions
  createCanvas(scaledWidth, scaledHeight);
}

function draw() {
  background(255);
  
  // Draw the image at the scaled size and centered position
  image(GeneMap, 0, 0, scaledWidth, scaledHeight);

  // Optional: Highlight area on hover
  // checkIfMouseIsOverClickableArea();
}

// Resize canvas when the window is resized
function windowResized() {
  // Recalculate canvas size and position
  posX = (windowWidth - scaledWidth) / 2;
  posY = (windowHeight - scaledHeight) / 2;
  resizeCanvas(windowWidth, windowHeight);
}
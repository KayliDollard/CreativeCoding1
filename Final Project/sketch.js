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
  
  // Calculate the scale factor to fit the image within the canvas
  let scaleFactor = min(width / GeneMap.width, height / GeneMap.height);
  
  // Calculate the scaled dimensions
  let scaledWidth = GeneMap.width * scaleFactor;
  let scaledHeight = GeneMap.height * scaleFactor;
  
  // Calculate the position to center the image
  let posX = width / 2;
  let posY = height / 2;
  
  // Draw the image
  imageMode(CENTER);
  image(GeneMap, posX, posY, scaledWidth, scaledHeight);

  // Optional: Highlight area on hover
  // checkIfMouseIsOverClickableArea();
}

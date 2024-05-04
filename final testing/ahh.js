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
  strokeWeight(1);
  stroke(192, 57, 43);
  text("X: " + mouseX, 100, 200);
  text("Y: " + mouseY, 100, 220);
  
  let scaleFactor = min(width / GeneMap.width, height / GeneMap.height);
  let scaledWidth = GeneMap.width * scaleFactor;
  let scaledHeight = GeneMap.height * scaleFactor;
  let posX = width / 2;
  let posY = height / 2;
  
  imageMode(CENTER);
  image(GeneMap, posX, posY, scaledWidth, scaledHeight);

  // Parameters for the outer circle
  let outerCirclePosX = posX - (scaledWidth / 2); // Left edge of the scaled image
  let outerCirclePosY = posY - (scaledHeight / 2); // Top edge of the scaled image
  let outerCircleRadius = 700 * scaleFactor; // Scale the radius based on the scaleFactor

  // Draw the outer circle
  noFill();
  strokeWeight(4);
  stroke(192, 57, 43);
  circle(outerCirclePosX, outerCirclePosY, outerCircleRadius);

  // Parameters for the inner circle
  let innerCirclePosX = posX; // Center X of canvas
  let innerCirclePosY = posY; // Center Y of canvas
  let innerCircleRadius = 500 * scaleFactor; // Scale the radius based on the scaleFactor

  // Draw the inner circle
  circle(innerCirclePosX, innerCirclePosY, innerCircleRadius);

  // Divide the inner circle into 5 sectors
  let sectorAngle = TWO_PI / 5; // Angle for each sector
  for (let i = 0; i < 5; i++) {
    let startAngle = i * sectorAngle - HALF_PI; // Adjust starting angle to align with the top
    let endAngle = (i + 1) * sectorAngle - HALF_PI; // Adjust ending angle to align with the top
    arc(innerCirclePosX, innerCirclePosY, innerCircleRadius * 2, innerCircleRadius * 2, startAngle, endAngle);
  }

  // Check if the mouse is over the outer circle
  let distanceToOuterCircle = dist(mouseX, mouseY, outerCirclePosX, outerCirclePosY);
  if (distanceToOuterCircle < outerCircleRadius / 2) {
    // Mouse is over the outer circle
    // Add your logic here for the outer circle interaction
  }

  // Check if the mouse is over the inner circle
  let distanceToInnerCircle = dist(mouseX, mouseY, innerCirclePosX, innerCirclePosY);
  if (distanceToInnerCircle < innerCircleRadius / 2) {
    // Mouse is over the inner circle
    // Add your logic here for the inner circle interaction
  }
}
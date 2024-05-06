let GeneMap;
let pieSlices = [];
let innerCircleRadius = 550; // Radius of the inner circle

function preload() {
  GeneMap = loadImage('mapforGE.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(0), radians(72), color('firebrick'), "Dr. Reds"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(72), radians(144), color('coral'), "The Den"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(144), radians(216), color('#FFD700'), "Old Town")); 
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(216), radians(288), color('navy'), "Suburbs"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(288), radians(360), color('lightcoral'), "The Pit")); 

  // Draw line around the outside of the inner circle
  let numOfPoints = 360; // Number of points to draw the line
  let angleIncrement = TWO_PI / numOfPoints;
  let centerX = 765;
  let centerY = 359;

  stroke(255); // Set line color to white
  for (let i = 0; i < numOfPoints; i++) {
    let x1 = centerX + innerCircleRadius * cos(angleIncrement * i);
    let y1 = centerY + innerCircleRadius * sin(angleIncrement * i);
    let x2 = centerX + (innerCircleRadius + 20) * cos(angleIncrement * i); // 20 is the distance from the inner circle
    let y2 = centerY + (innerCircleRadius + 20) * sin(angleIncrement * i);
    line(x1, y1, x2, y2);
  }
}

function draw() {
  background(0);
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

  // Display and check mouse over for each pie slice
  for (let slice of pieSlices) {
    slice.display();
    slice.checkMouseOver();
  }
}

// PieSlice class definition
class PieSlice {
  constructor(x, y, diameter, startAngle, endAngle, fillColor, name) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = color(0); // Set initial color to black
    this.originalColor = fillColor; // Store the original color
    this.name = name;
    this.displayText = false; // Initially, the name text is not displayed
    this.mouseIsOver = false; // Initially, mouse is not over the slice
  }

  // Display method
  display() {
    fill(this.fillColor);
    arc(this.x, this.y, this.diameter, this.diameter, this.startAngle, this.endAngle, PIE);
    if (this.displayText) {
      fill(255);
      textAlign(CENTER, CENTER);
      text(this.name, this.x + this.diameter / 4 * cos((this.startAngle + this.endAngle) / 2), this.y + this.diameter / 4 * sin((this.startAngle + this.endAngle) / 2));
    }
  }

  // Check if mouse is over the current slice
checkMouseOver() {
  let angle = atan2(mouseY - this.y, mouseX - this.x);
  if (angle < 0) {
    angle += TWO_PI; // Normalize angle to be between 0 and TWO_PI
  }
  if (angle > this.startAngle && angle < this.endAngle && dist(mouseX, mouseY, this.x, this.y) < this.diameter / 2) {
    // If mouse is over the current slice, change color and display text
    this.fillColor = this.originalColor;
    this.displayText = true;
  } else {
    // If mouse is not over the current slice, revert color and hide text
    this.fillColor = color(0, 0, 0, 0);
    this.displayText = false;
  }
}
}



let GeneMap;
let pieSlices = [];

function preload() {
  GeneMap = loadImage('mapforGE.png');}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Creating pie slices
  pieSlices.push(new PieSlice(765, 359, 550, radians(0), radians(72), color(255, 0, 0), "Dr. Reds"));
  pieSlices.push(new PieSlice(765, 359, 550, radians(72), radians(144), color(0, 255, 0), "The Den"));
  pieSlices.push(new PieSlice(765, 359, 550, radians(144), radians(216), color(0, 0, 255), "Old Town"));
  pieSlices.push(new PieSlice(765, 359, 550, radians(216), radians(288), color(255, 255, 0), "Suburbs"));
  pieSlices.push(new PieSlice(765, 359, 550, radians(288), radians(360), color(255, 0, 255), "The Pit"));
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

  // Check mouse over method
checkMouseOver() {
  if (dist(mouseX, mouseY, this.x, this.y) < this.diameter / 2) {
    // If mouse is over, display name text and change color
    this.fillColor = this.originalColor; // Change color to original when mouse is over
    this.displayText = true; // Display name text
    this.mouseIsOver = true; // Set mouseIsOver to true for this slice
  } else {
    // If mouse is not over, revert to transparent fill color and hide name text
    this.fillColor = color(0, 0, 0, 0); // Set color to transparent
    this.displayText = false; // Hide name text
    this.mouseIsOver = false; // Set mouseIsOver to false for this slice
  }
}
}
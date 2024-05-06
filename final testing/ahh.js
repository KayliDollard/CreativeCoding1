let GeneMap;
let pieSlices = [];
let innerCircleRadius = 550; // Radius of the inner circle
let garbageColor = color(150); // Initial color of the Garbage sector

function preload() {
  GeneMap = loadImage('mapforGE.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create pie slices with updated colors
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(0), radians(72), color('firebrick'), "Dr. Reds"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(72), radians(144), color('coral'), "The Den"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(144), radians(216), color('#FFD700'), "Old Town")); // Color of the sun
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(216), radians(288), color('navy'), "Suburbs"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(288), radians(360), color('lightcoral'), "The Pit")); // Deep dark navy blue
}

function draw() {
  background(0);
  textSize(20);

  // Draw the Garbage sector
  fill(garbageColor);
  noStroke();
  ellipse(765, 359, innerCircleRadius * 2 + 40, innerCircleRadius * 2 + 40);

  // Check if mouse is over the Garbage sector
  checkGarbageMouseOver();

  // Display and check mouse over for each pie slice
  for (let slice of pieSlices) {
    slice.display();
    slice.checkMouseOver();
  }
}

// Check if mouse is over the Garbage sector
function checkGarbageMouseOver() {
  let d = dist(mouseX, mouseY, 765, 359);
  if (d > innerCircleRadius && d < innerCircleRadius + 20) {
    // If mouse is over the Garbage sector, change color
    garbageColor = color(200); // Change color to grey
  } else {
    // If mouse is not over the Garbage sector, revert color
    garbageColor = color(150); // Revert color to initial grey
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



let GeneMap;
let pieSlices = [];
let innerCircleRadius = 550; // Radius of the inner circle
let borderSize = 20; // Size of the border

function preload() {
  GeneMap = loadImage('mapforGE.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create pie slices
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(0), radians(72), color(255, 0, 0), color(255, 0, 0, 100), "Dr. Reds"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(72), radians(144), color(0, 255, 0), color(0, 255, 0, 100), "The Den"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(144), radians(216), color(0, 0, 255), color(0, 0, 255, 100), "Old Town"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(216), radians(288), color(255, 255, 0), color(255, 255, 0, 100), "Suburbs"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(288), radians(360), color(255, 0, 255), color(255, 0, 255, 100), "The Pit"));
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
    slice.checkBorderMouseOver();
  }
}

// PieSlice class definition
class PieSlice {
  constructor(x, y, diameter, startAngle, endAngle, fillColor, borderColor, name) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = color(0); // Set initial fill color to black
    this.borderColor = borderColor; // Border color
    this.originalFillColor = fillColor; // Store the original fill color
    this.originalBorderColor = borderColor; // Store the original border color
    this.name = name;
    this.displayText = false; // Initially, the name text is not displayed
    this.mouseIsOver = false; // Initially, mouse is not over the slice
    this.borderMouseIsOver = false; // Initially, mouse is not over the border
  }

  // Display method
  display() {
    // Draw border
    fill(this.borderColor);
    arc(this.x, this.y, this.diameter + borderSize, this.diameter + borderSize, this.startAngle, this.endAngle, PIE);

    // Draw pie slice
    fill(this.fillColor);
    arc(this.x, this.y, this.diameter, this.diameter, this.startAngle, this.endAngle, PIE);

    // Display text if mouse is over
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
      // If mouse is over the current slice, change fill color and display text
      this.fillColor = this.originalFillColor;
      this.displayText = true;
    } else {
      // If mouse is not over the current slice, revert fill color and hide text
      this.fillColor = color(0, 0, 0, 0);
      this.displayText = false;
    }
  }

  // Check if mouse is over the border
  checkBorderMouseOver() {
    let angle = atan2(mouseY - this.y, mouseX - this.x);
    if (angle < 0) {
      angle += TWO_PI; // Normalize angle to be between 0 and TWO_PI
    }
    if (angle > this.startAngle && angle < this.endAngle && dist(mouseX, mouseY, this.x, this.y) > this.diameter / 2 && dist(mouseX, mouseY, this.x, this.y) < (this.diameter + borderSize) / 2) {
      // If mouse is over the border, change border color
      this.borderColor = color(red(this.originalBorderColor), green(this.originalBorderColor), blue(this.originalBorderColor), 150);
      this.borderMouseIsOver = true;
    } else {
      // If mouse is not over the border, revert border color
      this.borderColor = this.originalBorderColor;
      this.borderMouseIsOver = false;
    }
  }
}



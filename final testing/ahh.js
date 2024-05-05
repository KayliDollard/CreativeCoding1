let GeneMap;
let pieSlices = [];
let innerCircleRadius = 550; // Radius of the inner circle
let garbage;

function preload() {
  GeneMap = loadImage('mapforGE.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create pie slices
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(0), radians(72), color(255, 0, 0), "Dr. Reds"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(72), radians(144), color(0, 255, 0), "The Den"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(144), radians(216), color(0, 0, 255), "Old Town"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(216), radians(288), color(255, 255, 0), "Suburbs"));
  pieSlices.push(new PieSlice(765, 359, innerCircleRadius, radians(288), radians(360), color(255, 0, 255), "The Pit"));

  // Create garbage section with a smaller radius
  garbage = new Garbage(765, 359, innerCircleRadius + 10, radians(0), radians(360), color(255, 255, 255, 0)); // Transparent white initially
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

  // Display and check mouse over for garbage section
  garbage.display();
  garbage.checkMouseOver();

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

// Garbage class definition
class Garbage {
  constructor(x, y, radius, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
    this.originalColor = fillColor; // Store the original color
    this.mouseIsOver = false; // Initially, mouse is not over the garbage section
  }

  // Display method
  display() {
    fill(this.fillColor);
    noStroke();
    // Draw the garbage section in segments, avoiding areas covered by pie slices
    let angleStep = QUARTER_PI / 2; // Angle step for drawing segments
    let angle = this.startAngle;
    while (angle < this.endAngle) {
      // Check if the current angle is not covered by any pie slice
      let sliceCovered = false;
      for (let slice of pieSlices) {
        if (angle > slice.startAngle && angle < slice.endAngle) {
          sliceCovered = true;
          break;
        }
      }
      // If the angle is not covered by a pie slice, draw the segment
      if (!sliceCovered) {
        let endAngleSegment = min(angle + angleStep, this.endAngle);
        arc(this.x, this.y, this.radius * 2, this.radius * 2, angle, endAngleSegment, PIE);
      }
      angle += angleStep;
    }
  }

  // Check if mouse is over the garbage section
  checkMouseOver() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      // If mouse is over the garbage section, change color
      this.fillColor = color(255, 0, 0); // Change to red when mouse is over
    } else {
      // If mouse is not over the garbage section, revert color
      this.fillColor = this.originalColor;
    }
  }
}





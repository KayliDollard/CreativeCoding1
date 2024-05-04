let pieSlices = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Creating pie slices
  pieSlices.push(new PieSlice(765, 359, 550, radians(0), radians(72), color(255, 0, 0), "Dr. Reds"));
  pieSlices.push(new PieSlice(765, 359, 550, radians(72), radians(144), color(0, 255, 0), "The Den"));
  pieSlices.push(new PieSlice(765, 359, 550, radians(144), radians(216), color(0, 0, 255), "The Pit"));
  pieSlices.push(new PieSlice(765, 359, 550, radians(216), radians(288), color(255, 255, 0), "Old Town"));
  pieSlices.push(new PieSlice(765, 359, 550, radians(288), radians(360), color(255, 0, 255), "Suburbs"));
}

function draw() {
  background(0);
  textSize(20);

  strokeWeight(1)
  stroke(192, 57, 43)
  text("X: " + mouseX, 100, 200);
  text("Y: " + mouseY, 100, 220);

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
    this.fillColor = fillColor;
    this.name = name;
  }

  // Display method
  display() {
    fill(this.fillColor);
    arc(this.x, this.y, this.diameter, this.diameter, this.startAngle, this.endAngle, PIE);
  }

  // Check mouse over method
  checkMouseOver() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.diameter / 2) {
      // If mouse is over, display slice name
      fill(255);
      textSize(20);
      textAlign(CENTER, CENTER);
      // Calculate midpoint angle
      let midAngle = (this.startAngle + this.endAngle) / 2;
      // Calculate midpoint coordinates
      let midX = this.x + (this.diameter / 2) * cos(midAngle);
      let midY = this.y + (this.diameter / 2) * sin(midAngle);
      text(this.name, midX, midY);
    }
  }
}

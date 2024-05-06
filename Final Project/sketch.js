let GeneMap;
let pieSlices = [];
let innerCircleRadius = 550;
let garbageSectorText;
let titleText;
let subTitleText;

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

  garbageSectorText = createP('Garbage Sector');
  garbageSectorText.position(705, 19); // Move up by 20 and to the left by 20 again
  garbageSectorText.style('color', 'black');
  garbageSectorText.style('font-size', '30px');

  titleText = createP('The Genesys Experiments:');
  titleText.position(20, 20); // Upper left corner of the canvas
  titleText.style('color', 'white');
  titleText.style('font-size', '30px');

  subTitleText = createP('Map of the Under City');
  subTitleText.position(20, 60); // Below the title text
  subTitleText.style('color', 'white');
  subTitleText.style('font-size', '20px');
}

function draw() {
  background(0);
  textSize(20);

  let scaleFactor = min(width / GeneMap.width, height / GeneMap.height);
  
  let scaledWidth = GeneMap.width * scaleFactor;
  let scaledHeight = GeneMap.height * scaleFactor;
  
  let posX = width / 2;
  let posY = height / 2;
  
  imageMode(CENTER);
  image(GeneMap, posX, posY, scaledWidth, scaledHeight);

  for (let slice of pieSlices) {
    slice.display();
    slice.checkMouseOver();
  }
}

class PieSlice {
  constructor(x, y, diameter, startAngle, endAngle, fillColor, name) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = color(0);
    this.originalColor = fillColor;
    this.name = name;
    this.displayText = false;
    this.mouseIsOver = false;
  }

  display() {
    fill(this.fillColor);
    arc(this.x, this.y, this.diameter, this.diameter, this.startAngle, this.endAngle, PIE);
    if (this.displayText) {
      fill(255);
      textAlign(CENTER, CENTER);
      text(this.name, this.x + this.diameter / 4 * cos((this.startAngle + this.endAngle) / 2), this.y + this.diameter / 4 * sin((this.startAngle + this.endAngle) / 2));
    }
  }

  checkMouseOver() {
    let angle = atan2(mouseY - this.y, mouseX - this.x);
    if (angle < 0) {
      angle += TWO_PI;
    }
    if (angle > this.startAngle && angle < this.endAngle && dist(mouseX, mouseY, this.x, this.y) < this.diameter / 2) {
      this.fillColor = this.originalColor;
      this.displayText = true;
      garbageSectorText.hide(); // Hide the text when mouse is over any pie slice
    } else {
      this.fillColor = color(0, 0, 0, 0);
      this.displayText = false;
      garbageSectorText.show(); // Show the text when mouse is not over any pie slice
    }
  }
}




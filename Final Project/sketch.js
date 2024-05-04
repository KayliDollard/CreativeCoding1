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

  strokeWeight(1)
  stroke(192, 57, 43)
  text("X: " + mouseX,100,200 );
  text("Y: " + mouseY,100,220 );
  
  let scaleFactor = min(width / GeneMap.width, height / GeneMap.height);
  
  let scaledWidth = GeneMap.width * scaleFactor;
  let scaledHeight = GeneMap.height * scaleFactor;
  
  let posX = width / 2;
  let posY = height / 2;
  
  imageMode(CENTER);
  image(GeneMap, posX, posY, scaledWidth, scaledHeight);

  // Circle 1 (Outer Circle)
  if (dist(mouseX, mouseY, 764, 359) < 680 / 2) {
    fill(255, 204, 0); // Change fill color to yellow when mouse is over
  } else {
    noFill(); // No fill if mouse is not over
  }
  strokeWeight(4);
  stroke(192, 57, 43);
  circle(764, 359, 680);
  
  // Circle 2 (Inner Circle)
  if (dist(mouseX, mouseY, 765, 359) >= 677 / 2 && dist(mouseX, mouseY, 765, 359) < 500 / 2) {
    fill(0, 102, 255); // Fill with blue when mouse is over inner circle
    ellipseMode(CENTER);
    noStroke();
    erase(); // Erase background in the area of the inner circle
    ellipse(765, 359, 550, 550);
    noErase(); // Stop erasing
  }

  //the den

  //old town

  //reds

  //the pit

  //subs


  // checkIfMouseIsOverClickableArea();
}
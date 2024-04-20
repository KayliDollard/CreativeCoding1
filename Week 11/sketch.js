let playerA, playerB;
var speedX = 5;
var speedY = 5;
var x;
var y;
let circleX;
let circleY;
let gameOver = false;

function setup() { 
  createCanvas(400, 400);
  playerA = createSprite(width/2, height/2, 30, 30);
  playerA.setCollider("rectangle", 0, 0, 30, 30);
  playerB = createSprite(width-20, height/2, 30, 30);
  playerB.setCollider("rectangle", 0, 0, 30, 30);
  playerC = createSprite(width/20, height/2, 30, 30); 
  playerC.setCollider("rectangle", 0, 0, 30, 30);
  playerD = createSprite(random(width), random(height), 50, 50);
  playerD.setCollider("circle", 0, 0, 25);
} 

function draw() { 
  background(220);
  
  drawSprites();
  
  playerB.position.x += random(-speedX, speedX);
  playerB.position.y += random(-speedY, speedY);
  playerC.position.x += random(-speedX, speedX);
  playerC.position.y += random(-speedY, speedY);
  
  playerB.position.x = constrain(playerB.position.x, 0, width);
  playerB.position.y = constrain(playerB.position.y, 0, height);
  playerC.position.x = constrain(playerC.position.x, 0, width);
  playerC.position.y = constrain(playerC.position.y, 0, height);
  
  ellipse(circleX, circleY, 50, 50);

  if (!gameOver && playerA.overlap(playerD)) {
    gameOver = true;
    console.log("You won!");}
  
  playerA.overlap(playerB, hi) || playerA.overlap(playerC, hi);
}

function hi() {
  if(playerA.collide(playerC)){
    playerA.bounce(playerC);}
  
  if(playerA.collide(playerB)){
    playerA.bounce(playerB);}
  
  }

function mousePressed() {
  circleX = mouseX;
  circleY = mouseY;
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    playerA.setSpeed(1.5, 0);
  } else if (keyCode == DOWN_ARROW) {
    playerA.setSpeed(1.5, 90);
  } else if (keyCode == LEFT_ARROW) {
    playerA.setSpeed(1.5, 180);
  } else if (keyCode == UP_ARROW) {
    playerA.setSpeed(1.5, 270);
  } else if (key == ' ') {
    playerA.setSpeed(0, 0);
  }
  return false;
}
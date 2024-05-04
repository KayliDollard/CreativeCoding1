let player;
let obstacles = [];
let exit;
let exitReached = false;

function setup() {
  createCanvas(600, 400);
  player = createPlayer(width/2, height/2);
  exit = createExit();
  createObstacles();
}

function draw() {
  background(220);
  movePlayer();
  drawPlayer();
  drawExit();
  moveObstacles();
  drawObstacles();
  drawBorders();
  checkExitReached();
  if(exitReached){
    displayWinMessage();
  }
}

function createPlayer(x, y) {
  return {
    x: x,
    y: y,
    size: 20
  };
}

function drawPlayer() {
  fill(0, 0, 255);
  ellipse(player.x, player.y, player.size);
}

function movePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    player.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.y += 5;
  }
}

function mouseClicked() {
  obstacles.push({
    x: mouseX,
    y: mouseY,
    size: random(30, 50),
    color: color(random(255), random(255), random(255))
  });
}

function createObstacles() {
  for (let i = 0; i < 2; i++) {
    obstacles.push({
      x: random(width),
      y: random(height),
      size: random(20, 50),
      color: color(random(255), random(255), random(255))
    });
  }
}

function drawObstacles() {
  for (let obstacle of obstacles) {
    fill(obstacle.color);
    ellipse(obstacle.x, obstacle.y, obstacle.size);
  }
}

function moveObstacles() {
  for (let obstacle of obstacles) {
    obstacle.x += random(-5, 5); 
    obstacle.y += random(-5, 5); 
    
    if (obstacle.x < 0) {
      obstacle.x = width;
    }
    if (obstacle.x > width) {
      obstacle.x = 0;
    }
    if (obstacle.y < 0) {
      obstacle.y = height;
    }
    if (obstacle.y > height) {
      obstacle.y = 0;
    }
  }
}

function drawBorders() {
  noFill();
  rect(0, 0, width, height);
}

function createExit() {
  return {
    x: width - 30,
    y: height - 30,
    size: 20
  };
}

function drawExit() {
  fill(255, 0, 0);
  rect(exit.x, exit.y, exit.size, exit.size);
}

function checkExitReached() {
  let d = dist(player.x, player.y, exit.x, exit.y);
  if (d < player.size / 2 + exit.size / 2) {
    exitReached = true;
  }
}

function displayWinMessage() {
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text("You win!", width / 2, height / 2);
}

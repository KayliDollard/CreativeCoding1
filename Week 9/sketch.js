function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(240,128,128);
    fill(0,0,0)
    textSize(22)
    text("Kayli but Shapes!", 150,30);
  
  //head
    strokeWeight(5)
    fill(222,184,135);
    circle(230,250,175);
  
  // eyes
    fill(95,158,160);
    ellipse(270, 240, 35, 25);
  
    fill(95,158,160);
    ellipse(200, 240, 35, 25);

  
    strokeWeight(5);
    fill(95,158,160);
    point(200,240);
    point(270,240);

  
    // body
    fill(0,100,0);
    rect(180,340,100,150);
  
  // decoration
    fill(255);
  
  //mouth
    fill(139,0,0)
    triangle(230, 275, 220, 290, 240, 290);
  
  //arm
    line(100,250,180,340,);
    line(265,350,360,375);
  
  //hair
    strokeWeight(0)
    ellipse(225, 177, 150, 25);
    ellipse(150, 250, 25, 150);
    ellipse(310, 250, 25, 150);
    circle (180, 200, 60)
    circle (290, 200, 60)
  
    fill(30,144,255);
    textSize(22);
    text("Kayli Dollard",270,550 );
}
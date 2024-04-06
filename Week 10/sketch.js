var x = 270;
var eye = 240;
var movement1;
var movement2;
var movement = 5;
var circleright = 200;
var circleleft = 180;

var headx = 230; 
var heady = 250; 
var dia = 175;

var size = 22;
var count = 0;
var sizeDirection = 1;

function setup()
{
    createCanvas(500, 600);
    movement2 = floor(random() * 20) + 1;
    movement1 = floor(random() * 10) + 1;
   
}

function draw()
{
    background(240,128,128);
    fill(0,0,0)
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Kayli but Shapes!", 150,30);
  
  //head
    strokeWeight(5)
    fill(222,184,135);
    circle(headx,heady,dia);
    if (headx + dia / 2 >= width || headx - dia / 2 <= 0) { 
        movement *= -1;
    }
    if (heady + dia / 2 >= height || heady - dia / 2 <= 0) {
        movement *= -1;
    }
    {headx += movement;
    heady += movement;}
     

  
  // eyes
    fill(95,158,160);
    ellipse(x, 240, 35, 25);
    if(x >= 500 || x <= 260)
    {
       movement1 *= -1;
    }{

     x += movement1;
    }
  
  
    fill(95,158,160);
    ellipse(200, eye, 35, 25);
  if(eye >= 500 || eye <= 210)
    {
       movement2 *= -1;
    }{

     eye += movement2;
    }

  
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
    line(100,250,180,340);
    line(265,350,360,375);
  
  //hair
    strokeWeight(0)
    ellipse(225, 177, 150, 25);
    ellipse(150, 250, 25, 150);
    ellipse(310, 250, 25, 150);
    circle (circleleft, 200, 60)
    if(circleleft >= 500 || circleleft <= 0)
    {
       movement *= -1;
    }{

     circleleft += movement;
    }
    circle (290, circleright, 60)
    if(circleright >=600 || circleright <= 0)
    {
       movement *= -1;
    }{

     circleright += movement;
    }
  
    fill(30,144,255);
    textSize(22);
    text("Kayli Dollard",270,550);
  }

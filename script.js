function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(204,225,226);
  // add your drawing code here ...
   fill(255,255,255)
  strokeWeight(2)
  line(280,300,0,0)
  line(340,40,0,0)
  line(140,30,0,0)
  line(170,80,0,0)
  line(120,100,0,0)
  line(250,90,0,0)
  strokeWeight(2);
  fill(105,105,105);
  rect(185,240,50,5)
  rect(365,240,50,5)
  triangle(185,240,190,220,195,240);
  triangle(405,240,410,220,415,240);
  rect(170,270,50,5)
  rect(365,270,60,5)
  triangle(170,270,180,250,180,270);
  triangle(415,270,420,250,425,270)
  rect(150,300,80,5)
  rect(365,300,80,5)
  triangle(150,300,155,280,160,300)
  triangle(435,300,440,280,445,300)
  rect(120,320,150,5)
  rect(325,320,150,5)
  triangle(120,320,125,300,130,320)
  triangle(465,320,470,300,475,320)
  strokeWeight(2);
  fill(105,105,105);
  ellipse(300,270,170,120)
  fill(0)
  strokeWeight(5);
  ellipse(270,250,20,20)
  ellipse(330,250,20,20)
  fill(255,255,255)
  ellipse(270,250,15,15)
  ellipse(330,250,15,15)
  fill(0)
  ellipse(272,248,1,1)
  ellipse(332,248,1,1)
  arc(290, 290, 40, 40, QUARTER_PI, PI+QUARTER_PI);
}

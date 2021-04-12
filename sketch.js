var hr, mn, sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background("pink");
  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);
  
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  
  pop();
  
  strokeWeight(7);
  noFill();
  stroke(255,0,0);
  arc(0, 0, 270, 270, 0, scAngle);
  
  stroke(0,255,0);
  arc(0, 0, 300, 300, 0, mnAngle);
  
  stroke(0,0,255);
  arc(0, 0, 330, 330, 0, hrAngle);
 

  drawSprites();
}
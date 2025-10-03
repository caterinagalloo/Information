function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240,240,95);
fill(0)
text ("mouseX:"+mouseX+",\
  mouseY:"+mouseY,20,20);
  push();
strokeWeight(3)
noFill()
ellipse(200,200,200,180); 
triangle(131,136,122,94,158,115);
triangle(269,137,240,94,230,113);
}
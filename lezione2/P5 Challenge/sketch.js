function setup() {
  createCanvas(400, 400);
}
let t=0

function draw() {
  background(240,240,95);
fill(0)
text ("mouseX:"+mouseX+",\
  mouseY:"+mouseY,20,20);
  push();
strokeWeight(3)
noFill()
ellipse(200,200,200,180); 
triangle(125,142,118,94,152,122);
triangle(275,142,282,94,248,122);
fill(255)
ellipse(170,180,40,50)
ellipse(220,180,40,50)
fill(0)

let offset = 10 * sin(t);
ellipse(170+offset,180,20,20);
ellipse(220+offset,180,20,20);
t += 0.05
//ellipse(170,180,20,20)
//ellipse(220,180,20,20)

fill(200,0,0)
ellipse(195,220,85,55)
noFill()
line(237,216,365,194)
line(238,227,366,216)
line(228,238,361,238)

line(25,194,153,216)
line(24,216,152,227)
line(29,238,162,238)

curve(195,249,180,266,156,259,147,250)
}
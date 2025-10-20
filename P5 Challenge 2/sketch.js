function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 200);

  translate(width / 2, height / 2);
  rotate(frameCount * 1); 

  // raggi del sole 
  fill(255, 204, 0);
  noStroke();
  for (let i = 0; i < 12; i++) {
    push();
    rotate(i * 30);
    triangle(40, 0, 100, -15, 100, 15);
    pop();
  }

  // cerchio
  push();
  let scalePer = 1 + 0.1 * sin(frameCount * 2); 
  scale(scalePer);
  noStroke();
  fill(255, 190, 90);
  circle(0, 0, 80);
  pop();
}
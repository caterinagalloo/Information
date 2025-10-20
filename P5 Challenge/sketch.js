let t = 0; // variabile tempo per l’oscillazione

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240,240,95);
  fill(0)
  text("t:"+t.toFixed(2),20,20);

  push();
  strokeWeight(3)
  noFill()
  ellipse(200,200,200,180); 

  // orecchie
  triangle(125,142,118,94,152,122);
  triangle(275,142,282,94,248,122);

  // occhi
  fill(255)
  ellipse(170,180,40,50)
  ellipse(220,180,40,50)

  // pupille
  fill(0)

  // movimento occhi 
  let offset = 15 * sin(t);
  ellipse(170 + offset, 180, 20, 20) 
  ellipse(220 + offset, 180, 20, 20) 

  // naso
  fill(200,0,0)
  ellipse(195,220,85,55)

  // baffi 
  noFill()
  line(237,216,365,194)
  line(238,227,366,216)
  line(228,238,361,238)

  line(25,194,153,216)
  line(24,216,152,227)
  line(29,238,162,238)

  // sorriso
  curve(195,249,180,266,156,259,147,250)

  // aggiorna tempo
  t += 0.05; // velocità del movimento
}
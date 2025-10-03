function setup() {
  createCanvas(400, 600);
}
let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket = yMax * 0.6;

function draw() {
  background(2,20,75);
  // testo bianco
  fill(255)
  text ("mouseX:"+mouseX+",\
    mouseY:"+mouseY,20,20);
  //aprire il contesto di disegno
  push();
  rectMode(CENTER);
  rect(xRocket,yRocket+30,80,180,20,);
  //chiudere
  pop()
  fill(40,150,220);
  stroke(225);
  strokeWeight(3);
  ellipse(xRocket,yRocket+30,48,48);
  //chiudere
  pop()
  fill(240,40,0)
  stroke(40)
  triangle(xRocket-40,yRocket-60,xRocket+40,yRocket-60,xRocket,yRocket-120);
  triangle(xRocket+40,yRocket+100,xRocket+60,yRocket+100,xRocket+40,yRocket+10);
  triangle(xRocket-40,yRocket+100,xRocket-60,yRocket+100,xRocket-40,yRocket+10);
  pop()
  push()
  //tre cicli di stelle
  noStroke();
  //ciclo 1 
  for(let i=0; i<120; i++) {
    let starX = (i*37) % width + (i%3) * 5;
    let starY = (i*73) & height + (i%7);
    if( i % 2 == 0){
      //stella tipo a 
      fill(255,255,150);
      ellipse(starX,starY,1);
    }else if( i % 3 == 0) {
      //stella b
      fill(200,100,255);
      ellipse(starX,starY,1.5);
    }else{
      //stella c
      fill(255,255,100)
      ellipse(starX,starY,2.5)
    }
    }
    pop();

    //xRocket = (xRocket +1) % xMax;
  yRocket = yRocket - 1;
  let soglia = yMax * 0.6;
  if( yRocket < soglia ){
    
  }
  }

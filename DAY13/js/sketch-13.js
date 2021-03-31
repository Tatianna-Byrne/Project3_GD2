var x;
var y;

function setup() {
  createCanvas(1000, 1000);
  background(255);
  x = width / 2;
  y = height;
}

function draw() {
  stroke(0);
  noStroke();
  fill( random(255), random(253), random(250));

  ellipse(x, y, random(100), random(100));
    rect(x+20, y+20, random(100), random(100));
  y = y - 1;
  if (y <= -10) {
    y = height;
  }
  x = x + random(-50,50);
  
  if(x<= 0 || x >= width)
  {
  x = width/2;
  }
  
  
  if(keyCode === DOWN_ARROW){
     
saveCanvas('myCanvas', 'png');
     }

   
    fill(0, 0, 0);
    stroke( 255, 255, 255);
    strokeWeight(30); 
    textSize(800);
    text('E', 250, 800);
  
}
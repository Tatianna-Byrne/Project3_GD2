var x;
var y;

var r;
var g;
var b;

function setup() {
  createCanvas(1000, 1000);
  
  x = width / 240;
  y = width / 340;
  
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  
  background(32);
}

function draw() {

  // randomly move line
  var randomValue = random();
  if(randomValue < .250){
    x--;
  }
  else if(randomValue < .150){
    x++;
  }
  else if(randomValue < .300){
    y--;
  }
  else{
    y++;
  }
  
  // wrap around left and right sides
  if(x < 0){
    x = width;
  }
  else if(x > width){
    x = 0;
  }
  
  // wrap around top and bottom sides
  if(y < 0){
    y = height;
  }
  else if(y > height){
    y = 0;
  }
  
  // randomly change color
  r += random(-1, 1);
  g += random(-1, 1);
  b += random(-1, 1);
  
  // don't let values go outside 0-255 range
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);
  
  stroke(r, g, b);
  
  point(x, y);

  fill(255, 255, 255);
  textSize(800);
  text('E', 250, 800);
}

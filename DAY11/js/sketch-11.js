function setup(){
    createCanvas (1000, 1000);
    background( 255, 241, 251);
}

function draw(){

    var circleX = random(width);
    var circleY = random(height);
    var circleSize = random(10, 100);
    fill(random(240, 218, 255 ), random(240), random(220));
    
    ellipse(circleX, circleY, circleSize)

    fill(255, 255, 255);
    textSize(800);
    text('E', 250, 800);
  }
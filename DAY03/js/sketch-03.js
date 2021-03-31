function setup() {

createCanvas (1000, 1000, WEBGL); //width, height

}

function draw() {
    background(205, 220, 255);
    rotateY(frameCount * 0.01);
    fill (220, 255, 205);
    box(50, 470, 100, 50);

    push();
    translate(100, 250, 0, 0);
    fill(220, 255, 205);
    box(250, 60, 100, 500);
    pop();

    push();
    translate(100, 0, 0);
    fill(220, 255, 205);
    box(250, 80, 100, 500);
    pop();

    push();
    translate(100, -250, 0, 0);
    fill(220, 255, 205);
    box(250, 60, 100, 500);
    pop();
 
  }
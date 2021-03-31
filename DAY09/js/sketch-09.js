// Where is the circle
let x, y;

function setup() {
  createCanvas(1000, 1000);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(164, 188, 255);
  
    //top rect
    translate(-160, 0, 0, 0)
    noStroke();
    fill(255, 231, 164);
    rect(x-0, y-0, 300, 90);

    //mid rect
    noStroke();
    fill(255, 231, 164);
    rect(x-0, y+280, 270, 90);

    //bottom rect
    noStroke();
    fill(255, 231, 164);
    rect(x-0, y+560, 300, 90);
    
    // vertical rect
    noStroke();
    fill(255, 231, 164);
    rect(x, y, 90, 650);
  
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

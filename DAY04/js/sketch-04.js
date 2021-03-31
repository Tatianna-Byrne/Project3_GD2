function setup() {

    createCanvas (1000, 1000, WEBGL); //width, height
    
    }
    
    function draw() {
        background(217, 254, 252);
        translate(-100, 0, 0, 0);
        rotateX(frameCount * 0.01);
        fill (35, 215, 208);
        box(100, 500, 100, 50);

    //top rect
        push();
        translate(90, 250, 0, 0);
        fill(35, 215, 208);
        box(280, 80, 100, 500);
        pop();
    
    //mid rect
        push();
        translate(90, 0, 0);
        fill(35, 215, 208);
        box(250, 100, 100, 500);
        pop();

    //top rect
        push();
        translate(90, -250, 0, 0);
        fill(35, 215, 208);
        box(280, 80, 100, 500);
        pop();
     
      }
function setup() {

    createCanvas (1000, 1000, WEBGL); //width, height
    
    }
    
    function draw() {
        
        background(255, 105, 78);
        translate(-100, 0, 0, 0);
        rotateX(frameCount * 0.01);
        rotateZ(frameCount * 0.01);
        fill (78, 187, 255);
        box(100, 425, 100, 50);

    //top rect
        push();
        translate(90, 250, 0, 0);
        fill( 255, 212, 78);
        box(280, 80, 100, 500);
        pop();
    
    //mid rect
        push();
        translate(90, 0, 0);
        fill( 255, 212, 78);
        box(280, 100, 100, 500);
        pop();

    //top rect
        push();
        translate(90, -250, 0, 0);
        fill( 255, 212, 78);
        box(280, 80, 100, 500);
        pop();
     
      }
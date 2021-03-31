function setup() {

    createCanvas (1000, 1000, WEBGL); //width, height
    
    }
    
    function draw() {
        
        background(255, 252, 207);
        translate(-100, 0, 0, 0);
        rotateY(frameCount * 0.01);
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        fill (223, 255, 78);
        box(100, 425, 100, 50);

    //top rect
        push();
        translate(90, 250, 0, 0);
        fill(223, 255, 78);
        box(280, 80, 100, 500);
        pop();
    
    //mid rect
        push();
        translate(90, 0, 0);
        fill(223, 255, 78);
        box(280, 100, 100, 500);
        pop();

    //top rect
        push();
        translate(90, -250, 0, 0);
        fill(223, 255, 78);
        box(280, 80, 100, 500);
        pop();

    //torus    
        translate(90, 0, 0);
        rotateZ(frameCount * 0.02);
        torus(400, 15)
        
     
      }
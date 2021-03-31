function setup() {

    createCanvas (1000, 1000, WEBGL); //width, height
    
    }
    
    function draw() {

        background(255, 207, 227)

        //vertical ovel
        fill(181, 164, 255)
        ellipse(-250, 0, 60, 500);

        //small middle oval
        fill(181, 164, 255)
        ellipse(-20, 0, 400, 60);

        //top oval
        fill(181, 164, 255)
        ellipse(0, -250, 500, 60);

        //bottom oval
        fill(181, 164, 255)
        ellipse(0, 250, 500, 60);

    

    }
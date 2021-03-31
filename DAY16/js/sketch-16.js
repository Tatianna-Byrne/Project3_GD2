function setup() {
	createCanvas(1000, 1000);
}

function draw() {
	background(240);
	
    //red square
	push();
    noStroke();
  	translate(-30, -30);
	fill(241, 84, 84);
  	rect(0, 0, 500, 500);
    pop();

    //green square
    push();
    noStroke();
    translate(500, -30);
    fill(84, 241, 84);
    rect(0, 0, 500, 500);
    pop();

    //blue square
    push();
    noStroke();
    translate(500, 500);
    fill(84, 84, 241);
    rect(0, 0, 500, 500);
    pop();
	
    //orange square
    push();
    noStroke();
    translate(-30, 500);
    fill(241, 172, 84);
    rect(0, 0, 500, 500);
    pop();

    //blue e
    fill(84, 84, 241);
    textSize(500)
	text('E', 60, 415);

    //orange e
    fill(241, 172, 84);
    textSize(500)
	text('E', 575, 415);

    //red e
    fill(241, 84, 84);
    textSize(500)
	text('E', 575, 930);

     //green e
     fill(84, 241, 84);
     textSize(500)
     text('E', 60, 930);


}
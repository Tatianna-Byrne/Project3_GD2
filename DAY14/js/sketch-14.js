function setup() {
    createCanvas(1000, 1000);
    background(227, 227, 227);
}

function draw(){
	fill(0, 10);
	stroke(0, 160);
	
	translate(width/2, height/2);
	
	for (var i=0; i < 30; i++) {
		push();
		rotate(i / 5.0);
		scale(i / 10.0);
		triangle(0, -9000, -90, 1000, 90, 900);
		pop();
	}

    fill(0, 0, 0);
    stroke( 255, 255, 255);
    strokeWeight(30); 
    textSize(800);
    text('E', -270, 300);
}
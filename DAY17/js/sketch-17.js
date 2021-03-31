function setup() {
	createCanvas(1000, 1000);
	background(238, 255, 255 );
	rectMode(CENTER);
}

function draw(){
	// the modulo operator % calculates the remainder.
	// example: 24 % 25 = 24, 25 % 25 = 0, 26 % 25 = 1, etc.
	// thus this if statement will evaluate True every 25 frames.
	if (frameCount % 25 == 0) {
		fill(random(225), random(225), random(225));
		push();
        noStroke();
		translate(500, 500);
		rotate(radians(frameCount));
		rect(0, 0, 900, 80);
		pop();
	}

    fill(255, 255, 255);
    textSize(800);
    text('E', 250, 800);
}
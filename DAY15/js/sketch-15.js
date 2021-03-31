function setup(){
	createCanvas(1000, 1000);
}
function draw(){
	background(194, 255, 0 );

	// move the origin to the pivot point
	translate(500, 490); 

	// then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
	rotate(radians(frameCount));

	// and draw the square at the origin
	fill(237, 255, 178);
    stroke( 182, 213, 83 );
    strokeWeight(30); 
    textSize(500)
	text('E', 50, 50);

}
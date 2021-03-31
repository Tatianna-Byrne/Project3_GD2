function setup(){
	createCanvas(1000, 1000);
}


let cOffset = 0;
function draw(){
	
	const inc = height/100;
    colorMode(HSB);

    for(let y = 0; y < height; y += inc) {
        let h = y / height * 360;
        fill(abs(h-cOffset)%360, 100, 100);
        noStroke();
        rect(0, y-inc, width, y);
    }

    cOffset += 5;

	for (var x = 30; x < 1000; x = x+150){
		for (var y = 30; y < 1000; y = y+150){
			push();
			translate(x, y);			
	  		drawE();
			pop();
		}	
	}	
}


function drawE() {
    //top rect
    noStroke();
    rect (5, 30, 25, 5)

    //bottom rect
    noStroke();
    rect (5, 10, 25, 5)

    //mid rect
    noStroke();
    rect (5, -10, 25, 5)

    //side rect
    noStroke();
    rect (5, -5, 5, 40)
    

}
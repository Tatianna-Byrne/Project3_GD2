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

    fill(255);
    textSize(800);
    text('E', 250, 800);
}
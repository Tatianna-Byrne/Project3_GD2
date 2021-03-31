function setup(){
	createCanvas(1000, 1000);
    background(0);
}
function draw() {
    const colors = ['white','yellow']; 
    stroke(random(colors));
    point(random(1000),random(1000));  
    
    fill(255, 255, 255);
    textSize(800);
    text('E', 250, 800);

}
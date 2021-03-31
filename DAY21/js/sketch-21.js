let c1,c2;
  
function setup() {
  createCanvas(1000, 1000);
  c1 = color(97, 151, 255);
  c2 = color(255, 201, 97);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }

  
}
function draw() {

    stroke(0);
    strokeWeight(5);
    fill (255, 255, 255);
    rect (250, 470, 500, 50) // (x, y, width, height)

    fill (255, 255, 255);
    rect (250, 250, 50, 500)

    fill (255, 255, 255);
    rect (250, 700, 500, 50); 

    fill (255, 255, 255);
    rect (250, 250, 500, 50); 

 
}
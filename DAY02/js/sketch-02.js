//var arvo;
//function preload() {

 //  arvo = loadFont ('Fonts/Arvo-Bold.ttf');

//}

function setup() {
    
    createCanvas (1000, 1000); //width, height
    background (242, 232, 255); //rgb

    var i = 0;

    stroke (0);
    fill(255);
    while (i < 100) {
        ellipse (50 * i, 50 * i, 20 * i, 20 * i);
        i = i + 1;
    }
    
    fill (255, 210, 205);
  //  textFont (arvo);
    textSize (800);
    text ('E', 200, 770);

}


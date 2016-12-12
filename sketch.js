
function setup() {
    createCanvas(windowWidth, windowHeight);

    
}

var value = 90;
var state = true;


function deviceTurned() {
    
    if (value == 90) {
        value = 240
    } else if (value == 240) {
        value = 90;
    }
    
    if (state == true) {
        state = false;
    } else if (state == false) {
        state = true;
    }
    
    
    
   
}

function draw() {
   background(hour()*21, minute()*4, second()*4);
    

    
   /* noStroke();
    fill(255);
    rectMode(CENTER);
    rect(width/2,height/2-20,height/8,height/2)
*/
    fill(value);
    angleMode(DEGREES);
    fill(30)
  
    translate(width/2,height/3);
    
    if (state == false) { rotate(90) 
                        translate(250,0)
                        }
    
    if (state == true) {
        translate(0,200)
    }
    // Corpo testo in relazione all'altezza della finestra
    textSize(height/20);
    textAlign(CENTER);
    textFont('Arvo');
    text(hour(), 0, -1*height/10);
    text(minute(), 0, height*0);
    text(second(), 0, height/10);
    
    
    
    
    
}



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
    

    push();
    
   /* noStroke();
    fill(255);
    rectMode(CENTER);
    rect(width/2,height/2-20,height/8,height/2)
*/
    fill(value);
    
    if (state == true) {
        rotate(PI);
    } else if (state == false) {
        rotate(-PI);
    }
    
    translate(0,-1*height/100);
    // Corpo testo in relazione all'altezza della finestra
    textSize(height/20);
    textAlign(CENTER);
    textFont('Arvo');
    text(hour(), width/2, height/3);
    text(minute(), width/2, height/3*1.5);
    text(second(), width/2, height/3*2);
    
    pop();
    
    
    
    
}


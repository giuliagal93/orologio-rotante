value = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    
}

function draw() {
    background(hour()*21, minute()*4, second()*4);
    

    push();
    
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(width/2,height/2-20,height/8,height/2)

    fill(90);

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


function deviceTurned() {
    
    background(hour()*21, minute()*4, second()*4);

    
    
    /*push();
    
    noStroke();
    fill(255);
    rotate(HALF_PI);
    rectMode(CENTER);
    rect(width/2,height/2-20,height/8,height/2)

    fill(90);

    translate(0,-1*height/100);
    rotate(90);
    // Corpo testo in relazione all'altezza della finestra
    textSize(height/20);
    textAlign(CENTER);
    textFont('Trirong');
    text(hour(), width/2, height/3);
    textFont('Arvo');
    text(minute(), width/2, height/3*1.5);
    textFont('Work Sans')
    text(second(), width/2, height/3*2);
    
    pop();*/
}
//Oscar - 
//Sage - Visual Aspects
//Alieu -

    let x1 = 600;
    let x2 = 700;
    let x3 = 650;
    let bullets =

function setup(){
    createCanvas(1342,775);
   
}

function draw(){
    //Background Lines
    strokeWeight(6);
    fill(0)    
    rect(5,5,1328,760)
    strokeWeight(6)
    fill(100)
    rect(5,5,300,760)
    rect(1023,5,305,760)
    //Text Stuf
    fill(0)
    textSize(46)
    text("Space Invaders",85,220,100,500)
    textSize(20)
    text("Oscar, Sage, Alieu",85,400,100,500)        
    //strokeWeight(3)
    //fill("green")
    //triangle(600,735, 728,735, 664, 675)    
        
                        
    if(keyIsDown(LEFT_ARROW)){
        x1 -= 10;
        x2 -= 10;
        x3 -= 10;
    }
    if(keyIsDown(RIGHT_ARROW)){
        x1 += 10;
        x2 += 10;
        x3 += 10;
        
    }
    if(x1 < 305){ 
        x1 = 923;
        x2 = 1023;
        x3 = 973;
    }
    if(x2 > 1023){
        x1 = 305;
        x2 = 405;
        x3 = 355;
    }
    strokeWeight(3)
    fill("green")
    triangle(x1,740, x2,740, x3, 680);
    

}



function mouseClicked(){

}
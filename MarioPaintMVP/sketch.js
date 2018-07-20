function setup(){
    createCanvas(500,500);
    background(0)
    fill("blue")
    rect(60,50,120,120)
    fill("purple")
    rect(190,50,120,120)
    fill("yellow")
    rect(320,50,120,120)
    fill(255)
    rect(0,0,30,30)
}

function mouseDragged(){
    ellipse(mouseX, mouseY,random(0,100), random(0,100))
}

function mouseClicked(){
    if (mouseX>=60 && mouseX<=180 && mouseY>=50 && mouseY<=170){
        fill("blue");
    }else if (mouseX>=190 && mouseX<=310 && mouseY>=50 && mouseY<=170){
        fill("purple");
    }else if (mouseX>=320 && mouseX<=440 && mouseY>=50 && mouseY<=170){
        fill("yellow");
    }else if (mouseX>=0 && mouseX<=30 && mouseY>=0 && mouseY<=30){
        background(0);
        fill("blue")
    rect(60,50,120,120)
    fill("purple")
    rect(190,50,120,120)
    fill("yellow")
    rect(320,50,120,120)
    fill(255)
    rect(0,0,30,30)
    }
}

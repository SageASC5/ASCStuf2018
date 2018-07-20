let colorvalue1 = "blue"
let colorvalue2 = "blue"

function setup(){
    createCanvas(600,600)
    noStroke()
    fill(colorvalue1)
    rect(0,0,300,600)
    fill(colorvalue2)
    rect(300,0,300,600)
}


function mouseClicked(){
    if(mouseX < 300){
        if (colorvalue1 == "blue"){
            colorvalue1 = "red"
        }else{
            colorvalue1 = "blue"
        }
    }
    if(mouseX > 300){
        if (colorvalue2 == "blue"){
            colorvalue2 = "red"
        }else{
            colorvalue2 = "blue"
        }
    }
    setup()
}
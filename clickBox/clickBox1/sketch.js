let colorvalue = "blue"

function setup(){
    createCanvas(600,600)
    fill(colorvalue)
    rect(0,0,600,600)
}


function mouseClicked(){
    
    if (colorvalue == "blue"){
        colorvalue = "red"
    }else{
        colorvalue = "blue"
    }

    setup()
}
let startingx=0
let x = 0
let y = 0
let number_of_boxes_in_row = 10
let number_of_boxes_in_column = 10
let w, h
let numOfShips = 4;
let shipsClicked = 0;
let boxesClicked = 0



function setup(){
    createCanvas(800,800);
    w = width/number_of_boxes_in_row
    h = height/number_of_boxes_in_column
    for (let i=1;i<=100; i++){
        fill("blue")
        rect(x,y,w-1,h);
        if (i%10 == 0){
            y+=h
            x = startingx 
        }else{
            x+=w
        }
    }
}

//ship1: 2 squares long; B5(1,4)
//ship2: 2 squares long; G8(6,7)

//first array is actually y, not x
let ships = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


function findPosition(){
    let xposition = Math.floor(mouseX/w)
    let yposition = Math.floor(mouseY/h)
    return [xposition,yposition]
} 

function mouseClicked(){
    w = width/number_of_boxes_in_row
    h = height/number_of_boxes_in_column
    let x = findPosition()[0]
    let y = findPosition()[1]
    boxesClicked++;
    if (ships[x][y]==1){
        fill("red")
        rect(x * w, y * h, w, h);
        shipsClicked++;
        if(shipsClicked >= numOfShips){
            for (let i=1;i<=100; i++){
                fill("purple")
                rect(x,y,w-1,h);
                if (i%10 == 0){
                    y+=h
                    x = startingx 
                }else{
                    x+=w
                }
            }
        }
    }else {
        fill(255)
        rect(x*w,y*h,w,h);
    }
}

function score(){

}

//add score function

//maybe add something where after they win and click the screen it will change colors for the whole rectangle 
//  and I can add text that says "You win!" and "Click here to Restart"
//  reset button
//  stop the clicking function and instead make clicking restart

//try to add more ships and make them longer

//try to randomize ship placement without duplicates

//add rows and collumns that are labeled
//  (I think that if I change x and y to 80 then make another for loop that makes 10 rows and collums, 
//  I can fill them a different color and maybe add text)

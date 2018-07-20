/*function preload(){
    img = loadImage("https://img.pokemondb.net/sprites/x-y/normal/squirtle.png")
} */

function setup(){
    createCanvas(1350,750)
    rect(342,480,80,30)
    //image(img, 855, 305)
}

//new phone who this (Health Bar)
let health = 208
let health2 = 208
let color = "green"
let color2 = "green"

let bubblePP = 15
let withdrawPP = 8
let hydroPumpPP = 2
let splashPP = 100

let flamethrowerPP = 2
let smokescreenPP = 4
let emberPP = 15 
let growlPP = 4

let healing = 0

function draw(){
    background(100)
    textSize(30)
    fill("white")
    text("Pokemon Battle!", 10, 10, 250, 400)
    strokeWeight(8)
    //main rectangle
    rect(337,80,674, 400)
    //"Bubble"
    strokeWeight(3)
    fill(65,105,225)
    rect(350,500,320,100)
    fill(0)  
    textSize(35)
    text("Bubble PP " + bubblePP,395,520, 250, 60)
    //"Withdraw"
    fill(150)
    rect(678,500,320,100)
    fill(0)
    text("Withdraw PP " + withdrawPP,705,520, 300, 100)
    //"Hydro Pump"    
    fill(65,105,225)    
    rect(350,615,320,100)
    fill(0)
    text("Hydro Pump PP " + hydroPumpPP, 380, 633, 320, 100)
    //"Splash"
    fill (65,105,225)
    rect(678,615,320,100)
    fill(0)
    text("Splash PP " + splashPP, 705, 633, 360, 60)
    //Squirtle
    fill(102,178,255)
    ellipse(930,385,150,160)
    fill(0)    
    textSize(30)            
    text("Squirtle", 880, 270, 50, 30)
    //Charmander
    fill(255,128,0)
    triangle(365,125,505, 125, 428, 255)    
    fill(0)
    text("Charmander", 350, 90, 50, 30)
    fill(color)
    rect(800-healing,445,health,33);
    fill(color2)
    rect(340,250,health2,33);
}

//https://wireframe.cc/5SqtRw
function mouseClicked(){
    //Important Combat Variables
    let accuracyBubble = Math.ceil(Math.random()*10)
    let accuracyHydroPump = Math.ceil(Math.random()*10)
    let accuracyFlamethrower = Math.ceil(Math.random()*10)
    let accuracySmokescreen = Math.ceil(Math.random()*10)
    let accuracyEmber = Math.ceil(Math.random()*10)
    let accuracyGrowl = Math.ceil(Math.random()*10)

    let damageBubble = 30
    let damageHydroPump = 75
    let damageFlamethrower = 60
    let damageEmber = 20

    //Bubble
    if(mouseX < 670 && 350< mouseX && mouseY < 600 && 500< zmouseY && bubblePP>0 && accuracyBubble<=7){
        health2 = health2 - damageBubble
        bubblePP--;
       
    }//Hydro Pump
    else if(mouseX < 670 && 350< mouseX && mouseY < 715 && 615< mouseY && hydroPumpPP>0 && accuracyHydroPump<=5){
        health2 = health2 - damageHydroPump
        hydroPumpPP--;
    }//Withdraw
    else if(mouseX < 998 && mouseX >678 && mouseY < 600 && mouseY > 500 && withdrawPP>0){
        if (health < 178){
            healing = 30
            health = health + healing
            withdrawPP--
        }else if(health<208 && health >=178){
            health = 208
        }else{

        }
    }//Splash
    else if(mouseX < 998 && mouseX > 678 && mouseY < 715 && 615< mouseY && splashPP){
        splashPP--
    }
    
    //healthbar1
    if(health <52){
        color = "red"
    }else if(health>=52 && health<=130){
        color = "yellow"
    }else {
        color = "green"
    }

    //healthbar2
    if(health2 <52){
        color2 = "red"
    }else if(health2>=52 && health2<=104){
        color2 = "yellow"
    }else {
        color2 = "green"
    }

    //Charmander Attacks
    let enemyAttacks = ["Flamethrower","Smokescreen", "Ember", "Growl"]
    let chosenAttack = random(enemyAttacks)
    console.log(chosenAttack)
    //flamethrower
    if (chosenAttack = enemyAttacks[0] && health2>0){
        if (accuracyFlamethrower<=4){
            health = health - damageFlamethrower;}
        flamethrowerPP--;
    //ember
    }else if (chosenAttack = enemyAttacks[2] && health2>0){
       if (accuracyEmber<=7){
           health = health - damageEmber;}
       emberPP--; 
    //smokescreen
    }else if (chosenAttack = enemyAttacks[1] && health2>0){
        if (accuracySmokescreen<=5){
            if(Math.floor(random(1,2)) = 1){
                accuracyBubble = accuracyBubble - 1
            }else {accuracyHydroPump = accuracyHydroPump - 1
            }
        }smokescreenPP--;
    //growl
    }else if (chosenAttack = enemyAttacks[1] && health2>0){
        if (accuracyGrowl<=6){
            if (Math.floor(random(1,2)) = 1){
                damageBubble = damageBubble*.8 
            }else {
                damageHydroPump = damageHydroPump*.8
            }
        }growlPP--;
    }
}

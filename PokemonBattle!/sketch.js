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

let bubblePP = 20
let withdrawPP = 10
let hydroPumpPP = 4
let splashPP = 300

let flamethrowerPP = 3
let smokescreenPP = 6
let emberPP = 20 
let growlPP = 6

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
    //HealthBar1
    fill(color)
    rect(800,445,health,33);
    //HealthBar2
    fill(color2)
    rect(340,250,health2,33);
    //Message Box
    strokeWeight(3)
    fill(255)
    rect(350,355, 375, 110)
    textSize(14)
    fill(0)
    text(squirtleText + " " + charmanderText,355,360, 370, 140)
}

let squirtleText ="An amazing fight has begun!"
let charmanderText = "Who will win?!?"

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
    let damageHydroPump = 70
    let damageFlamethrower = 60
    let damageEmber = 25

    
    //Bubble
    if(mouseX < 670 && 350< mouseX && mouseY < 600 && 500< mouseY && bubblePP>0){
        bubblePP--;
        if(accuracyBubble<=7){
            health2 = health2 - damageBubble
            squirtleText ="Squirtle used Bubble! The physical attack of the bubbles hitting Charmander doesn't do much, but the popping startled him, dealing " + damageBubble + " to Charmander. "
        }else {
            squirtleText ="Squirtle used Bubble! But it missed and floated harmlessly towards the sky. "
        }
       }
    
    //Hydro Pump
    else if(mouseX < 670 && 350< mouseX && mouseY < 715 && 615< mouseY && hydroPumpPP>0){
        if(accuracyHydroPump<=5){
            health2 = health2 - damageHydroPump
            squirtleText = "Squirtle used Hydro Pump! A torrent of water shot from Squirtle's mouth, slamming into and dealing " + damageHydroPump + " to Charmander!"}
        else {
            squirtleText = "Squirtle used Hydro Pump! But her pipes were clogged and now she just has a steady drip of water leaking from her mouth."
        }
        hydroPumpPP--;
    }
    
    //Withdraw
    else if(mouseX < 998 && mouseX >678 && mouseY < 600 && mouseY > 500 && withdrawPP>0){
        if (health < 178){
            healing = 60
            health = health + healing
            withdrawPP--
            squirtleText = "Squirtle uses Withdraw! She tucks her arms and head into her shell, healing for " + healing + " health."
        }else if(health<208){
            health = 208
            healing = 208 - health
            withdrawPP--
            squirtleText = "Squirtle uses Withdraw! She tucks her arms and head into her shell, healing for " + healing + " health."
        }else {
            squirtleText = "Squirtle uses Withdraw! She tucks her arms and head into her shell, but having full health she heals for 0 health."    
        }
    }
    
    //Splash
    else if(mouseX < 998 && mouseX > 678 && mouseY < 715 && 615< mouseY && splashPP){
        splashPP--
        squirtleText = "Squirtle used Splash! Nothing really happened..."
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
    if (health2 <= 0){
        charmanderText = "Charmander has been defeated! Squirtle is victorious!"
    }else if (chosenAttack == enemyAttacks[0] && health2>0){
        if (accuracyFlamethrower<=4){
            health = health - damageFlamethrower;
            charmanderText = "Charmander used Flamethrower, breathing a stream of fire from his mouth and dealing " + damageFlamethrower + " to Squirtle."
        }else {
            charmanderText = "Charmander used Flamethrower, but nothing but soot and smoke came out of his mouth."
        }
        flamethrowerPP--;
    //ember
    }else if (chosenAttack == enemyAttacks[2] && health2>0){
       if (accuracyEmber<=8){
           health = health - damageEmber;
           charmanderText = "Charmander used Ember, shooting a quick, small fireball towards his opponent, dealing " + damageEmber + " damage to Squirtle."
       }else {
           charmanderText = "Charmander used Ember, but the flame only traveled a couple inches before dissapating, leaving Charmander embarrassed and Squirtle amused."
       }
       emberPP--; 
    //smokescreen
    }else if (chosenAttack == enemyAttacks[1] && health2>0){
        if (accuracySmokescreen<=5){
            if(Math.floor(random(1,2)) == 1){
                accuracyBubble = accuracyBubble - 1
                charmanderText = "Charizard used Smokescreen, surrounding Squirtle in a cloud of smoke and ash! Squirtle's Bubble's accuracy was decreased by 10%."
            }else {
                accuracyHydroPump = accuracyHydroPump - 1
                charmanderText = "Charizard used Smokescreen, surrounding Squirtle in a cloud of smoke and ash! Squirtle's Hydro Pump's accuracy was decreased by 10%."
            }
        }smokescreenPP--;
    //growl
    }else if (chosenAttack == enemyAttacks[3] && health2>0){
        if (accuracyGrowl<=6){
            if (Math.floor(random(1,2)) == 1){
                damageBubble = damageBubble*.8 
                charmanderText = "Charizard used Growl, frightening Squirtle and decreasing the damage of her Bubble by 20%!"
            }else {
                damageHydroPump = damageHydroPump*.8
                charmanderText = "Charizard used Growl, frightening Squirtle and decreasing the damage of her Hydro Pump by 20%."
            }
        }else {
            charmanderText = "Charizard used Growl, but ended up with nothing but a voice crack!"
        }
        growlPP--;
    }

    strokeWeight(3)
    fill(255)
    rect(350,395, 375, 70)
    fill(0)
    text(squirtleText + " " + charmanderText,355,400, 400, 100)
}


//add way to restart, like click to play again
//make it so when Charmander runs out of PP he won't use that move anymore
//fix bleeding health bars
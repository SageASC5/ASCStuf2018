// 2. Data Types

let greeting= "hi";
console.log(greeting)
let age= 16;
console.log(age)
let numberofants= 5
let numberofantsisequaltoage= age==numberofants;
console.log(numberofantsisequaltoage)


// 3. Fixing redundancy: StubHub

// We're going to earn a profit by reselling tickets
// We bought some tickets to see SZA!
// 4 regular tickets for $45 each and 2 front row tickets for $75 each
let TicketCost= (45 * 4 + 75 * 2);
console.log('Cost:' + TicketCost);

// we're selling them for 50% more lol.
let SellingPrice= TicketCost*1.5;
console.log('Selling price: ' + SellingPrice);

// But StubHub, the online ticket selling platform, charges a 20% seller fee...
let SellerFee= SellingPrice*0.2
console.log('Seller fee: ' + SellerFee);

// So here's our total profit:
console.log('Total profit: ' + (SellingPrice  - SellerFee - TicketCost));


/* //Variable Mysteries


//1. Variable Reassignment
let x = 10;
x = x + 2;
x = x + x;
console.log(x)
//=24

//2. Copying values
let pizza = 5;
let burger = 10;
burger = pizza;
pizza = 10;
console.log(pizza)
//=10
console.log(burger)
//=5

//3. Operators
let pizza = 5;
let burger = 10;
burger = pizza;
pizza++;
burger--;
pizza /= 2;
console.log(pizza)
//=3
console.log(burger)
//=4


//Spot the Bug


//1. const practice: Anti-aging
const age = 17;
// I just had my birthday!
age++;
//Answer: the variable is constant and connot be changed

//2. Redeclarations: username
const username = 'vrk';
let username = '';
//Answer: the variable is constant and cannot be changed

//3. Booleans: yes and no
const yes = true;
let no = FALSE;
console.log('no');
//Answer: the "FALSE" is capitalized so it is not recognized as the proper function */
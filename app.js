console.log("chippities");
console.log("Steven"[0]);
console.log("Steven"["Steven".length - 1]);
console.log("12345".length);

const str = "Steven";
console.log(str[str.length - 1]);
console.log("123");

/* Block (multiline) comment toggle: Shift + Option + A */

// camelCase
let fullName = "Steven Frasica";
const isRaining = true;
let temperature = 20;
let planet = "Earth";

temperature = temperature + 4;

console.log(temperature);

/* 
  Converting Temperatures
  Celsius to Farhenheit Formula: 

    F = C x 1.8 + 32

*/

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit);

let bool = "1" !== 1;

console.log(bool);

/* 
  CONDITIONALS

*/

// let subscribed = false;
// let loggedIn = true;

// if (subscribed === true) {
//   console.log("show the video");
// } else {
//   console.log("tell user to log into account");
// }

// if (subscribed === true) {
//   console.log("show the video");
// } else if (loggedIn === true) {
//   console.log("tell the user to upgrade their subscription");
// } else {
//   console.log("tell user to log into account");
// }

// let cash = 50;
// let price = 40;
// let isStoreOpen = true;

// if (cash >= price && !isStoreOpen) {
//   console.log("print the receipt");
// }

// if (cash >= price || !isStoreOpen) {
//   console.log("print the receipt");
// }

// if ("") {
//   console.log("print the receipt");
// } else {
//   console.log("falsy value");
// }

// let difference = cash - price;
// if (cash > price) {
//   console.log(`you paid extra - here's your ${difference} dollars change`);
// } else if (cash === price) {
//   console.log(`you paid the exact amount, have a nice day!`);
// } else {
//   console.log(`not enough money - you still owe ${difference * -1} dollars`);
// }

// Ternary Operators

let hot = true;

hot ? console.log("weather is hot outside") : console.log("weather is cold");

let subscribed = false;
let loggedIn = true;
let string = subscribed || loggedIn ? "show the video" : "hide the video";
console.log(string);

let cash = 50;
let price = 40;
let isStoreOpen = true;

let receiptString =
  cash >= price && isStoreOpen ? "give receipt" : "do not give receipt";
console.log(receiptString);

// Loops

// DRY = Don't repeat yourself
let count = 1;

while (count <= 100) {
  console.log(count);
  count = count + 1;
}

for (let i = 0; i <= 3; i++) {
  console.log(i);
}

console.log("fizzbuzz problem starts here");

for (i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> Frontend Simplified`);
  } else if (i % 3 === 0) {
    console.log(`${i} -> Frontend`);
  } else if (i % 5 === 0) {
    console.log(`${i} -> Simplified`);
  } else {
    console.log(`${i} -> ${i}`);
  }
}

console.log("print every letter in the string");

const loopString = "Frontend Simplified";

for (i = 0; i < loopString.length; i++) {
  console.log(loopString[i]);
}

// console.log("Welcome to FES, Steven")
// console.log("Welcome to FES, Aïcha")
// console.log("Welcome to FES, Mari")

const names = ["Steven", "Aïcha", "Mari"];

// for(i = 0; i < names.length; i++) {
//   console.log(`Welcome to FES, ${names[i]}`);
// }

const welcome = (name) => console.log(`Welcome to FES, ${name}`);

console.log(welcome(names[1]));

// Function definition
function welcomePersonToFES(name, lastName) {
  console.log(`Welcome to Frontend Simplified, ${name} ${lastName}`);
}

// Call the function
welcomePersonToFES("Steven", "Frasica");

function fn() {
  return 5;
  console.log("my function");
}

console.log(fn());

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(sumOfTwoNumbers(10, 20));

// function celsiusToFahrenheit(celsius) {
//   return celsius * 1.8 + 32;
// }

// console.log(`Temperature is ${celsiusToFahrenheit(10)} degrees Fahrenheit`);

const celsiusToFahrenheit = celsius => celsius * 1.8 + 32;

console.log(`Temperature is ${celsiusToFahrenheit(10)} degrees Fahrenheit`);

// ARRAYS


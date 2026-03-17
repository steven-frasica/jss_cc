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

hot ? console.log('weather is hot outside') : console.log('weather is cold')

let subscribed = false
let loggedIn = true
let string = subscribed || loggedIn ? 'show the video' : 'hide the video'
console.log(string);

let cash = 50
let price = 40
let isStoreOpen = true

let receiptString = cash >= price && isStoreOpen ? 'give receipt' : 'do not give receipt'
console.log(receiptString)
// console.log("chippities");
// console.log("Steven"[0]);
// console.log("Steven"["Steven".length - 1]);
// console.log("12345".length);

const str = "Steven";
// console.log(str[str.length - 1]);
// console.log("123");

/* Block (multiline) comment toggle: Shift + Option + A */

// camelCase
let fullName = "Steven Frasica";
const isRaining = true;
let temperature = 20;
let planet = "Earth";

temperature = temperature + 4;

// console.log(temperature);

/* 
  Converting Temperatures
  Celsius to Farhenheit Formula: 

    F = C x 1.8 + 32

*/

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

// console.log(fahrenheit);

let bool = "1" !== 1;

// console.log(bool);

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

// hot ? console.log("weather is hot outside") : console.log("weather is cold");

let subscribed = false;
let loggedIn = true;
let string = subscribed || loggedIn ? "show the video" : "hide the video";
// console.log(string);

let cash = 50;
let price = 40;
let isStoreOpen = true;

let receiptString =
  cash >= price && isStoreOpen ? "give receipt" : "do not give receipt";
// console.log(receiptString);

// Loops

// DRY = Don't repeat yourself
let count = 1;

while (count <= 100) {
  // console.log(count);
  count = count + 1;
}

for (let i = 0; i <= 3; i++) {
  // console.log(i);
}

// console.log("fizzbuzz problem starts here");

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log(`${i} -> Frontend Simplified`);
  } else if (i % 3 === 0) {
    // console.log(`${i} -> Frontend`);
  } else if (i % 5 === 0) {
    // console.log(`${i} -> Simplified`);
  } else {
    // console.log(`${i} -> ${i}`);
  }
}

// console.log("print every letter in the string");

const loopString = "Frontend Simplified";

for (i = 0; i < loopString.length; i++) {
  // console.log(loopString[i]);
}

// console.log("Welcome to FES, Steven")
// console.log("Welcome to FES, Aïcha")
// console.log("Welcome to FES, Mari")

const names = ["Steven", "Aïcha", "Mari"];

// for (let i = 0; i < names.length; i++) {
//   console.log(`Welcome to FES, ${names[i]}`);
// }

// const welcome = (name) => console.log(`Welcome to FES, ${name}`);

// console.log(welcome(names[1]));

// Function definition
function welcomePersonToFES(name, lastName) {
  // console.log(`Welcome to Frontend Simplified, ${name} ${lastName}`);
}

// Call the function
welcomePersonToFES("Steven", "Frasica");

function fn() {
  return 5;
  // console.log("my function");
}

// console.log(fn());

function sumOfTwoNumbers(num1, num2) {
  return num1 + num2;
}

// console.log(sumOfTwoNumbers(10, 20));

// function celsiusToFahrenheit(celsius) {
//   return celsius * 1.8 + 32;
// }

// console.log(`Temperature is ${celsiusToFahrenheit(10)} degrees Fahrenheit`);

const celsiusToFahrenheit = (celsius) => celsius * 1.8 + 32;

// console.log(`Temperature is ${celsiusToFahrenheit(10)} degrees Fahrenheit`);

// ARRAYS

// let item1 = 20
// let item2 = 30
// let item3 = 40
// let item4 = 50
// let item5 = 100

// let arr = [20, 30, 40, 50, 100];
// console.log(arr[0])

// arr.length - 1 is last element of array

// console.log(arr[arr.length - 1])

// arr.push(200);

// console.log(arr)

// let newArr = arr.filter((element) => {
//   console.log(element)
// })

// let newArr = arr.filter((element) => {
//   console.log(element);
//   if (element < 50) {
//     return true;
//   }
// });

// let newArr = arr.filter((element) => element < 50);
// console.log(newArr);

// let grades = ["A+", "A", "FAIL"];

// let passingGrades = grades.filter((grade) => grade !== "FAIL");

// console.log(passingGrades);

// let newGrades = grades.filter((grade) => {
//   return grade !== 'FAIL';
// });

// console.log(newGrades);

// let grades = ['A+', 'A', 'FAIL']

// create empty array
// let goodGrades = []

// for (let i = 0; i < grades.length; i++) {
//   if (grades[i] !== 'FAIL')
//     goodGrades.push(grades[i])
// }

// console.log(goodGrades);

let arr = [1, 4, 9, 16];

// turn each element into 5 in newArray
let newArray = arr.map((element) => 5);

// console.log(newArray);

let dollars = [1, 5, 10, 3];

// let centsArray = dollars.map((element) => {
//   return element * 100;
// })

let centsArray = dollars.map((element) => element * 100);

// console.log(centsArray);

let cents = [];

for (let i = 0; i < dollars.length; i++) {
  cents.push(dollars[i] * 100);
}

// console.log("cents array", cents);

// OBJECTS

let userFirstName = "Steven";
let userLastName = "Frasica";
let userDiscordId = "Steven Frasica#001";
let userSubscriptionStatus = "VIP";

let user = {
  username: "Steven",
  email: "steven.frasica@gmail.com",
  subscriptionStatus: "VIP",
  discordId: "Steven Frasica#001",
  lessonsCompleted: [0, 1],
};

let users = [
  {
    username: "Steven",
    email: "steven.frasica@gmail.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "Steven Frasica#001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Aïcha",
    email: "aicha@gmail.com",
    password: "mitri123",
    subscriptionStatus: "VIP",
    discordId: "Aicha S#001",
    lessonsCompleted: [0, 1, 2, 3, 4],
  },
  {
    username: "David",
    email: "david@gmail.com",
    password: "david123",
    subscriptionStatus: "VIP",
    discordId: "David A#001",
    lessonsCompleted: [0, 1, 2, 3, 4],
  },
];

// console.log(user.username[0]);

// console.log(user.username);

// console.log(user.subscriptionStatus);

// console.log(user.lessonsCompleted.map((element) => element * 2));

// users array not user object
// console.log(users[1].lessonsCompleted.map(element => element * 2));

// Login

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    // check if user exists
    console.log("this ran @@");
    if (users[i].email === email) {
      console.log(users[i]);
      // check if password matches
      if (users[i].password === password) {
        console.log("log the user in - details are correct");
      } else {
        console.log("password is incorrect - try again");
      }
      return;
    }
  }
  console.log("could not find an email that matches");
}

login("wrong_email@gmail.com", "wrong password");

// function register(
//   username,
//   email,
//   password,
//   subscriptionStatus,
//   discordId,
//   lessonsCompleted,
// ) {
//   let user = {
//     username: username,
//     email: email,
//     password: password,
//     subscriptionStatus: subscriptionStatus,
//     discordId: discordId,
//     lessonsCompleted: lessonsCompleted,
//   };
//   console.log(user);
//   users.push(user);
// }

function register(user) {
  users.push(user);
}

register({username: "steven", email: "email123", password: "pw123", subscriptionStatus: "basic", discordId: "steven1", lessonsCompleted: [0, 1, 2, 4]});
console.log(users[users.length - 1]);

// better way is to pass in an object, the user object with all properties instead of 6 different arguments
register({
  username: "Zen",
  email: "zen@fes.com",
  password: "zen123",
  subscriptionStatus: "VIP",
  discordId: "Zen#002",
  lessonsCompleted: [0, 1, 2, 3, 4]
});

console.log(users);

// function register(
//   username,
//   email,
//   password,
//   subscriptionStatus,
//   discordId,
//   lessonsCompleted,
// ) {
//   console.log(email, password)
// }

// register('mari', 'mari@email.com', 'mari123', 'vip,')


// DOM

// First way of accessing element
// console.log(document)
// add defer to js script so HTML loads after the JS
// can also put the js script at the bottom of the body tag
// id
console.log(document.querySelector('#title'))
// class
console.log(document.querySelector('.title')) 

console.log(document.querySelector('h1'))



// Second way of accessing element
// Better practice if you have an ID
document.getElementById('title')


// Changing and adding in innerHTML
// document.querySelector('.title').innerHTML = "Frontend Simplified"
document.querySelector('.title').innerHTML += " Frontend Simplified"


// Change CSS
document.querySelector('.title').style.color = 'red'

document.querySelector('.title').style.fontSize = '20px';

// event listener
function changeTitleToBlue() {
  console.log('clicked')
  // document.querySelector('#title').style.color = 'blue';
  document.getElementById('title').style.color = 'purple';
}

function toggleDarkTheme() {
  document.querySelector('body').classList.toggle('dark-theme')



  // doesn't allow for toggling
  // document.querySelector('body').className = 'dark-theme'
}


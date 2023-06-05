//Conditional Statement

// if Statement

var votingAge = 18;

var yourAge = 19;

if (yourAge >= votingAge) {
  console.log("You are eligible to vote.");
}

// if - else Statement

var votingAge = 18;

var yourAge = 17;

if (yourAge >= votingAge) {
  console.log("You are eligible for a driving license.");
} else {
  var yearsLeft = votingAge - yourAge;
  console.log(
    `You are not eligible for voting. You have ${yearsLeft} years left until you are eligible.`
  );
}

// if - else if - else Statement

var votingAge = 18;

var contestingAge = 25;

var yourAge = 17;

if (yourAge >= contestingAge) {
  console.log("You are eligible for voting and contesting.");
} else if (yourAge >= votingAge) {
  var yearsLeft = contestingAge - yourAge;
  console.log(
    `You are only eligible for voting, not contesting. You have ${yearsLeft} years left until you can contest.`
  );
} else {
  var yearsLeftVoting = votingAge - yourAge;
  var yearsLeftContesting = contestingAge - yourAge;
  console.log(
    `You are neither eligible for voting nor contesting. You have ${yearsLeftVoting} years left until you can vote and ${yearsLeftContesting} years left until you can contest.`
  );
}

//Practice Question: Given Mass and Height of Mark and John. Compare their BMI.

var massMark = 95;
var heightMark = 1.88;
var massJohn = 85;
var heightJohn = 1.76;

var BMIMark = massMark / heightMark ** 2;
var BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
  console.log(
    `Mark's BMI (${BMIMark}) is greater than John's BMI (${BMIJohn}).`
  );
} else {
  console.log(
    `John's BMI (${BMIJohn}) is greater than Mark's BMI (${BMIMark}).`
  );
}

// Example of Falsy Values

var money = 0;

if (money) {
  console.log("Spend Money Wisely.");
} else {
  console.log("Start Earning Money.");
}

// Conditional (Ternary) Operator

var age = 19;

console.log(`Drinks Allowed: ${age >= 18 ? "Juice or Wine" : "Only Juice"}`);

// Iterative Statement

// Functions

function fruitProcessor(noApples, noOranges) {
  var juice = `Juice with ${noApples} apples and ${noOranges} oranges.`;
  return juice;
}

var appleJuice = fruitProcessor(2, 0);
console.log("Apple Juice:", appleJuice);

console.log("Mixed Juice:", fruitProcessor(1, 3));

//Function Declaration

var age1 = evaluateAge(1997);
console.log(`My Age by 2035 will be: ${age1} years.`);

function evaluateAge(birthYear) {
  return 2035 - birthYear;
}

//Function Expression

var calculateAge = function (birthYear) {
  return 2035 - birthYear;
};
var age2 = calculateAge(1997);
console.log(`My Age by 2035 will be: ${age2} years.`);

//Arrow Function

var findAge = (birthYear) => 2035 - birthYear;
var age3 = findAge(1997);
console.log(`My Age by 2035 will be: ${age3} years.`);

//Practice Question: Create a function to find the remaining age until retirement.

var yearsUntilRetirement = (birthYear, currentYear) => {
  var age = currentYear - birthYear;
  var retirement = 65 - age;
  return retirement;
};

console.log(
  `Years remaining for retirement: ${yearsUntilRetirement(1993, 2023)} years.`
);

//Function Calling Function

function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}

function calculate(a, b, operation) {
  console.log(`Performing ${operation} on ${a} and ${b}...`);

  let result;
  if (operation === "multiply") {
    result = multiply(a, b);
  } else if (operation === "add") {
    result = add(a, b);
  } else if (operation === "subtract") {
    result = subtract(a, b);
  } else if (operation === "division") {
    result = division(a, b);
  } else {
    console.log("Invalid operation");
    return;
  }

  console.log(`Result: ${result}`);
}

calculate(5, 3, "multiply");
calculate(10, 7, "add");
calculate(8, 2, "subtract");
calculate(18, 3, "division");

//Practice Question: Find the winning team if that team's average score in three matches is more than double the average score of the other team; otherwise, the match is drawn.

var calculateAverageScore = (a, b, c) => (a + b + c) / 3;

var averageScoreIndia = calculateAverageScore(77, 84, 63);
var averageScoreAustralia = calculateAverageScore(88, 62, 79);

var checkWinner = function (averageScoreIndia, averageScoreAustralia) {
  if (averageScoreIndia >= 2 * averageScoreAustralia) {
    console.log("The winner is India.");
  } else if (averageScoreAustralia >= 2 * averageScoreIndia) {
    console.log("The winner is Australia.");
  } else {
    console.log("The match is drawn.");
  }
};

checkWinner(averageScoreIndia, averageScoreAustralia);

//Object

const detailsAbhishek = {
  firstName: "Abhishek",
  lastName: "Kumar",
  age: 28,
  profession: "Software Developer",
  friends: ["Abhay", "Anupam", "Saurabh"],
};

console.log(detailsAbhishek);

console.log(detailsAbhishek.firstName);
console.log(detailsAbhishek.friends);

const nameKey = "Name";
console.log(detailsAbhishek["first" + nameKey]);
console.log(detailsAbhishek["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Abhishek Kumar? Please choose between age, profession, and friends."
);
console.log(detailsAbhishek[interestedIn]);

detailsAbhishek.location = "Ghaziabad";
detailsAbhishek.twitter = "@abhishek9223";

console.log(detailsAbhishek);

console.log(
  `${detailsAbhishek.firstName} has ${detailsAbhishek.friends.length} friends and his best friend is ${detailsAbhishek.friends[0]}`
);

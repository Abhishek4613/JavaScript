//Conditional Statement

// if Statement 

var votingAge = 18;

var yourAge = 19;

if (yourAge >= votingAge) {

    console.log("You are eligible to vote.")
}


// if - else Statement

const votingAge = 18;

const yourAge = 17;

if (yourAge >= votingAge) {

    console.log(`You are eligible for driving licence.`)

} else {

    const yearLeft = votingAge - yourAge

    console.log(`You are not eligible for voting. Year left for eligibility is ${yearLeft} years.`)
}


// if - else if - else Statement

const votingAge = 18;

const contestingAge = 25;

const yourAge = 17;

if (yourAge >= votingAge & yourAge >= contestingAge) {

    console.log("You are eligible for voting and contesting.")

} else if (yourAge >= votingAge & yourAge < contestingAge) {

    const yearLeft = contestingAge - yourAge;

    console.log(`You are only eligible for voting not contesting.Year left for eligibility for the contesting is ${yearLeft} years.`)

} else {

    const yearLeftV = votingAge - yourAge
    const yearLeftC = contestingAge - yourAge;

    console.log(`You are neither eligible for the voting nor for contesting. Year left for eligibility for the voting is ${yearLeftV} years and for  contesting is ${yearLeftC} years.`)
}


//Practice Question: Given Mass and Height of Mark and John. Compare their BMI.

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = (massMark / heightMark ** 2);
const BMIJohn = (massJohn / heightJohn ** 2);

if (BMIMark > BMIJohn) {

    console.log(`BMI of Mark (${BMIMark}) is greater than BMI of John (${BMIJohn})`)

} else {

    console.log(`BMI of John (${BMIJohn}) is greater than BMI of Mark (${BMIMark})`)
}


// Example of Falsy Values

const money = 0;

if (money) {

    console.log("Spend Money Wisely.")

} else {

    console.log("Start Earning Money.")

}


// Conditional(Ternary) Operator 

var age = 19;

console.log(`Drinks Allowed: ${age>=18 ? "Juice or Wine": "Only Juice"}`);


//  Iterative Statement

// Functions

function fruitProcessor(noApples,noOrange){

  const juice = `Juice with ${noApples} apples and ${noOrange} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(2,0);
console.log("Apple Juice:",appleJuice);

console.log("Mix Juice:",fruitProcessor(1,3));


//Function Declaration 

const age1 = evaluateAge(1997)
console.log(`My Age by 2035 will be: ${age1} years.`)

function evaluateAge(birthYear){
  return 2035-birthYear
}


//Function Expression

const calculateAge = function(birthYear){
  return 2035-birthYear
}
const age2 = calculateAge(1997)
console.log(`My Age by 2035 will be: ${age2} years.`)


//Arrow Function

const findAge = birtYear => 2035 - birtYear
const age3 = findAge(1997)
console.log (`My Age by 2035 will be: ${age3} years.`)


//Practice Question: Create a function to find the remaining age in retirement.

const yearUntilRetirement = (birthYear,curretYear) => {
    const age = curretYear - birthYear
    const retirement = 65 - age
    return retirement;
}
console.log(`Years remaining for Retirement: ${yearUntilRetirement(1993,2023)} years`)


//Function Calling Function

function multiply(a,b) {
    return a*b;
  }
  
  function add(a,b) {
    return a+b;
  }
  
  function subtract(a,b) {
    return a-b;
  }

  function division(a,b){
    return a/b;
  }
  
  function calculate(a, b, operation) {
    console.log(`Performing ${operation} on ${a} and ${b}...`);
    
    let result;
    if (operation === "multiply") {
      result = multiply(a,b);
    } else if (operation === "add") {
      result = add(a,b);
    } else if (operation === "subtract") {
      result = subtract(a,b);
    } else if (operation === "division"){
      result = division(a,b)
    } else {
      console.log("Invalid operation");
      return;
    }
    
    console.log(`Result: ${result}`);
  }
  
  calculate(5,3, "multiply");
  calculate(10,7, "add");
  calculate(8,2, "subtract");
  calculate(18,3, "division");
  

//Practice Question: Find the winner team, if that teams average score in three matches is more than double of the average score of other team, else match is drawn.

const avgScore = (a,b,c) => (a+b+c/3);

const avgScoreIndia = avgScore(77,84,63);
const avgScoreAustralia = avgScore(88,62,79);

const checkWinner = function(avgScoreIndia,avgScoreAustralia){

    if (avgScoreIndia >= 2*avgScoreAustralia){
        console.log(`Winner is India`)
    } else if (avgScoreAustralia >= 2*avgScoreIndia){
        console.log(`Winner is Australia`)
    } else{
        console.log(`Match Drawn`)
    }
}

checkWinner(avgScoreIndia,avgScoreAustralia);
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


//The switch Statement 

var day = "Thursday"

switch (day) {
    case  "Monday":
      console.log("JAvaScript Training")
      break;
    case "Tuesday":
      console.log("Python Training")
      break;
    case "Wednesday":
      console.log("SQL Training")
      break;
    case "Thursday":
      console.log("Frappe Training - Introduction")
      break;
    case "Friday":
      console.log("Frappe Training - Introduction")
      break;
    case "Saturday":
      console.log("Holiday")
    case "Sunday":
      console.log("Holiday")
    default:
        console.log("Not a Valid Input.")
  }

//Conditional(Ternary) Operator 

var age = 23;

age >=18 ? console.log("I love to drink Wine."):
console.log("I love to drink Pineapple Juice.")


var age = 17;

var drinks = age>= 18 ? "Drink Allowed: Juice or Wine": "Drinks Allowed: Only Juice";
console.log(drinks);


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


console.log("Mix Juice:",fruitProcessor(1,3))
// VARIABLES 

var firstName = "Abhay";

lastName = "Gaur";

var ID = "EXP-2302015"

const joiningDate = new Date("2023-02-27")

console.log("First Name:",firstName)
console.log("Last Name:",lastName)
console.log("Employee ID:",ID)
console.log("Date of Joining:",joiningDate)

// DataType 

var a = "Abhay";
var b = 2200
var c = 9999999999999999n;
var d = false;
var e; 
var f = null
var g = Symbol
var h = {firstName:"John", lastName:"Doe", age:50, eyeColor:"Blue"};

console.log("DataType of x:",typeof x)
console.log("DataType of y:",typeof y)
console.log("DataType of c:",typeof c)
console.log("DataType of d:",typeof d)
console.log("DataType of e:",typeof e)
console.log("DataType of f:",typeof f)
console.log("DataType of g:",typeof g)
console.log("DataType of h:",typeof h)


// OPERATORS

//Arithmatic Operators

//1. Addition
var x = 10;
var y = 2;
var z = x + y;
console.log(z)

//2. Substration 
var x = 10;
var y = 3;
var z = x - y;
console.log(z)

//3. Multiplication
var x = 10;
var y = 3;
var z = x*y;
console.log(x)

//4. Exponent
var x = 4;
var y = 3;
var z = 4**3;
console.log(z)

//5. Division
var x = 10;
var y = 2;
var z = x / y;
console.log(y)

//6. Modulus 
var x = 10;
var y = 3;
var z = x % y;
console.log(z)

//7. Incriment
let p = 2;
p++;
console.log(p);

//8. Decriment
let q = 2;
q--;
console.log(q);


//Comparison Operators

//1. Is Equal To
var x = 20;
var y = 30;
console.log(x==y);

//2. Identical
var x = 20;
var y = "20";
console.log(x===y);

//3. Is Not Equal To
var x = 25;
var y = "25";
console.log(x!=y);

//4. Not Identical
var x = 20;
var y = "20";
console.log(x!==y);

//5. Greater Than
var x = 39;
var y = 41;
console.log(y>x);

//6. Greater Than or Equal To
var x = 39;
var y = 41;
console.log(y>=x);

//7. Less Than
var x = 39;
var y = 41;
console.log(y<x);

//8. Less Than or Equal To
var x = 39;
var y = 41;
console.log(x<=y);


//Practice Question: Given Mass and Height of Mark and John. Compare their BMI.

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn **2;
const markHigherBMI = BMIMark > BMIJohn;

console.log("BMI of Mark:",BMIMark);
console.log("BMI of John:",BMIJohn);
console.log("Is BMI of John More Tham BMI of Mark:",markHigherBMI);


//String Methods

//1. length

var text = "Hello and Welcome to the JavaScript Tutorial."
console.log("Length of Text:",text.length) 

//2. slice()

var text = "Hello and Welcome to the JavaScript Tutorial."
var slicedText = text.slice(10,17)
console.log(slicedText)

var text = "Hello and Welcome to the JavaScript Tutorial."
var slicedText = text.slice(-9,-1)
console.log(slicedText)

var text = "Hello and Welcome to the JavaScript Tutorial."
var slicedText = text.slice(10)
console.log(slicedText)

//3. substring()

var text = "Hello and Welcome to the JavaScript Tutorial."
var substringText = text.substring(-10)
console.log(substringText)

//4. substr()

var text = "Hello and Welcome to the JavaScript Tutorial."
var substrText = text.substr(-20,10)
console.log(substrText)

//5. replace()

var text = "Hello and Welcome to the JavaScript Tutorial."
var newText = text.replace("and","Abhishek,")
console.log(newText)

var text = "Hello and Welcome to the JavaScript Tutorial."
var newText = text.replace(/And/i,"Abhishek,")
console.log(newText)

//6. toUpperCase()

var text = "Hello and Welcome to the JavaScript Tutorial."
var newText = text.toUpperCase()
console.log(newText)

//7. toLowerCase()

var text = "Hello and Welcome to the JavaScript Tutorial."
var newText = text.toLowerCase()
console.log(newText)

//8. concat()











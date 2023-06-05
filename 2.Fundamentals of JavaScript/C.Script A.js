// VARIABLES

var firstName = "Abhay";

lastName = "Gaur";

var ID = "EXP-2302015";

const joiningDate = new Date("2023-02-27");

console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Employee ID:", ID);
console.log("Date of Joining:", joiningDate);

// DataType

var a = "Abhay";
var b = 2200;
var c = 9999999999999999n;
var d = false;
var e;
var f = null;
var g = Symbol;
var h = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "Blue" };

console.log("DataType of a:", typeof a);
console.log("DataType of b:", typeof b);
console.log("DataType of c:", typeof c);
console.log("DataType of d:", typeof d);
console.log("DataType of e:", typeof e);
console.log("DataType of f:", typeof f);
console.log("DataType of g:", typeof g);
console.log("DataType of h:", typeof h);

//Type Conversion

//Type Coercion

var a = 20;
var b = "30";

var z = a + b;

console.log(typeof a);
console.log(typeof b);
console.log(typeof z);

// Type Casting

const a = Number("30");
const b = String(30);
const c = Boolean("false");

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// OPERATORS

//Arithmatic Operators

//1. Addition
var x = 10;
var y = 2;
var z = x + y;
console.log(z);

//2. Substration
var x = 10;
var y = 3;
var z = x - y;
console.log(z);

//3. Multiplication
var x = 10;
var y = 3;
var z = x * y;
console.log(x);

//4. Exponent
var x = 4;
var y = 3;
var z = 4 ** 3;
console.log(z);

//5. Division
var x = 10;
var y = 2;
var z = x / y;
console.log(y);

//6. Modulus
var x = 10;
var y = 3;
var z = x % y;
console.log(z);

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
console.log(x == y);

//2. Identical
var x = 20;
var y = "20";
console.log(x === y);

//3. Is Not Equal To
var x = 25;
var y = "25";
console.log(x != y);

//4. Not Identical
var x = 20;
var y = "20";
console.log(x !== y);

//5. Greater Than
var x = 39;
var y = 41;
console.log(y > x);

//6. Greater Than or Equal To
var x = 39;
var y = 41;
console.log(y >= x);

//7. Less Than
var x = 39;
var y = 41;
console.log(y < x);

//8. Less Than or Equal To
var x = 39;
var y = 41;
console.log(x <= y);

// Logical Operators

//1. AND &&
var a = 20;
var b = 25;
var c = 20;
var d = 25;

console.log(a == c && b == d);
console.log(a == c && b == c);
console.log(a == b && b == d);
console.log(a == b && c == d);

//2. OR ||
var a = 20;
var b = 25;
var c = 20;
var d = 25;

console.log(a == c || b == d);
console.log(a == c || b == c);
console.log(a == b || b == d);
console.log(a == b || c == d);

//3. NOT
var a = 20;
var b = 25;
var c = 20;
var d = 25;

console.log(!a == c);
console.log(!a == b);

//Practice Question: Given Mass and Height of Mark and John. Compare their BMI.

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log("BMI of Mark:", BMIMark);
console.log("BMI of John:", BMIJohn);
console.log("Is BMI of John More Tham BMI of Mark:", markHigherBMI);

//String Methods

//1. length
var text = "Hello and Welcome to the JavaScript Tutorial.";
console.log("Length of Text:", text.length);

//2. slice()
var text = "Hello and Welcome to the JavaScript Tutorial.";
var slicedText = text.slice(10, 17);
console.log(slicedText);

var text = "Hello and Welcome to the JavaScript Tutorial.";
var slicedText = text.slice(-9, -1);
console.log(slicedText);

var text = "Hello and Welcome to the JavaScript Tutorial.";
var slicedText = text.slice(10);
console.log(slicedText);

//3. substring()
var text = "Hello and Welcome to the JavaScript Tutorial.";
var substringText = text.substring(-10);
console.log(substringText);

//4. substr()
var text = "Hello and Welcome to the JavaScript Tutorial.";
var substrText = text.substr(-20, 10);
console.log(substrText);

//5. replace()
var text = "Hello and Welcome to the JavaScript Tutorial.";
var newText = text.replace("and", "Abhishek,");
console.log(newText);

var text = "Hello and Welcome to the JavaScript Tutorial.";
var newText = text.replace(/And/i, "Abhishek,");
console.log(newText);

//6. toUpperCase()
var text = "Hello and Welcome to the JavaScript Tutorial.";
var newText = text.toUpperCase();
console.log(newText);

//7. toLowerCase()
var text = "Hello and Welcome to the JavaScript Tutorial.";
var newText = text.toLowerCase();
console.log(newText);

//8. concat()
var textA = "Hello and Welcome to";
var textB = "the JavaScript Tutorial.";
var newText = textA.concat(" ", textB);
console.log(newText);

//9. trim(), trimStart(), trimEnd()
var text = "  Abhishek  ";
var newTextA = text.trim();
var newTextB = text.trimStart();
var newTextC = text.trimEnd();
console.log(newTextA);
console.log(newTextB);
console.log(newTextC);

//10. padStart(), padEnd()
var text = "5";
var paddedStart = text.padStart(4, "X");
var paddedEnd = text.padEnd(4, "X");
console.log(paddedStart);
console.log(paddedEnd);

//11. charAt(), charCodeAt()
var text = "HELLO ABHAY";
var char = text.charAt(7);
var code = text.charCodeAt(7);
console.log(char);
console.log(code);

//12. split()
var text = "Hello and Welcome to the JavaScript Tutorial.";
var textArray = text.split(" ");
console.log(textArray);

let text = "The rain in SPAIN stays mainly in the plain.";
let s = text.matchAll(/ain/gi);
console.log(s);

//13. indexOf(), lastIndexOf()
var text = "Please locate where 'locate' occurs!";
var index = text.indexOf("locate");
var lastindex = text.lastIndexOf("locate");
console.log(index);
console.log(lastindex);

//14. search()
var text = "Please locate where 'locate' occurs!";
var searchA = text.search("locate");
var searchB = text.search(/locate/g);
console.log(searchA);
console.log(searchB);

//15. match(), matchAll()

//16. include()

//17. startsWith(), endsWith()
var text = "Please locate where 'locate' occurs!";
var startsWithA = text.startsWith("locate");
var startsWithB = text.startsWith("locate", 7);
var endsWithA = text.endsWith("locate");
var endsWithB = text.endsWith("locate", 27);
console.log(startsWithA);
console.log(startsWithB);
console.log(endsWithA);
console.log(endsWithB);

// Template Literals

//1. Quotes Inside Strings
var text = `Hello "Abhay", Welcome to the 'JavaScript' Tutorial.`;
console.log(text);

//2. Multiple Lines
var text = `Hello "Abhay",
Welcome to the 'JavaScript' Tutorial.`;
console.log(text);

//3. Interpolation - Variable Substitution
var candidateName = "Abhay Gaur";
var language = "JavaScript";
var text = `Hello ${candidateName}, Welcome to the ${language} Tutorial.`;
console.log(text);

//4. Interpolation - Expression Substitution
var price = 10;
var VAT = 0.25;
var total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

//Array

// Array Methods

//at

// length()

const fruitsA = ["Banana", "Orange", "Apple", "Mango"];
let size = fruitsA.length;
console.log(size);

// toString()

const fruitsB = ["Banana", "Orange", "Apple", "Mango"];
let strings = fruitsB.toString;
console.log(fruitsB);
console.log(strings);

// join()

const fruitsC = ["Banana", "Orange", "Apple", "Mango"];
let join = fruitsC.join("*");
console.log(join);

// pop()

const fruitsD = ["Banana", "Orange", "Apple", "Mango"];
let pop = fruitsD.pop();
console.log(pop);

// push()

const fruitsE = ["Banana", "Orange", "Apple", "Mango"];
let push = fruitsE.push("Kiwi");
console.log(fruitsE);
console.log(push);

// shift()

const fruitsF = ["Banana", "Orange", "Apple", "Mango"];
let shift = fruitsF.shift();
console.log(fruitsF);
console.log(shift);

// unshift()

const fruitsG = ["Banana", "Orange", "Apple", "Mango"];
let unshifted = fruitsG.unshift("Kiwi");
console.log(fruitsG);
console.log(unshifted);

//

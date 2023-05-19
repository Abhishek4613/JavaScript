# Fundamentals of JavaScript: Part B

## JavaScript Conditional Statement

**In JavaScript we have the following conditional statements.**

1. **if Statement**: Use if to specify a block of code to be executed, if a specified condition is true.
2. **if-else**: Use else to specify a block of code to be executed, if a specified condition is false.
3. **if-else if-else**: Use else if to specify a new condition to test, if the previous condition is false.
4. **switch**: Use switch to specify many alternative blocks of code to be executed.

### The if Statement

Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

**Syntax**

```
if (condition) {
  //  block of code to be executed if the condition is true
} 
```

### The if-else Statement

Use the else statement to specify a block of code to be executed if the condition is false.

**Syntax**

```
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```

### The if-else-else Statement

Use the else if statement to specify a new condition if the first condition is false.

```
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

### The JavaScript Switch Statement

The "switch" statement in JavaScript provides an alternative way to check multiple conditions.

**Syntax**

```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

**The break Keyword**: When JavaScript reaches a break keyword, it breaks out of the switch block. This will stop the execution inside the switch block.

**The default Keyword**: The default keyword specifies the code to run if there is no case match.

**Note**: Switch cases use strict comparison (===). The values must be of the same type to match.

**Expression and Statement**

An expression is a combination of values, variables, and operators that can be evaluated to produce a single value. Expressions can be used in various contexts such as assigning values to variables, passing arguments to functions, or as operands in mathematical or logical operations. e.g. 2 + 5 or x*y

A statement is a complete instruction that performs some action or controls the flow of a program. Statements can be simple or compound, and they are used to create blocks of code that perform specific tasks. e.g. x = "New Delhi" or z = 2**3

### The JavaScript Conditional(Ternary) Operator 

The JavaScript conditional operator, also known as the ternary operator, is a shorthand way of writing an if-else statement. It is represented by the ? and : symbols and takes the following form:

**Syntax**

```
(condition) ? trueExpression : falseExpression;
```

Here, the condition is evaluated first. If it is true, the trueExpression is executed otherwise, the false Expression is executed.


## JavaScript  Iterative Statement




## JavaScript Functions

JavaScript functions are a way to group a block of code that performs a specific task, which can be called or executed whenever needed. Functions can accept parameters as inputs, and can return values as outputs.

### Function Declaration and Function Expression

In JavaScript, there are two ways to define functions: function declarations and function expressions.


**Function Declaration**

Function declaration is a way of defining a function using the function keyword followed by the function name, parameter list, and function body.

**Syntax**

```
function functionName(parameters) {
  // function body
}
```

**Function Expression**

Function expression is another way of defining a function by assigning it to a variable. In a function expression, the function keyword is used to define an anonymous function, which is then assigned to a variable.

**Syntax**

```
const functionName = function(parameters) {
  // function body
};
```

The main difference between function declarations and function expressions is that function declarations are hoisted to the top of their scope, whereas function expressions are not. This means that function declarations can be called before they are defined, whereas function expressions must be defined before they are called.

**Arrow Functions**

An arrow function is a shorthand way of writing a function in JavaScript. It is an alternative syntax to traditional function declarations.

**Syntax**

```
(parameters) => { statement }

or 

(parameters) => expression
```

One of the key differences between arrow functions and traditional functions is that arrow functions don't have their own this value. Instead, they inherit this from the surrounding lexical scope. This can be useful in certain situations, such as when using callbacks or working with object methods. We will stydy "this" keyword later.

**Function Calling Functio**

In JavaScript, functions are first-class citizens, which means they can be assigned to variables, passed as arguments to other functions, and even returned from functions. This flexibility allows you to call one function from within another function.

To call a function from another function in JavaScript, you simply invoke the function using its name followed by parentheses "()".

**Syntax**

```
function firstFunction() {
  //function body
}

function secondFunction() {
  //function body..
  firstFunction();
  //function body
}

secondFunction();
```



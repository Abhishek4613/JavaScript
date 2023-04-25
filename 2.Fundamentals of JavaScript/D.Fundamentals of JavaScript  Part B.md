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


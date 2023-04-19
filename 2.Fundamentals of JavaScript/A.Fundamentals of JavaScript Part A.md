# Fundamentals of JavaScript: Part A

## JavaScript Syntax

JavaScript Syntax is the set of rules, how JavaScript programs are constructed.


## JavaScript Values

The JavaScript syntax defines two types of values:

- Fixed Values
- Variable Values

Fixed values are called Literals. 

Variable values are called Variables.


### JavaScript Variables

Variables are containers for storing data (storing data values).

**Keywords used to declare a Variable:**
1. var
2. let
3. const


**Difference Between Them Based on Scope, Hosting, Reaasign, and Redeclaretion** 

**A. Scope**: 

*Scope of a variable is the block of code in the entire program where the variable is declared, used, and can be modified.* 

- Variables declared with var are in the function scope.
- Variables declared as let are in the block scope.
- Variables declared as const are in the block scope.

**B. Hosting:** 

*Hoisting means that we can define a variable before its declaration.*

- var: Allowed
- let: Not Allowed
- const: Not Allowed

**C. Reassign:**

*To reassign a value is to reassign the value of a variable.*

- var: Allowed
- let: Allowed
- const: Not Allowed

**D. Redeclare:**

*The redeclaration of a variable means that you can declare the variable again.*

- var: Allowed
- let: Not Allowed
- const: Not Allowed


**Rules of Constructing Variables**

The general rules for constructing names for variables (unique identifiers) are:

1. Names can contain letters, digits, underscores, and dollar signs.
2. Names must begin with a letter.
3. Names can also begin with $ and _ (but try to avoid using).
4. Names are case sensitive (y and Y are different variables).
5. Reserved words (like JavaScript keywords) cannot be used as names.


## JavaScript DataType

There are two types of DataType in JavaScript
1. Premitive DataType
2. Non-Premitive (Refrential) DataType

**Types of Premitive DataType**

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol (*Not Useful Now)

**Types of Non-Premitive DataType**

1. Object 

**The typeof() operator is used to check the DataType of a value.**

**Note:** In JavaScript, null is considered to be an empty object reference. So, when you use the typeof operator with null, it will return "object". 

**Note:** JavaScript has Dynamic Typing. We do not have to manually define the datatype of the value stored in a variable. Insted datatype are determined autometically at run time.

## JavaScript Operators

### A. JavaScript Arithmatic Operators


| Operators | Description | Example | 
| :---: | :---: | :---: | 
| + | Addition | 10 + 10 = 20 | 
| - | Substraction | 35 - 15 = 20 | 
| * | Multiplication | 12 * 2 = 24 | 
| ** | Exponent | 4**3 = 64 |
| / | Division | 48 / 3 = 16 | 
| % | Modulus | 52 % 10 = 2 | 
| ++ | Incriment | let a = 5; a++; Now a = 6 | 
| -- | Decrement | let a = 5; a--; Now a = 4 | 
| | |


### B. JavaScript Comparison Operators


| Operators | Description | Example | 
| :---: | :---: | :---: |
| == | Is Equal To | 10 == 10; True |
| === | Identical (Equal and of Same Type) | 20===20 = True|
| != | Not Equal To | 	10!=20 = true |
| !== | Not Identical | 20!==20 = false |
| >  | Greater Than | 20>10 = true |
| >= | Greater Than or Equal To | 20>=10 = true |
| < | Less Than | 20<10 = false |
| <= | Less Than or Equal To | 20<=10 = false |
| | |


### C. JavaScript Bitwise Operators

| Operators | Description | Example | 
| :---: | :---: | :---: |
| & | Bitwise AND | (10==20 & 20==33) = false |
| \| |Bitwise OR | (10==20  20==33) = false |
| ^ | Bitwise XOR | (10==20 ^ 20==33) = false  |
| ~ | Bitwise NOT | (~10) = -10 |
| << | Bitwise Left Shift | (10<<2) = 40 |
| >> | Bitwise Right Shift | (10>>2) = 2 |
| >>> | Bitwise Right Shift with Zero| (10>>>2) = 2 |
| | |


### D. JavaScript Logical Operators

| Operators | Description | Example | 
| :---: | :---: | :---: |
| && | 	Logical AND | (10==20 && 20==33) = false |
| \|\| | Logical OR | (10==20 || 20==33) = false |
| ! | Logical Not | !(10==20) = true |
| | |


### E. JavaScript Assignment Operators

| Operators | Description | Example | 
| :---: | :---: | :---: |
| = | Assign | var a = 10; Now a = 10 |
| += | Add and Assign | var a=10; a+=20; Now a = 30 |
| -= | Subtract and Assign | var a=20; a-=10; Now a = 10 |
| *= | Multiply and Assign |  var a=10; a*=20; Now a = 200 |
| /= | Divide and Assign | var a=10; a/=2; Now a = 5 |
| %= | Modulus and Assign | var a=10; a%=2; Now a = 0 |
| | |


### F. JavaScript Special Operators

| Operators | Description | 
| :---: | :---: | 
| (?:) | 	Conditional Operator returns value based on the condition. It is like if-else. |  
| , | Comma Operator allows multiple expressions to be evaluated as single statement.|
| delete | Delete Operator deletes a property from the object.|
| in | In Operator checks if object has the given property.|
| instanceof | Checks if the object is an instance of given type.|
| new | Creates an Instance (Object).|
| typeof | Checks the type of object|
| void | It discards the expression's return value.|
| yield | Checks what is returned in a generator by the generator's iterator.|
| | |


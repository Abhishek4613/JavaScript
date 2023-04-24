# Fundamentals of JavaScript: Part A

## JavaScript Values

The JavaScript syntax defines two types of values:

- Fixed Values
- Variable Values

Fixed values are called Literals. 

Variable values are called Variables.


## JavaScript Variables

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



## JavaScript Type Conversion and Type Coercion

**Type Conversion**: Type conversion (or typecasting) means transfer of data from one data type to another. Implicit conversion happens when the compiler (for compiled languages) or runtime (for interpreted language) automatically converts data types. 

There are two type of type conversion:

1. **Implicit Conversion**: In certain situations, JavaScript automatically converts one data type to another (to the right type). This is known as implicit conversion.
2. **Explicit Conversion**: We can also convert one data type to another as per your needs using built in methods. This is known as explicit conversion.

**Explict Conversion**

    Converting Strings to Numbers
    Converting Numbers to Strings
    Converting Dates to Numbers
    Converting Numbers to Dates
    Converting Booleans to Numbers
    Converting Numbers to Booleans
    Converting Booleans to Strings
    Converting Strigns to Booleans


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

### B. JavaScript Comparison Operators

| Operators | Description | Example | 
| :---: | :---: | :---: |
| == | Is Equal To | 10 == 10; True |
| === | Identical (Equal and of Same Type) | 20 === 20 = True|
| != | Not Equal To | 	10 != 20 = true |
| !== | Not Identical | 20 !== 20 = false |
| >  | Greater Than | 20>10 = true |
| >= | Greater Than or Equal To | 20 >= 10 = true |
| < | Less Than | 20 < 10 = false |
| <= | Less Than or Equal To | 20 <= 10 = false |

### C. JavaScript Bitwise Operators

| Operators | Description | Example | 
| :---: | :---: | :---: |
| & | Bitwise AND | (10 == 20 & 20 == 33) = false |
| \| |Bitwise OR | (10 == 20  20 == 33) = false |
| ^ | Bitwise XOR | (10 == 20 ^ 20 == 33) = false  |
| ~ | Bitwise NOT | (~10) = -10 |
| << | Bitwise Left Shift | (10 << 2) = 40 |
| >> | Bitwise Right Shift | (10 >> 2) = 2 |
| >>> | Bitwise Right Shift with Zero| (10 >>> 2) = 2 |

### D. JavaScript Logical Operators

| Operators | Description | Example | 
| :---: | :---: | :---: |
| && | 	Logical AND | (10 == 20 && 20 == 33) = false |
| \|\| | Logical OR | (10 == 20 \|\| 20 == 33) = false |
| ! | Logical Not | !(10 == 20) = true |

### E. JavaScript Assignment Operators

| Operators | Description | Example | 
| :---: | :---: | :---: |
| = | Assign | var a = 10; Now a = 10 |
| += | Add and Assign | var a=10; a+=20; Now a = 30 |
| -= | Subtract and Assign | var a=20; a-=10; Now a = 10 |
| *= | Multiply and Assign |  var a=10; a*=20; Now a = 200 |
| /= | Divide and Assign | var a=10; a/=2; Now a = 5 |
| %= | Modulus and Assign | var a=10; a%=2; Now a = 0 |

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

## JavaScript - String Methods

- **length**: Returns the length of any string.

- **slice()**: Extracts a part of a string and returns the extracted part in a new string.
    - The method takes 2 parameters: start position, and end position (end not included).
    - If you omit the second parameter, the method will slice out the rest of the string.
    - If a parameter is negative, the position is counted from the end of the string.
    
- **substring()**: It is similar to the slice. The only difference is that start and end values less than 0 are treated as 0 in substring().

- **substr()**: It is similar to slice().
The only difference is that the second parameter specifies the length of the extracted part.

- **replace()**: The replace() method replaces a specified value with another value in a string.
    - The replace() method does not change the string it is called on.
    - The replace() method returns a new string.
    - The replace() method replaces only the first match.
    - If you want to replace all matches, use a regular expression with the /g flag set.
    - The replace() method is case sensitive.
    - To replace case insensitive, use a regular expression with an /i flag set.       

- **replaceAll()**: 

- **toUpperCase()**: A string is converted to upper case with toUpperCase().

- **toLowerCase()**: A string is converted to lower case with toLowerCase().

- **concat()**: It joins two or more strings. The concat() method can be used instead of the plus operator.

- **trim()**: Removes whitespace from both sides of a string.

- **trimStart()**: Removes whitespace only from the start of a string.

- **trimEnd()**: Removes whitespace only from the end of a string.

- **padStart()**: It pads a string with another string (multiple times) until it reaches a given length from the start.

- **padEnd()**: It pads a string with another string (multiple times) until it reaches a given length from the end.

- **charAt()**: Returns the character at a specified index (position) in a string.

- **charCodeAt()**: Returns the unicode of the character at a specified index (position) in a string

- **split()**: This method is used to split a string into an array of substrings based on a specified separator.

- **indexOf()**: Returns the index (position) of the first occurrence of a specified text in a string. It does not support regular repression.

- **lastIndexOf()**: Returns the index (position) of the last occurrence of a specified text in a string

- **search()**: Searches a string for a string  or a regular expression and returns the position of the match.

- **match()**: Returns an array containing the results of matching a string against a string or a regular expression.

- **matchAll()**: Returns an iterator containing the results of matching a string against a string or a regular expression.

- **includes()**: Returns true if a string contains a specified value. Otherwise it returns false. It can take second argument as index from where we want to search begins.

- **startsWith()**: Returns true if a string begins with a specified value. It can take second argument as index from where we want to search begins.

- **endsWith()**: Returns true if a string ends with a specified value. It can take second argument as index from where we want to search begins.


## JavaScript Template Literals


- **Quotes Inside Strings**: With template literals, we can use both single and double quotes inside a string.

- **Multiline Strings**: Template literals allows multiline strings.

- **Interpolation**: With template literals we can easely interpolate variables and expressions into strings.

- **Expression Substitution**: Template literals allow expressions in strings.







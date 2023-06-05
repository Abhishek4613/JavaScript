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

**Difference Between Them Based on Scope, Hosting, Reassign, and Re-Declaration**

**A. Scope**:

_Scope of a variable is the block of code in the entire program where the variable is declared, used, and can be modified._

- Variables declared with var are in the function scope.
- Variables declared as let are in the block scope.
- Variables declared as const are in the block scope.

**B. Hosting:**

_Hoisting means that we can define a variable before its declaration._

- var: Allowed
- let: Not Allowed
- const: Not Allowed

**C. Reassign:**

_Reassigning a value means changing the value of an existing variable without creating a new variable with the same name._

- var: Allowed
- let: Allowed
- const: Not Allowed

```
var myVariable = 5;
myVariable = 10;
```

**D. Redeclare:**

_Redeclaring a variable means declaring a new variable with the same name as an existing variable in the same scope._

- var: Allowed
- let: Not Allowed
- const: Not Allowed

```
var myVariable = 5;
var myVariable = 10;
```

**Rules of Constructing Variables**

The general rules for constructing names for variables (unique identifiers) are:

1. Names can contain letters, digits, underscores, and dollar signs.
2. Names must begin with a letter.
3. Names can also begin with $ and \_ (but try to avoid using).
4. Names are case sensitive (y and Y are different variables).
5. Reserved words (like JavaScript keywords) cannot be used as names.

## JavaScript DataType

There are two types of DataType in JavaScript

1. Primitive DataType
2. Non-Primitive (Referential) DataType

**Types of Primitive DataType**

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol (\*Not Useful Now)

**Types of Non-Primitive DataType**

1. Object

**The typeof() operator is used to check the DataType of a value.**

**Note:** In JavaScript, null is considered to be an empty object reference. So, when you use the typeof operator with null, it will return "object".

**Note:** JavaScript has Dynamic Typing. We do not have to manually define the datatype of the value stored in a variable. Instead datatype are determined automatically at run time.

## JavaScript Type Coercion and Type Casting

**Type Coercion**: Implicit type conversion, also known as type coercion, occurs when the programming language automatically converts one type of data to another type. This happens when the data type of one operand in an expression is different from the data type of the other operand.

**Type Casting**: Explicit type conversion, also known as type casting, occurs when the programmer explicitly converts one type of data to another type. This is done using a type cast operator, such as Number(), String(), Boolean() etc.

## JavaScript Falsy and Truthly Values

Falsy values are those that evaluate to false when treated as a Boolean, and truthy values are those that evaluate to true when treated as a Boolean.

In JavaScript, the following values are considered falsy:

false
null
undefined
0
NaN
'' (An Empty String)

All other values in JavaScript are considered truthy.

## JavaScript Operators

### A. JavaScript Arithmetic Operators

| Operators |  Description   |          Example          |
| :-------: | :------------: | :-----------------------: |
|     +     |    Addition    |       10 + 10 = 20        |
|     -     |  Subtraction   |       35 - 15 = 20        |
|    \*     | Multiplication |       12 \* 2 = 24        |
|   \*\*    |    Exponent    |        4\*\*3 = 64        |
|     /     |    Division    |        48 / 3 = 16        |
|     %     |    Modulus     |        52 % 10 = 2        |
|    ++     |   Increment    | let a = 5; a++; Now a = 6 |
|    --     |   Decrement    | let a = 5; a--; Now a = 4 |

### B. JavaScript Comparison Operators

| Operators |            Description             |      Example      |
| :-------: | :--------------------------------: | :---------------: |
|    ==     |            Is Equal To             |  10 == 10; True   |
|    ===    | Identical (Equal and of Same Type) | 20 === 20 = True  |
|    !=     |            Not Equal To            |  10 != 20 = true  |
|    !==    |           Not Identical            | 20 !== 20 = false |
|     >     |            Greater Than            |   20>10 = true    |
|    >=     |      Greater Than or Equal To      |  20 >= 10 = true  |
|     <     |             Less Than              |  20 < 10 = false  |
|    <=     |       Less Than or Equal To        | 20 <= 10 = false  |

### C. JavaScript Bitwise Operators

| Operators |          Description          |            Example            |
| :-------: | :---------------------------: | :---------------------------: |
|     &     |          Bitwise AND          | (10 == 20 & 20 == 33) = false |
|    \|     |          Bitwise OR           |  (10 == 20 20 == 33) = false  |
|     ^     |          Bitwise XOR          | (10 == 20 ^ 20 == 33) = false |
|     ~     |          Bitwise NOT          |          (~10) = -10          |
|    <<     |      Bitwise Left Shift       |        (10 << 2) = 40         |
|    >>     |      Bitwise Right Shift      |         (10 >> 2) = 2         |
|    >>>    | Bitwise Right Shift with Zero |        (10 >>> 2) = 2         |

### D. JavaScript Logical Operators

| Operators |                            Description                            |             Example              |
| :-------: | :---------------------------------------------------------------: | :------------------------------: |
|    &&     |        Logical AND Returns 1 if both comparisons are true         |  (10 == 20 && 20 == 33) = false  |
|   \|\|    |      Logical OR Returns 1 if at least one comparison is true      | (10 == 20 \|\| 20 == 33) = false |
|     !     | Logical Not Returns 1 if only one comparison but not both is true |        !(10 == 20) = true        |

### E. JavaScript Assignment Operators

| Operators |     Description     |            Example            |
| :-------: | :-----------------: | :---------------------------: |
|     =     |       Assign        |    var a = 10; Now a = 10     |
|    +=     |   Add and Assign    |  var a=10; a+=20; Now a = 30  |
|    -=     | Subtract and Assign |  var a=20; a-=10; Now a = 10  |
|    \*=    | Multiply and Assign | var a=10; a\*=20; Now a = 200 |
|    /=     |  Divide and Assign  |   var a=10; a/=2; Now a = 5   |
|    %=     | Modulus and Assign  |   var a=10; a%=2; Now a = 0   |

### F. JavaScript Special Operators

| Operators  |                                   Description                                   |
| :--------: | :-----------------------------------------------------------------------------: |
|    (?:)    | Conditional Operator returns value based on the condition. It is like if-else.  |
|     ,      | Comma Operator allows multiple expressions to be evaluated as single statement. |
|   delete   |               Delete Operator deletes a property from the object.               |
|     in     |              In Operator checks if object has the given property.               |
| instanceof |               Checks if the object is an instance of given type.                |
|    new     |                          Creates an Instance (Object).                          |
|   typeof   |                            Checks the type of object                            |
|    void    |                   It discards the expression's return value.                    |
|   yield    |       Checks what is returned in a generator by the generator's iterator.       |

## JavaScript - Introduction to String

In JavaScript, a string is a sequence of characters enclosed within single quotes ('') or double quotes (""). Strings are used to represent textual data and are one of the fundamental data types in JavaScript.

## JavaScript - String Methods

- **charAt()**: Returns the character at a specified index (position)
- **charCodeAt()**: Returns the Unicode of the character at a specified index
- **concat()**: Returns two or more joined strings
- **constructor**: Returns the string's constructor function
- **endsWith()**: Returns if a string ends with a specified value
- **fromCharCode()**: Returns Unicode values as characters
- **includes()**: Returns if a string contains a specified value
- **indexOf()**: Returns the index (position) of the first occurrence of a value in a string
- **lastIndexOf()**: Returns the index (position) of the last occurrence of a value in a string
- **length**: Returns the length of a string
- **localeCompare()**: Compares two strings in the current locale
- **match()**: Searches a string for a value, or a regular expression, and returns the matches
- **prototype**: Allows you to add properties and methods to an object
- **repeat()**: Returns a new string with a number of copies of a string
- **replace()**: Searches a string for a value, or a regular expression, and returns a string where the values are replaced
- **search()**: Searches a string for a value, or regular expression, and returns the index (position) of the match
- **slice()**: Extracts a part of a string and returns a new string
- **split()**: Splits a string into an array of substrings
- **startsWith()**: Checks whether a string begins with specified characters
- **substr()**: Extracts a number of characters from a string, from a start index (position)
- **substring()**: Extracts characters from a string, between two specified indices (positions)
- **toLocaleLowerCase()**: Returns a string converted to lowercase letters, using the host's locale
- **toLocaleUpperCase()**: Returns a string converted to uppercase letters, using the host's locale
- **toLowerCase()**: Returns a string converted to lowercase letters
- **toString()**: Returns a string or a string object as a string
- **toUpperCase()**: Returns a string converted to uppercase letters
- **trim()**: Returns a string with removed whitespaces
- **trimEnd()**: Returns a string with removed whitespaces from the end
- **trimStart()**: Returns a string with removed whitespaces from the start
- **valueOf()**: Returns the primitive value of a string or a string object

## JavaScript Template Literals

- **Quotes Inside Strings**: With template literals, we can use both single and double quotes inside a string.

- **Multiline Strings**: Template literals allows multiline strings.

- **Interpolation**: With template literals we can easily interpolate variables and expressions into strings.

- **Expression Substitution**: Template literals allow expressions in strings.

## JavaScript - Introduction to Array

An array is a special variable, which can hold more than one value and we can access the values by referring to an index number.

```
const cars = ["Saab", "Volvo", "BMW"];
```

### Creating an Array:

- **Using Array Literal**:

```
const array_name = [Item1, Item2, ...];
```

- **Using Keyword**:

```
const cars = new Array("Saab", "Volvo", "BMW");
```

### Accessing an Array:

## JavaScript - Array Methods

- **at()**: Returns an indexed element of an array.
- **concat()**: Joins arrays and returns an array with the joined arrays
- **constructor**: Returns the function that created the Array object's prototype
- **copyWithin()**: Copies array elements within the array, to and from specified positions
- **entries()**: Returns a key/value pair Array Iteration Object.
- **every()**: Checks if every element in an array pass a test.
- **fill()**: Fill the elements in an array with a static value
- **filter()**: Creates a new array with every element in an array that pass a test.
- **find()**: Returns the value of the first element in an array that pass a test
- **findIndex()**: Returns the index of the first element in an array that pass a test
- **flat()**: Concatenates sub-array elements
- **flatMap()**: Maps all array elements and creates a new flat array
- **forEach()**: Calls a function for each array element
- **from()**: Creates an array from an object
- **includes()**: Check if an array contains the specified element
- **indexOf()**: Search the array for an element and returns its position
- **isArray()**: Checks whether an object is an array
- **join()**: Joins all elements of an array into a string
- **keys()**: Returns a Array Iteration Object, containing the keys of the original array
- **lastIndexOf()**: Search the array for an element, starting at the end, and returns its position
- **length**: Sets or returns the number of elements in an array
  map() Creates a new array with the result of calling a function for each array element
- **pop()**: Removes the last element of an array, and returns that element
- **prototype**: Allows you to add properties and methods to an Array object
- **push()**: Adds new elements to the end of an array, and returns the new length
- **reduce()**: Reduce the values of an array to a single value (going left-to-right)
- **reduceRight()**: Reduce the values of an array to a single value (going right-to-left)
- **reverse()**: Reverses the order of the elements in an array
- **shift()**: Removes the first element of an array, and returns that element
- **slice()**: Selects a part of an array, and returns the new array
- **some()**: Checks if any of the elements in an array pass a test
- **sort()**: Sorts the elements of an array
- **splice()**: Adds/Removes elements from an array
- **toString()**: Converts an array to a string, and returns the result
- **unshift()**: Adds new elements to the beginning of an array, and returns the new length
- **valueOf()**: Returns the primitive value of an array

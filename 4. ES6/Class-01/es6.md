
#   JS-Examples Functions - Key Concepts

This document explains important   JS-Examples function features, including default parameters, rest parameters, spread operator, and arrow functions.

## 1. Default Parameters

**Definition:**  
Default parameters allow a function to use a default value if no value is passed during the function call.

**Use Cases:**  
- When you want function arguments to be optional.
- When missing arguments should use default values to avoid unexpected behavior.

**Examples:01**

### Simple Default Parameter:
   JS-Examples
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet();  // Output: Hello, Guest!
greet(prompt("Enter Your Name"));  // Output: Hello, Ali!
 
Explanation: If no value is provided for `name`, the default value "Guest" is used.

### Multiple Parameters with Default Values:
   JS-Examples
function add(a = 5, b = 10) {
    return a + b;
}
console.log(add());  // Output: 15
console.log(add(7));  // Output: 17
console.log(add(3, 4));  // Output: 7
 
Explanation: If any parameter is missing, its default value is used.

### Default Value with Expressions:
   JS-Examples
function greet(name = "Guest", greeting = `Hello ${name}`) {
    console.log(greeting);
}
greet();  // Output: Hello Guest
greet("Ali");  // Output: Hello Ali
 
Explanation: Default values can also be expressions, which dynamically change.

---

## 2. Rest Parameter

**Definition:**  
Rest parameters allow a function to accept a variable number of arguments and store them in an array.

**Use Cases:**  
- When you need to pass multiple arguments to a function.
- When the number of parameters is unknown.

** JS-Examples:**

### Basic Rest Parameter:
   JS-Examples
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));  // Output: 10

Explanation: The rest parameter `...numbers` collects multiple arguments into an array.

### Rest Parameter in Object Destructuring:
ex 2
function printDetails(name, age, ...hobbies) {
    console.log(name, age, hobbies);
}
printDetails("Ali", 25, "Reading", "Swimming", "Traveling");  
// Output: Ali 25 [ 'Reading', 'Swimming', 'Traveling' ]

Explanation: The rest parameter captures additional arguments in object destructuring.

### Using Rest with Multiple Parameters:
   JS-Examples
function mergeArrays(a, b, ...rest) {
    return [...a, ...b, ...rest];
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));  
// Output: [1, 2, 3, 4, 5, 6]
 
Explanation: The rest parameter handles additional arguments and merges arrays.

---

## 3. Spread Operator

**Definition:**  
The spread operator is used to spread elements of an array or object into another array or object.

**Use Cases:**  
- To copy or merge arrays or objects.
- To enhance code readability and conciseness.

** JS-Examples:**

### Array Spread:
   JS-Examples
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);  // Output: [1, 2, 3, 4, 5]
 
Explanation: The spread operator `...arr1` copies elements from `arr1` into `arr2`.

### Object Spread:
   JS-Examples
const person = { name: "Ali", age: 25 };
const newPerson = { ...person, country: "Pakistan" };
console.log(newPerson);  // Output: { name: 'Ali', age: 25, country: 'Pakistan' }
 
Explanation: The spread operator copies properties of the `person` object and adds new properties.

### Merging Arrays:
   JS-Examples
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr);  // Output: [1, 2, 3, 4]
 
Explanation: The spread operator is used to merge two arrays into one.

---

## 4. Arrow Functions

**Definition:**  
Arrow functions provide a more concise syntax for writing functions in   JS-Examples.

**Use Cases:**  
- When you need to write short functions with single expressions.
- Mostly used in callbacks and higher-order functions like `map`, `filter`, and `reduce`.

** JS-Examples:**

### Basic Arrow Function:
   JS-Examples
const add = (a, b) => a + b;
console.log(add(2, 3));  // Output: 5
 
Explanation: A concise syntax that returns the sum of two parameters.

### Arrow Function with No Parameters:
   JS-Examples
const greet = () => console.log("Hello, World!");
greet();  // Output: Hello, World!
 
Explanation: Arrow functions can be written without parameters.

### Arrow Function with Multiple Expressions:
   JS-Examples
const multiplyAndAdd = (a, b) => {
    const product = a * b;
    return product + 5;
};
console.log(multiplyAndAdd(2, 3));  // Output: 11
 
Explanation: Arrow functions can also handle multiple expressions by using curly braces.

### Arrow Function with `this` Binding:
   JS-Examples
function Counter() {
    this.count = 0;
    setInterval(() => {
        this.count++;
        console.log(this.count);
    }, 1000);
}
const counter = new Counter();  // Output: 1, 2, 3, ...
 
Explanation: In arrow functions, `this` refers to the lexical scope, which is useful for object methods.

---

## Key Differences Between Arrow Functions and Regular Functions

- **`this` Binding:**
  - Arrow functions: `this` is lexically bound.
  - Regular functions: `this` is dynamically bound based on the calling context.
  
- **Syntax:**
  - Arrow functions are more concise, especially for single expressions.

- **`arguments` Object:**
  - Arrow functions do not have access to the `arguments` object.
  - Regular functions have access to the `arguments` object, which stores all passed arguments.


- **Next Class Topic's:**
1- Spread Operator
2- Rest parameter
3- Arrow functions
4- Enhanced object literals
5- Iterators & For..of
6- Generators
7- Modules
8- Map
9- Array methods
10- Higher-order function
11- CallBack
12- Promises
13- Exponentiation Operator
14- Classes
15- Ternary Operator
16- Optional chaining



Spread Operator
Spread Operator (...) ek array ya object ke elements ko easily expand karne ke liye use hota hai.

Kahan Use Hota Hai:
Jab array ya object ko copy karna ho ya merge karna ho.
Function mein multiple arguments pass karte waqt.
Examples:
Array Copy and Merge:
javascript
Copy code
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // Output: [1, 2, 3, 4]
Object Copy:
javascript
Copy code
const person = { name: "Ali", age: 25 };
const updatedPerson = { ...person, city: "Karachi" };
console.log(updatedPerson); // Output: { name: 'Ali', age: 25, city: 'Karachi' }
Function Arguments:
javascript
Copy code
function sum(a, b, c) {
    return a + b + c;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // Output: 6
Rest Parameter
Rest Parameter (...) ka use tab hota hai jab aapko unknown ya variable number of arguments ko ek array mein capture karna ho.

Kahan Use Hota Hai:
Jab function multiple arguments ko ek sath handle kare.
Examples:
Simple Rest Parameter:
javascript
Copy code
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
Rest with Other Parameters:
javascript
Copy code
function showDetails(name, ...hobbies) {
    console.log(`${name}'s hobbies:`, hobbies);
}
showDetails("Ali", "Reading", "Traveling", "Gaming"); 
// Output: Ali's hobbies: [ 'Reading', 'Traveling', 'Gaming' ]
Destructuring with Rest:
javascript
Copy code
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // Output: 1
console.log(rest);  // Output: [2, 3, 4]
Arrow Function
Arrow Function ek concise way hai function likhne ka, aur iska this lexical scope se bind hota hai.

Examples:
Basic Example:
javascript
Copy code
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Ali")); // Output: Hello, Ali!
Multiple Lines:
javascript
Copy code
const calculateArea = (length, width) => {
    const area = length * width;
    return area;
};
console.log(calculateArea(5, 3)); // Output: 15
Without Parameters:
javascript
Copy code
const sayHi = () => console.log("Hi!");
sayHi(); // Output: Hi!
Generator Function
Generator Function ek special function hai jo execution ko pause aur resume kar sakta hai using yield.

Examples:
Simple Generator:
javascript
Copy code
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = numbers();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
Infinite Generator:
javascript
Copy code
function* infiniteNumbers() {
    let num = 1;
    while (true) {
        yield num++;
    }
}
const gen = infiniteNumbers();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
Enhanced Object Literals
Enhanced object literals allow shorter syntax for defining properties and methods in objects.

Examples:
Property Shorthand:
javascript
Copy code
const name = "Ali";
const age = 25;
const person = { name, age };
console.log(person); // Output: { name: 'Ali', age: 25 }
Method Definition:
javascript
Copy code
const person = {
    greet() {
        console.log("Hello!");
    }
};
person.greet(); // Output: Hello!
Iterators & For..of
Iterators allow custom traversal of data structures, and for..of loop simplifies iteration over iterable objects.

Examples:
Basic For..of Loop:
javascript
Copy code
const numbers = [1, 2, 3];
for (const num of numbers) {
    console.log(num); // Output: 1, 2, 3
}
Custom Iterator:
javascript
Copy code
const obj = {
    *[Symbol.iterator]() {
        yield "Ali";
        yield "Ahmed";
    }
};
for (const name of obj) {
    console.log(name); // Output: Ali, Ahmed
}
Modules
Modules allow code to be split into reusable files. Use export to share and import to include code.

Examples:
Export and Import:
File: math.js
javascript
Copy code
export const add = (a, b) => a + b;
File: app.js

javascript
Copy code
import { add } from './math.js';
console.log(add(2, 3)); // Output: 5
Default Export:
File: greet.js
javascript
Copy code
export default (name) => `Hello, ${name}`;
File: app.js

javascript
Copy code
import greet from './greet.js';
console.log(greet("Ali")); // Output: Hello, Ali
Map
Map is a data structure for storing key-value pairs, where keys can be any type.

Examples:
Basic Map Usage:
javascript
Copy code
const map = new Map();
map.set("name", "Ali");
map.set("age", 25);
console.log(map.get("name")); // Output: Ali
Iterating Over Map:
javascript
Copy code
const map = new Map([
    ["name", "Ali"],
    ["age", 25]
]);
for (const [key, value] of map) {
    console.log(key, value); // Output: name Ali, age 25
}
Checking Existence:
javascript
Copy code
const map = new Map();
map.set("name", "Ali");
console.log(map.has("name")); // Output: true
console.log(map.has("city")); // Output: false

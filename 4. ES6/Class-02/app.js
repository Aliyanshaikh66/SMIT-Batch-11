// Spread Operator
// Spread Operator (...) ek array ya object ke elements ko easily expand karne ke liye use hota hai.

// Kahan Use Hota Hai:
// Jab array ya object ko copy karna ho ya merge karna ho.
// Function mein multiple arguments pass karte waqt.
//   :
// Array Copy and Merge:
// javascript
 
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const merged = [...arr1, ...arr2];
// console.log(merged); // Output: [1, 2, 3, 4]
// Object Copy:
// javascript
 
// const person = { name: "Ali", age: 25 };
// const updatedPerson = { ...person, city: "Karachi" };
// console.log(updatedPerson); // Output: { name: 'Ali', age: 25, city: 'Karachi' }
// Function Arguments:
// javascript
 
// function sum(a, b, c) {
//     return a + b + c;
// }
// const nums = [1, 2, 3];
// console.log(sum(...nums)); // Output: 6
// Rest Parameter
// Rest Parameter (...) ka use tab hota hai jab aapko unknown ya variable number of arguments ko ek array mein capture karna ho.

// Kahan Use Hota Hai:
// Jab function multiple arguments ko ek sath handle kare.
//   :
// Simple Rest Parameter:
// javascript
 
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4)); // Output: 10
// Rest with Other Parameters:
// javascript
 
// function showDetails(name, ...hobbies) {
//     console.log(`${name}'s hobbies:`, hobbies);
// }
// showDetails("Ali", "Reading", "Traveling", "Gaming"); 
// // Output: Ali's hobbies: [ 'Reading', 'Traveling', 'Gaming' ]
// Destructuring with Rest:
// javascript
 
// const [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // Output: 1
// console.log(rest);  // Output: [2, 3, 4]
// Arrow Function
// Arrow Function ek concise way hai function likhne ka, aur iska this lexical scope se bind hota hai.

//   :
// Basic Example:
// javascript
 
// const greet = (name) => `Hello, ${name}!`;
// console.log(greet("Ali")); // Output: Hello, Ali!
// Multiple Lines:
// javascript
 
// const calculateArea = (length, width) => {
//     const area = length * width;
//     return area;
// };
// console.log(calculateArea(5, 3)); // Output: 15
// Without Parameters:
// javascript
 
// const sayHi = () => console.log("Hi!");
// sayHi(); // Output: Hi!
// Generator Function
// Generator Function ek special function hai jo execution ko pause aur resume kar sakta hai using yield.

//   :
// Simple Generator:
// javascript
 
// function* numbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const gen = numbers();
// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// Infinite Generator:
// javascript
 
// function* infiniteNumbers() {
//     let num = 1;
//     while (true) {
//         yield num++;
//     }
// }
// const gen = infiniteNumbers();
// console.log(gen.next().value); // Output: 1
// console.log(gen.next().value); // Output: 2
// Enhanced Object Literals
// Enhanced object literals allow shorter syntax for defining properties and methods in objects.

//   :
// Property Shorthand:
// javascript
 
// const name = "Ali";
// const age = 25;
// const person = { name, age };
// console.log(person); // Output: { name: 'Ali', age: 25 }
// Method Definition:
// javascript
 
// const person = {
//     greet() {
//         console.log("Hello!");
//     }
// };
// person.greet(); // Output: Hello!
// Iterators & For..of
// Iterators allow custom traversal of data structures, and for..of loop simplifies iteration over iterable objects.

//   :
// Basic For..of Loop:
// javascript
 
// const numbers = [1, 2, 3];
// for (const num of numbers) {
//     console.log(num); // Output: 1, 2, 3
// }
// Custom Iterator:
// javascript
 
// const obj = {
//     *[Symbol.iterator]() {
//         yield "Ali";
//         yield "Ahmed";
//     }
// };
// for (const name of obj) {
//     console.log(name); // Output: Ali, Ahmed
// }
// Modules
// Modules allow code to be split into reusable files. Use export to share and import to include code.

//   :
// Export and Import:
// File: math.js
// javascript
 
// export const add = (a, b) => a + b;
// File: app.js

// javascript
 
// import { add } from './math.js';
// console.log(add(2, 3)); // Output: 5
// Default Export:
// File: greet.js
// javascript
 
// export default (name) => `Hello, ${name}`;
// File: app.js

// javascript
 
// import greet from './greet.js';
// console.log(greet("Ali")); // Output: Hello, Ali
// Map
// Map is a data structure for storing key-value pairs, where keys can be any type.

//   :
// Basic Map Usage:
// javascript
 
// const map = new Map();
// map.set("name", "Ali");
// map.set("age", 25);
// console.log(map.get("name")); // Output: Ali
// Iterating Over Map:
// javascript
 
// const map = new Map([
//     ["name", "Ali"],
//     ["age", 25]
// ]);
// for (const [key, value] of map) {
//     console.log(key, value); // Output: name Ali, age 25
// }
// Checking Existence:
// javascript
 
// const map = new Map();
// map.set("name", "Ali");
// console.log(map.has("name")); // Output: true
// console.log(map.has("city")); // Output: false

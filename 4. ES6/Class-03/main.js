//import File

// import { greet } from './main1.js';
// console.log(greet()); // Output: Hello! -->

// export default function greet() {
//     return "Hi there!";
//   }
  
  // file2.js
//   import greet from './main1.js';
//   console.log(greet()); // Output: Hi there!

// import { add, multiply } from './file1.js';
// console.log(add(2, 3)); // Output: 5
// console.log(multiply(2, 3)); // Output: 6

//Map

// const map = new Map();
// map.set("First Name", "Aliyan");
// map.set("Second Name", "Aman");
// console.log(map.get("Second Name")); // Output: value1

// let check = prompt("Check Your Name");
// const map = new Map([["name", "Aliyan"], ["age", 25]]);
// console.log(map.has("name")); // Output: true

// const map = new Map();
// map.set("a", 1).set("b", 2).set("c", 3);
// for (const [value, key] of map) {
//   console.log(value, key);
// }


// const numbers = [1,2,3,4];
// const sum = numbers.reduce((a, b, c) => a + b +c, 0);
// console.log(sum); // Output: 10

// const numbers = [10, 15, 30];
// const found = numbers.find(num => num >= 15);
// console.log(found); // Output: 20

// const numbers = [1, 2, 3];
// console.log(numbers.some(n => n >= 3)); // Output: true
  
// const numbers = [3, 2, 4];
// console.log(numbers.every(n => n > )); // Output: true

  
// function multiplier(factor) {
//     return function(number) {
//         return number * factor;
//     };
// }
// const double = multiplier(2);
// console.log(double(5)); // Output: 10
// console.log(double(2));
  

  
// setTimeout(() => {
//     function greet(name, callback) {
//         console.log(`Hello, ${name}!`);
//         callback();
//     }
//     greet("Aliyan", () => console.log("Welcome to  !"));
// }, 2000);
  

// const promise = new Promise((resolve, reject) => {
//     let success = false;
//     success ? resolve("Task is completed!") : reject("Task failed!");
// });

// promise
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

const asyncTask = value => new Promise(resolve => resolve(value + 10));
asyncTask(5)
       .then(result => result * 2)
       .then(final => console.log(final)); // Output: 30
     

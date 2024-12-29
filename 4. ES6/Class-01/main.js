// 1. Variable Scoping
// Variable scoping ka matlab hai ke variable ko kaha access kiya jaa sakta hai.

// Kahan Use Hota Hai:
// Jab aap variable ko sirf ek block ya function tak limit karna chahte hain.
// Taake aapke code mein variable names ka conflict na ho.
// Kyun Use Hota Hai:
// Taake code clean aur readable ho.
// Taake galti se variable ka overwrite na ho.
// Examples:
// Block Scope (let/const):
//  Examples

{
  let message = "Hello";
  console.log(message); // Output: Hello
}
// console.log(message); // Error: message is not defined
// Explanation: let aur const se declare kiye gaye variables sirf us block ke andar accessible hote hain jahan unhe define kiya gaya ho. Yeh scoping ka use aapke program ko clean aur maintainable banata hai.

// Function Scope (var):
let name3 = "ali";

function test() {
  var number = 42;
  console.log(name3); // Output: 42
}
console.log(number); // Error: number is not defined
// Explanation: var se declare kiye gaye variables sirf us function ke andar accessible hote hain jahan unhe define kiya gaya ho. Yeh ensure karta hai ke aapka variable sirf usi function ke andar accessible ho.

// Global Scope:
//  Examples

var globalVar = "Accessible everywhere!";
console.log(globalVar); // Output: Accessible everywhere!
// Explanation: Agar aap variable ko globally declare karte hain, to woh har jagah accessible hota hai. Lekin isse aapko careful rehna padta hai, warna different parts of the code mein conflicts ho sakte hain.

// 2. Closure
// Closure tab hota hai jab ek function apni outer function ki variables ko yaad rakhta hai, even agar outer function execute ho chuki ho.

// Kahan Use Hota Hai:
// Jab aapko function ke andar private variables chahiye hote hain.
// Jab aapko function ko reuse karte hue state maintain karni hoti hai.
// Kyun Use Hota Hai:
// Taake function ke andar variables ko encapsulate kiya jaa sake, aur unko external access se bachaya jaa sake.
// Taake functions ka state memory mein store ho sake, jo agle function call mein use hota hai.
// Examples:
// Basic Closure:
//  Examples

function outer() {
  let message = "Hello";
  return function inner() {
    console.log(message); // Output: Hello
  };
}
const greet = outer();
greet();
// Explanation: inner function ko apni outer function outer ke variable message tak access milta hai, yeh closure hai. Closure aapko private data ke sath kaam karne mein madad deta hai.

// Counter Using Closure:
// in  Examples

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
// Explanation: createCounter function ek closure return karta hai jo count variable ko yaad rakhta hai aur usse modify karta hai har baar jab counter call hota hai.

// Private Variables with Closure:
//  Examples

function createSecret(secret) {
  return function () {
    console.log(secret);
  };
}
const secretMessage = createSecret("This is a secret!");
secretMessage(); // Output: This is a secret!
// Explanation: Closure ke through aap private data ko securely store kar sakte hain, jo sirf closure ke through accessible hota hai.

// 3. Template Literals
// Template literals aapko strings mein variables aur expressions ko easily include karne ki suvidha dete hain.

// Kahan Use Hota Hai:
// Jab aapko strings mein variables ya expressions ko dynamically add karna ho.
// Jab multiline strings ki zaroorat ho.
// Kyun Use Hota Hai:
// Taake aap easily variables ko strings mein inject kar sakein.
// Taake multiline strings likhne mein asani ho.
// Examples:
// String Interpolation:
//  Examples

let name1 = "Ali";
console.log(`Hello, ${name1}!`); // Output: Hello, Ali!
// Explanation: Template literals ka use karke aap string mein variables ko directly insert kar sakte hain. Yeh code ko clean aur readable banata hai.

// Multiline Strings:
//  Examples

let message = `This is 
a multiline 
string.`;
console.log(message);
// Explanation: Template literals aapko multiline strings banane ki ijazat dete hain bina kisi special character ke, jaise \n.

// Expression Evaluation:
//  Examples

// let a = 5,
//     b = 10;
// console.log(`The sum of ${a} and ${b} is ${a + b}.`); // Output: The sum of 5 and 10 is 15.
// Explanation: Template literals mein aap directly expressions ko calculate kar sakte hain aur unhe string mein insert kar sakte hain.

// 4. Destructuring
// Destructuring aapko arrays aur objects ke values ko directly variables mein extract karne ki ijazat deta hai.

// Kahan Use Hota Hai:
// Jab aapko array ya object ke elements ko asani se variables mein extract karna ho.
// Jab aapko cleaner aur more readable code chahiye ho.
// Kyun Use Hota Hai:
// Taake aapko manually values ko extract karne ki zaroorat na ho, aur aapka code concise ho.
// Array Destructuring:

const [x, y] = [10, 20];
console.log(x, y); // Output: 10, 20
// Explanation: Array destructuring se aap easily array ke elements ko variables mein store kar sakte hain.

// Object Destructuring:

const person = { name: "Ali", age: 25 };
const { name, age } = person;
console.log(name, age); // Output: Ali, 25
// Explanation: Object destructuring se aap object ke properties ko easily variables mein assign kar sakte hain.

// Default Values:

const [a = 1, b = 2] = [];
console.log(a, b); // Output: 1, 2
// Explanation: Destructuring mein aap default values set kar sakte hain agar array ya object mein value missing ho.

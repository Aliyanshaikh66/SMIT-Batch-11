# JavaScript Topics with Examples

## 1. Arrow Functions

### Example 1:
 
const square = (num) => num * num;
console.log(square(4)); // Output: 16
  

### Example 2:
 
const greet = (name) => `Hello, ${name}!`;
console.log(greet('Aliyan')); // Output: Hello, Aliyan!
  

### Example 3:
 
const add = (a, b) => a + b;
console.log(add(10, 20)); // Output: 30
  

---

## 2. Enhanced Object Literals

### Example 1:
 
const name = "Aliyan";
const person = {
  name,
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
person.greet(); // Output: Hello, Aliyan
  

### Example 2:
 
const key = "role";
const value = "Developer";
const user = { [key]: value };
console.log(user); // Output: { role: 'Developer' }
  

### Example 3:
 
const makePerson = (name, age) => ({ name, age });
console.log(makePerson("Aliyan", 25)); // Output: { name: 'Aliyan', age: 25 }
  

---

## 3. Iterators & For..of

### Example 1:
 
const nums = [10, 20, 30];
for (const num of nums) {
  console.log(num);
}
// Output: 10, 20, 30
  

### Example 2:
 
const name = "Aliyan";
for (const char of name) {
  console.log(char);
}
// Output: A, l, i, y, a, n
  

### Example 3:
 
const languages = new Map([
  ["JS", "JavaScript"],
  ["PY", "Python"]
]);
for (const [key, value] of languages) {
  console.log(`${key}: ${value}`);
}
// Output:
// JS: JavaScript
// PY: Python
  

---

## 4. Generators

### Example 1:
 
function* counter() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = counter();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
  

### Example 2:
 
function* infinite() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const gen = infinite();
console.log(gen.next().value); // Output: 0
console.log(gen.next().value); // Output: 1
  

### Example 3:
 
function* evenNumbers(limit) {
  for (let i = 0; i <= limit; i += 2) {
    yield i;
  }
}
for (const num of evenNumbers(6)) {
  console.log(num);
}
// Output: 0, 2, 4, 6
  

---

## 5. Modules

### Example 1:
 
<!-- // file1.js
export const greet = () => "Hello!";

// file2.js
import { greet } from './file1.js';
console.log(greet()); // Output: Hello! -->
  

### Example 2:
 
// file1.js
export default function greet() {
  return "Hi there!";
}

// file2.js
import greet from './file1.js';
console.log(greet()); // Output: Hi there!
  

### Example 3:
 
// file1.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// file2.js
import { add, multiply } from './file1.js';
console.log(add(2, 3)); // Output: 5
console.log(multiply(2, 3)); // Output: 6
  

---

## 6. Map

### Example 1:
 
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map.get("key1")); // Output: value1
  

### Example 2:
 
const map = new Map([["name", "Aliyan"], ["age", 25]]);
console.log(map.has("name")); // Output: true
  

### Example 3:
 
const map = new Map();
map.set("a", 1).set("b", 2).set("c", 3);
for (const [key, value] of map) {
  console.log(key, value);
}
// Output:
// a 1
// b 2
// c 3
  

---

## 7. Array Methods

### map()
 
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6]
  

### filter()
 
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // Output: [2, 4]
  

### reduce()
 
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 1);
console.log(sum); // Output: 10
  

### forEach()
 
const nums = [1, 2, 3];
nums.forEach(num => console.log(num * 2));
// Output: 2, 4, 6
  

### find()
 
const numbers = [10, 16, 30];
const found = numbers.find(num => num > 15);
console.log(found); // Output: 20
  

### some()
 
const numbers = [1, 2, 3];
console.log(numbers.some(n => n > 3)); // Output: true
  

### every()
 
const numbers = [1, 2, 3];
console.log(numbers.every(n => n > 0)); // Output: true

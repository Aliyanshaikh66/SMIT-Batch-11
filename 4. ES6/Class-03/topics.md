#   Advanced Topics

## Higher-Order Functions

A **higher-order function** is a function that takes other functions as arguments or returns a function as its result.

### Examples:
1. **Using `Array.map()`**:
      
   const numbers = [1, 2, 3];
   const squared = numbers.map(num => num ** 2);
   console.log(squared); // Output: [1, 4, 9]
     

2. **Using `Array.filter()`**:
      
   const numbers = [1, 2, 3, 4, 5];
   const even = numbers.filter(num => num % 2 === 0);
   console.log(even); // Output: [2, 4]
     

3. **Custom Higher-Order Function**:
      
   function multiplier(factor) {
       return function(number) {
           return number * factor;
       };
   }

   const double = multiplier(2);
   console.log(double(5)); // Output: 10
     

---

## Callback Functions

A **callback function** is a function passed as an argument to another function to be executed later.

### Examples:
1. **Basic Callback Example**:
      
   function greet(name, callback) {
       console.log(`Hello, ${name}!`);
       callback();
   }

   greet("Aliyan", () => console.log("Welcome to  !"));
     

2. **Using `setTimeout`**:
      
   setTimeout(() => {
       console.log("This message appears after 2 seconds");
   }, 2000);
     

3. **Event Listener Callback**:
      
   document.getElementById("btn").addEventListener("click", () => {
       console.log("Button clicked!");
   });
     

---

## Promises

A **Promise** represents a value that may be available now, or in the future, or never.

### Examples:
1. **Basic Promise Example**:
      
   const promise = new Promise((resolve, reject) => {
       let success = true;
       success ? resolve("Task completed!") : reject("Task failed!");
   });

   promise
       .then(result => console.log(result))
       .catch(error => console.error(error));
     

2. **Fetching Data with `fetch`**:
      
   fetch("https://api.example.com/data")
       .then(response => response.json())
       .then(data => console.log(data))
       .catch(error => console.error(error));
     

3. **Chaining Promises**:
      
   const asyncTask = value => new Promise(resolve => resolve(value + 10));

   asyncTask(5)
       .then(result => result * 2)
       .then(final => console.log(final)); // Output: 30
     

---

## Exponentiation Operator (`**`)

The **exponentiation operator** (`**`) is used to raise a number to the power of another.

### Examples:
1. **Basic Usage**:
      
   console.log(2 ** 3); // Output: 8
     

2. **Using with Variables**:
      
   let base = 4;
   let exponent = 2;
   console.log(base ** exponent); // Output: 16
     

3. **Math.pow Alternative**:
      
   console.log(Math.pow(3, 3)); // Output: 27
   console.log(3 ** 3); // Output: 27
     

---

### NEXT CLASS TOPIC


## Classes

**Classes** are templates for creating objects. They encapsulate data and methods.

### Examples:
1. **Basic Class**:
      
   class Animal {
       constructor(name) {
           this.name = name;
       }

       speak() {
           console.log(`${this.name} makes a noise.`);
       }
   }

   const dog = new Animal("Dog");
   dog.speak();
     

2. **Inheritance**:
      
   class Animal {
       constructor(name) {
           this.name = name;
       }

       speak() {
           console.log(`${this.name} makes a noise.`);
       }
   }

   class Dog extends Animal {
       speak() {
           console.log(`${this.name} barks.`);
       }
   }

   const dog = new Dog("Rex");
   dog.speak();
     

3. **Static Methods**:
      
   class MathUtils {
       static add(a, b) {
           return a + b;
       }
   }

   console.log(MathUtils.add(5, 3)); // Output: 8
     

---

## Ternary Operator

The **ternary operator** is a shorthand for `if-else` conditions.

### Examples:
1. **Basic Example**:
      
   let age = 18;
   let canVote = age >= 18 ? "Yes" : "No";
   console.log(canVote); // Output: Yes
     

2. **Nested Ternary**:
      
   let score = 85;
   let grade = score > 90 ? "A" : score > 80 ? "B" : "C";
   console.log(grade); // Output: B
     

3. **Using with Functions**:
      
   const getFee = isMember => (isMember ? "$2.00" : "$10.00");
   console.log(getFee(true)); // Output: $2.00
   console.log(getFee(false)); // Output: $10.00
     

---

## Optional Chaining (`?.`)

The **optional chaining operator** (`?.`) allows accessing properties without causing errors if the value is `null` or `undefined`.

### Examples:
1. **Accessing Nested Properties**:
      
   const user = {
       profile: {
           name: "Aliyan",
       },
   };

   console.log(user.profile?.name); // Output: Aliyan
   console.log(user.address?.city); // Output: undefined
     

2. **Accessing Methods**:
      
   const user = {
       greet() {
           return "Hello!";
       },
   };

   console.log(user.greet?.()); // Output: Hello!
   console.log(user.farewell?.()); // Output: undefined
     

3. **Optional Chaining with Arrays**:
      
   const users = [{ name: "Aliyan" }, null];
   console.log(users[1]?.name); // Output: undefined
     

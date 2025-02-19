/// JavaScript Data Types

// ------------------ Primitive Data Types ------------------
// Immutable, stored by value

// Numbers (integer & floating-point)
let age = 25;
let price = 99.99;
console.log(typeof age, age); // number 25
console.log(typeof price, price); // number 99.99

// Strings
let firstName = "John Doe";
console.log(typeof firstName, firstName); // string John Doe

let greeting = `Hola ${firstName}, tu color preferido es el verde`; // Template Literals
console.log(greeting); 

// Booleans
let isAdult = true;
console.log(typeof isAdult, isAdult); // boolean true

// Type Coercion in JavaScript (Dynamic types)
let x;       // x is undefined
x = 5;       // x is a Number
x = "John";  // x is a String

console.log("5" + 3);  // "53" (Number 3 converted to String)
console.log("5" - 3);  // 2   (String "5" converted to Number)
console.log("5" * 2);  // 10  (String "5" converted to Number)
console.log("10" / "2"); // 5 (Both strings converted to numbers)

console.log(5 + true);  // 6 (true converted to 1)
console.log(5 + false); // 5 (false converted to 0)

console.log("10" == 10); // true (loose equality converts "10" to Number)
console.log("10" === 10); // false (strict equality, no type conversion)

// Type Conversion in JavaScript
let str = "42";
console.log(Number(str)); // 42 (Converted to number)

let num = 100;
console.log(String(num)); // "100" (Converted to string)

console.log(Boolean(1));  // true
console.log(Boolean(0));  // false


// Undefined (variable declared but not assigned a value)
let unassignedVar;
console.log(typeof unassignedVar, unassignedVar); // undefined undefined

// Null (intentional empty value)
let emptyValue = null;
console.log(typeof emptyValue, emptyValue); // object null (JavaScript quirk)


// ------------------ Non-Primitive Data Types ------------------
// Mutable, stored by reference

// JSON Object (key-value pairs)
let person = {
  name: 'Alice',
  age: 30,
  job: 'developer',
  isMarried: false
};
console.log(typeof person, person); // object { name: 'Alice', age: 30 }

const { personName, personAge, personjob, personisMarried } = person; // Destructuring
console.log(typeof personName, personAge, personjob, personisMarried);


// Arrays (special object storing multiple values)
let colors = ["red", "green", "blue"];
console.log(typeof colors, colors); // object [ 'red', 'green', 'blue' ]

const [color1, color2] = colors; // Destructuring
console.log(color1, color2);


// Functions (special object storing executable code)
function greet ( name ) {
  return `Hi, I'm ${name}`;
}
console.log(typeof greet, greet('Alice')); // function "Hi, I'm Alice"

// Function arrow
const greetArrow = (name) => `Hi, I'm ${name}`;
console.log(typeof greetArrow, greetArrow('Alice')); // function "Hi, I'm Alice"


// Date (handling time & date)
let today = new Date();
console.log(typeof today, today); // object current date and time

// Set (collection of unique values)
let set = new Set([1, 2, 3, 3, 2]);
console.log(typeof set, set); // object Set { 1, 2, 3 }

//Map (key-value pairs with any type of key)
let map = new Map();
map.set("name", "Bob");
console.log(typeof map, map); // object Map { 'name' => 'Bob' }
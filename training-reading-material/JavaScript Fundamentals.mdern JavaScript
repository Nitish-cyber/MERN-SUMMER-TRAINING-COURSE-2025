# 🟨 JavaScript Fundamentals → Modern JavaScript
## Zero Hunger Platform · Bootcamp Training Manual (Deep Dive Edition)
 **Mode:** Live Coding + Hands-On Practice
> **Project Context:** *Zero Hunger* — a platform connecting food donors, NGOs, volunteers & beneficiaries.
> **Format:** Every concept comes with → real-life context · examples with **expected output** · 🧠 whiteboard explanation · ⚠️ common mistakes · 🏋️ exercises · 🐞 debugging challenges · 💬 interview questions. The module ends with **one complete mini-project** using everything.

---

## 🎯 Learning Objectives

By the end of this module you will be able to:

- Understand JavaScript fundamentals and how JS runs in the browser
- Write reusable functions and reason about scope
- Work confidently with arrays and objects
- Use modern ES6+ features (arrow functions, destructuring, spread)
- Understand asynchronous programming (callbacks → promises → async/await)
- Consume APIs using the Fetch API
- Use Git and GitHub professionally
- **Build a complete mini-project: the Zero Hunger Donation Manager**

---

## 🗺️ Module Map

| # | Module | Core Idea |
|---|--------|-----------|
| 1 | Introduction to JavaScript | What JS is & how to run it |
| 2 | Variables | Storing data: `var` / `let` / `const` |
| 3 | Data Types | Strings, numbers, booleans, arrays, objects |
| 4 | Operators | Arithmetic, comparison, logical |
| 5 | Functions | Reusable blocks of logic |
| 6 | Arrays | Ordered lists + `map` / `filter` |
| 7 | Objects | Labelled bundles of data |
| 8 | Arrow Functions | Concise modern functions |
| 9 | Destructuring | Unpacking arrays & objects |
| 10 | Spread Operator | Copying & merging |
| 11 | Callbacks | Functions passed to functions |
| 12 | Promises | Values that arrive later |
| 13 | Async / Await | Clean asynchronous code |
| 14 | Fetch API | Talking to servers |
| 15 | Git & GitHub | Saving & sharing code |
| 🏆 | **Mini-Project** | **Zero Hunger Donation Manager** |

---

# 📦 Module 1: Introduction to JavaScript

## What is JavaScript?

JavaScript (JS) is the programming language of the web. It makes pages **interactive** — responding to clicks, validating forms, updating content without a reload, and talking to servers.

> **🍱 Zero Hunger context:** When a donor fills the "Donate Food" form and clicks **Submit Donation**, JavaScript checks that the quantity isn't empty, formats the data, and sends it to the server — *before* anything is saved. No JS = a dead, static page.

## 🧠 Whiteboard Explanation

```
   ┌─────────────┐     types & clicks      ┌──────────────┐
   │   USER       │ ──────────────────────▶ │   BROWSER     │
   └─────────────┘                          │  (runs JS)    │
                                             └──────┬───────┘
                          JS validates / reacts /   │ sends data
                          updates the page           ▼
                                             ┌──────────────┐
                                             │   SERVER      │
                                             └──────────────┘
```
JavaScript runs **inside the browser** (and later, on the server with Node.js). The browser has a built-in **JS engine** (V8 in Chrome) that reads your code top to bottom and executes it.

## Running JavaScript

**Internal** (inside an HTML file):
```html
<script>
  console.log("Hello World");
</script>
```

**External** (separate file — the professional way):
```html
<script src="app.js"></script>
```

`console.log()` prints to the browser's **Console** (open DevTools → Console). It's your most-used debugging tool.

### Example — Expected Output
```javascript
console.log("Welcome to Zero Hunger Platform");
```
```
▶ Welcome to Zero Hunger Platform
```

## ⚠️ Common Mistakes
- Forgetting to open DevTools → "my code does nothing" (it ran; you just didn't see the console).
- Putting `<script src>` in the `<head>` and trying to touch page elements that haven't loaded yet — put scripts at the end of `<body>` or use `defer`.
- Typos like `console.long()` — JS won't autocorrect; read the error.

## 🏋️ Exercises
1. Print `"Zero Hunger started"` to the console.
2. Print three separate lines: a donor name, a city, and a food item.
3. Make an external `app.js`, link it to an HTML page, and log a message.
4. Cause an error on purpose (`consle.log("hi")`) and read what the console says.

## 🐞 Debugging Challenge
This logs nothing. Why?
```html
<head>
  <script>document.title = "Zero Hunger";</script>
</head>
```
> **Hint:** order of loading. (The script runs fine here actually — but try selecting a `<body>` element from the head and watch it fail. Move the script and compare.)

## 💬 Interview Questions
- What is JavaScript used for on a web page?
- Difference between internal and external JavaScript?
- What does `console.log()` do, and where does its output appear?

---

# 📦 Module 2: Variables

## Why Variables?
A **variable** is a named container for data. In Zero Hunger you constantly store things: a **donor name**, a **food quantity**, an **NGO name**, a **volunteer status**.

## The three ways to declare

### `var` (old — avoid)
```javascript
var donorName = "John";
console.log(donorName);
```
```
▶ John
```
**Problems:** can be redeclared (silent bugs), and it's *function-scoped* (leaks out of blocks).

### `let` (use when the value changes)
```javascript
let quantity = 50;
quantity = 60;       // reassigning is fine
console.log(quantity);
```
```
▶ 60
```

### `const` (use by default — value can't be reassigned)
```javascript
const platformName = "Zero Hunger";
// platformName = "Other";  ❌ TypeError: Assignment to constant variable
```

## 🧠 Whiteboard Explanation
```
const  →  "this label never points to a new value"   (default choice)
let    →  "this label may point to a new value later"
var    →  legacy. Pretend it doesn't exist.
```
Rule of thumb: **`const` until you're forced to use `let`.** You'll rarely need `let`, and almost never `var`.

> ⚠️ `const` with an **object/array** still lets you change *contents* — you just can't reassign the variable itself:
> ```javascript
> const donor = { name: "ABC" };
> donor.name = "XYZ";   // ✅ allowed (mutating contents)
> donor = {};           // ❌ not allowed (reassigning)
> ```

## Example — Expected Output
```javascript
let donorName = "ABC Restaurant";
let foodPackets = 100;
let city = "Pune";

console.log(donorName);
console.log(foodPackets);
console.log(city);
```
```
▶ ABC Restaurant
▶ 100
▶ Pune
```

## ⚠️ Common Mistakes
- Using `var` and getting surprised by scope leaks.
- Trying to reassign a `const`.
- Naming variables vaguely (`x`, `data2`). Prefer `foodPackets`, `ngoName`.
- Forgetting JS is **case-sensitive**: `donorName` ≠ `DonorName`.

## 🏋️ Exercises
1. Create variables for: **NGO Name**, **Volunteer Name**, **Food Quantity**, **Donation Status**. Log each.
2. Declare a `const city = "Pune"`, then try to reassign it. What error appears?
3. Create a `let total = 0`, add 25 to it twice, and log the result.
4. Make a `const donation = { qty: 50 }` and change `qty` to 75. Does it work? Explain why.
5. Rename a badly-named variable `a = "Helping Hands"` to something meaningful.

## 🐞 Debugging Challenge
```javascript
const status = "Available";
status = "Picked Up";
console.log(status);
```
> **What happens, and how do you fix it while keeping the intent?**
> *(Answer: `const` can't be reassigned → use `let`.)*

## 💬 Interview Questions
- Difference between `var`, `let`, and `const`?
- Can you change a property of a `const` object? Why/why not?
- What is variable scope? What's the difference between block and function scope?

---

# 📦 Module 3: Data Types

JavaScript values come in types. The ones you'll use constantly in Zero Hunger:

| Type | Example | Zero Hunger use |
|------|---------|-----------------|
| **String** | `"ABC Restaurant"` | donor/NGO names, cities |
| **Number** | `50` | food quantity, packets |
| **Boolean** | `true` / `false` | is the food available? verified? |
| **Array** | `["Rice","Bread","Milk"]` | list of food items / NGOs |
| **Object** | `{ name:"ABC", city:"Pune" }` | a full donation record |
| **null / undefined** | `null` | "no value yet" |

### Examples
```javascript
let donor = "ABC Restaurant";        // String
let quantity = 50;                   // Number
let isAvailable = true;              // Boolean
let foodItems = ["Rice","Bread","Milk"]; // Array
let donorObj = { name:"ABC Restaurant", city:"Pune" }; // Object
```

## 🧠 Whiteboard Explanation
```
Primitive types (copied by VALUE):   string, number, boolean, null, undefined
Reference types (copied by REFERENCE): array, object

let a = 5; let b = a; b = 9;   → a is still 5   (independent copies)
let x = {q:5}; let y = x; y.q = 9; → x.q is now 9 (SAME object!)
```
This single distinction explains a *huge* class of beginner bugs ("I changed one and the other changed too").

## Real Project Example — Expected Output
```javascript
const donation = {
  donorName: "ABC Restaurant",
  quantity: 100,
  foodType: "Rice",
  status: "Available"
};
console.log(donation.foodType);
console.log(typeof donation.quantity);
```
```
▶ Rice
▶ number
```

## ⚠️ Common Mistakes
- Confusing `"50"` (string) with `50` (number). `"50" + 1` → `"501"`, not `51`!
- Assuming `null` and `undefined` are the same. `null` = intentionally empty; `undefined` = never assigned.
- Checking type with guesswork instead of `typeof`.

## 🏋️ Exercises
1. Create one variable of **each** type listed in the table.
2. Use `typeof` on five different values and log the results.
3. Predict the output of `"5" + 5` and `5 + 5`, then run them.
4. Build a `donation` object with 5 properties and log any two.
5. Create an array of 4 food items and log its `.length`.

## 🐞 Debugging Challenge
```javascript
let quantity = "100";
let extra = 50;
console.log(quantity + extra);   // expected 150?
```
> **Why is the output `"10050"` and not `150`? Fix it so the math works.**
> *(Answer: `quantity` is a string → use `Number(quantity)` or store it as a number.)*

## 💬 Interview Questions
- Name the primitive data types in JavaScript.
- Difference between `null` and `undefined`?
- What's the difference between value types and reference types?
- What does `typeof []` return, and why might that surprise you? *(`"object"`)*

---

# 📦 Module 4: Operators

Operators combine or compare values.

### Arithmetic
```javascript
let total = 20 + 30;       // 50
let remaining = 100 - 25;  // 75
let doubled = 50 * 2;      // 100
let perBox = 100 / 4;      // 25
let leftover = 100 % 3;    // 1  (remainder)
```

### Comparison (always returns a boolean)
```javascript
console.log(10 > 5);     // ▶ true
console.log(10 === 10);  // ▶ true
console.log(10 === "10"); // ▶ false  (different types)
console.log(10 == "10");  // ▶ true   (loose — avoid!)
```

### Logical
```javascript
let isDonor = true;
let verified = true;
console.log(isDonor && verified); // ▶ true  (AND: both must be true)
console.log(isDonor || false);    // ▶ true  (OR: at least one true)
console.log(!isDonor);            // ▶ false (NOT: flips it)
```

## 🧠 Whiteboard Explanation
```
===  strict equality  → compares value AND type   ✅ ALWAYS use this
==   loose equality    → converts types first      ❌ avoid (surprises)

"5" == 5    → true   (coerced)     "5" === 5   → false
0  == false → true   (coerced)     0  === false → false
```
> **Golden rule:** always use `===` and `!==`. Forget `==` exists.

> **🍱 Zero Hunger context:** Decide if a donation qualifies for priority pickup:
> ```javascript
> let qty = 120;
> let isPerishable = true;
> let priority = qty > 100 && isPerishable;
> console.log(priority); // ▶ true
> ```

## ⚠️ Common Mistakes
- Using `==` and getting coercion bugs.
- Confusing `=` (assignment) with `===` (comparison) inside conditions.
- Forgetting `%` (modulo) exists — it's perfect for "every Nth" logic.

## 🏋️ Exercises
1. Compute total food packets from 3 donations using `+`.
2. Check whether `foodQuantity > 50` for several values.
3. Predict and verify: `"5" == 5`, `"5" === 5`, `0 == false`.
4. Write a logical expression: donation is valid if `qty > 0 && donorName !== ""`.
5. Use `%` to check if a number of packets divides evenly into boxes of 12.

## 🐞 Debugging Challenge
```javascript
let qty = 50;
if (qty = 100) {            // intended to CHECK, not set
  console.log("Large donation");
}
console.log(qty);
```
> **Why does it always print "Large donation" and why is `qty` now 100?**
> *(Answer: `=` assigns. Use `===`.)*

## 💬 Interview Questions
- Difference between `==` and `===`?
- What does `%` (modulo) do?
- What do `&&`, `||`, and `!` each return?
- What is type coercion? Give an example.

---

# 📦 Module 5: Functions

## Why Functions?
A **function** is a reusable block of logic: give it inputs (**parameters**), it does work and `return`s an output. In Zero Hunger you'll wrap repeated tasks — validating a donation, formatting a message, calculating packets — into functions.

### Traditional Function — Expected Output
```javascript
function calculateFoodPackets(qty){
  return qty * 2;
}
console.log(calculateFoodPackets(50));
```
```
▶ 100
```

### Function returning a string
```javascript
function donorInfo(name){
  return `Welcome ${name}`;   // template literal with backticks
}
console.log(donorInfo("ABC Restaurant"));
```
```
▶ Welcome ABC Restaurant
```

### Function returning an object (real project)
```javascript
function createDonation(foodName, quantity){
  return {
    foodName,        // shorthand for foodName: foodName
    quantity
  };
}
console.log(createDonation("Rice", 100));
```
```
▶ { foodName: 'Rice', quantity: 100 }
```

## 🧠 Whiteboard Explanation
```
            INPUTS                     OUTPUT
   ┌────────────────────┐         ┌───────────┐
   │  createDonation(   │         │  returns  │
   │    "Rice", 100 )   │ ──────▶ │  an object│
   └────────────────────┘         └───────────┘
        parameters                   return value

  - "return" hands a value BACK to whoever called the function.
  - No return → the function gives back `undefined`.
  - console.log() PRINTS; return GIVES BACK. They are NOT the same.
```

## ⚠️ Common Mistakes
- Confusing `console.log` with `return`. A function that only logs returns `undefined`.
- Forgetting to **call** the function (`createDonation` vs `createDonation()`).
- Forgetting `return`, then wondering why the result is `undefined`.
- Using quotes `' '` for template literals instead of backticks `` ` ``.

## 🏋️ Exercises
1. Write `calculatePackets(qty)` returning `qty * 4`.
2. Write `greetDonor(name)` returning `"Thank you, <name>!"`.
3. Write `createNGO(name, city)` returning an object with both.
4. Write `isLargeDonation(qty)` returning `true` if `qty > 50`.
5. Write `totalQuantity(a, b, c)` returning the sum of three donations.

## 🐞 Debugging Challenge
```javascript
function getMessage(name){
  console.log(`Welcome ${name}`);
}
let msg = getMessage("ABC");
console.log(msg);     // ▶ ???
```
> **Why is `msg` `undefined`? Fix the function so `msg` holds the text.**
> *(Answer: it logs but doesn't `return`. Change `console.log` to `return`.)*

## 💬 Interview Questions
- Difference between a parameter and an argument?
- What's the difference between `return` and `console.log`?
- What does a function return if there's no `return` statement?
- What is a template literal and when do you use it?

---

# 📦 Module 6: Arrays

An **array** is an ordered list. In Zero Hunger: a list of NGOs, food items, or donation records.

### Creating & Accessing
```javascript
let ngos = ["Helping Hands", "Food Care", "Smile NGO"];
console.log(ngos[0]);        // ▶ Helping Hands  (index starts at 0!)
console.log(ngos.length);    // ▶ 3
```

### Adding / Removing
```javascript
ngos.push("Hope Foundation");  // add to end
ngos.pop();                    // remove last
```

### `.map()` — transform every item into a new array
```javascript
let names = ngos.map(item => item.toUpperCase());
console.log(names);
```
```
▶ [ 'HELPING HANDS', 'FOOD CARE', 'SMILE NGO' ]
```

### `.filter()` — keep only items that pass a test
```javascript
let quantities = [20, 50, 100, 10];
let largeDonations = quantities.filter(q => q > 30);
console.log(largeDonations);
```
```
▶ [ 50, 100 ]
```

### Real Project Example — Expected Output
```javascript
const donations = [
  { food: "Rice",  qty: 100 },
  { food: "Bread", qty: 20 }
];
const available = donations.filter(item => item.qty > 50);
console.log(available);
```
```
▶ [ { food: 'Rice', qty: 100 } ]
```

## 🧠 Whiteboard Explanation
```
ARRAY:   index →  0          1           2
              ["Rice",   "Bread",    "Milk"]

.map()    → returns a NEW array, SAME length, each item transformed
.filter() → returns a NEW array, fewer/equal items, originals kept as-is
.forEach()→ just loops, returns nothing (use for side-effects)

KEY: map & filter DON'T change the original array. They return new ones.
```
`.map()` is *exactly* how React will render lists later — master it now.

## ⚠️ Common Mistakes
- Off-by-one: the first element is index **0**, last is `length - 1`.
- Forgetting `.map`/`.filter` **return** new arrays — you must assign the result.
- Forgetting to `return` inside a multi-line `.map(item => { ... })` callback.
- Using `.map()` when you don't need a new array (use `.forEach()` for side effects).

## 🏋️ Exercises
1. Create an array of 5 food items; log the 1st and last using `.length`.
2. Use `.push()` to add two NGOs, `.pop()` to remove one.
3. `.map()` an array of quantities to double each value.
4. `.filter()` donations to keep only `qty >= 50`.
5. From `donations`, use `.map()` to get an array of just the food names.

## 🐞 Debugging Challenge
```javascript
const qtys = [10, 60, 30, 90];
const big = qtys.filter(q => { q > 50; });
console.log(big);    // ▶ ???
```
> **Why is `big` an empty array `[]`? Fix it.**
> *(Answer: the arrow uses `{}` block but never `return`s. Use `q => q > 50` or add `return`.)*

## 💬 Interview Questions
- Difference between `.map()` and `.filter()`?
- Do `.map()` / `.filter()` modify the original array?
- What index is the first element of an array?
- Difference between `.forEach()` and `.map()`?
- How would you get the number of items in an array?

---

# 📦 Module 7: Objects

An **object** stores related data as **key: value** pairs. A donation, a donor, an NGO — all natural objects.

```javascript
const donor = {
  name: "ABC Restaurant",
  city: "Pune",
  quantity: 100
};
```

### Access (two ways)
```javascript
console.log(donor.name);       // ▶ ABC Restaurant  (dot notation)
console.log(donor["city"]);    // ▶ Pune            (bracket notation)
```

### Update / Add
```javascript
donor.city = "Mumbai";     // update existing
donor.verified = true;     // add new property
console.log(donor);
```
```
▶ { name: 'ABC Restaurant', city: 'Mumbai', quantity: 100, verified: true }
```

## 🧠 Whiteboard Explanation
```
OBJECT = a labelled box of facts

   donor ┌───────────────────────────┐
         │ name     : "ABC Restaurant"│
         │ city     : "Pune"          │
         │ quantity : 100             │
         └───────────────────────────┘

dot notation:     donor.city        (when you know the key name)
bracket notation: donor["city"]     (when the key is in a variable)
```

> **🍱 Zero Hunger context:** Arrays + objects together model your whole dataset —
> *an array of donation objects* is the core data structure of the entire platform:
> ```javascript
> const donations = [
>   { donor: "ABC", food: "Rice",  qty: 100, status: "Available" },
>   { donor: "XYZ", food: "Bread", qty: 30,  status: "Picked Up" }
> ];
> ```

## ⚠️ Common Mistakes
- Using dot notation with a variable key (`donor.key` looks for a literal "key"). Use brackets: `donor[key]`.
- Forgetting commas between properties.
- Trying to access a property that doesn't exist → returns `undefined` (not an error).

## 🏋️ Exercises
1. Create a `donation` object with 4 properties; log two with dot notation.
2. Update one property and add a new one (`status: "Available"`).
3. Access a property using bracket notation with a key stored in a variable.
4. Build an array of 3 donation objects and log the second one's food.
5. Write a function `describeDonor(obj)` returning `"<name> from <city>"`.

## 🐞 Debugging Challenge
```javascript
const donor = { name: "ABC", city: "Pune" };
const field = "city";
console.log(donor.field);   // ▶ ???
```
> **Why is this `undefined`? How do you correctly read the value of `field`?**
> *(Answer: `donor.field` looks for a key literally named "field". Use `donor[field]`.)*

## 💬 Interview Questions
- Difference between dot and bracket notation? When must you use brackets?
- What happens when you access a property that doesn't exist?
- How do you add a new property to an existing object?
- How would you model a list of donations in JavaScript?

---

# 📦 Module 8: Arrow Functions

Arrow functions are a shorter, modern way to write functions. You'll see them everywhere in `.map`, `.filter`, callbacks, and React.

### Traditional vs Arrow
```javascript
// Traditional
function greet(){
  console.log("Hello");
}

// Arrow
const greet = () => {
  console.log("Hello");
};
```

### With parameters & implicit return
```javascript
const multiply = (num) => num * 2;   // no braces, no `return` needed
console.log(multiply(25));           // ▶ 50
```

### Real Project Example
```javascript
const donations = [
  { food: "Rice",  qty: 100 },
  { food: "Bread", qty: 20 }
];
const availableFood = donations.filter(item => item.qty > 50);
console.log(availableFood);
```
```
▶ [ { food: 'Rice', qty: 100 } ]
```

## 🧠 Whiteboard Explanation
```
function add(a,b){ return a+b; }      ← traditional
const add = (a,b) => a + b;            ← arrow, IMPLICIT return (one line)
const add = (a,b) => { return a+b; };  ← arrow, EXPLICIT return (braces)

  one param  →  parentheses optional:  x => x * 2
  no params  →  empty parens required: () => 5
  returning an OBJECT → wrap in parens: () => ({ qty: 5 })
```

> ⚠️ **Returning an object literal trap:**
> ```javascript
> const make = () => { qty: 5 };    // ❌ {} read as a code block → returns undefined
> const make = () => ({ qty: 5 });  // ✅ parentheses tell JS "this is an object"
> ```

## ⚠️ Common Mistakes
- Forgetting `()` around an object you want to return.
- Adding `{ }` and then forgetting `return` (implicit return only works *without* braces).
- Overusing arrows for object methods (arrows don't have their own `this`).

## 🏋️ Exercises
1. Convert `function square(n){ return n*n; }` to an arrow function.
2. Write an arrow `triple = n => n * 3`; log `triple(10)`.
3. Use an arrow inside `.map()` to uppercase a list of cities.
4. Write an arrow that returns an object `{ food, qty }` from two params.
5. Write an arrow with no parameters that returns the string `"Zero Hunger"`.

## 🐞 Debugging Challenge
```javascript
const createDonation = (food, qty) => { food: food, qty: qty };
console.log(createDonation("Rice", 100));   // ▶ ???
```
> **Why is the output `undefined`? Fix it.**
> *(Answer: braces are read as a block. Wrap the object in parentheses: `=> ({ food, qty })`.)*

## 💬 Interview Questions
- Difference between a traditional and an arrow function?
- When can you omit the `return` keyword in an arrow function?
- How do you return an object directly from an arrow function?
- Why are arrow functions popular for callbacks?

---

# 📦 Module 9: Destructuring

Destructuring unpacks values from objects or arrays into individual variables — in one clean line.

### Object Destructuring
```javascript
const donor = { name: "ABC", city: "Pune" };
const { name, city } = donor;
console.log(name);   // ▶ ABC
console.log(city);   // ▶ Pune
```

### Array Destructuring
```javascript
const foods = ["Rice", "Bread", "Milk"];
const [firstFood, secondFood] = foods;
console.log(firstFood);   // ▶ Rice
console.log(secondFood);  // ▶ Bread
```

## 🧠 Whiteboard Explanation
```
WITHOUT destructuring:           WITH destructuring:
  const name = donor.name;         const { name, city } = donor;
  const city = donor.city;

Objects → match by KEY NAME   →  { name, city }   (order doesn't matter)
Arrays  → match by POSITION   →  [ first, second ] (order matters!)
```

> **🍱 Zero Hunger context:** Destructuring shines in function parameters —
> ```javascript
> function showDonation({ food, qty }) {
>   return `${qty} units of ${food}`;
> }
> console.log(showDonation({ food: "Rice", qty: 100 })); // ▶ 100 units of Rice
> ```
> You'll do this constantly in React: `function DonationCard({ donor, qty }) {...}`

## ⚠️ Common Mistakes
- Object destructuring uses the **exact key name** — `const { Name } = donor` (capital N) gives `undefined`.
- Array destructuring is **positional** — you can't skip without commas: `const [, second] = foods`.
- Forgetting you can set defaults: `const { city = "Unknown" } = donor`.

## 🏋️ Exercises
1. Destructure `name` and `quantity` from a donation object.
2. Destructure the first two items from a food array.
3. Use a default value: destructure `status` defaulting to `"Pending"`.
4. Write a function that takes `{ food, qty }` and returns a sentence.
5. Skip the first array item and grab the second using a comma.

## 🐞 Debugging Challenge
```javascript
const donor = { name: "ABC", city: "Pune" };
const { Name } = donor;
console.log(Name);   // ▶ ???
```
> **Why `undefined`? Fix it.**
> *(Answer: keys are case-sensitive. Use `{ name }`.)*

## 💬 Interview Questions
- What is destructuring? Why is it useful?
- Difference between object and array destructuring?
- How do you set a default value while destructuring?
- How would you destructure inside a function's parameters?

---

# 📦 Module 10: Spread Operator (`...`)

The spread operator expands an array or object. It's the key to **copying and merging without mutating** the original — a habit you'll need everywhere in React.

### Spreading Arrays
```javascript
const food1 = ["Rice", "Milk"];
const food2 = ["Bread", "Fruit"];
const allFood = [...food1, ...food2];
console.log(allFood);
```
```
▶ [ 'Rice', 'Milk', 'Bread', 'Fruit' ]
```

### Spreading Objects (copy + override)
```javascript
const donor = { name: "ABC" };
const updated = { ...donor, city: "Pune" };
console.log(updated);
```
```
▶ { name: 'ABC', city: 'Pune' }
```

## 🧠 Whiteboard Explanation
```
[...arr]        → a SHALLOW COPY of the array
[...a, ...b]    → MERGE two arrays
{...obj}        → a SHALLOW COPY of the object
{...obj, k: v}  → copy, then OVERRIDE/ADD key k

WHY IT MATTERS: never mutate the original. Build a NEW value.
  const claimed = { ...donation, status: "Claimed" };
  // donation is untouched; claimed is the updated version
```

> **🍱 Zero Hunger context:** Updating a donation's status immutably:
> ```javascript
> const donation = { food: "Rice", qty: 100, status: "Available" };
> const pickedUp = { ...donation, status: "Picked Up" };
> console.log(donation.status);  // ▶ Available  (original safe)
> console.log(pickedUp.status);  // ▶ Picked Up
> ```

## ⚠️ Common Mistakes
- Order matters in objects: `{ status: "X", ...donation }` lets `donation` *overwrite* status. Put overrides **after** the spread.
- Spread is a **shallow** copy — nested objects/arrays are still shared references.
- Confusing spread (`...` expanding) with rest (`...` collecting in params).

## 🏋️ Exercises
1. Merge two arrays of food items into one.
2. Copy a donor object and add a `verified: true` property.
3. Copy an array and add an item to the end without `.push()`.
4. Override the `city` of a copied donor object to `"Mumbai"`.
5. Merge two donor objects; observe which wins on a shared key.

## 🐞 Debugging Challenge
```javascript
const donation = { food: "Rice", status: "Available" };
const updated = { status: "Claimed", ...donation };
console.log(updated.status);   // ▶ ???
```
> **Why is status still "Available"? Fix the merge so it becomes "Claimed".**
> *(Answer: the spread comes after and overwrites. Put `...donation` first, then `status: "Claimed"`.)*

## 💬 Interview Questions
- What does the spread operator do?
- How do you copy an object/array using spread?
- Why is "don't mutate, create new" important (hint: React)?
- Difference between spread and rest operators?
- Is spread a deep or shallow copy?

---

# 📦 Module 11: Callbacks

A **callback** is a function passed *into* another function, to be called later. It's the foundation of asynchronous JavaScript.

```javascript
function processDonation(callback){
  console.log("Donation Received");
  callback();                 // call the passed-in function
}

processDonation(() => {
  console.log("NGO Notified");
});
```
```
▶ Donation Received
▶ NGO Notified
```

## 🧠 Whiteboard Explanation
```
processDonation( () => {...} )
        │            │
        │            └── the CALLBACK (a function given as an argument)
        └── runs its own code, THEN calls the callback

Why? So the caller decides what happens NEXT — e.g. after a donation
is received, the caller chooses to notify an NGO, or log, or anything.
```
Functions being passable as values (Module 5) is *why* callbacks work.

> **🍱 Zero Hunger context:** "When the pickup is done, then run this":
> ```javascript
> function schedulePickup(onDone){
>   console.log("Pickup scheduled...");
>   onDone("Volunteer assigned");
> }
> schedulePickup(msg => console.log(msg)); // ▶ Pickup scheduled... / Volunteer assigned
> ```

## ⚠️ Common Mistakes
- Calling the function instead of passing it: `processDonation(notify())` runs `notify` immediately and passes its *result*. Pass `processDonation(notify)` (no parens) or wrap in an arrow.
- Deeply nested callbacks → "callback hell" (Promises fix this — next module).

## 🏋️ Exercises
1. Write `processDonation(callback)` that logs then calls the callback.
2. Pass a callback that logs `"Receipt generated"`.
3. Write `afterPickup(cb)` that calls `cb("Delivered")`; log the message.
4. Pass a named function (not an arrow) as a callback.
5. Chain two callbacks: receive → notify → log "done".

## 🐞 Debugging Challenge
```javascript
function notify(){ console.log("Notified"); }
function process(cb){ console.log("Processing"); cb(); }
process(notify());   // ▶ ???
```
> **Why does "Notified" print before "Processing", then it crashes? Fix it.**
> *(Answer: `notify()` runs immediately and passes `undefined` as `cb`. Pass `notify` without parentheses.)*

## 💬 Interview Questions
- What is a callback function?
- Why can JavaScript pass functions as arguments?
- What is "callback hell" and how is it solved?
- Difference between passing `fn` and `fn()` as an argument?

---

# 📦 Module 12: Promises

A **Promise** represents a value that will be ready *later* — success (**resolve**) or failure (**reject**). It's the cleaner successor to callbacks.

```javascript
const donationPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Donation Added");
  } else {
    reject("Failed");
  }
});
```

### Consuming a Promise
```javascript
donationPromise
  .then(data => console.log(data))    // runs on resolve
  .catch(err => console.log(err));    // runs on reject
```
```
▶ Donation Added
```

## 🧠 Whiteboard Explanation
```
A Promise has 3 states:
   pending  ──► fulfilled  (resolve called)  →  .then() runs
            └─► rejected   (reject called)   →  .catch() runs

   new Promise((resolve, reject) => { ... })
                  │         │
            call on success  call on failure

   .then(...)  handles success
   .catch(...) handles failure
   .finally(...) runs either way (cleanup)
```

> **🍱 Zero Hunger context:** "Try to save a donation; tell me if it worked":
> ```javascript
> function saveDonation(qty){
>   return new Promise((resolve, reject) => {
>     if (qty > 0) resolve(`Saved ${qty} packets`);
>     else reject("Invalid quantity");
>   });
> }
> saveDonation(100).then(console.log).catch(console.log); // ▶ Saved 100 packets
> ```

## ⚠️ Common Mistakes
- Forgetting `.catch()` → unhandled rejection errors.
- Forgetting to `return` the promise from a function (you can't `.then()` nothing).
- Thinking `.then()` runs immediately — it runs *after* the promise settles.

## 🏋️ Exercises
1. Create a promise that always resolves with `"Donation Added"`; log it.
2. Create a promise that rejects with `"Failed"`; catch and log it.
3. Write `saveDonation(qty)` returning a promise (resolve if `qty > 0`).
4. Add a `.finally()` that logs `"Operation complete"`.
5. Chain two `.then()`s, transforming the value between them.

## 🐞 Debugging Challenge
```javascript
function check(qty){
  new Promise((resolve) => resolve(qty > 0 ? "ok" : "bad"));
}
check(50).then(r => console.log(r));   // ▶ ??? crashes
```
> **Why does `.then` fail? Fix it.**
> *(Answer: the function never `return`s the promise. Add `return new Promise(...)`.)*

## 💬 Interview Questions
- What is a Promise? What are its three states?
- Difference between `.then()` and `.catch()`?
- What does `.finally()` do?
- Why were Promises introduced (what problem do they solve)?

---

# 📦 Module 13: Async / Await

`async/await` is syntax sugar over Promises that lets asynchronous code read like normal top-to-bottom code.

```javascript
async function getDonations(){
  return "Donations Loaded";    // an async function always returns a Promise
}

async function loadData(){
  const result = await getDonations();   // wait for the promise to settle
  console.log(result);
}
loadData();   // ▶ Donations Loaded
```

## 🧠 Whiteboard Explanation
```
async  → marks a function as asynchronous; it RETURNS A PROMISE
await  → pauses INSIDE an async function until the promise settles,
         then gives you the resolved value (no .then needed)

   .then() chain                 async/await
   getData()                     async function run(){
     .then(a => step2(a))    →     const a = await getData();
     .then(b => step3(b))          const b = await step2(a);
     .catch(handleError)           ...
                                   }   // wrap in try/catch for errors

  ✅ await only works INSIDE an async function.
```

### Always wrap in try/catch
```javascript
async function loadData(){
  try {
    const result = await getDonations();
    console.log(result);
  } catch (err) {
    console.log("Error:", err);
  }
}
```

> **🍱 Zero Hunger context:** read like a recipe — fetch donations, then NGOs, then render:
> ```javascript
> async function init(){
>   try {
>     const donations = await loadDonations();
>     const ngos = await loadNGOs();
>     console.log(donations, ngos);
>   } catch (e) { console.log("Failed to load", e); }
> }
> ```

## ⚠️ Common Mistakes
- Using `await` outside an `async` function → SyntaxError.
- Forgetting `try/catch` → unhandled errors.
- Awaiting in a loop sequentially when you could run in parallel with `Promise.all()`.
- Forgetting that an async function's return value is **wrapped in a Promise**.

## 🏋️ Exercises
1. Write an `async` function returning `"Loaded"`; call it and log via `.then`.
2. Rewrite a `.then()` chain using `await`.
3. Add `try/catch` around an `await` that might reject.
4. Await two functions in sequence and log both results.
5. Use `Promise.all([...])` to await two promises in parallel.

## 🐞 Debugging Challenge
```javascript
function getData(){ return Promise.resolve("data"); }
const result = await getData();   // ▶ ??? SyntaxError
console.log(result);
```
> **Why the SyntaxError? Fix it.**
> *(Answer: `await` is used at top level outside an async function. Wrap it in an `async function`.)*

## 💬 Interview Questions
- What does `async` do to a function's return value?
- Where can you use `await`?
- How do you handle errors with async/await?
- Difference between sequential `await`s and `Promise.all()`?
- Is async/await a replacement for Promises, or built on them?

---

# 📦 Module 14: Fetch API

`fetch()` makes HTTP requests from JavaScript — this is how the frontend talks to the Zero Hunger backend.

### `.then()` version
```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())          // parse JSON body
  .then(data => console.log(data));
```

### async/await version (preferred)
```javascript
async function fetchUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}
```

### Real Project Example
```javascript
async function getDonations(){
  try {
    const response = await fetch('/api/donations');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Could not load donations:", err);
  }
}
```

## 🧠 Whiteboard Explanation
```
fetch(url) ──► returns a Promise ──► RESPONSE object
                                         │
                       await res.json()  ▼  parse the body
                                      actual DATA

TWO awaits needed:
  1) await fetch(...)        → get the response
  2) await response.json()   → read & parse the body

⚠️ fetch only rejects on NETWORK failure — NOT on 404/500!
   You must check `response.ok` yourself.
```

## ⚠️ Common Mistakes
- Forgetting the **second** `await response.json()`.
- Assuming a 404/500 throws — it doesn't; check `response.ok`.
- Not wrapping in `try/catch`.
- CORS errors when calling a server that doesn't allow your origin (handled on the backend later).

## 🏋️ Exercises
1. Fetch users from the placeholder API and log them.
2. Rewrite a `.then()` fetch as async/await.
3. Add `try/catch` and a `response.ok` check.
4. Fetch and log only the first user's `name`.
5. Fetch `/api/donations` (mock) and `.map()` the result to food names.

## 🐞 Debugging Challenge
```javascript
async function load(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = response.json();      // forgot something?
  console.log(data);                 // ▶ Promise { <pending> }
}
```
> **Why does it log a pending Promise instead of the data? Fix it.**
> *(Answer: `response.json()` returns a Promise — you must `await` it.)*

## 💬 Interview Questions
- What does `fetch()` return?
- Why do you need two `await`s in a typical fetch?
- Does `fetch` reject on HTTP 404? How do you detect errors?
- What is `response.ok`?
- What is CORS (at a high level)?

---

# 📦 Module 15: Git & GitHub

Git is version control — save points (**commits**) for your code. GitHub is the cloud home where you share and collaborate.

### The core workflow
```bash
git init                          # start tracking a folder
git status                        # see what changed
git add .                         # stage all changes
git commit -m "Initial Commit"    # save a snapshot
git remote add origin REPO_URL    # connect to GitHub
git push -u origin main           # upload to GitHub
git pull origin main              # download latest changes
```

### Branching & merging (the team workflow)
```bash
git checkout -b feature-auth      # create + switch to a new branch
# ...do work, add, commit...
git checkout main                 # switch back to main
git merge feature-auth            # merge your feature in
```

## 🧠 Whiteboard Explanation
```
Working Dir ──git add──► Staging ──git commit──► Local Repo ──git push──► GitHub
 (your edits)            (chosen)                (snapshots)             (cloud)

                         ◄────────────── git pull ──────────────

BRANCHES:
   main      ●───●───●────────────●  (merge)
                      \           /
   feature-auth        ●───●───●     (your work, isolated)

Golden rule: never commit straight to main. Branch → PR → review → merge.
```

> **🍱 Zero Hunger context:** Your whole team builds on `main`. You create `feature/donation-form`, commit your work there, push it, open a **Pull Request**, get a review, then merge. This keeps `main` always working.

## ⚠️ Common Mistakes
- Committing secrets / `node_modules` → add a `.gitignore`.
- Forgetting `git add` before `git commit` ("nothing to commit").
- Writing useless commit messages (`"update"`, `"fix"`). Be specific.
- Working directly on `main` and breaking it for everyone.

## 🏋️ Exercises
1. `git init` a folder, create a file, and make your first commit.
2. Create a `.gitignore` with `node_modules/` and `.env`.
3. Create a branch `feature-test`, commit a change, merge into main.
4. Connect a local repo to a new GitHub repo and push it.
5. Make a change on GitHub directly, then `git pull` it locally.

## 🐞 Debugging Challenge
```bash
git commit -m "added donation form"
# ▶ nothing to commit, working tree clean  ... but you DID edit a file!
```
> **Why does Git say nothing to commit? Fix it.**
> *(Answer: you forgot `git add` to stage the change first.)*

## 💬 Interview Questions
- Difference between `git add`, `git commit`, and `git push`?
- What is a branch and why use one?
- What is a Pull Request?
- Difference between `git merge` and `git pull`?
- What does `.gitignore` do, and what should go in it?

---

# 🏆 FINAL MINI-PROJECT: Zero Hunger Donation Manager

> **Goal:** Build a complete, runnable console application that uses **every concept** in this module — variables, data types, operators, functions, arrays, objects, arrow functions, destructuring, spread, callbacks, promises, async/await, fetch, and Git.

## 📋 Features
- **Add** a donation
- **View** all donations
- **Filter** large donations
- **Search** donations by food
- **Update** a donation's status (immutably)
- **Statistics** (totals & averages)
- **Async load** of seed data (simulated API)

## 🗂️ Concepts → where they appear

| Concept | Used in |
|---------|---------|
| Variables / `const`/`let` | throughout |
| Data types | donation objects |
| Operators | statistics, filters |
| Functions | every feature |
| Arrays | the donations list |
| Objects | each donation record |
| Arrow functions | `map`, `filter`, callbacks |
| Destructuring | reading donation fields |
| Spread | adding & updating immutably |
| Callbacks | `addDonation(..., onDone)` |
| Promises | `loadSeedData()` |
| Async/await | `init()` |
| Fetch | `fetchExternal()` |
| Git | committing the project |

## 💻 Full Code — `donationManager.js`

```javascript
// ============================================================
//  ZERO HUNGER — DONATION MANAGER  (console mini-project)
//  Uses: variables, types, operators, functions, arrays,
//  objects, arrow fns, destructuring, spread, callbacks,
//  promises, async/await, fetch.
// ============================================================

// --- State (array of donation objects) ---
let donations = [];

// --- CREATE a donation (function + object shorthand) ---
const createDonation = (donor, food, qty, city) => ({
  donor,
  food,
  qty,
  city,
  status: "Available"
});

// --- ADD a donation (uses a CALLBACK + assigns id at add time) ---
function addDonation(donation, onDone){
  // id assigned here so it's always correct, no matter when created
  const withId = { ...donation, id: donations.length + 1 }; // SPREAD
  donations = [...donations, withId];                       // SPREAD: immutable add
  onDone(`✅ Added: ${withId.qty} units of ${withId.food} from ${withId.donor}`);
}

// --- VIEW all donations (arrow + destructuring + template literal) ---
const viewDonations = () => {
  if (donations.length === 0) return console.log("No donations yet.");
  console.log("\n📋 ALL DONATIONS");
  donations.forEach(({ id, donor, food, qty, status }) => {
    console.log(`  #${id} | ${food} x${qty} | ${donor} | ${status}`);
  });
};

// --- FILTER large donations (.filter + comparison operator) ---
const getLargeDonations = (min = 50) =>
  donations.filter(d => d.qty >= min);

// --- SEARCH by food (.filter + string method) ---
const searchByFood = (term) =>
  donations.filter(d => d.food.toLowerCase().includes(term.toLowerCase()));

// --- UPDATE status immutably (.map + spread) ---
const updateStatus = (id, newStatus) => {
  donations = donations.map(d =>
    d.id === id ? { ...d, status: newStatus } : d
  );
};

// --- STATISTICS (.reduce + arithmetic operators) ---
const getStats = () => {
  const totalQty = donations.reduce((sum, d) => sum + d.qty, 0);
  const count = donations.length;
  const avg = count === 0 ? 0 : (totalQty / count).toFixed(1);
  return { count, totalQty, avg };
};

// --- SIMULATED API with a PROMISE (resolve after delay) ---
const loadSeedData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        createDonation("ABC Restaurant", "Rice",  100, "Pune"),
        createDonation("XYZ Hotel",      "Bread",  20, "Mumbai"),
        createDonation("Grand Hall",     "Milk",   75, "Pune")
      ]);
    }, 500);
  });

// --- REAL fetch (works in browser/Node 18+) ---
async function fetchExternal(){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const users = await res.json();
    console.log(`\n🌐 Fetched ${users.length} external partner records.`);
  } catch (err) {
    console.log("Could not fetch external data:", err.message);
  }
}

// --- MAIN: async/await orchestration ---
async function init(){
  console.log("🚀 Zero Hunger Donation Manager starting...\n");

  // 1) Load seed data via Promise + await
  const seed = await loadSeedData();
  seed.forEach(d => addDonation(d, msg => console.log(msg)));

  // 2) View all
  viewDonations();

  // 3) Filter large donations
  console.log("\n🔍 Large donations (qty >= 50):");
  getLargeDonations().forEach(({ food, qty }) =>
    console.log(`  ${food}: ${qty}`)
  );

  // 4) Search
  console.log("\n🔎 Search 'milk':");
  searchByFood("milk").forEach(({ donor, food }) =>
    console.log(`  ${food} from ${donor}`)
  );

  // 5) Update a status
  updateStatus(2, "Picked Up");
  console.log("\n♻️  Updated donation #2 status.");
  viewDonations();

  // 6) Statistics
  const { count, totalQty, avg } = getStats();   // destructuring
  console.log(`\n📊 STATS → ${count} donations | ${totalQty} total units | ${avg} avg`);

  // 7) Real fetch
  await fetchExternal();

  console.log("\n✅ Done.");
}

init();
```

## ✅ Expected Output (approx.)
```
🚀 Zero Hunger Donation Manager starting...

✅ Added: 100 units of Rice from ABC Restaurant
✅ Added: 20 units of Bread from XYZ Hotel
✅ Added: 75 units of Milk from Grand Hall

📋 ALL DONATIONS
  #1 | Rice x100 | ABC Restaurant | Available
  #2 | Bread x20 | XYZ Hotel | Available
  #3 | Milk x75 | Grand Hall | Available

🔍 Large donations (qty >= 50):
  Rice: 100
  Milk: 75

🔎 Search 'milk':
  Milk from Grand Hall

♻️  Updated donation #2 status.

📋 ALL DONATIONS
  #1 | Rice x100 | ABC Restaurant | Available
  #2 | Bread x20 | XYZ Hotel | Picked Up
  #3 | Milk x75 | Grand Hall | Available

📊 STATS → 3 donations | 195 total units | 65.0 avg

🌐 Fetched 10 external partner records.

✅ Done.
```

## ▶️ How to Run
**In Node.js (v18+):**
```bash
node donationManager.js
```
**In the browser:** paste into DevTools Console, or link via `<script src="donationManager.js"></script>`.

## 🚀 Ship it with Git
```bash
git init
echo "node_modules/" > .gitignore
git add .
git commit -m "Zero Hunger Donation Manager mini-project"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

## 🧩 Stretch Challenges (optional)
1. Add a `deleteDonation(id)` using `.filter()`.
2. Add `sortByQuantity()` using `.sort()` (without mutating — spread first).
3. Group donations by city using `.reduce()` into an object.
4. Add input validation: reject `qty <= 0` via a rejected Promise.
5. Persist donations to a real backend `POST /api/donations` (Week 3 preview).

---

## 🎓 Final Assessment Checklist

Students must demonstrate:

- [ ] Create donation **objects**
- [ ] Store donations in **arrays**
- [ ] Use **`.map()`**
- [ ] Use **`.filter()`**
- [ ] Use **arrow functions**
- [ ] Use **destructuring & spread**
- [ ] Use a **callback**, a **Promise**, and **async/await**
- [ ] **Fetch** API data
- [ ] **Push** code to GitHub
- [ ] **Present** the mini-project

## ➡️ Expected Outcome
You're ready to move on to:
**DOM Manipulation → Advanced JavaScript → React.js → API Integration → Full MERN Development.**

---

*Training manual for the Zero Hunger Platform Bootcamp · JavaScript Fundamentals → Modern JavaScript. Ready to drop into `/Reading-Materials` or `/Trainer-Guide` in your GitHub repo.*

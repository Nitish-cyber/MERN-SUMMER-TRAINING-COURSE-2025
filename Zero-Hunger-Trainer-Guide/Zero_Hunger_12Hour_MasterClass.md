# JavaScript Fundamentals to Modern JavaScript

## Zero Hunger Platform Bootcamp Training Manual

---

# Module Information

**Duration:** 12 Hours

**Mode:** Live Coding + Hands-On Practice

**Project Context:** Zero Hunger Platform

---

# Learning Objectives

By the end of this session students will:

* Understand JavaScript fundamentals
* Write reusable functions
* Work with arrays and objects
* Use ES6 features
* Understand asynchronous programming
* Consume APIs using Fetch
* Use Git and GitHub professionally
* Build a mini-project related to Zero Hunger Platform

---

# Module 1: Introduction to JavaScript

## What is JavaScript?

JavaScript is a programming language used to create interactive web applications.

### Real-Life Example

Zero Hunger Platform:

When a donor clicks:

```javascript
Submit Donation
```

JavaScript validates the form before sending data.

---

# Running JavaScript

### Internal JavaScript

```html
<script>
console.log("Hello World");
</script>
```

### External JavaScript

```html
<script src="app.js"></script>
```

---

# Live Coding

Create:

```javascript
console.log("Welcome to Zero Hunger Platform");
```

---

# Module 2: Variables

## Why Variables?

Variables store data.

Example:

Donor Name

Food Quantity

NGO Name

Volunteer Status

---

## var

```javascript
var donorName = "John";
console.log(donorName);
```

Problems:

* Redeclaration allowed
* Scope issues

---

## let

```javascript
let quantity = 50;

quantity = 60;

console.log(quantity);
```

---

## const

```javascript
const platformName = "Zero Hunger";
```

Cannot reassign.

---

# Live Coding

Create variables:

```javascript
let donorName = "ABC Restaurant";
let foodPackets = 100;
let city = "Pune";

console.log(donorName);
console.log(foodPackets);
console.log(city);
```

---

# Exercise

Create variables for:

* NGO Name
* Volunteer Name
* Food Quantity
* Donation Status

---

# Module 3: Data Types

## String

```javascript
let donor = "ABC Restaurant";
```

## Number

```javascript
let quantity = 50;
```

## Boolean

```javascript
let isAvailable = true;
```

## Array

```javascript
let foodItems = ["Rice","Bread","Milk"];
```

## Object

```javascript
let donor = {
    name:"ABC Restaurant",
    city:"Pune"
};
```

---

# Real Project Example

```javascript
const donation = {
  donorName: "ABC Restaurant",
  quantity: 100,
  foodType: "Rice",
  status: "Available"
};
```

---

# Module 4: Operators

## Arithmetic

```javascript
let total = 20 + 30;
```

```javascript
let remaining = 100 - 25;
```

---

## Comparison

```javascript
console.log(10 > 5);
```

```javascript
console.log(10 === 10);
```

---

## Logical

```javascript
let isDonor = true;
let verified = true;

console.log(isDonor && verified);
```

---

# Exercise

Check:

```javascript
Food Quantity > 50
```

---

# Module 5: Functions

## Why Functions?

Reusable code blocks.

---

## Traditional Function

```javascript
function calculateFoodPackets(qty){
    return qty * 2;
}

console.log(calculateFoodPackets(50));
```

---

## Function with Object

```javascript
function donorInfo(name){
   return `Welcome ${name}`;
}

console.log(donorInfo("ABC Restaurant"));
```

---

# Live Coding

Create:

```javascript
function createDonation(foodName, quantity){
   return {
      foodName,
      quantity
   };
}
```

---

# Module 6: Arrays

## Creating Arrays

```javascript
let ngos = [
  "Helping Hands",
  "Food Care",
  "Smile NGO"
];
```

---

## Accessing Elements

```javascript
console.log(ngos[0]);
```

---

## Push

```javascript
ngos.push("Hope Foundation");
```

---

## Map

```javascript
let names = ngos.map(item => item.toUpperCase());

console.log(names);
```

---

## Filter

```javascript
let quantities = [20,50,100,10];

let largeDonations =
quantities.filter(q => q > 30);

console.log(largeDonations);
```

---

# Real Project Example

```javascript
const donations = [
  {food:"Rice", qty:100},
  {food:"Bread", qty:20}
];

const available =
donations.filter(item => item.qty > 50);

console.log(available);
```

---

# Module 7: Objects

```javascript
const donor = {
  name:"ABC Restaurant",
  city:"Pune",
  quantity:100
};
```

Access:

```javascript
console.log(donor.name);
```

Update:

```javascript
donor.city = "Mumbai";
```

---

# Module 8: Arrow Functions

Traditional:

```javascript
function greet(){
   console.log("Hello");
}
```

Arrow:

```javascript
const greet = () => {
   console.log("Hello");
};
```

---

## Parameters

```javascript
const multiply =
(num) => num * 2;
```

---

## Real Project Example

```javascript
const availableFood =
donations.filter(
 item => item.qty > 50
);
```

---

# Module 9: Destructuring

Object Destructuring

```javascript
const donor = {
 name:"ABC",
 city:"Pune"
};

const {name, city} = donor;

console.log(name);
```

---

Array Destructuring

```javascript
const foods =
["Rice","Bread","Milk"];

const [firstFood] = foods;

console.log(firstFood);
```

---

# Module 10: Spread Operator

```javascript
const food1 =
["Rice","Milk"];

const food2 =
["Bread","Fruit"];

const allFood =
[...food1,...food2];
```

---

## Object Spread

```javascript
const donor = {
 name:"ABC"
};

const updated = {
 ...donor,
 city:"Pune"
};
```

---

# Module 11: Callbacks

```javascript
function processDonation(callback){

 console.log("Donation Received");

 callback();

}

processDonation(() => {
 console.log("NGO Notified");
});
```

---

# Module 12: Promises

```javascript
const donationPromise =
new Promise((resolve,reject)=>{

 let success=true;

 if(success){
   resolve("Donation Added");
 }else{
   reject("Failed");
 }

});
```

---

## Consuming Promise

```javascript
donationPromise
.then(data=>console.log(data))
.catch(err=>console.log(err));
```

---

# Module 13: Async Await

```javascript
async function getDonations(){

 return "Donations Loaded";

}
```

---

```javascript
async function loadData(){

 const result =
 await getDonations();

 console.log(result);

}
```

---

# Module 14: Fetch API

```javascript
fetch(
'https://jsonplaceholder.typicode.com/users'
)
.then(res=>res.json())
.then(data=>console.log(data));
```

---

Async Await Version

```javascript
async function fetchUsers(){

 const response =
 await fetch(
 'https://jsonplaceholder.typicode.com/users'
 );

 const data =
 await response.json();

 console.log(data);

}
```

---

# Real Project Example

```javascript
async function getDonations(){

 const response =
 await fetch(
 '/api/donations'
 );

 const data =
 await response.json();

 console.log(data);

}
```

---

# Module 15: Git & GitHub

## Initialize Repository

```bash
git init
```

---

## Check Status

```bash
git status
```

---

## Add Files

```bash
git add .
```

---

## Commit

```bash
git commit -m "Initial Commit"
```

---

## Connect GitHub

```bash
git remote add origin REPO_URL
```

---

## Push

```bash
git push -u origin main
```

---

## Pull

```bash
git pull origin main
```

---

## Branching

```bash
git checkout -b feature-auth
```

---

## Merge

```bash
git checkout main

git merge feature-auth
```

---

# Final Mini Project

## Zero Hunger Donation Manager

Features:

* Add Donation
* View Donations
* Filter Donations
* Search Donations
* Display Statistics

---

## Concepts Used

✔ Variables

✔ Data Types

✔ Functions

✔ Arrays

✔ Objects

✔ Arrow Functions

✔ Destructuring

✔ Spread Operator

✔ Callbacks

✔ Promises

✔ Async Await

✔ Fetch API

✔ Git

---

# Final Assessment

Students must:

1. Create Donation Objects
2. Store Donations in Arrays
3. Use map()
4. Use filter()
5. Use Arrow Functions
6. Fetch API Data
7. Push Code to GitHub
8. Present Mini Project

---

# Expected Outcome

Students are ready to move to:

* DOM Manipulation
* Advanced JavaScript
* React.js
* API Integration
* Full MERN Development

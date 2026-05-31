JavaScript Fundamentals for MERN Stack Development
Zero Hunger Platform Bootcamp Handbook
Duration

12 Hours Live Coding Workshop

Project Context

Throughout this training, every concept will be connected to our project:

ZERO HUNGER PLATFORM

Actors:
- Donor
- NGO
- Volunteer
- Vendor
- Admin

Core Features:
- Food Donation
- Food Request
- Volunteer Assignment
- Donation Tracking
- Inventory Management
CHAPTER 1
Introduction to JavaScript
Learning Objectives

By the end of this chapter students will:

Understand what JavaScript is
Understand why JavaScript is important
Understand JavaScript's role in MERN Stack
Execute JavaScript code
Connect JavaScript concepts to the Zero Hunger Platform
What is JavaScript?

JavaScript is a programming language used to create interactive web applications.

Without JavaScript:

Website = Static

No Validation
No Dynamic Data
No Interactivity

With JavaScript:

Interactive Forms
Live Search
Dashboards
API Calls
Animations
Real Life Example

Imagine Amazon.

When you click:

Add To Cart

The page updates instantly.

JavaScript is doing that.

Zero Hunger Example

Donor clicks:

Add Donation

JavaScript:

Validate Form
Check Quantity
Send Data
Update Dashboard
JavaScript in MERN Stack
MongoDB
    ↑
Express.js
    ↑
React.js
    ↑
Node.js

JavaScript is used everywhere.

Frontend:

React

Backend:

Node.js
Express.js
Whiteboard Discussion

Ask students:

Can HTML store donation data?

Can CSS validate forms?

Who handles button clicks?

Expected Answer:

JavaScript
Running JavaScript

Method 1

<script>
console.log("Hello World");
</script>

Method 2

<script src="app.js"></script>
Live Coding Exercise

Create:

console.log("Welcome to Zero Hunger Platform");

Expected Output:

Welcome to Zero Hunger Platform
Common Mistake

Wrong:

Console.log("Hello");

Error:

Console is not defined

Correct:

console.log("Hello");
Debugging Challenge

Find the error:

console.log("Hello World')

Solution:

console.log("Hello World");
Student Exercise

Create:

console.log("Donor Dashboard");
console.log("NGO Dashboard");
console.log("Volunteer Dashboard");

Expected Output:

Donor Dashboard
NGO Dashboard
Volunteer Dashboard
Interview Questions
What is JavaScript?

JavaScript is a programming language used to create dynamic and interactive web applications.

Is JavaScript compiled or interpreted?

Modern JavaScript engines use Just-In-Time (JIT) compilation.

Why is JavaScript important in MERN?

Because React, Node.js, and Express all use JavaScript.

Chapter Summary

Students should now understand:

What JavaScript is
Why JavaScript exists
Where JavaScript is used
How to run JavaScript
CHAPTER 2
Variables
Learning Objectives

Students will learn:

What variables are
Why variables are needed
var
let
const
Scope basics
What is a Variable?

A variable is a container used to store data.

Real Life:

Water Bottle
    ↓
Stores Water

Variable
    ↓
Stores Data
Why Do We Need Variables?

Suppose donor submits:

Restaurant Name
Food Quantity
Location

We must store them somewhere.

Without Variables

"ABC Restaurant"
100
"Pune"

Not reusable.

With Variables

let donorName = "ABC Restaurant";

let quantity = 100;

let city = "Pune";
Visual Representation
donorName
     ↓
ABC Restaurant

quantity
     ↓
100

city
     ↓
Pune
var

Old way.

var donorName = "ABC Restaurant";

Problems:

Can Redeclare
Function Scope
Bug Prone

Example:

var quantity = 100;

var quantity = 200;

console.log(quantity);

Output:

200
let

Modern way.

let quantity = 100;

quantity = 200;

console.log(quantity);

Output:

200

Cannot Redeclare:

let quantity = 100;

let quantity = 200;

Error.

const

Used when value should not change.

const platformName =
"Zero Hunger Platform";

Wrong:

const platformName =
"Zero Hunger";

platformName = "Food App";

Error.

Real Project Example
const platformName =
"Zero Hunger Platform";

let donationCount = 100;

let volunteerCount = 50;
Whiteboard Discussion

Ask:

Should platformName change?

Should donationCount change?

Answer:

platformName → const

donationCount → let
Live Coding

Create:

const appName =
"Zero Hunger";

let foodPackets =
100;

let city =
"Pune";

console.log(appName);
console.log(foodPackets);
console.log(city);

Output:

Zero Hunger
100
Pune
Common Mistakes

Mistake:

const qty = 100;

qty = 200;

Error:

Assignment to constant variable
Debugging Challenge

Fix:

let donor = "ABC";

let donor = "XYZ";

Solution:

let donor = "ABC";

donor = "XYZ";
Exercises
Exercise 1

Create:

ngoName
foodType
quantity
status

Print them.

Exercise 2

Store:

Restaurant Name
Food Packets
City

Using variables.

Exercise 3

Calculate:

let rice = 100;

let bread = 50;

let total = ?

Expected Output:

150
Interview Questions

Difference between:

var
let
const

Expected Answer:

var → old

let → mutable

const → immutable reference
Chapter Summary

Students can now:

Store Data
Use Variables
Choose let vs const
Avoid Common Errors
CHAPTER 3
Data Types
Learning Objectives

Students will understand:

String
Number
Boolean
Undefined
Null
Array
Object
What is a Data Type?

A Data Type tells JavaScript what kind of value is stored.

Real World Example

Warehouse:

Rice Container
Water Tank
Medicine Box

Different storage types.

Same in JavaScript.

String

Stores text.

Example:

let donorName =
"ABC Restaurant";

More Examples

let city = "Pune";

let ngoName =
"Helping Hands";
Real Project Example
const donation = {
 donorName: "ABC Restaurant",
 foodType: "Rice"
};

Strings:

ABC Restaurant
Rice
Output
console.log(donorName);

Output:

ABC Restaurant
Number

Stores numbers.

let quantity = 100;

let ngoCount = 20;
Real Project Example
const donation = {
 quantity: 100
};
Calculation Example
let rice = 100;

let bread = 50;

let total =
rice + bread;

console.log(total);

Output:

150
Boolean

Stores:

true
false

Example

let available = true;

let verified = false;

Project Example

const donation = {
 available: true
};
Undefined
let donorName;

console.log(donorName);

Output:

undefined

Meaning:

Variable exists

No value assigned
Null
let volunteer =
null;

Meaning:

No value intentionally assigned
Array

Stores multiple values.

const foods = [
 "Rice",
 "Bread",
 "Milk"
];

Visual:

0 → Rice

1 → Bread

2 → Milk

Access:

console.log(
 foods[0]
);

Output:

Rice
Object

Represents real-world entities.

const donor = {

 name:"ABC Restaurant",

 city:"Pune",

 quantity:100

};

Real World Mapping

Donor
    ↓

Name
City
Quantity
Type Checking
console.log(
 typeof "ABC"
);

Output:

string
console.log(
 typeof 100
);

Output:

number
Common Mistakes

Wrong:

let quantity = "100";

Student thinks Number.

Actually:

String

Check:

typeof quantity
Debugging Challenge

Predict Output:

let quantity = "100";

console.log(
 quantity + 50
);

Answer:

10050

Why?

String Concatenation.

Exercises
Exercise 1

Create:

name
quantity
available

Using correct data types.

Exercise 2

Create array:

Rice
Bread
Milk

Print second value.

Exercise 3

Create donor object:

name
city
foodType
quantity

Print city.

Interview Questions

Difference:

null
undefined

Difference:

Array
Object

What does typeof return?

Chapter Summary

Students can now:

Identify Data Types
Create Arrays
Create Objects
Use typeof
Avoid Type Errors

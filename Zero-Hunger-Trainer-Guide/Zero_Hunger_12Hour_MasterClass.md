# JavaScript Fundamentals for MERN Stack Development  
## **Zero Hunger Platform Bootcamp Handbook**  

**Duration:** 12 Hours Live Coding Workshop  

---

## Project Context

Throughout this training, every concept will be connected to our project:

**ZERO HUNGER PLATFORM**

### **System Actors:**
*   **Donor**: Banquet halls, hotels, and restaurants who donate surplus food batches.
*   **NGO**: Humanitarian organizations that claim and distribute food batches to communities.
*   **Volunteer**: Drivers and logistics coordinators who pick up and deliver food batches.
*   **Vendor**: Commercial kitchens or food providers offering discounted food inventories.
*   **Admin**: System operators who monitor allocations, verify FSSAI credentials, and generate reports.

### **Core Features:**
*   **Food Donation**: Registration, classification, and shelf-life screening of food items.
*   **Food Request**: Filtering and claims management for active food listings.
*   **Volunteer Assignment**: Asynchronous route lookups and delivery scheduling.
*   **Donation Tracking**: Real-time status updates (Available, Claimed, Dispatched).
*   **Inventory Management**: High-volume data array filtering and allocations.

---

## Master Course Syllabus (12 Hours)

| Module / Chapter | Duration | Core Topics Covered | Zero Hunger Domain Features Built |
| :--- | :--- | :--- | :--- |
| **Chapter 1 & Module 1** | 2 Hours | Intro to JS & MERN role, scoped variables (`let`, `const`), Data Types, Logical & Comparison Operators, screening functions. | Donor profiles, food shelf-life analysis, FSSAI certification checkers. |
| **Module 2** | 2 Hours | ES6 Collections, Arrow Functions, Object & Array Destructuring, Spread (`...`) operators, Iterators (`.map()`, `.filter()`, `.forEach()`). | Food donation batch matrix, urgent alert filters, NGO allocation dispatches. |
| **Module 3** | 2 Hours | Asynchronous JS Foundations, Event Loop timeline, Callbacks, Callback Hell, Promises (`resolve`, `reject` structures). | Volunteer vehicle routing steps, background dispatch promises, latency simulations. |
| **Module 4** | 2 Hours | Modern Async/Await, Network request simulations with Fetch API, Robust Error Handling (`try/catch/finally` blocks). | Active food listing fetches, verification API pings, database sync processes. |
| **Module 5** | 2 Hours | Git Version Control, Initialization, Staging, Conventional Commits, Feature Branching models, Merge Conflict markers, Remote Sync. | Feature deployment branch tracking, parallel workflow merges, remote repository syncing. |
| **Module 6** | 2 Hours | Capstone Project: **Zero Hunger Terminal Dashboard**. | Integrated Node.js command-line application combining all Week 1 concepts. |

---

## CHAPTER 1: Introduction to JavaScript & MERN Stack Foundations

### 1. Learning Objectives
By the end of this chapter, students will:
*   Understand what JavaScript is and why it is indispensable.
*   Deconstruct JavaScript's universal role across the entire MERN Stack.
*   Execute basic JavaScript programs in browser runtimes and Node.js environments.
*   Connect fundamental JavaScript concepts directly to the Zero Hunger redistribution system.

### 2. What is JavaScript?
JavaScript is a high-level, single-threaded, dynamic programming language used to create high-fidelity, interactive, and responsive web applications.

*   **Without JavaScript**:
    *   Website is **Static**: The user has to reload the page to see any state changes.
    *   **No Validation**: Bad forms (like blank names or negative quantities) reach the database unchecked.
    *   **No Dynamic Data**: Interactive live listings or real-time notification alerts cannot exist.
    *   **No Interactivity**: Popups, responsive menus, and complex interactive maps do not work.
*   **With JavaScript**:
    *   **Interactive Forms**: Fields check FSSAI formatting on the fly before submission.
    *   **Live Search**: Donors search active volunteer listings with immediate auto-suggest filters.
    *   **Real-time Dashboards**: Live data cards display active NGO allocations.
    *   **Asynchronous API Calls**: Background network transactions sync records without page reloads.
    *   **Smooth Animations**: Transitions convey network payload visual timelines.

### 3. Real-Life SaaS Example (Amazon)
Imagine **Amazon**. When you click **Add To Cart**, the shopping cart icon updates instantly on your screen, and a preview modal slides out without reloading the entire page. *JavaScript is managing that state update in real-time.*

### 4. Zero Hunger Platform Example
When a **Donor** clicks the **Add Donation** button on the platform:
1.  JavaScript intercepts the browser event.
2.  JavaScript validates the form (e.g., checks if remaining shelf-life is greater than 2 hours).
3.  JavaScript formats the input data into a structured JSON payload.
4.  JavaScript fires an asynchronous POST request to the Node.js backend.
5.  JavaScript dynamically updates the active NGO listings dashboard with the new food item.

### 5. JavaScript in the MERN Stack
The MERN Stack represents a unified, end-to-end full-stack ecosystem where **JavaScript acts as the single universal language** across all architectural tiers:

```
+-----------------------------------------------------------------------------------+
|                            UNIVERSAL JAVASCRIPT LANGUAGE                          |
+-----------------------------------------------------------------------------------+
|      M (MongoDB)     |     E (Express.js)    |    R (React.js)   |   N (Node.js)  |
|   JSON/BSON Database |    Backend Framework  |   Frontend UI     | Server Runtime |
|   JavaScript Queries |    JS Router/API      |   JS Components   | Engine (V8)    |
+-----------------------------------------------------------------------------------+
```

*   **MongoDB (M)**: A NoSQL database that stores data in BSON format, which is a binary representation of JSON (JavaScript Object Notation). Database queries and data modifications are written in JavaScript syntax.
*   **Express.js (E)**: A lightweight, minimal web framework written in JavaScript for Node.js, used to build high-performance backend routing tables and RESTful API endpoints.
*   **React.js (R)**: A declarative frontend user interface library built using JavaScript components, dynamic state managers, and interactive UI logic.
*   **Node.js (N)**: A server-side JavaScript runtime engine powered by Google's V8 Engine, which allows developers to execute JavaScript code outside the browser directly on server hardware.

By learning JavaScript deeply, students master the tools required to build client-side views, backend API logic, database transactions, and build scripts using a single, unified language.

---


## Module 1: JavaScript Core Memory & Program Flow (Hours 1 - 2)

### 1. Concept Explanation
JavaScript engine manages data memory within two storage spaces: **the Stack** (for static memory allocations like primitives) and **the Heap** (for dynamic allocations like objects). 
* `let` permits variable reassignment but prevents re-declaration in the same scope. It respects block-level scopes (bounded by `{}`).
* `const` creates a read-only reference. Its value cannot be reassigned. However, the properties of a `const` object or elements of a `const` array can be mutated because their heap reference remains unchanged.
* **Primitive Types**: Passed by value (Boolean, Number, String, Null, Undefined).
* **Comparison & Logical Operators**: Evaluate expressions to determine logical conditions (`===` for strict equality, `&&` for logical AND, `||` for logical OR, `!` for logical NOT).

### 2. Real-World SaaS Use Cases
SaaS platforms require predictable, crash-resistant state management. Using `const` by default minimizes unintended variable overrides. Strict equality (`===`) prevents automatic type coercion bugs (such as `0 == false` evaluating to true, which can trigger incorrect logic in billing or permission checkers).

### 3. Zero Hunger Project Context
We will define variables representing a Food Donor Profile (e.g., FSSAI registration status, food donation hours, location coordinates) and write a screening algorithm that verifies whether a food batch is safe for public distribution based on FSSAI rules and shelf-life parameters.

### 4. Interactive Code Snippet
```javascript
// Donor registration profile
const donorName = "Grand Plaza Hotel";
const fssaiLicense = "FSSAI-100230987654";
let isLicensed = true;
let availableHours = 4; // Hours remaining for safe pickup

// Food donation batch details
const foodItem = "Vegetable Biryani";
let batchQuantityKgs = 25;
let hoursSincePreparation = 2;
const isPerishable = true;

// Rules:
// 1. Must be a licensed donor (isLicensed === true).
// 2. Remaining hours until expiration must be at least 2 hours.
// 3. Preparation time must be less than 4 hours for perishable items.
function checkFssaiEligibility(licensed, hoursRemaining, prepTime, perishable) {
    // Evaluation using logical operators
    const isPrepSafe = !perishable || prepTime < 4;
    const isHoursSafe = hoursRemaining >= 2;
    
    if (licensed && isPrepSafe && isHoursSafe) {
        return "ELiGIBLE: This food batch is safe for redistribution.";
    } else {
        return "REJECTED: Food safety requirements are not met.";
    }
}

// Execute the check
const screeningResult = checkFssaiEligibility(isLicensed, availableHours, hoursSincePreparation, isPerishable);
console.log("Donor Name:", donorName);
console.log("FSSAI License ID:", fssaiLicense);
console.log("Screening Result:", screeningResult);
```

### 5. Practical Exercises
* **Task 1**: Add an additional variable `storageTemperatureCelsius` to the code.
* **Task 2**: Modify the `checkFssaiEligibility` function to reject the batch if the storage temperature exceeds 8 degrees Celsius for cold foods, or falls below 60 degrees Celsius for cooked hot foods.

### 6. Live Coding Demonstration
Instruct students to:
1. Initialize a script called `donor_eligibility.js`.
2. Declare variables using correct `const` and `let` boundaries.
3. Write a block scope block using `{}` and demonstrate that variables declared inside it using `let` are inaccessible outside.

---

## Module 2: ES6+ Collections & Data Structures (Hours 3 - 4)

### 1. Concept Explanation
Modern JavaScript uses array structures and object shapes to represent complex database models.
* **Arrow Functions (`() => {}`)**: Offer a shorter syntax and bind the `this` value lexically.
* **Destructuring**: Unpacks values from arrays or properties from objects into distinct variables.
* **Spread Operator (`...`)**: Copies elements of an array or properties of an object into new instances, facilitating immutable operations.
* **Iteration Methods**:
  * `.forEach()`: Loops over every item (runs side-effects, does not return a new array).
  * `.map()`: Transforms each array element and returns a new array of matching length.
  * `.filter()`: Returns a new array containing only elements that pass a conditional test.

### 2. Real-World SaaS Use Cases
SaaS dashboards frequently fetch data arrays and filter them by metrics (e.g., active vs. inactive users, recent payments). Immutable array copying via the spread operator is essential in modern state management libraries (like React and Redux) to prevent side-effects and bugs.

### 3. Zero Hunger Project Context
Redistribution networks deal with batch listings of active food donations. We will construct an array of donation objects, unpack properties using object destructuring, create copies using the spread operator to mark volunteer claims, and filter active donations to find urgent listings (expiring in less than 3 hours).

### 4. Interactive Code Snippet
```javascript
// Collection of active food donations
const activeDonations = [
    { id: "DON-001", item: "Mutton Curry", quantityKgs: 15, hoursRemaining: 1.5, type: "Non-Veg" },
    { id: "DON-002", item: "Paneer Butter Masala", quantityKgs: 20, hoursRemaining: 4, type: "Veg" },
    { id: "DON-003", item: "Mixed Veg Pulav", quantityKgs: 30, hoursRemaining: 2, type: "Veg" },
    { id: "DON-004", item: "Samosas", quantityKgs: 10, hoursRemaining: 0.5, type: "Snack" }
];

// 1. Arrow Function & Destructuring: Process donation card details
const displayDonationSummary = ({ item, quantityKgs, type }) => {
    return `${item} (${quantityKgs}kg) - Category: ${type}`;
};

console.log("--- active Food Catalog ---");
activeDonations.forEach(donation => console.log(displayDonationSummary(donation)));

// 2. Filter: Find urgent donations expiring in 2 hours or less
const urgentDonations = activeDonations.filter(don => don.hoursRemaining <= 2);
console.log("\n--- Urgent Donations (Expiring in <= 2 Hours) ---");
console.log(urgentDonations);

// 3. Map: Convert quantities from kilograms to grams
const donationWeightsInGrams = activeDonations.map(don => {
    return {
        ...don, // Spread operator to preserve object structure
        quantityGrams: don.quantityKgs * 1000
    };
});
console.log("\n--- Transformed Quantities (in Grams) ---");
console.log(donationWeightsInGrams);
```

### 5. Practical Exercises
* **Task 1**: Write a `.filter()` statement that returns only `Veg` category donations.
* **Task 2**: Write a `.reduce()` function that calculates the total quantity in kilograms of all active donations.

### 6. Live Coding Demonstration
Instruct students to:
1. Create a script named `donation_matrix.js`.
2. Declare an array of 5 donation items.
3. Write an ES6 arrow function to log each donation's identifier and description using string interpolation.

---

## Module 3: Deep Dive into Asynchronous JavaScript (Hours 5 - 6)

### 1. Concept Explanation
JavaScript is single-threaded, running on an **Event Loop**. It executes synchronous tasks in order, and delegates asynchronous tasks (like timers, network requests, database lookups) to browser APIs or the Node runtime environment. When these async tasks complete, their callbacks enter the **Callback Queue** or **Microtask Queue** (for Promises) and execute when the call stack becomes empty.
* **Callback Chains**: Passing a function as an argument to be executed after another function finishes. If nested excessively, this leads to **Callback Hell** (unreadable pyramid-shaped code).
* **Promises**: Objects representing the eventual completion (or failure) of an async operation. A Promise can be in one of three states:
  1. `pending`: Initial state, neither fulfilled nor rejected.
  2. `fulfilled`: Operation completed successfully. Returns a value.
  3. `rejected`: Operation failed. Returns an error message.

```
       +---------------------------------------------+
       |                  Call Stack                 |
       +---------------------------------------------+
                              | (Async operation, e.g., SetTimeout)
                              v
       +---------------------------------------------+
       |             Web / Node.js APIs              |
       +---------------------------------------------+
                              | (Async task completes)
                              v
       +---------------------------------------------+
       |          Callback / Microtask Queue         |
       +---------------------------------------------+
                              | (Event Loop checks if Stack is empty)
                              v
                    [ Execute Callback ]
```

### 2. Real-World SaaS Use Cases
SaaS apps make background calls to process payments, update email queues, and communicate with database engines. Utilizing Promises ensures the main UI thread remains responsive and interactive instead of freezing during API transactions.

### 3. Zero Hunger Project Context
REDISTRIBUTION LOGISTICS: When an NGO claims a food donation, the platform must execute three serial tasks:
1. Fetch and lock the donation record.
2. Search and assign a nearby volunteer.
3. Notify the NGO of the volunteer's details.
We will write this flow using nested callbacks (Callback Hell) and then refactor it into robust Promise chains (`.then()` / `.catch()`).

### 4. Interactive Code Snippet
```javascript
// Simulated database tables
const database = {
    donations: { "DON-001": { item: "Mutton Curry", quantity: "15kg", donor: "Grand Plaza" } },
    volunteers: [ { name: "Aditya Kumar", id: "VOL-707", location: "Downtown" } ],
    ngos: { "NGO-50": { name: "Feed the Hungry NGO", location: "Midtown" } }
};

// --- Part A: Callback Hell Demonstration ---
function getDonationDetails(donationId, callback) {
    setTimeout(() => {
        const donation = database.donations[donationId];
        if (donation) {
            callback(null, donation);
        } else {
            callback("Donation record not found.", null);
        }
    }, 500);
}

function assignVolunteer(donation, callback) {
    setTimeout(() => {
        const volunteer = database.volunteers[0];
        if (volunteer) {
            callback(null, { ...donation, volunteer });
        } else {
            callback("No volunteer available nearby.", null);
        }
    }, 500);
}

function notifyNGO(ngoId, allocatedBooking, callback) {
    setTimeout(() => {
        const ngo = database.ngos[ngoId];
        if (ngo) {
            callback(null, { ...allocatedBooking, ngoName: ngo.name });
        } else {
            callback("NGO account not registered.", null);
        }
    }, 500);
}

// Running the callback chain (Pyramid of Doom)
console.log("=== Initiating Callback Pipeline ===");
getDonationDetails("DON-001", (err, donation) => {
    if (err) {
        console.error("Error in Step 1:", err);
    } else {
        assignVolunteer(donation, (err2, booking) => {
            if (err2) {
                console.error("Error in Step 2:", err2);
            } else {
                notifyNGO("NGO-50", booking, (err3, finalReceipt) => {
                    if (err3) {
                        console.error("Error in Step 3:", err3);
                    } else {
                        console.log("CALLBACK SUCCESS: Booking Dispatched!", finalReceipt);
                    }
                });
            }
        });
    }
});


// --- Part B: Promise Refactoring ---
const getDonationPromise = (donationId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const donation = database.donations[donationId];
            if (donation) resolve(donation);
            else reject("Donation record not found.");
        }, 500);
    });
};

const assignVolunteerPromise = (donation) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const volunteer = database.volunteers[0];
            if (volunteer) resolve({ ...donation, volunteer });
            else reject("No volunteer available nearby.");
        }, 500);
    });
};

const notifyNGOPromise = (ngoId, booking) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ngo = database.ngos[ngoId];
            if (ngo) resolve({ ...booking, ngoName: ngo.name });
            else reject("NGO account not registered.");
        }, 500);
    });
};

// Running the Promise Chain
setTimeout(() => {
    console.log("\n=== Initiating Promise Chain Pipeline ===");
    getDonationPromise("DON-001")
        .then(donation => assignVolunteerPromise(donation))
        .then(booking => notifyNGOPromise("NGO-50", booking))
        .then(receipt => {
            console.log("PROMISE SUCCESS: Booking Dispatched!", receipt);
        })
        .catch(error => {
            console.error("PROMISE PIPELINE REJECTED:", error);
        });
}, 2000);
```

### 5. Practical Exercises
* **Task 1**: Modify the `database` objects to remove all registered volunteers. Run both pipelines and observe how the failures propagate.
* **Task 2**: Add a fourth step in the promise chain that mock-sends an SMS notification to the volunteer using a promise called `sendSMSNotification(receipt)`.

### 6. Live Coding Demonstration
Instruct students to:
1. Initialize a file `logistics_pipeline.js`.
2. Construct a custom Promise that randomly resolves or rejects depending on whether a volunteer's GPS is switched on.
3. Handle both resolutions and rejections with `.then()` and `.catch()`.

---

## Module 4: Modern Async/Await & Networking with Fetch (Hours 7 - 8)

### 1. Concept Explanation
* **Async/Await**: Syntactical sugar written over standard Promises. Declaring a function as `async` guarantees it returns a Promise. The `await` keyword halts execution of the local function thread until the Promise resolves.
* **Robust Error Handling (`try/catch/finally`)**:
  * `try`: Wraps code blocks that may crash.
  * `catch`: Catches and logs errors raised within the `try` block.
  * `finally`: Run code blocks that must run regardless of success or failure (e.g., closing database connections, ending spinners).
* **Fetch API**: Modern native network utility for making HTTP requests (GET, POST, etc.) to mock databases or third-party servers.

### 2. Real-World SaaS Use Cases
In cloud backends, API endpoints fetch live configurations, check payment status, and process database queries concurrently. `Async/Await` makes code clean, maintainable, and readable, looking and behaving like standard synchronous statements.

### 3. Zero Hunger Project Context
We will create an asynchronous gateway engine that calls a real public placeholder API (e.g., JSONPlaceholder) to simulate requesting external food inspection logs or active donor directories, protected by error barriers.

### 4. Interactive Code Snippet
```javascript
// Simulated API service endpoints
const mockAPIUrl = "https://jsonplaceholder.typicode.com/users/1"; // Target simulated endpoint

// Asynchronous handler to pull database profiles
async function fetchDonorInspectorProfile(endpointUrl) {
    console.log("Connecting to central directory API...");
    
    try {
        const response = await fetch(endpointUrl);
        
        // Check for HTTP errors (e.g., 404 or 500 errors)
        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }
        
        const rawData = await response.json();
        
        // Destructure API response to shape a Donor Inspector Object
        const { name, email, company: { name: agencyName } } = rawData;
        
        const inspectorProfile = {
            inspectorName: name,
            contactEmail: email,
            inspectingAgency: agencyName,
            status: "FSSAI-ACCREDITED"
        };
        
        console.log("Inspector Profile Synced Successfully:");
        return inspectorProfile;
        
    } catch (networkError) {
        console.error("FATAL ERROR: Failed to sync directory. Triggering local backup cache.");
        // Return local fallback safe state
        return {
            inspectorName: "Offline Mode System",
            contactEmail: "admin@zerohunger.org",
            inspectingAgency: "FSSAI Local Office",
            status: "CACHED"
        };
    } finally {
        console.log("Connection closed cleanly.");
    }
}

// Run async routine
(async () => {
    const profile = await fetchDonorInspectorProfile(mockAPIUrl);
    console.log("Final Inspector Data:\n", profile);
    
    console.log("\n--- Simulating network error test ---");
    const badProfile = await fetchDonorInspectorProfile("https://invalid-api-endpoint.org/users/9999");
    console.log("Final Fallback Profile:\n", badProfile);
})();
```

### 5. Practical Exercises
* **Task 1**: Change the API destination URL to fetch a list of posts (`https://jsonplaceholder.typicode.com/posts`) and map the first 3 items to look like mock food donation listings.
* **Task 2**: Implement an authorization token checker that throws an "Unauthorized Access" error if a mocked header parameter is missing in `fetchDonorInspectorProfile`.

### 6. Live Coding Demonstration
Instruct students to:
1. Create a script called `network_fetcher.js`.
2. Wrap a local API invocation using native Node `fetch()` inside an `async/await` block.
3. Write a nested conditional statement that validates if the target server payload has a valid body, wrapping it in a `try/catch` block.

---

## Module 5: Git & GitHub Version Control for Teams (Hours 9 - 10)

### 1. Concept Explanation
* **Git**: A local, distributed version control system that tracks file modifications over time.
* **GitHub**: A cloud hosting service for Git repositories.
* **Branching**: A way to work on new features parallelly without mutating stable main branch code.
* **Merge Conflicts**: Occur when two developers edit identical lines in a file across different branches, or when a file is modified in one branch and deleted in another. Git adds conflict markers to the file:
```
<<<<<<< HEAD
[code on the current checked out branch]
=======
[code on the branch being merged in]
>>>>>>> branch-name
```

### 2. Real-World SaaS Use Cases
Enterprise SaaS teams push code hundreds of times daily. Standardizing commit logs (Conventional Commits) and using strict branching strategies (e.g., pulling code from `feature/` -> `development` -> `main`) ensures code stability and seamless collaboration.

### 3. Zero Hunger Project Context
We will walk students through setting up a Zero Hunger codebase repository, staging code files, committing updates using conventional prefixes, creating feature branches for donation listings, simulating a merge conflict, resolving it, and pushing it to a remote origin.

### 4. Step-by-Step Command Flow & Conflict Resolution

#### Step A: Initialize the local project tracking
```powershell
# Create a new local folder
mkdir zero-hunger-git-demo
cd zero-hunger-git-demo

# Initialize the Git tracker
git init

# Configure local workspace identifiers
git config --local user.name "Student Developer"
git config --local user.email "student@zerohunger.org"
```

#### Step B: Define global exclusions (`.gitignore`)
Create a `.gitignore` file to ensure local variables, environment files, and system logs remain offline:
```
# Exclude node modules and temporary logs
node_modules/
.env
*.log
.DS_Store
```

#### Step C: The First Staged Commit
Create a file `index.js` containing initial core variables:
```javascript
const platformTitle = "Zero Hunger Core Platform";
console.log(platformTitle);
```
Run version commands in powershell:
```powershell
# View unstaged files
git status

# Stage the file modifications
git add .

# Save snapshot with clear conventional message
git commit -m "feat: initialize platform core and gitignore settings"
```

#### Step D: Parallel Branching & Conflict Creation
```powershell
# Create and jump to a feature branch for NGO dashboards
git checkout -b feature/ngo-dash
```
Edit `index.js` to look like this on the branch:
```javascript
const platformTitle = "Zero Hunger Core Platform - NGO Portal";
console.log(platformTitle);
```
Save the file and commit:
```powershell
git add index.js
git commit -m "feat: add NGO Portal branding"
```
Switch back to `main` branch:
```powershell
git checkout main
```
Edit `index.js` in the main branch to simulate a conflict:
```javascript
const platformTitle = "Zero Hunger Core Platform - Admin Portal";
console.log(platformTitle);
```
Save the file and commit:
```powershell
git add index.js
git commit -m "feat: add Admin Portal branding"
```

#### Step E: Triggering and Resolving the Conflict
Now, attempt to merge the NGO branch into the main branch:
```powershell
git merge feature/ngo-dash
```
*Output*:
```
Auto-merging index.js
CONFLICT (content): Merge conflict in index.js
Automatic merge failed; fix conflicts and then commit the result.
```
Open `index.js` to see the conflict markers inserted by Git:
```javascript
<<<<<<< HEAD
const platformTitle = "Zero Hunger Core Platform - Admin Portal";
=======
const platformTitle = "Zero Hunger Core Platform - NGO Portal";
>>>>>>> feature/ngo-dash
console.log(platformTitle);
```
To resolve the conflict, edit the file manually. Let's merge both roles:
```javascript
const platformTitle = "Zero Hunger Core Platform - Admin & NGO Integrated Portal";
console.log(platformTitle);
```
After editing, run these commands to complete the merge:
```powershell
# Stage the resolved conflict file
git add index.js

# Commit the merge resolution
git commit -m "merge: resolve dashboard conflict between Admin and NGO portals"
```

### 5. Practical Exercises
* **Task 1**: Create a feature branch named `feature/donor-verification`.
* **Task 2**: Add a new file `donor.js` inside it, commit it, switch back to `main`, and merge the feature branch cleanly.

---

## Module 6: Capstone Mini-Project (Hours 11 - 12)
### **Zero Hunger Terminal Dashboard Console Engine**

To round out the 12-hour masterclass, students will construct a fully functional command-line dashboard application using Node.js. This application integrates JavaScript fundamentals, ES6 collections, arrays, objects, flow control, asynchronous database engines, network operations, error resilience, and terminal interface interactions.

### Code Implementation
Instruct students to write this comprehensive solution to `zero_hunger_terminal_dashboard.js`.

```javascript
/**
 * Title: Zero Hunger Terminal Dashboard Console Engine
 * Description: Fully integrated console app managing registration, donation logic, 
 * asynchronous allocation routing, and API directory searches.
 */

// 1. In-Memory Database Structure
const state = {
    donors: [],
    donations: [
        { id: "DON-101", item: "Chicken Biryani", quantityKgs: 12, hoursRemaining: 1.5, type: "Non-Veg", status: "Available" },
        { id: "DON-102", item: "Stuffed Parathas", quantityKgs: 25, hoursRemaining: 5, type: "Veg", status: "Available" },
        { id: "DON-103", item: "Fruit Salad Cups", quantityKgs: 8, hoursRemaining: 0.8, type: "Veg", status: "Available" }
    ],
    logs: []
};

// 2. Helper Utility: Immutably add events to logs
const logSystemActivity = (activity) => {
    state.logs = [...state.logs, { timestamp: new Date().toLocaleTimeString(), activity }];
};

// 3. Module 1: Scoped variables & logic to register donors
const registerDonor = (name, hasFssai, licenseId) => {
    if (!name || typeof name !== "string") {
        throw new Error("Invalid donor name specified.");
    }
    
    const isApproved = hasFssai === true;
    const newDonor = {
        id: `DNR-${state.donors.length + 100}`,
        name,
        isApproved,
        licenseId: isApproved ? licenseId : "NONE"
    };
    
    state.donors.push(newDonor);
    logSystemActivity(`Registered Donor: ${name} (${newDonor.id})`);
    return newDonor;
};

// 4. Module 2: ES6 filtering, mapping, and destructuring
const getUrgentDonations = () => {
    // Return donations expiring in <= 2 hours using arrow functions
    return state.donations.filter(don => don.hoursRemaining <= 2);
};

const displayFormattedDonations = () => {
    console.log("\n=================== ACTIVE DONATIONS CATALOG ===================");
    state.donations.forEach(({ id, item, quantityKgs, hoursRemaining, status }) => {
        const warning = hoursRemaining <= 2 ? "[URGENT!]" : "[STABLE]";
        console.log(`- ID: ${id} | ${item} (${quantityKgs}kg) | Remaining: ${hoursRemaining}h | Status: ${status} ${warning}`);
    });
};

// 5. Module 3 & 4: Promises, Async/Await, Error Handling & Fetch simulation
const simulateVolunteerLookup = (donationId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hasVolunteer = Math.random() > 0.15; // 85% success chance
            if (hasVolunteer) {
                resolve({ volunteerName: "Vikram Malhotra", phone: "9876543210" });
            } else {
                reject("No nearby volunteer accepted the pickup request.");
            }
        }, 1500);
    });
};

const processDonationDispatch = async (donationId) => {
    logSystemActivity(`Initiated Dispatch Pipeline for ${donationId}`);
    console.log(`\n>>> Dispatching logistics for donation ${donationId}...`);
    
    try {
        const donation = state.donations.find(d => d.id === donationId);
        
        if (!donation) {
            throw new Error("Invalid donation reference ID.");
        }
        
        if (donation.status !== "Available") {
            throw new Error("This donation is already claimed or dispatched.");
        }
        
        // Await simulated volunteer assignment
        const volunteerInfo = await simulateVolunteerLookup(donationId);
        
        // Update state immutably using mapping
        state.donations = state.donations.map(d => {
            if (d.id === donationId) {
                return { ...d, status: "Dispatched", assignedVolunteer: volunteerInfo.volunteerName };
            }
            return d;
        });
        
        console.log("SUCCESS: Volunteer Assigned!");
        console.log(`Volunteer: ${volunteerInfo.volunteerName} (Tel: ${volunteerInfo.phone})`);
        logSystemActivity(`Dispatched ${donationId} via ${volunteerInfo.volunteerName}`);
        
    } catch (dispatchError) {
        console.error(`DISPATCH FAILED: ${dispatchError.message}`);
        logSystemActivity(`Dispatch failed for ${donationId}. Reason: ${dispatchError.message}`);
    } finally {
        console.log("Dispatch request iteration ended.");
    }
};

// 6. External Network Fetch API Simulation
const verifyInspectorAgencyDetails = async () => {
    console.log("\n>>> Accessing international Food Safety directory database...");
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/users/3");
        if (!result.ok) throw new Error("Central server returned bad response.");
        const data = await result.json();
        console.log(`Verified inspection agency contact: ${data.name} (Email: ${data.email})`);
        logSystemActivity(`Verified FSSAI agent: ${data.name}`);
    } catch (networkErr) {
        console.error("Network validation error: Running in offline local validation mode.");
    }
};

// 7. Interactive Orchestrated Main Execution Routine
async function runSystemTest() {
    console.log("=== STARTING CAPSTONE WORKSHOP TEST ENVIRONMENT ===");
    
    // Test Module 1: Register Donors
    registerDonor("Taj Palace Banquet", true, "FSSAI-98716253401");
    registerDonor("Local Cafe House", false);
    
    console.log("\nRegistered Donors database list:");
    console.log(state.donors);
    
    // Test Module 2: Display active listings and urgent ones
    displayFormattedDonations();
    
    const urgentItems = getUrgentDonations();
    console.log("\nUrgent Donations Filter Result:");
    console.log(urgentItems);
    
    // Test Module 3 & 4: Dispatch Process
    // Dispatch urgent item DON-101
    await processDonationDispatch("DON-101");
    
    // Attempt dispatch with invalid ID to test error handling catches
    await processDonationDispatch("DON-INVALID");
    
    // Test Fetch API simulation
    await verifyInspectorAgencyDetails();
    
    // Display updated Catalog and final system logs
    displayFormattedDonations();
    
    console.log("\n=================== FINAL SYSTEM AUDIT LOGS ===================");
    state.logs.forEach(({ timestamp, activity }) => {
        console.log(`[${timestamp}] - ${activity}`);
    });
}

// Run test engine
runSystemTest();
```

### Capstone Exercises for Students
1. **Extend the Registration Requirement**: Modify `registerDonor` so it throws an error if `hasFssai` is `false` but the user attempts to pass a custom license ID anyway.
2. **Implement NGO Claim Logic**: Write a new asynchronous function `claimDonation(donationId, ngoId)` which marks a donation status as `"NGO-Claimed"`, handling exceptions safely using `try/catch`.
3. **Save System Logs to Local Disk**: Using Node.js's file system module (`fs`), write a function that formats `state.logs` as JSON and saves it locally to a file named `system_audit.json`.

---

## 12-Hour Training Delivery Guidelines for Instructors

1. **Live-Coding Cadence**:
   * Do not copy-paste code directly. Build it block-by-block with the students.
   * Highlight common console errors (such as `ReferenceError` when scope boundary rules are broken, or `TypeError` when calling `.map` on non-array properties) so students learn to troubleshoot errors.
2. **Hands-On Lab Bounded Timing**:
   * Allocate the final 20 minutes of each module specifically for student practical exercises.
   * Walk around/monitor screen shares to ensure every student registers files, creates Git conventional branches, and handles merge conflicts correctly.
3. **Platform Sandbox Integration**:
   * Have students run code in their command line, and simultaneously open their browsers to `sandbox.html` and `srs.html` to visually map variables, callbacks, and database connections.
>>>>>>> 52476d1 (docs: integrate Chapter 1 Intro to JS and MERN Stack foundations into MasterClass Guide)

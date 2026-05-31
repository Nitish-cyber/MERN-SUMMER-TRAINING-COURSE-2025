# 🟢 Node.js + Express + Database → Full-Stack Backend
## Zero Hunger Platform · Bootcamp Training Manual (Deep Dive Edition)

> **Duration:** 12 Hours · **Mode:** Live Coding + Hands-On Practice
> **Project Context:** *Zero Hunger* — connecting food donors, NGOs, volunteers & beneficiaries.
> **Prerequisite:** JavaScript Fundamentals (functions, arrays, objects, async/await, fetch) and React (you'll connect the two at the end).
> **How to read this:** Each concept is built up gently — a **real-life analogy**, the **theory**, the **syntax**, and **working example code** you can run. The goal is simple: read it top to bottom and the concept *clicks*. No prior backend knowledge assumed.

---

## 🎯 Learning Objectives

By the end of this module you will be able to:

- Understand what Node.js is and run JavaScript on a server
- Use npm and structure a backend project
- Build a web server and REST API with Express
- Perform full **CRUD** (Create, Read, Update, Delete) operations
- Store data permanently in **MongoDB** with **Mongoose**
- Secure the API with **JWT authentication** (Register / Login)
- Protect routes with middleware and role-based access
- Connect the **React frontend** to the backend (Fetch/Axios) with loading & error states
- Understand the **full-stack flow** end to end and get your **capstone project allocated**

---

## 🗺️ Module Map

| # | Module | Core Idea |
|---|--------|-----------|
| 0 | Setup | Install Node, init a project |
| 1 | Node.js Basics | JavaScript on the server |
| 2 | npm & Modules | Packages & code organization |
| 3 | Express Setup | Your first server |
| 4 | Routing & Requests | URLs, methods, params, query |
| 5 | Middleware | The request pipeline |
| 6 | REST APIs & CRUD | The 4 core operations |
| 7 | MongoDB & Mongoose | Storing data permanently |
| 8 | CRUD with the Database | Real persistence |
| 9 | Authentication (JWT) | Register, Login, hashing |
| 10 | Protecting Routes & Roles | Auth middleware + RBAC |
| 11 | Connecting React (Fetch/Axios) | Frontend ↔ backend |
| 12 | Async Data, Loading & Errors | A robust UI |
| 13 | Full-Stack Flow + Structure | How it all fits together |
| 🏆 | **Mini-Project** | **Zero Hunger REST API + React** |

---

## 🧰 Module 0: Setup

**Real-life analogy:** Before cooking, you set up the kitchen. Node is your stove; npm is your pantry of ready-made ingredients.

You already have Node from the JS module. Verify it:
```bash
node -v        # ▶ v20.x.x (or similar)
npm -v         # ▶ 10.x.x
```

Start a backend project:
```bash
mkdir zero-hunger-api
cd zero-hunger-api
npm init -y                 # creates package.json
```
```
▶ Wrote to .../package.json
```

Install the tools we'll use across the module:
```bash
npm install express mongoose jsonwebtoken bcryptjs cors dotenv
npm install --save-dev nodemon
```

In `package.json`, add scripts so you can run the server easily:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```
`nodemon` auto-restarts the server every time you save — no manual stopping/starting.

---

# 📦 Module 1: Node.js Basics

## What is Node.js?

**Real-life analogy:** JavaScript used to be a language that could only "live" inside the browser — like a fish that could only swim in an aquarium. **Node.js is the ocean** that lets that same fish swim anywhere: on servers, on your laptop, in the cloud.

**Theory:** Node.js is a **runtime** that runs JavaScript *outside* the browser. It uses the same engine as Chrome (V8) but adds the ability to read files, talk to databases, and run web servers — things browsers don't allow for security reasons.

So now JavaScript runs in **two places**:
```
BROWSER (frontend)  →  React, the UI the user sees
NODE.JS (backend)   →  the server, the database, the business logic
```
**One language for the whole stack.** That's the magic of MERN.

## Why is Node good for servers?

**Theory:** Node is **non-blocking** and **event-driven**. 

**Real-life analogy:** Imagine a waiter (Node) in a restaurant. A *blocking* waiter would take your order, walk to the kitchen, **stand there waiting** for the food, bring it, and only then serve the next table. A *non-blocking* waiter takes your order, hands it to the kitchen, and **immediately serves other tables** while the food cooks. When the food is ready, they deliver it. One waiter serves many tables efficiently — that's Node handling thousands of requests with a single thread.

This is the **event loop** you met in the JS module (callbacks, promises, async/await) — now you see *why* it matters: it's what makes Node fast at handling many users at once.

## Running JavaScript with Node

Create a file `hello.js`:
```javascript
console.log("Zero Hunger backend is alive!");

const donation = { food: "Rice", qty: 100 };
console.log(`Received ${donation.qty} units of ${donation.food}`);
```
Run it:
```bash
node hello.js
```
```
▶ Zero Hunger backend is alive!
▶ Received 100 units of Rice
```
That's it — JavaScript running on your machine, no browser involved.

## The global objects you get on the server

In the browser you had `window` and `document`. On Node you get server-side globals:

```javascript
console.log(__dirname);        // the folder this file lives in
console.log(process.platform); // 'linux', 'darwin', 'win32'...
process.env.MY_KEY             // environment variables (secrets live here)
```

**Real-life analogy:** `process.env` is like a **safe** in your office — you store secrets (passwords, API keys) there instead of writing them on a sticky note (in your code).

## 🧠 Whiteboard — where Node sits

```
   USER'S BROWSER                YOUR SERVER (Node.js)         DATABASE
  ┌──────────────┐   request    ┌────────────────────┐       ┌──────────┐
  │   React UI    │ ───────────► │  Express + logic    │ ────► │ MongoDB  │
  │  (frontend)   │ ◄─────────── │  (backend)          │ ◄──── │          │
  └──────────────┘   response   └────────────────────┘       └──────────┘
        Tier 1                          Tier 2                   Tier 3
```
Node lives in **Tier 2** — the brain between the UI and the data.

## 🏋️ Practice
1. Print a welcome message and a donation object with `node`.
2. Log `__dirname` and `process.platform`.
3. Write a function `formatDonation(food, qty)` and call it in a Node file.
4. In your own words (2 sentences): what does "non-blocking" mean?
5. Explain the waiter analogy to someone else.

## 💬 Interview Questions
- What is Node.js? How is it different from running JS in a browser?
- What engine does Node use?
- What does "non-blocking, event-driven" mean?
- Why is Node well-suited to building APIs?
- What is `process.env` used for?

---

# 📦 Module 2: npm & Modules

## What is npm?

**Real-life analogy:** You don't grow your own wheat to bake bread — you buy flour. **npm (Node Package Manager)** is the world's largest grocery store of ready-made code ("packages") that other developers have written and shared. Need to build a server? Grab `express`. Need to talk to MongoDB? Grab `mongoose`.

**Theory:** `npm install <package>` downloads code into a `node_modules/` folder and records it in `package.json`. Anyone who clones your project runs `npm install` and gets the exact same ingredients.

```bash
npm install express        # adds express to your project
```
```
package.json (records what your project depends on)
node_modules/  (the actual downloaded code — never edit, never commit)
```

> 📝 Always add a `.gitignore` containing `node_modules/` and `.env`. You commit the *recipe* (`package.json`), not the *groceries* (`node_modules`).

## Modules — splitting code into files

**Real-life analogy:** A cookbook isn't one giant page — it has chapters. **Modules** let you split your code into files that share what they need.

**Theory:** Node supports two systems. Modern projects use **ES Modules** (`import`/`export`), the same syntax you used in React.

**`mathUtils.js`** — export functions:
```javascript
export const totalUnits = (donations) =>
  donations.reduce((sum, d) => sum + d.qty, 0);

export const isLarge = (qty) => qty > 50;
```

**`app.js`** — import and use them:
```javascript
import { totalUnits, isLarge } from "./mathUtils.js";

const donations = [{ qty: 100 }, { qty: 20 }];
console.log(totalUnits(donations));   // ▶ 120
console.log(isLarge(100));            // ▶ true
```

> To use `import`/`export` in Node, add `"type": "module"` to your `package.json`. (The older style is `require()` / `module.exports` — you'll see it in many tutorials; both work.)

## 🧠 Whiteboard — how modules connect

```
   mathUtils.js                app.js
   ┌──────────────┐  import   ┌──────────────┐
   │ export fnA    │ ────────► │ import { fnA }│
   │ export fnB    │           │ use fnA(...)  │
   └──────────────┘           └──────────────┘

  export = "make this available to other files"
  import = "bring it in here"
```

## 🏋️ Practice
1. `npm install express` and look at how `package.json` changed.
2. Create a `.gitignore` with `node_modules/` and `.env`.
3. Make a `utils.js` exporting two functions; import them into `app.js`.
4. Export a constant (`const PLATFORM = "Zero Hunger"`) and import it.
5. Explain why you commit `package.json` but not `node_modules`.

## 💬 Interview Questions
- What is npm? What does `npm install` do?
- Difference between `package.json` and `node_modules`?
- What does `export` / `import` accomplish?
- Why shouldn't you commit `node_modules`?
- What are dependencies vs devDependencies?

---

# 📦 Module 3: Express Setup

## What is Express?

**Real-life analogy:** Node gives you raw bricks to build a server, but it's tedious. **Express** is a pre-fabricated frame — walls and doorways already in place. You just decide what's behind each door.

**Theory:** Express is a minimal framework on top of Node that makes building web servers and APIs simple. You define **routes** (a URL + an HTTP method) and what to send back.

## Your first server

**`server.js`:**
```javascript
import express from "express";

const app = express();              // create the app
const PORT = 5000;

// a route: when someone GETs "/", send a message
app.get("/", (req, res) => {
  res.send("Zero Hunger API is running 🍱");
});

// start listening
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```
Run it:
```bash
npm run dev
```
```
▶ Server running on http://localhost:5000
```
Open `http://localhost:5000` in your browser → you'll see **Zero Hunger API is running 🍱**.

## Understanding `req` and `res`

**Real-life analogy:** A route handler is like a **post office clerk**. A customer hands over a letter (`req` — the **request**), the clerk reads it, and hands back a reply (`res` — the **response**).

```javascript
app.get("/about", (req, res) => {
  // req = everything the client SENT (url, headers, body, params)
  // res = the tools to REPLY (send text, json, status codes)
  res.send("Zero Hunger connects food donors with NGOs.");
});
```

## Sending JSON (what APIs actually do)

APIs don't send web pages — they send **data**, almost always as **JSON**:
```javascript
app.get("/api/status", (req, res) => {
  res.json({ status: "ok", platform: "Zero Hunger", version: 1 });
});
```
Visiting `/api/status`:
```json
{ "status": "ok", "platform": "Zero Hunger", "version": 1 }
```

## Reading JSON the client sends (a one-line essential)

To let your server *read* JSON sent in a request body, add this line once, near the top:
```javascript
app.use(express.json());   // parses incoming JSON bodies into req.body
```
Without it, `req.body` would be `undefined`. (More on `app.use` in the Middleware module.)

## 🧠 Whiteboard — the request/response cycle

```
   Client                         Express Server
     │   GET /api/status              │
     │ ───────────────────────────►  │  matches app.get("/api/status")
     │                                │  runs the handler (req, res)
     │   { status: "ok", ... }        │  res.json({...})
     │ ◄───────────────────────────  │
```

## 🏋️ Practice
1. Create `server.js` with a `/` route; run it and view it in the browser.
2. Add a `/about` route returning a sentence about Zero Hunger.
3. Add `/api/status` returning a JSON object.
4. Add `app.use(express.json())` and explain what it enables.
5. Change the port to 4000 and confirm it still works.

## 💬 Interview Questions
- What is Express and why use it over raw Node?
- What do `req` and `res` represent?
- Difference between `res.send()` and `res.json()`?
- What does `app.listen()` do?
- Why do you need `express.json()`?

---

# 📦 Module 4: Routing & Requests

## What is routing?

**Real-life analogy:** A building has many doors, each leading somewhere different. **Routing** is the directory that says "this URL + this method → go here."

**Theory:** A **route** = an **HTTP method** + a **path** + a **handler**. The four methods you'll use map to the four things you can do with data:

```javascript
app.get("/api/donations", handler);     // READ   — fetch donations
app.post("/api/donations", handler);    // CREATE — add a donation
app.put("/api/donations/:id", handler); // UPDATE — change a donation
app.delete("/api/donations/:id", handler); // DELETE — remove a donation
```

## Route parameters (`:id`)

**Real-life analogy:** A parcel tracking URL like `/track/12345` — the `12345` is a **parameter** that changes per parcel.

```javascript
app.get("/api/donations/:id", (req, res) => {
  const id = req.params.id;            // grabs the value from the URL
  res.json({ message: `You asked for donation #${id}` });
});
```
Visiting `/api/donations/7`:
```json
{ "message": "You asked for donation #7" }
```

## Query strings (`?key=value`)

**Real-life analogy:** Filters on a shopping site — `?city=Pune&minQty=50`.

```javascript
app.get("/api/donations", (req, res) => {
  const { city, minQty } = req.query;       // destructuring (from JS module!)
  res.json({ city, minQty });
});
```
Visiting `/api/donations?city=Pune&minQty=50`:
```json
{ "city": "Pune", "minQty": "50" }
```

## The request body (data the client sends)

**Real-life analogy:** Filling out a form and submitting it — the form contents travel in the **body** of a POST request.

```javascript
app.post("/api/donations", (req, res) => {
  const newDonation = req.body;          // requires express.json()
  res.status(201).json({
    message: "Donation created",
    data: newDonation
  });
});
```

## 🧠 Whiteboard — where data comes from

```
   PARAMS   →  in the URL path     /donations/:id   →  req.params.id
   QUERY    →  after ? in URL       /donations?city=Pune → req.query.city
   BODY     →  sent with POST/PUT   { food, qty }    →  req.body
   HEADERS  →  metadata             Authorization    →  req.headers

  Method tells you the INTENT:  GET=read  POST=create  PUT=update  DELETE=remove
```

## Status codes — speaking HTTP

**Real-life analogy:** Traffic lights for your API.

| Code | Meaning | When |
|------|---------|------|
| 200 | OK | successful GET/PUT/DELETE |
| 201 | Created | successful POST |
| 400 | Bad Request | client sent invalid data |
| 401 | Unauthorized | not logged in |
| 403 | Forbidden | logged in but not allowed |
| 404 | Not Found | resource doesn't exist |
| 500 | Server Error | something broke on the server |

```javascript
res.status(404).json({ error: "Donation not found" });
```

## 🏋️ Practice
1. Add GET/POST/PUT/DELETE routes for `/api/donations` (just log + reply for now).
2. Read an `:id` route param and echo it back.
3. Read `city` and `minQty` from the query string.
4. POST a donation object and return it with status 201.
5. Return a 404 with a JSON error from one route.

## 💬 Interview Questions
- What is a route? What three things define it?
- Difference between route params, query strings, and the body?
- How do you read each of them in Express?
- Which HTTP methods map to which CRUD actions?
- What status code do you return after creating a resource?

---

# 📦 Module 5: Middleware

## What is middleware?

**Real-life analogy:** Airport security. Before you reach your gate (the route handler), you pass through checkpoints: ticket check, baggage scan, passport control. Each **checkpoint** can inspect you, modify something (stamp your passport), let you continue, or stop you. **Middleware** are those checkpoints for every request.

**Theory:** Middleware are functions that run **in order**, *between* the incoming request and your route handler. Each gets `(req, res, next)` and either responds or calls `next()` to pass control onward.

```javascript
// a simple logging middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);   // log every request
  next();                                     // pass to the next step
};

app.use(logger);   // apply to ALL routes
```
Now every request prints, e.g.:
```
▶ GET /api/donations
▶ POST /api/donations
```

## Built-in & third-party middleware you'll use

```javascript
app.use(express.json());   // parse JSON bodies (built-in)
app.use(cors());           // allow the React app to call this API (third-party)
```

**Real-life analogy for CORS:** A bouncer with a guest list. By default a browser won't let your React app (running on `localhost:5173`) call your API (`localhost:5000`) — different origins. The **`cors`** middleware adds your frontend to the guest list.

## The flow with middleware

```
Request  →  [logger]  →  [express.json]  →  [cors]  →  ROUTE HANDLER  →  Response
              each calls next() to continue ───────────►
```

## Error-handling middleware (special: 4 arguments)

**Real-life analogy:** A complaints desk that catches any problem from anywhere in the building.

```javascript
// note the FOUR parameters — that's how Express knows it's an error handler
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Something went wrong" });
});
```
Put this **last**, after all routes.

## 🧠 Whiteboard — the pipeline

```
        ┌──────────── the request pipeline ────────────┐
 REQ →  │ logger → json parser → cors → auth → handler  │ → RES
        └───────────────────────────────────────────────┘
                each step: do work, then next()
                or: stop and send a response (e.g. auth fails → 401)

  app.use(fn)        → runs on every request
  app.use(path, fn)  → runs only on matching paths
  (err,req,res,next) → error handler (4 args), goes LAST
```

## 🏋️ Practice
1. Write a `logger` middleware and apply it with `app.use`.
2. Add `express.json()` and `cors()` to your server.
3. Write a middleware that adds `req.requestTime = Date.now()` and use it in a route.
4. Add an error-handling middleware that returns a 500 JSON.
5. Explain CORS using the bouncer analogy in your own words.

## 💬 Interview Questions
- What is middleware? What arguments does it receive?
- What does `next()` do?
- What is CORS and why do you need the `cors` middleware?
- How does Express recognize an error-handling middleware?
- Difference between `app.use(fn)` and `app.use(path, fn)`?

---

# 📦 Module 6: REST APIs & CRUD Operations

## What is a REST API?

**Real-life analogy:** A restaurant menu. You (the client) don't walk into the kitchen — you order from a **menu** of well-defined options, and the kitchen (server) handles the rest. A **REST API** is that menu: a set of URLs (endpoints) that let clients work with data in a predictable way.

**Theory:** **CRUD** = the four things you can do with any data:

| CRUD | HTTP Method | Endpoint | Meaning |
|------|-------------|----------|---------|
| **C**reate | POST | `/api/donations` | add a new donation |
| **R**ead | GET | `/api/donations` | list all / `:id` for one |
| **U**pdate | PUT | `/api/donations/:id` | change a donation |
| **D**elete | DELETE | `/api/donations/:id` | remove a donation |

## Full CRUD with an in-memory array

We'll start without a database — just a JavaScript array — so the CRUD logic is crystal clear. (Next module swaps in MongoDB.)

**`server.js`:**
```javascript
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// our "database" for now — just an array (from the JS module!)
let donations = [
  { id: 1, donor: "ABC Restaurant", food: "Rice",  qty: 100 },
  { id: 2, donor: "XYZ Hotel",      food: "Bread", qty: 20 }
];

// READ all  → GET /api/donations
app.get("/api/donations", (req, res) => {
  res.json(donations);
});

// READ one  → GET /api/donations/:id
app.get("/api/donations/:id", (req, res) => {
  const donation = donations.find(d => d.id === Number(req.params.id));
  if (!donation) return res.status(404).json({ error: "Not found" });
  res.json(donation);
});

// CREATE    → POST /api/donations
app.post("/api/donations", (req, res) => {
  const { donor, food, qty } = req.body;          // destructuring
  if (!donor || !food || !qty) {
    return res.status(400).json({ error: "All fields required" });
  }
  const newDonation = { id: Date.now(), donor, food, qty };
  donations.push(newDonation);
  res.status(201).json(newDonation);              // 201 = Created
});

// UPDATE    → PUT /api/donations/:id
app.put("/api/donations/:id", (req, res) => {
  const id = Number(req.params.id);
  donations = donations.map(d =>                  // .map (from JS module!)
    d.id === id ? { ...d, ...req.body } : d        // spread merge
  );
  res.json({ message: "Updated" });
});

// DELETE    → DELETE /api/donations/:id
app.delete("/api/donations/:id", (req, res) => {
  const id = Number(req.params.id);
  donations = donations.filter(d => d.id !== id); // .filter (from JS module!)
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("API on http://localhost:5000"));
```

Notice how your JS skills carry over: `.find`, `.map`, `.filter`, spread, destructuring — the *exact same tools*, now on the server.

## Testing your API

**Real-life analogy:** A test kitchen before opening to customers. Use **Postman** or **Thunder Client** (a VS Code extension) to send requests without a frontend.

```
GET    http://localhost:5000/api/donations          → see the list
POST   http://localhost:5000/api/donations          → body: { "donor":"Hall","food":"Milk","qty":50 }
PUT    http://localhost:5000/api/donations/2         → body: { "qty": 99 }
DELETE http://localhost:5000/api/donations/2         → removes it
```

## 🧠 Whiteboard — REST mental model

```
   ONE resource ("donations"), FOUR operations:

   GET    /api/donations       → read all      ┐
   GET    /api/donations/:id   → read one      │  nouns in the URL,
   POST   /api/donations       → create         │  verbs as HTTP methods
   PUT    /api/donations/:id   → update         │
   DELETE /api/donations/:id   → delete        ┘

   The METHOD is the verb. The URL is the noun. Clean & predictable.
```

## Organizing code (a peek at structure)

As the app grows, you split logic out of `server.js`:
```
routes/donationRoutes.js     → declares the endpoints
controllers/donationController.js → the logic for each endpoint
```
You'll do this properly in Module 13. For now, knowing *why* (keep `server.js` clean) is enough.

## 🏋️ Practice
1. Build all 5 CRUD routes with an in-memory array.
2. Add validation: reject a POST missing any field with 400.
3. Return 404 when reading an `:id` that doesn't exist.
4. Test all routes in Postman/Thunder Client.
5. Add a `status` field defaulting to `"Available"` on create.

## 💬 Interview Questions
- What does REST stand for at a high level, and what makes an API "RESTful"?
- Map each CRUD operation to its HTTP method.
- Why use nouns (not verbs) in endpoint URLs?
- How do you read the body of a POST request?
- What status codes go with create, not-found, and bad input?

---

# 📦 Module 7: MongoDB & Mongoose

## The problem with the array

**Real-life analogy:** Writing orders on a whiteboard. The moment you wipe it (restart the server), everything's gone. Our in-memory array is a whiteboard. We need a **filing cabinet** — a database.

## What is MongoDB?

**Theory:** MongoDB is a **NoSQL document database**. Instead of rigid tables (like Excel), it stores **documents** that look just like JavaScript objects (JSON). 

**Real-life analogy:** A filing cabinet of folders. Each **collection** is a drawer (e.g., "donations"), and each **document** is a folder inside it (one donation). Folders in the same drawer don't have to be identical — flexible by design.

```javascript
// a MongoDB document — looks exactly like a JS object
{
  _id: "65f...",            // MongoDB gives every document a unique id
  donor: "ABC Restaurant",
  food: "Rice",
  qty: 100,
  status: "Available"
}
```

## MongoDB Atlas (cloud) — the easy way

**Real-life analogy:** Renting a secure storage unit instead of building one. **Atlas** is MongoDB's free cloud database.

1. Create a free cluster at mongodb.com/atlas
2. Create a database user + password
3. Copy the **connection string** (looks like `mongodb+srv://user:pass@cluster.../zerohunger`)
4. Put it in your `.env` file (never in code):

**`.env`:**
```
MONGO_URI=mongodb+srv://user:pass@cluster0.xxx.mongodb.net/zerohunger
JWT_SECRET=someLongRandomSecretString
```

## What is Mongoose?

**Real-life analogy:** MongoDB is a flexible filing cabinet — *too* flexible; someone might file a donation with no quantity. **Mongoose** is the office manager who enforces rules: "every donation folder MUST have a donor and a quantity." 

**Theory:** Mongoose is an **ODM** (Object Data Modeling) library. It gives you **schemas** (the rules/shape), **models** (the tools to query), validation, and clean async methods.

## Connecting to the database

**`config/db.js`:**
```javascript
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);   // async/await!
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  }
};
```

In `server.js`:
```javascript
import "dotenv/config";          // loads .env into process.env
import { connectDB } from "./config/db.js";
connectDB();
```

## Defining a Schema & Model

**`models/Donation.js`:**
```javascript
import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  donor:  { type: String, required: true },
  food:   { type: String, required: true },
  qty:    { type: Number, required: true, min: 1 },
  city:   { type: String },
  status: { type: String, default: "Available" }
}, { timestamps: true });          // auto-adds createdAt & updatedAt

// "Donation" → Mongoose makes a "donations" collection automatically
export default mongoose.model("Donation", donationSchema);
```

**Real-life analogy:** The **schema** is a blank form template ("Donor: ___, Food: ___, Qty: ___"). The **model** is the photocopier + filing system that lets you create, find, and update those forms.

## 🧠 Whiteboard — the layers

```
   Your Code          Mongoose            MongoDB
   ──────────         ─────────           ────────
   Donation.find()  → translates to    → query the "donations" collection
   Donation.create()→ validates schema → insert a document
                       (rules enforced)   (stored permanently)

   SCHEMA = the shape & rules
   MODEL  = the tool you call to talk to the collection
```

## 🏋️ Practice
1. Create a free Atlas cluster and get your connection string.
2. Put `MONGO_URI` in a `.env` file and load it with `dotenv`.
3. Write `connectDB()` and confirm "MongoDB connected" logs.
4. Define a `Donation` schema with required fields and a default status.
5. Add a `User` schema (name, email, password, role) for later.

## 💬 Interview Questions
- What is MongoDB? How does a document differ from a SQL row?
- What is a collection vs a document?
- What is Mongoose and what does it add over raw MongoDB?
- What's the difference between a schema and a model?
- Why store the connection string in `.env`?

---

# 📦 Module 8: CRUD with the Database

Now we replace the array with real, permanent storage. The route shapes stay the same — only the *insides* change to use the Mongoose model. Every method is **async** (it talks to a database over the network), so we use **async/await + try/catch** (straight from the JS module).

**`controllers/donationController.js`:**
```javascript
import Donation from "../models/Donation.js";

// CREATE
export const createDonation = async (req, res) => {
  try {
    const donation = await Donation.create(req.body);  // validates + saves
    res.status(201).json(donation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ all
export const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find();            // all documents
    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ one
export const getDonation = async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) return res.status(404).json({ error: "Not found" });
    res.json(donation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateDonation = async (req, res) => {
  try {
    const updated = await Donation.findByIdAndUpdate(
      req.params.id, req.body, { new: true }            // {new:true} returns the updated doc
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteDonation = async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
```

## The essential Mongoose methods

| Method | What it does |
|--------|--------------|
| `Model.create(data)` | insert a new document |
| `Model.find()` | get all (optionally `find({ city: "Pune" })`) |
| `Model.findById(id)` | get one by its `_id` |
| `Model.findByIdAndUpdate(id, data, {new:true})` | update & return the new version |
| `Model.findByIdAndDelete(id)` | remove one |

## Filtering & sorting (advanced reads)

```javascript
// only available donations in Pune, newest first
const results = await Donation.find({ city: "Pune", status: "Available" })
  .sort({ createdAt: -1 })
  .limit(10);
```

## Relationships between collections

**Real-life analogy:** A donation "belongs to" a donor (a User). Instead of copying the whole user into every donation, you store a **reference** (their id) — like writing a friend's phone number instead of their entire life story.

```javascript
// in the schema:
donor: { type: mongoose.Schema.Types.ObjectId, ref: "User" }

// when reading, pull in the linked user's details:
const donations = await Donation.find().populate("donor", "name email");
```
`.populate()` swaps the id for the actual user data — like following the reference to the linked folder.

## 🧠 Whiteboard — async DB call

```
   route handler (async)
        │  await Donation.find()
        ▼
   Mongoose ──► MongoDB (over the network — takes time)
        ▲                          │
        └──────── data comes back ─┘
        │
   res.json(data)

  Always: async function + await + try/catch
  (the DB is remote → it's asynchronous, just like fetch was)
```

## 🏋️ Practice
1. Rewrite all 5 CRUD routes to use the Mongoose model.
2. Create a few donations via Postman and confirm they persist after a server restart.
3. Add a filtered read: `GET /api/donations?city=Pune`.
4. Sort donations newest-first.
5. Add a `User` reference to the donation schema and `.populate()` it.

## 💬 Interview Questions
- Why must database operations be async?
- What does `Donation.create()` do that a plain array `.push()` doesn't?
- What does `{ new: true }` do in `findByIdAndUpdate`?
- How do you filter and sort with Mongoose?
- What is `.populate()` and when do you use it?

---

# 📦 Module 9: Authentication (JWT) — Register & Login

## The two big questions

**Authentication** = *"Who are you?"* (login). **Authorization** = *"What are you allowed to do?"* (roles — next module).

## Why we can't store passwords as-is

**Real-life analogy:** If a thief steals the filing cabinet, you don't want your passwords written in plain ink. Instead you store a **scrambled fingerprint** of the password that can't be reversed. That scrambling is **hashing**, and we use a library called **bcrypt**.

**Theory:** `bcrypt` turns `"mypassword123"` into something like `"$2a$10$N9qo8uLO..."`. You can't un-scramble it. To check a login, you scramble the entered password the same way and compare fingerprints.

```javascript
import bcrypt from "bcryptjs";

const hashed = await bcrypt.hash("mypassword123", 10);   // 10 = salt rounds (strength)
const isMatch = await bcrypt.compare("mypassword123", hashed);  // ▶ true
```

## What is a JWT?

**Real-life analogy:** A **festival wristband**. When you enter (log in), security checks your ID once and gives you a wristband. For the rest of the day you just flash the wristband — no need to show ID again. The wristband is **tamper-proof** (sealed); if someone fakes one, security can tell.

**Theory:** A **JWT (JSON Web Token)** is a signed string the server gives you on login. It contains your identity (e.g., user id + role) and is **signed with a secret** only the server knows. The client sends it with each request; the server verifies the signature to trust it — **without storing any session**. This is why the *statelessness* from the very first module matters: the token *is* the proof.

```javascript
import jwt from "jsonwebtoken";

// SIGN a token (on login)
const token = jwt.sign(
  { id: user._id, role: user.role },     // payload (what's inside)
  process.env.JWT_SECRET,                 // the secret seal
  { expiresIn: "7d" }                     // auto-expires in 7 days
);

// VERIFY a token (on later requests)
const decoded = jwt.verify(token, process.env.JWT_SECRET);
// decoded → { id: "65f...", role: "donor", iat:..., exp:... }
```

## The User model

**`models/User.js`:**
```javascript
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true, unique: true },  // no duplicates
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "ngo", "vendor", "donor", "volunteer"],   // only these allowed
    default: "donor"
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
```

## Register & Login controllers

**`controllers/authController.js`:**
```javascript
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// helper to create a token
const createToken = (user) =>
  jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

// REGISTER → POST /api/auth/register
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // 1. already exists?
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: "Email already registered" });

    // 2. hash the password (never store plain!)
    const hashed = await bcrypt.hash(password, 10);

    // 3. save the user
    const user = await User.create({ name, email, password: hashed, role });

    // 4. give them a token right away
    res.status(201).json({
      token: createToken(user),
      user: { id: user._id, name: user.name, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN → POST /api/auth/login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. find the user
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    // 2. compare password fingerprints
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    // 3. hand over a fresh token
    res.json({
      token: createToken(user),
      user: { id: user._id, name: user.name, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
```

> 🔐 Notice we return the **same** "Invalid credentials" message whether the email or the password is wrong — so an attacker can't learn which emails are registered.

## 🧠 Whiteboard — the login handshake

```
REGISTER / LOGIN
   client sends email + password
        │
        ▼
   server hashes/compares password  ──► if OK, jwt.sign(...) ──► TOKEN
        │
        ▼
   client stores the token (the "wristband")

LATER REQUESTS
   client sends:  Authorization: Bearer <token>
        │
        ▼
   server jwt.verify(token) ──► trusts req.user ──► allows the action
```

## 🏋️ Practice
1. Build the `User` model with hashed passwords and a `role` enum.
2. Implement `register` (hash + save + return token).
3. Implement `login` (find + compare + return token).
4. Test both in Postman; confirm you get a token back.
5. Try registering the same email twice and confirm the 400 error.

## 💬 Interview Questions
- Difference between authentication and authorization?
- Why hash passwords? What does bcrypt do?
- What is a JWT and what does it contain?
- Why is JWT auth called "stateless"?
- Why return identical error messages for wrong email vs wrong password?

---

# 📦 Module 10: Protecting Routes & Roles (RBAC)

## The auth middleware (the wristband checker)

**Real-life analogy:** A security guard at a VIP door who checks your wristband before letting you through. If there's no wristband or it's fake → turned away (401).

**`middleware/auth.js`:**
```javascript
import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  // token comes as: "Authorization: Bearer <token>"
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Not authorized, no token" });
  }
  try {
    const token = header.split(" ")[1];               // grab just the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;                                // attach { id, role } to the request
    next();                                            // let them through
  } catch (err) {
    res.status(401).json({ error: "Not authorized, invalid token" });
  }
};
```

Use it to guard any route:
```javascript
// only logged-in users can create a donation
app.post("/api/donations", protect, createDonation);
```
Express runs `protect` first; if it calls `next()`, the handler runs; if it responds with 401, the handler never runs.

## Role-based access control (RBAC)

**Real-life analogy:** Different wristband colors. A "donor" wristband can't open the "admin" door even though it's a valid wristband. **RBAC** checks the *role* inside the token.

**`middleware/role.js`:**
```javascript
// a middleware FACTORY — returns a middleware customized for given roles
export const allow = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden: insufficient role" });
    }
    next();
  };
};
```

Stack them — first check logged-in, then check role:
```javascript
// only admins can delete any donation
app.delete("/api/donations/:id", protect, allow("admin"), deleteDonation);

// NGOs and admins can claim donations
app.put("/api/donations/:id/claim", protect, allow("ngo", "admin"), claimDonation);
```

> The Zero Hunger roles — **admin, ngo, vendor, donor, volunteer** — map directly to `allow(...)` rules. This single pattern powers all your permission logic.

## 🧠 Whiteboard — layered guards

```
   DELETE /api/donations/5
        │
        ▼
   [ protect ]   → valid token?  no → 401 (stop)
        │ yes, req.user = { id, role:"donor" }
        ▼
   [ allow("admin") ] → role is admin?  no → 403 (stop)
        │ yes
        ▼
   [ deleteDonation ]  → actually deletes

   401 = "I don't know who you are"
   403 = "I know who you are, but you can't do this"
```

## 🏋️ Practice
1. Write the `protect` middleware and guard the create-donation route.
2. Confirm a request without a token gets 401.
3. Write the `allow(...roles)` middleware.
4. Make delete admin-only; test with a donor token (expect 403).
5. Add a `GET /api/profile` that returns `req.user` (proves the token decoded).

## 💬 Interview Questions
- How does the server know which user is making a request?
- What does the `protect` middleware attach to `req`?
- Difference between 401 and 403?
- How do you restrict a route to certain roles?
- Why check authentication before authorization (order of middleware)?

---

# 📦 Module 11: Connecting React to the Backend (Fetch / Axios)

Now we join the two halves. The React app (frontend) **calls** the Express API (backend) over HTTP — exactly the `fetch` you learned in the JS module, now hitting *your own* server.

## Fetch vs Axios

**Real-life analogy:** Both are delivery services that carry your request to the server and bring back the reply. **Fetch** is built into the browser (no install). **Axios** is a popular library that's a bit more convenient (auto-JSON, easier error handling).

### Fetch (built-in)
```javascript
const res = await fetch("http://localhost:5000/api/donations");
const data = await res.json();      // two awaits (remember from JS module!)
```

### Axios (install: `npm install axios` in the React app)
```javascript
import axios from "axios";
const res = await axios.get("http://localhost:5000/api/donations");
const data = res.data;              // axios parses JSON for you — one step
```

## A reusable API layer (the professional way)

**Real-life analogy:** One main phone line for the whole office, instead of everyone using their own number. Configure Axios **once** and reuse it.

**`src/api.js`** (in the React app):
```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"    // type the base once
});

// automatically attach the JWT to every request (the wristband)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
```
Now anywhere in your app:
```javascript
import api from "./api";
const { data } = await api.get("/donations");          // token attached automatically
await api.post("/donations", { donor, food, qty });
```

## Sending data (POST) from React

```javascript
const addDonation = async (form) => {
  const { data } = await api.post("/donations", form);  // form = { donor, food, qty }
  return data;
};
```

## Login flow from React

```javascript
const login = async (email, password) => {
  const { data } = await api.post("/auth/login", { email, password });
  localStorage.setItem("token", data.token);   // store the wristband
  return data.user;
};
```

## 🧠 Whiteboard — frontend ↔ backend

```
   REACT (localhost:5173)            EXPRESS (localhost:5000)
   ┌────────────────────┐  HTTP    ┌────────────────────────┐
   │ api.get("/donations")├────────►│ app.get("/api/donations")│
   │                     │          │   → Donation.find()      │
   │  receives data ◄────┤◄─────────┤   → res.json(data)       │
   └────────────────────┘          └────────────────────────┘
        different "origins" → that's why the backend needs cors()
        the JWT travels in the Authorization header on every call
```

## 🏋️ Practice
1. In the React app, `npm install axios` and create `src/api.js`.
2. Add a request interceptor that attaches the token.
3. Fetch donations from your backend and `console.log` them.
4. POST a new donation from a function.
5. Build a `login()` that stores the returned token in localStorage.

## 💬 Interview Questions
- Difference between Fetch and Axios?
- What is a `baseURL` and why configure one?
- What does an Axios request interceptor do?
- How do you send the JWT with each request?
- Why does the backend need `cors()` for the React app to call it?

---

# 📦 Module 12: Async Data — Loading State & Error Handling

A real UI must handle three situations for every data call: **loading**, **error**, and **success**. Skipping these is what makes apps feel broken.

**Real-life analogy:** Ordering food delivery. While you wait → a "preparing your order" screen (**loading**). If the restaurant is closed → "sorry, unavailable" (**error**). When it arrives → your meal (**data**). A good app always tells you which state you're in.

## The three-state pattern with `useEffect`

`useEffect` runs code *after* the component renders — perfect for fetching data when a page loads.

```jsx
import { useState, useEffect } from "react";
import api from "./api";

function DonationList() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading]     = useState(true);   // start in loading
  const [error, setError]         = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/donations");
        setDonations(data);          // SUCCESS
      } catch (err) {
        setError("Could not load donations. Please try again.");  // ERROR
      } finally {
        setLoading(false);           // stop loading either way
      }
    };
    load();
  }, []);                            // [] = run once when the component mounts

  // RENDER the right thing for the current state
  if (loading) return <p>Loading donations…</p>;
  if (error)   return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      {donations.length === 0
        ? <p>No donations yet.</p>
        : donations.map(d => (
            <p key={d._id}>{d.food} — {d.qty} units from {d.donor}</p>
          ))
      }
    </div>
  );
}
```

## 🧠 Whiteboard — the three states

```
   COMPONENT MOUNTS
        │  useEffect runs → fetch starts
        ▼
   ┌──────────┐   success   ┌──────────┐
   │ LOADING  │ ──────────► │  DATA     │  → show the list
   │ (spinner)│             └──────────┘
   └────┬─────┘
        │ failure
        ▼
   ┌──────────┐
   │  ERROR   │  → show a friendly message
   └──────────┘

   try   → success path (setData)
   catch → error path  (setError)
   finally → setLoading(false)  ALWAYS
```

## Why the dependency array `[]` matters

**Real-life analogy:** A "do this once when you arrive" sticky note.

```javascript
useEffect(() => { ... }, []);          // runs ONCE on mount
useEffect(() => { ... }, [city]);      // re-runs whenever `city` changes
useEffect(() => { ... });              // runs after EVERY render (rarely what you want)
```

## Handling errors from the server gracefully

```javascript
catch (err) {
  // axios puts the server's reply in err.response
  const msg = err.response?.data?.error || "Something went wrong";
  setError(msg);
}
```
This shows your backend's actual message (e.g., "All fields required") instead of a generic crash.

## 🏋️ Practice
1. Add loading/error/data state to a donation list component.
2. Show a "Loading…" message while fetching.
3. Stop your backend and confirm the error message appears.
4. Show "No donations yet" when the list is empty.
5. Re-fetch whenever a `city` filter state changes (dependency array).

## 💬 Interview Questions
- What three states should every data fetch handle?
- What does `useEffect` do? When does it run?
- What does the dependency array control?
- Why use `finally` to stop loading?
- How do you display the server's specific error message?

---

# 📦 Module 13: Full-Stack Flow + Project Structure

## The complete journey of one click

**Real-life analogy:** Tracking a food donation from the donor's hands to the NGO's table — every handoff in order.

```
1. USER clicks "Add Donation" in React
2. onSubmit handler calls  api.post("/donations", form)
3. Axios attaches the JWT and sends an HTTP POST to the backend
4. EXPRESS receives it → cors → express.json() → protect (verify token)
5. ROUTE → controller: createDonation(req, res)
6. MONGOOSE validates against the schema → saves to MongoDB
7. MongoDB stores the document, returns it
8. Controller sends res.status(201).json(donation)
9. Axios resolves the promise back in React
10. React updates STATE → component re-renders → new card appears
```
Being able to trace and debug along **this whole path** is what makes you full-stack.

## 🧠 Whiteboard — the full stack at a glance

```
 ┌─────────────── FRONTEND (React) ───────────────┐
 │  Components → state → api.js (Axios + token)     │
 └───────────────────────┬──────────────────────────┘
                         │ HTTP (JSON + JWT)
                         ▼
 ┌─────────────── BACKEND (Express/Node) ──────────┐
 │  server.js → middleware → routes → controllers   │
 │  models (Mongoose) ──────────────────────────────┤
 └───────────────────────┬──────────────────────────┘
                         │ Mongoose queries
                         ▼
 ┌─────────────── DATABASE (MongoDB) ──────────────┐
 │  collections of documents (donations, users)     │
 └───────────────────────────────────────────────────┘
```

## Professional folder structure

**Real-life analogy:** A well-organized kitchen — every tool has a drawer. New cooks (developers) find things instantly.

```
zero-hunger-api/                 (BACKEND)
├── server.js                    ← entry: app, middleware, start
├── .env                         ← secrets (MONGO_URI, JWT_SECRET)
├── .gitignore                   ← node_modules/, .env
├── config/
│   └── db.js                    ← database connection
├── models/
│   ├── Donation.js              ← schemas
│   └── User.js
├── controllers/
│   ├── donationController.js    ← the logic
│   └── authController.js
├── routes/
│   ├── donationRoutes.js        ← endpoint declarations
│   └── authRoutes.js
└── middleware/
    ├── auth.js                  ← protect (JWT)
    └── role.js                  ← allow (RBAC)

zero-hunger-ui/                  (FRONTEND)
└── src/
    ├── api.js                   ← Axios instance + token interceptor
    ├── components/              ← DonationCard, DonationForm, ...
    └── pages/                   ← Login, Board, ...
```

## Wiring routes cleanly

**`routes/donationRoutes.js`:**
```javascript
import express from "express";
import { protect } from "../middleware/auth.js";
import { allow } from "../middleware/role.js";
import {
  getDonations, getDonation, createDonation, updateDonation, deleteDonation
} from "../controllers/donationController.js";

const router = express.Router();

router.get("/", getDonations);
router.get("/:id", getDonation);
router.post("/", protect, createDonation);
router.put("/:id", protect, updateDonation);
router.delete("/:id", protect, allow("admin"), deleteDonation);

export default router;
```

**`server.js`** ties it together:
```javascript
import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import donationRoutes from "./routes/donationRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/donations", donationRoutes);   // mount the routers
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server on http://localhost:5000"));
```

## 📌 Project Allocation

At this point you have every backend skill the capstone needs. **Capstone projects are now allocated** — you'll build the full *Zero Hunger* platform (or your assigned variant) using exactly this structure: a React frontend, an Express/Mongo backend, JWT auth with the five roles, and the full-stack flow above.

## 🏋️ Practice
1. Refactor your code into the folder structure shown.
2. Move CRUD logic into a controller; declare routes with `express.Router()`.
3. Mount the routers in `server.js`.
4. Trace one full request end-to-end and write down all 10 steps.
5. Confirm protected + role-restricted routes behave correctly.

## 💬 Interview Questions
- Walk through what happens from a button click to the database and back.
- Why split code into routes / controllers / models / middleware?
- What does `express.Router()` do?
- Where do secrets belong and why?
- What makes someone a "full-stack" developer?

---

# 🏆 FINAL MINI-PROJECT: Zero Hunger REST API + React Connection

> **Goal:** Build a complete, runnable backend that uses **every concept** in this module — Express, routing, middleware, REST CRUD, MongoDB/Mongoose, JWT auth, RBAC, and a React connection with loading/error handling.

## 📋 What you'll build
- **Auth:** Register & Login with hashed passwords + JWT
- **Donations:** full CRUD, stored in MongoDB
- **Security:** create/update require login; delete is admin-only
- **Frontend:** a React page that logs in, lists donations (loading/error states), and adds one

## 🗂️ Concept → file map

| Concept | Where |
|---------|-------|
| Express server + middleware | `server.js` |
| DB connection | `config/db.js` |
| Schemas / models | `models/Donation.js`, `models/User.js` |
| REST CRUD + async/await | `controllers/donationController.js` |
| JWT register/login + bcrypt | `controllers/authController.js` |
| Auth middleware | `middleware/auth.js` |
| RBAC | `middleware/role.js` |
| Routing | `routes/*.js` |
| React + Axios + token | `src/api.js` |
| Loading/error/data states | `src/DonationBoard.jsx` |

## 💻 Backend (key files)

**`.env`**
```
MONGO_URI=your_atlas_connection_string
JWT_SECRET=replace_with_a_long_random_string
PORT=5000
```

**`config/db.js`**
```javascript
import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ DB error:", err.message);
    process.exit(1);
  }
};
```

**`models/User.js`**
```javascript
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin","ngo","vendor","donor","volunteer"], default: "donor" }
}, { timestamps: true });
export default mongoose.model("User", userSchema);
```

**`models/Donation.js`**
```javascript
import mongoose from "mongoose";
const donationSchema = new mongoose.Schema({
  donor:  { type: String, required: true },
  food:   { type: String, required: true },
  qty:    { type: Number, required: true, min: 1 },
  city:   { type: String },
  status: { type: String, default: "Available" },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });
export default mongoose.model("Donation", donationSchema);
```

**`middleware/auth.js`**
```javascript
import jwt from "jsonwebtoken";
export const protect = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) return res.status(401).json({ error: "No token" });
  try {
    req.user = jwt.verify(header.split(" ")[1], process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};
```

**`middleware/role.js`**
```javascript
export const allow = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) return res.status(403).json({ error: "Forbidden" });
  next();
};
```

**`controllers/authController.js`**
```javascript
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const createToken = (u) =>
  jwt.sign({ id: u._id, role: u.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (await User.findOne({ email }))
      return res.status(400).json({ error: "Email already registered" });
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role });
    res.status(201).json({ token: createToken(user), user: { id: user._id, name: user.name, role: user.role } });
  } catch (err) { res.status(500).json({ error: err.message }); }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ error: "Invalid credentials" });
    res.json({ token: createToken(user), user: { id: user._id, name: user.name, role: user.role } });
  } catch (err) { res.status(500).json({ error: err.message }); }
};
```

**`controllers/donationController.js`**
```javascript
import Donation from "../models/Donation.js";

export const getDonations = async (req, res) => {
  try { res.json(await Donation.find().sort({ createdAt: -1 })); }
  catch (err) { res.status(500).json({ error: err.message }); }
};

export const createDonation = async (req, res) => {
  try {
    const donation = await Donation.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json(donation);
  } catch (err) { res.status(400).json({ error: err.message }); }
};

export const updateDonation = async (req, res) => {
  try { res.json(await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true })); }
  catch (err) { res.status(400).json({ error: err.message }); }
};

export const deleteDonation = async (req, res) => {
  try { await Donation.findByIdAndDelete(req.params.id); res.json({ message: "Deleted" }); }
  catch (err) { res.status(500).json({ error: err.message }); }
};
```

**`routes/authRoutes.js`**
```javascript
import express from "express";
import { register, login } from "../controllers/authController.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
export default router;
```

**`routes/donationRoutes.js`**
```javascript
import express from "express";
import { protect } from "../middleware/auth.js";
import { allow } from "../middleware/role.js";
import { getDonations, createDonation, updateDonation, deleteDonation } from "../controllers/donationController.js";
const router = express.Router();
router.get("/", getDonations);
router.post("/", protect, createDonation);
router.put("/:id", protect, updateDonation);
router.delete("/:id", protect, allow("admin"), deleteDonation);
export default router;
```

**`server.js`**
```javascript
import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/donations", donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
```

## 💻 Frontend (React)

**`src/api.js`**
```javascript
import axios from "axios";
const api = axios.create({ baseURL: "http://localhost:5000/api" });
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default api;
```

**`src/DonationBoard.jsx`**
```jsx
import { useState, useEffect } from "react";
import api from "./api";

export default function DonationBoard() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ donor: "", food: "", qty: "" });

  const load = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/donations");
      setDonations(data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || "Could not load donations");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/donations", form);
      setForm({ donor: "", food: "", qty: "" });
      load();                                  // refresh the list
    } catch (err) {
      setError(err.response?.data?.error || "Could not add donation");
    }
  };

  if (loading) return <p>Loading donations…</p>;

  return (
    <div>
      <h1>Zero Hunger — Donations</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input name="donor" value={form.donor} onChange={handleChange} placeholder="Donor" />
        <input name="food"  value={form.food}  onChange={handleChange} placeholder="Food" />
        <input name="qty"   value={form.qty}   onChange={handleChange} placeholder="Qty" type="number" />
        <button disabled={!form.donor || !form.food || !form.qty}>Add</button>
      </form>

      {donations.length === 0
        ? <p>No donations yet.</p>
        : donations.map(d => (
            <p key={d._id}>{d.food} — {d.qty} units from {d.donor} ({d.status})</p>
          ))
      }
    </div>
  );
}
```

## ▶️ How to Run
```bash
# Backend
cd zero-hunger-api
npm install express mongoose jsonwebtoken bcryptjs cors dotenv
npm install -D nodemon
# add .env with MONGO_URI + JWT_SECRET
npm run dev          # → Server on http://localhost:5000

# Frontend (separate terminal)
cd zero-hunger-ui
npm install axios
npm run dev          # → http://localhost:5173
```

## 🧪 Test order (Postman, then the UI)
1. `POST /api/auth/register` → `{ "name":"Admin","email":"a@a.com","password":"123456","role":"admin" }` → copy the token
2. `POST /api/auth/login` → confirm you get a token
3. `GET /api/donations` → `[]` (works without a token — it's public)
4. `POST /api/donations` with header `Authorization: Bearer <token>` → creates one
5. Open the React app → see the donation, add another through the form

## 🚀 Ship it with Git
```bash
git init
printf "node_modules/\n.env\n" > .gitignore
git add .
git commit -m "Zero Hunger REST API + React connection"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

## 🧩 Stretch Challenges
1. Add a `GET /api/profile` (protected) returning the logged-in user.
2. Add a `claim` route restricted to `ngo` and `admin` roles.
3. Add `.populate("createdBy", "name")` so each donation shows who added it.
4. Add pagination to `GET /api/donations` (`?page=1&limit=10`).
5. Add a logout (clear the token) and a login form in React.

---

## 🎓 Final Assessment Checklist

Students must demonstrate:

- [ ] Run a JavaScript program with **Node**
- [ ] Build an **Express** server with middleware
- [ ] Create a full **REST API** with **CRUD**
- [ ] Read **params, query, and body** correctly
- [ ] Connect to **MongoDB** and define a **Mongoose schema/model**
- [ ] Persist data so it survives a restart
- [ ] Implement **Register/Login** with hashed passwords and **JWT**
- [ ] **Protect** routes and enforce **roles** (RBAC)
- [ ] Connect **React** to the backend with **Axios** + token
- [ ] Handle **loading, error, and data** states
- [ ] Organize code into a clean **folder structure**
- [ ] **Push** to GitHub and receive **project allocation**

## ➡️ Expected Outcome
You're now full-stack. You're ready for:
**AI Integration (chatbots, file processing) → DevOps & Deployment (Docker, CI/CD) → the complete Zero Hunger capstone.**

---

*Training manual for the Zero Hunger Platform Bootcamp · Node.js + Express + Database. Ready to drop into `/Reading-Materials` or `/Trainer-Guide` in your GitHub repo.*

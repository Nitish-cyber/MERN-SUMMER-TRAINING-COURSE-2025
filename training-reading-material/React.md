# ⚛️ Introduction to ReactJS → Building UIs
## Zero Hunger Platform · Bootcamp Training Manual (Deep Dive Edition)

> **Duration:** 12 Hours · **Mode:** Live Coding + Hands-On Practice
> **Project Context:** *Zero Hunger* — a platform connecting food donors, NGOs, volunteers & beneficiaries.
> **Prerequisite:** The JavaScript Fundamentals module (variables, arrays, objects, arrow functions, destructuring, spread, `.map`/`.filter`). React *is* JavaScript — everything you learned returns here.
> **Format:** Every concept → real-life context · examples with **expected output** · 🧠 whiteboard explanation · ⚠️ common mistakes · 🏋️ exercises · 🐞 debugging challenges · 💬 interview questions. Ends with **one complete mini-project**.

---

## 🎯 Learning Objectives

By the end of this module you will be able to:

- Explain what React is and why it exists
- Write JSX and understand how it differs from HTML
- Build reusable **functional components**
- Style components with **CSS Modules** and **Tailwind CSS**
- Pass data with **props** and manage data with **state** (`useState`)
- Handle user **events** (clicks, typing)
- Build **controlled forms** — the donor "Donate Food" intake
- **Build a complete mini-project: the Zero Hunger Donation Board (React)**

---

## 🗺️ Module Map

| # | Module | Core Idea |
|---|--------|-----------|
| 1 | Introduction to React | What React is & why components |
| 2 | JSX | Writing markup inside JavaScript |
| 3 | Functional Components | Reusable UI building blocks |
| 4 | Rendering Lists & Keys | `.map()` → UI |
| 5 | Styling: CSS Modules | Scoped, conflict-free CSS |
| 6 | Styling: Tailwind CSS | Utility-first styling |
| 7 | Props | Passing data into components |
| 8 | State (`useState`) | Data a component owns & changes |
| 9 | Event Handling | Responding to clicks & input |
| 10 | Forms & Controlled Components | React-controlled inputs |
| 🏆 | **Mini-Project** | **Zero Hunger Donation Board** |

---

## 🧰 Module 0: Setup (do this first)

React needs Node.js (you installed it in the JS module). The modern way to start a React app is **Vite** — fast and simple.

```bash
# create a new React app with Vite
npm create vite@latest zero-hunger-ui -- --template react

cd zero-hunger-ui
npm install
npm run dev
```
```
▶ VITE ready in 320 ms
▶ ➜  Local:   http://localhost:5173/
```

Open that URL in your browser. You now have a live React app that hot-reloads as you save.

### Folder structure (what matters)
```
zero-hunger-ui/
├── index.html          ← the single HTML page
├── package.json
└── src/
    ├── main.jsx         ← entry point: mounts React into the page
    ├── App.jsx          ← your root component (start here)
    └── components/       ← you'll create this for your components
```

> 🧠 **Mental model:** A React app is **one HTML page** (`index.html`) with one `<div id="root"></div>`. React takes over that div and renders everything inside it with JavaScript. This is a **Single Page Application (SPA)**.

## ⚠️ Common Mistakes
- Running `npm run dev` outside the project folder → "missing script: dev". `cd` into the folder first.
- Editing `index.html` expecting to build the UI there — you build it in `src/` components.
- Forgetting `npm install` after creating the app.

## 💬 Interview Questions
- What is Vite and why use it over older tools?
- What is a Single Page Application (SPA)?
- Where does a React app "mount" into the HTML page?

---

# 📦 Module 1: Introduction to React

## What is React?

React is a **JavaScript library for building user interfaces** out of **components** — small, reusable, self-contained pieces of UI that you compose together like LEGO bricks.

> **🍱 Zero Hunger context:** Instead of one giant HTML file, you build the platform from pieces: a `<Navbar />`, a `<DonationCard />`, a `<DonorForm />`, a `<NGOList />`. You build each once, then reuse and combine them. Change the card design in one place → every card updates.

## Why React? (the problem it solves)

With plain JavaScript, keeping the **UI in sync with your data** is painful — you manually find elements and update them by hand (`document.getElementById(...)`, change text, repeat). With 50 donations updating live, this becomes a nightmare of bugs.

React flips it: **you describe what the UI should look like for a given state, and React updates the screen for you** when the data changes.

```
PLAIN JS:  data changes → YOU manually find & update each DOM element  😫
REACT:     data changes → you update STATE → React re-renders the UI    😊
```

## 🧠 Whiteboard Explanation — the Component Tree

```
                    <App>
            ┌─────────┼──────────┐
        <Navbar>  <DonationList>  <Footer>
                       │
                ┌──────┴───────┐
         <DonationCard>  <DonationCard>  ... (one per donation)

A React UI is a TREE of components.
Data flows DOWN the tree (parent → child).
Each component is just a JavaScript function that returns UI.
```

## Key ideas you'll meet

| Term | Plain meaning |
|------|---------------|
| **Component** | A function that returns a piece of UI |
| **JSX** | HTML-looking syntax you write inside JavaScript |
| **Props** | Inputs passed into a component (read-only) |
| **State** | Data a component owns and can change over time |
| **Virtual DOM** | React's internal copy of the UI, used to update efficiently |

## 🧠 How React updates the screen (Virtual DOM)

```
1. State changes
2. React builds a NEW virtual copy of the UI in memory
3. React DIFFS it against the previous copy (what actually changed?)
4. React updates ONLY the changed real DOM nodes  → fast & efficient
```
You never touch the real DOM directly. You change data; React handles the DOM.

## ⚠️ Common Mistakes
- Thinking React is a full framework like Angular — it's a **library** focused on the UI (you add routing, data fetching, etc.).
- Trying to manipulate the DOM with `document.getElementById` inside React — fight the urge; use state instead.
- Confusing React (the library) with React Native (mobile) — same ideas, different render target.

## 🏋️ Exercises
1. In your own words, write 2 sentences on what a "component" is.
2. List 5 components the Zero Hunger homepage might be split into.
3. Sketch a component tree for a page with a navbar, a list of donations, and a footer.
4. Explain to a friend why updating the UI is easier in React than plain JS.
5. Identify 3 real websites and guess what their top-level components are.

## 💬 Interview Questions
- What is React and what problem does it solve?
- Is React a library or a framework? Why does the distinction matter?
- What is the Virtual DOM and why is it useful?
- What does "declarative UI" mean?
- What is a component?

---

# 📦 Module 2: JSX

JSX lets you write **HTML-looking markup directly inside JavaScript**. It's the syntax you use to describe what a component renders.

```jsx
const element = <h1>Welcome to Zero Hunger</h1>;
```

That looks like HTML, but it's JavaScript — it compiles to a function call behind the scenes.

### Embedding JavaScript with `{ }`
Curly braces drop any JS **expression** into JSX:
```jsx
const donor = "ABC Restaurant";
const qty = 100;

const element = (
  <p>{donor} donated {qty} packets</p>
);
// renders: ABC Restaurant donated 100 packets
```

### A fuller example — Expected Output
```jsx
function App() {
  const food = "Rice";
  const qty = 50;
  return (
    <div>
      <h1>Zero Hunger</h1>
      <p>Available: {food} ({qty} units)</p>
      <p>Doubled: {qty * 2}</p>
    </div>
  );
}
```
Renders on the page:
```
Zero Hunger
Available: Rice (50 units)
Doubled: 100
```

## 🧠 Whiteboard Explanation — JSX is NOT HTML

```
JSX                         compiles to →   React.createElement("h1", null, "Hello")
<h1>Hello</h1>

So JSX rules differ from HTML:
  class      →  className     (class is a reserved JS word)
  for        →  htmlFor
  onclick    →  onClick       (camelCase events)
  style="…"  →  style={{ }}   (an object, not a string)

{ }  = "drop JavaScript in here"  (expressions only — no if/for statements)
```

### The big JSX rules

**1. Return ONE root element.** Wrap siblings in a parent or a Fragment `<> </>`:
```jsx
// ❌ two roots — error
return (
  <h1>Title</h1>
  <p>Text</p>
);

// ✅ wrapped in a Fragment
return (
  <>
    <h1>Title</h1>
    <p>Text</p>
  </>
);
```

**2. Close every tag** — even self-closing ones: `<img />`, `<br />`, `<input />`.

**3. Use `className`, not `class`:**
```jsx
<div className="card">...</div>
```

**4. `{ }` holds expressions, not statements.** You can do `{qty > 50 ? "Large" : "Small"}` (ternary) but **not** `{if (qty > 50) ...}`.

## ⚠️ Common Mistakes
- Using `class` instead of `className` → React warns and ignores it.
- Returning multiple sibling elements without a wrapper → syntax error.
- Forgetting to close tags (`<img>` instead of `<img />`).
- Putting an `if` statement inside `{ }` — use a ternary `? :` or `&&` instead.
- Writing `style="color:red"` instead of `style={{ color: "red" }}`.

## 🏋️ Exercises
1. Write JSX that renders an `<h1>` with the platform name.
2. Use `{ }` to display a `donor` variable inside a `<p>`.
3. Render the result of a calculation (`qty * 4`) inside JSX.
4. Use a Fragment `<>…</>` to return a heading and two paragraphs.
5. Add an inline style turning a heading green using the object syntax.

## 🐞 Debugging Challenge
```jsx
function App(){
  return (
    <h1 class="title">Zero Hunger</h1>
    <p>Feeding people</p>
  );
}
```
> **Two problems here. Find and fix both.**
> *(Answer: (1) `class` → `className`; (2) two root elements → wrap in `<>…</>`.)*

## 💬 Interview Questions
- What is JSX? Is it required to use React?
- Why `className` instead of `class`?
- What does JSX compile to?
- Why must a component return a single root element? What's a Fragment?
- How do you embed a JavaScript value inside JSX?

---

# 📦 Module 3: Functional Components

A **functional component** is just a JavaScript function that returns JSX. Its name **must start with a capital letter** so React knows it's a component (not an HTML tag).

```jsx
function Welcome() {
  return <h1>Welcome to Zero Hunger</h1>;
}
```

### Using a component
You use it like an HTML tag:
```jsx
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />   {/* reusable! */}
    </div>
  );
}
```
```
Welcome to Zero Hunger
Welcome to Zero Hunger
```

### Export / Import (one component per file is the norm)
```jsx
// src/components/Navbar.jsx
function Navbar() {
  return <nav>Zero Hunger</nav>;
}
export default Navbar;
```
```jsx
// src/App.jsx
import Navbar from "./components/Navbar";

function App() {
  return <Navbar />;
}
export default App;
```

## 🧠 Whiteboard Explanation

```
A component = a function that RETURNS UI

   function DonationCard() {        <DonationCard />
     return <div>...</div>;    →    (use it like a tag)
   }

RULES:
  • Name MUST be Capitalized   (donationCard ❌  →  DonationCard ✅)
  • Returns ONE root element
  • Pure: same inputs → same output, no side effects during render
  • One component per file, default-exported (convention)
```

## ⚠️ Common Mistakes
- Lowercase component names — `<navbar />` is treated as an unknown HTML tag and won't render your component.
- Forgetting to `export` the component or `import` it where used.
- Forgetting the `/` in self-closing usage: `<Navbar>` instead of `<Navbar />`.
- Defining a component **inside** another component's body (causes re-creation every render).

## 🏋️ Exercises
1. Create a `Welcome` component that renders a heading; use it in `App`.
2. Create a `Footer` component in its own file, export and import it.
3. Render the same component three times inside a parent.
4. Build a `Navbar` and a `Footer`, and compose both inside `App`.
5. Create a `DonationCard` component with hardcoded text and render it.

## 🐞 Debugging Challenge
```jsx
function donationCard() {
  return <div className="card">Rice - 100</div>;
}
function App() {
  return <donationCard />;
}
```
> **The card text never appears. Why? Fix it.**
> *(Answer: lowercase name → React treats `<donationCard />` as an HTML tag. Capitalize to `DonationCard`.)*

## 💬 Interview Questions
- What is a functional component?
- Why must component names be capitalized?
- How do you reuse a component?
- What does it mean for a component to be "pure"?
- Difference between defining and *using* a component?

---

# 📦 Module 4: Rendering Lists & Keys

Real apps render lists — many donations, many NGOs. You turn an **array of data** into an **array of JSX** using `.map()` (the same `.map` from the JS module!).

```jsx
function DonationList() {
  const donations = ["Rice", "Bread", "Milk"];
  return (
    <ul>
      {donations.map((food, index) => (
        <li key={index}>{food}</li>
      ))}
    </ul>
  );
}
```
```
• Rice
• Bread
• Milk
```

### Mapping over objects (the real shape)
```jsx
function DonationList() {
  const donations = [
    { id: 1, food: "Rice",  qty: 100 },
    { id: 2, food: "Bread", qty: 20 },
    { id: 3, food: "Milk",  qty: 75 }
  ];
  return (
    <div>
      {donations.map(d => (
        <p key={d.id}>{d.food} — {d.qty} units</p>
      ))}
    </div>
  );
}
```
```
Rice — 100 units
Bread — 20 units
Milk — 75 units
```

## 🧠 Whiteboard Explanation — why `key`?

```
DATA (array)                 UI (array of JSX)
[{id:1,...},          .map    [<Card key={1}/>,
 {id:2,...},     ──────────►   <Card key={2}/>,
 {id:3,...}]                   <Card key={3}/>]

key = a STABLE, UNIQUE id per item.
React uses keys to track which items changed/added/removed
so it can update efficiently instead of re-rendering everything.

✅ Use a real unique id  (d.id)
⚠️ index as key is OK only if the list never reorders/changes
```

## ⚠️ Common Mistakes
- **Missing `key`** → React warns: "Each child in a list should have a unique key."
- Using the array **index** as key in a list that reorders/filters → subtle bugs.
- Forgetting that `.map` must **return** the JSX (use `( )` for implicit return, or `return` inside `{ }`).
- Putting `key` on the wrong element — it goes on the **outermost** element returned by `.map`.

## 🏋️ Exercises
1. Render a list of 4 food item strings as `<li>`s with keys.
2. Map an array of donation objects to `<p>` lines showing food + qty.
3. Add a "No donations yet" message when the array is empty.
4. Render only donations with `qty > 50` (combine `.filter` + `.map`).
5. Map donations into `<DonationCard />` components (pass data — preview of props).

## 🐞 Debugging Challenge
```jsx
const foods = ["Rice", "Bread", "Milk"];
return (
  <ul>
    {foods.map(food => {
      <li>{food}</li>
    })}
  </ul>
);
```
> **The list renders empty. Why? (Two related issues.)**
> *(Answer: the arrow uses `{ }` block but never `return`s the `<li>`; also missing `key`. Use `food => <li key={food}>{food}</li>` or add `return`.)*

## 💬 Interview Questions
- How do you render a list in React?
- What is the `key` prop and why is it important?
- Why is using the array index as a key sometimes problematic?
- How do you conditionally render "empty" state?
- How do you combine filtering and mapping?

---

# 📦 Module 5: Styling with CSS Modules

CSS Modules let you write normal CSS that is **scoped to one component** — class names never leak or collide with other components.

### How it works
Name the file `Something.module.css`, import it, and use it as an object.

```css
/* DonationCard.module.css */
.card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  background: #fff;
}
.title {
  color: #1f6e4a;
  font-weight: 700;
}
```

```jsx
// DonationCard.jsx
import styles from "./DonationCard.module.css";

function DonationCard() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Rice</h3>
      <p>100 units available</p>
    </div>
  );
}
export default DonationCard;
```

## 🧠 Whiteboard Explanation — scoping

```
You write:        .card { ... }
React builds:     .DonationCard_card__a1b2c { ... }   (unique hash!)

So two different components can BOTH have a ".card" class
and they will NEVER conflict. Styles are LOCAL to the file.

className={styles.card}   ← styles is an object; .card is a key
```

### Multiple / conditional classes
```jsx
// combine classes with a template literal
<div className={`${styles.card} ${claimed ? styles.claimed : ""}`}>
```

## ⚠️ Common Mistakes
- File **must** end in `.module.css` — a plain `.css` import is global, not scoped.
- Using `className="card"` (string) instead of `className={styles.card}` (object lookup).
- Class names with hyphens: `styles.my-card` breaks → use camelCase `styles.myCard` or `styles["my-card"]`.
- Expecting the literal class name in DevTools — you'll see the hashed version.

## 🏋️ Exercises
1. Create a `DonationCard.module.css` with `.card` and `.title`; apply both.
2. Add a `.claimed` class and toggle it with a ternary based on a boolean.
3. Style a `Navbar` with its own module file.
4. Use two classes on one element via a template literal.
5. Inspect the element in DevTools and find the hashed class name.

## 🐞 Debugging Challenge
```jsx
import styles from "./Card.module.css";
function Card(){
  return <div className="card">Rice</div>;   // no styling appears
}
```
> **Why is the card unstyled? Fix it.**
> *(Answer: used a string `"card"` instead of `styles.card`. Use `className={styles.card}`.)*

## 💬 Interview Questions
- What problem do CSS Modules solve?
- How does a CSS Module file differ from a regular CSS file?
- How do you apply multiple classes conditionally?
- Why do class names appear hashed in the browser?

---

# 📦 Module 6: Styling with Tailwind CSS

Tailwind is a **utility-first** framework: instead of writing CSS, you compose small utility classes **directly in your JSX**. It's fast, consistent, and great for responsive UIs.

### Setup (Vite)
```bash
npm install tailwindcss @tailwindcss/vite
```
Add the plugin in `vite.config.js` and `@import "tailwindcss";` at the top of your CSS. *(Always check the current [Tailwind install docs](https://tailwindcss.com/docs/installation) — setup steps evolve.)*

### From CSS thinking → utility thinking
```jsx
// Instead of writing .card { padding:16px; border-radius:12px; ... }
<div className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
  <h3 className="text-green-700 font-bold text-lg">Rice</h3>
  <p className="text-gray-600">100 units available</p>
</div>
```

### Common utilities cheat-sheet

| Need | Classes |
|------|---------|
| Padding / margin | `p-4` `px-6` `m-2` `mt-8` |
| Text | `text-lg` `font-bold` `text-green-700` `text-center` |
| Background | `bg-white` `bg-green-600` |
| Border / radius | `border` `border-gray-200` `rounded-xl` |
| Flexbox | `flex` `items-center` `justify-between` `gap-4` |
| Grid | `grid` `grid-cols-3` `gap-6` |
| Shadow / effects | `shadow-md` `hover:shadow-lg` `transition` |
| Sizing | `w-full` `max-w-md` `h-12` |

### Responsive + state variants
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* 1 column on phones, 3 on medium+ screens */}
</div>

<button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
  Donate
</button>
```

## 🧠 Whiteboard Explanation

```
PREFIX SYSTEM:
   md:grid-cols-3   →  "on medium screens and up, use 3 columns"
   hover:bg-green-700  →  "on hover, change background"
   focus:ring-2     →  "on focus, show a ring"

   sm: 640px   md: 768px   lg: 1024px   xl: 1280px   (min-width breakpoints)

MENTAL MODEL: mobile styles are the default; add md:/lg: to OVERRIDE
              on larger screens. (Mobile-first.)
```

> **🍱 Zero Hunger context:** a responsive donation grid:
> ```jsx
> <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
>   {donations.map(d => <DonationCard key={d.id} {...d} />)}
> </div>
> ```
> One card column on phones, three on desktop — no media queries written by hand.

## CSS Modules vs Tailwind — when to use which?

| | CSS Modules | Tailwind |
|---|---|---|
| Where styles live | separate `.module.css` file | inline in `className` |
| Speed to build | medium | very fast |
| Consistency | up to you | enforced design tokens |
| Best for | complex, bespoke components | rapid, consistent product UI |

Both are valid. This course uses **Tailwind** for the project speed, and you've learned **CSS Modules** so you understand scoping.

## ⚠️ Common Mistakes
- Forgetting the Tailwind setup step → classes do nothing.
- Inventing class names that don't exist (`text-huge`) — only real utilities work.
- Cramming endless utilities on one element → extract a component instead.
- Forgetting Tailwind is **mobile-first**: `grid-cols-3` applies to *all* sizes; use `md:grid-cols-3` to target larger screens only.

## 🏋️ Exercises
1. Style a card with padding, rounded corners, border, and a shadow.
2. Make a green button that darkens on hover.
3. Build a responsive grid: 1 column mobile, 2 tablet, 3 desktop.
4. Center a heading and make it bold and green.
5. Use `flex justify-between items-center` to build a navbar row.

## 🐞 Debugging Challenge
```jsx
<div className="grid grid-cols-3 gap-4">
  {/* on a phone, cards are squished into 3 tiny columns */}
</div>
```
> **How do you make it 1 column on phones but 3 on desktop?**
> *(Answer: Tailwind is mobile-first. Use `grid-cols-1 md:grid-cols-3`.)*

## 💬 Interview Questions
- What does "utility-first CSS" mean?
- What does the `md:` prefix do? What is mobile-first?
- How do you handle hover/focus states in Tailwind?
- Trade-offs between Tailwind and CSS Modules?
- How do you avoid repeating long class lists?

---

# 📦 Module 7: Props

**Props** (properties) are how you pass data **into** a component — like arguments to a function. They make components reusable: one `DonationCard`, many different donations.

```jsx
// Parent passes props (like HTML attributes)
function App() {
  return (
    <div>
      <DonationCard donor="ABC Restaurant" food="Rice" qty={100} />
      <DonationCard donor="XYZ Hotel" food="Bread" qty={20} />
    </div>
  );
}

// Child receives props
function DonationCard(props) {
  return (
    <div>
      <h3>{props.food}</h3>
      <p>{props.qty} units from {props.donor}</p>
    </div>
  );
}
```
```
Rice
100 units from ABC Restaurant
Bread
20 units from XYZ Hotel
```

### Destructure props (the clean, standard way)
```jsx
function DonationCard({ donor, food, qty }) {   // destructuring — from the JS module!
  return (
    <div>
      <h3>{food}</h3>
      <p>{qty} units from {donor}</p>
    </div>
  );
}
```

### Passing a whole object with spread
```jsx
const donation = { donor: "ABC", food: "Rice", qty: 100 };
<DonationCard {...donation} />   // spread — from the JS module!
```

## 🧠 Whiteboard Explanation — props flow DOWN

```
        <App>  (has the data)
          │  passes props down ▼
   <DonationCard donor="ABC" qty={100} />
          │
   receives { donor, qty }  ← READ-ONLY. The child cannot change props.

ONE-WAY DATA FLOW:  parent ──props──► child   (never child → parent directly)

  strings:  donor="ABC"        (quotes)
  anything else: qty={100}     (curly braces — numbers, booleans, arrays, objects, functions)
```

## ⚠️ Common Mistakes
- **Mutating props** — props are read-only. `props.qty = 5` is wrong; ask the parent to change its state instead.
- Passing a number/boolean with quotes: `qty="100"` makes it the **string** `"100"`. Use `qty={100}`.
- Forgetting to destructure and writing `props.props.food`.
- Misspelling a prop name — the child silently gets `undefined`.

## 🏋️ Exercises
1. Build a `DonationCard` that takes `donor`, `food`, `qty` props.
2. Render three cards with different prop values.
3. Destructure the props in the function signature.
4. Pass a whole donation object using `{...donation}` spread.
5. Add a `status` prop and display it; default it to `"Available"` using a default value.

## 🐞 Debugging Challenge
```jsx
function Card({ food, qty }){
  return <p>{food}: {qty}</p>;
}
function App(){
  return <Card food="Rice" qty="100" status="Available" />;
}
```
> **`qty` shows as text and `status` never appears. Explain both.**
> *(Answer: `qty="100"` passes a string — fine to display but not a number; use `qty={100}`. `status` isn't destructured/used in `Card`, so it's ignored.)*

## 💬 Interview Questions
- What are props? How are they like function arguments?
- Are props mutable? What's the rule?
- What is one-way data flow?
- How do you pass a number vs a string as a prop?
- How do you spread an object as props?

---

# 📦 Module 8: State (`useState`)

**State** is data a component **owns and can change over time**. When state changes, React **re-renders** the component to reflect the new value. State is managed with the `useState` **Hook**.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);   // [value, setterFunction]

  return (
    <div>
      <p>Donations claimed: {count}</p>
      <button onClick={() => setCount(count + 1)}>Claim one</button>
    </div>
  );
}
```
Each click increments the number on screen.

### State with objects / arrays (update immutably!)
```jsx
const [donations, setDonations] = useState([
  { id: 1, food: "Rice", qty: 100 }
]);

// add a donation — SPREAD, don't mutate (from the JS module!)
const addDonation = (newOne) => {
  setDonations([...donations, newOne]);
};
```

## 🧠 Whiteboard Explanation

```
const [count, setCount] = useState(0);
        │        │                 │
     current   function to      initial
      value    update it         value

UPDATE CYCLE:
   click → setCount(1) → React re-renders → screen shows new value

RULES:
  • NEVER assign directly:  count = 5  ❌   (React won't notice)
  • ALWAYS use the setter:  setCount(5) ✅
  • Updates are ASYNC + batched → don't read count right after setCount
  • Depends on previous value? Use the function form:
        setCount(prev => prev + 1)   ✅ safe
  • Objects/arrays: create a NEW one (spread/map), don't mutate
```

### props vs state — the key distinction

```
PROPS  →  passed IN from parent,  READ-ONLY        (like function args)
STATE  →  owned BY the component, CHANGEABLE        (like a memory)

A component CONFIGURES children with props,
and REMEMBERS its own changing data with state.
```

## ⚠️ Common Mistakes
- Mutating state directly (`count++`, `donations.push(...)`) → React doesn't re-render. Use the setter + a new value.
- Expecting state to update **synchronously**: after `setCount(5)`, `count` is still the old value on that line.
- Using `count + 1` when rapidly updating — use `setCount(c => c + 1)` to avoid stale values.
- Calling `useState` inside a loop, condition, or nested function → breaks the "Rules of Hooks" (Hooks must be top-level).

## 🏋️ Exercises
1. Build a counter with `+` and `−` buttons.
2. A boolean state `claimed`; a button toggles it; show "Claimed" / "Available".
3. A text state showing what's typed (preview of controlled inputs).
4. An array state of donations; a button adds a new one with spread.
5. Use the functional updater `setCount(c => c + 1)` and explain why it's safer.

## 🐞 Debugging Challenge
```jsx
function Counter(){
  let [count, setCount] = useState(0);
  const add = () => { count = count + 1; };   // button calls this
  return <button onClick={add}>{count}</button>;
}
```
> **The number never changes on screen. Why? Fix it.**
> *(Answer: reassigning `count` directly doesn't trigger a re-render. Use `setCount(count + 1)`.)*

## 💬 Interview Questions
- What is state? How is it different from props?
- What does `useState` return?
- Why must you use the setter instead of assigning directly?
- Are state updates synchronous? What does "batched" mean?
- When do you use the functional updater form `setX(prev => ...)`?
- What are the Rules of Hooks?

---

# 📦 Module 9: Event Handling

React handles user actions — clicks, typing, submitting — with **camelCase event props** that take a function.

```jsx
function ClaimButton() {
  const handleClick = () => {
    console.log("Donation claimed!");
  };
  return <button onClick={handleClick}>Claim</button>;
}
```

### Common events

| Event | Fires when… |
|-------|-------------|
| `onClick` | element is clicked |
| `onChange` | input value changes (typing) |
| `onSubmit` | a form is submitted |
| `onMouseEnter` / `onMouseLeave` | hover in/out |

### Passing arguments to handlers
```jsx
// wrong: calls immediately on render
<button onClick={claim(id)}>           // ❌
// right: wrap in an arrow so it runs on click
<button onClick={() => claim(id)}>     // ✅
```

### The event object & `preventDefault`
```jsx
const handleSubmit = (e) => {
  e.preventDefault();          // stop the browser from reloading the page
  console.log("Form submitted");
};
<form onSubmit={handleSubmit}> ... </form>
```

## 🧠 Whiteboard Explanation

```
onClick={handleClick}      ← pass the FUNCTION (no parentheses)
onClick={handleClick()}    ← ❌ CALLS it during render, passes the result
onClick={() => doX(id)}    ← ✅ wrap in arrow to pass arguments

PASS the function, don't CALL it. (Same lesson as callbacks in JS!)

e.preventDefault()  → stops default browser behavior
                      (form reload, link navigation)
```

> **🍱 Zero Hunger context:** clicking "Claim" on a donation card:
> ```jsx
> function DonationCard({ id, food, onClaim }) {
>   return (
>     <div>
>       <h3>{food}</h3>
>       <button onClick={() => onClaim(id)}>Claim</button>
>     </div>
>   );
> }
> ```
> The card receives an `onClaim` **function as a prop** and calls it with its id — that's how a child talks *back* to a parent.

## ⚠️ Common Mistakes
- `onClick={handleClick()}` — calls on render instead of on click. Drop the `()` or wrap in an arrow.
- Forgetting `e.preventDefault()` on form submit → page reloads and you lose state.
- Lowercase event names (`onclick`) — React uses camelCase (`onClick`).
- Trying to pass arguments without an arrow wrapper.

## 🏋️ Exercises
1. A button that logs a message on click.
2. A button that increments a state counter on click.
3. Pass an `id` argument to a click handler using an arrow.
4. A form with `onSubmit` that calls `e.preventDefault()` and logs.
5. Hover handlers (`onMouseEnter`/`onMouseLeave`) that toggle a state.

## 🐞 Debugging Challenge
```jsx
function App(){
  const greet = (name) => console.log("Hi " + name);
  return <button onClick={greet("Donor")}>Greet</button>;
}
```
> **"Hi Donor" logs immediately on page load, and the click does nothing. Fix it.**
> *(Answer: `greet("Donor")` runs during render. Wrap it: `onClick={() => greet("Donor")}`.)*

## 💬 Interview Questions
- How do you handle a click in React?
- Difference between `onClick={fn}` and `onClick={fn()}`?
- How do you pass an argument to an event handler?
- What does `e.preventDefault()` do and when do you need it?
- How does a child component communicate back to its parent?

---

# 📦 Module 10: Forms & Controlled Components

A **controlled component** is a form input whose value is stored in React **state** — React is the single source of truth. You bind `value={state}` and update it with `onChange`. This is the heart of the Zero Hunger donor form.

### A single controlled input
```jsx
import { useState } from "react";

function DonorName() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}                               // state drives the input
        onChange={(e) => setName(e.target.value)}  // typing updates state
        placeholder="Donor name"
      />
      <p>Hello, {name}</p>                          {/* live preview */}
    </div>
  );
}
```
As you type, the `<p>` updates instantly — because state and input are in sync.

### A full multi-field form (one state object)
```jsx
import { useState } from "react";

function DonationForm() {
  const [form, setForm] = useState({
    food: "",
    qty: "",
    city: ""
  });

  // ONE handler for ALL fields (uses computed key + spread — from JS module!)
  const handleChange = (e) => {
    const { name, value } = e.target;            // destructuring
    setForm({ ...form, [name]: value });         // spread + computed key
  };

  const handleSubmit = (e) => {
    e.preventDefault();                          // stop page reload
    console.log("New donation:", form);
  };

  // disable submit until all fields filled
  const isValid = form.food && form.qty && form.city;

  return (
    <form onSubmit={handleSubmit}>
      <input name="food"  value={form.food}  onChange={handleChange} placeholder="Food item" />
      <input name="qty"   value={form.qty}   onChange={handleChange} placeholder="Quantity" type="number" />
      <input name="city"  value={form.city}  onChange={handleChange} placeholder="City" />
      <button type="submit" disabled={!isValid}>Donate Food</button>
    </form>
  );
}
```
On submit (with all fields filled):
```
▶ New donation: { food: "Rice", qty: "100", city: "Pune" }
```

## 🧠 Whiteboard Explanation — the controlled loop

```
   ┌─────────────────────────────────────────────┐
   │  STATE  ──value={state}──►  INPUT (on screen) │
   │    ▲                              │           │
   │    └──── onChange / setState ─────┘           │
   │         (every keystroke)                     │
   └─────────────────────────────────────────────┘

React state is the SINGLE SOURCE OF TRUTH.
The input shows state; typing updates state; state re-renders the input.

ONE OBJECT for many fields:
   setForm({ ...form, [e.target.name]: e.target.value })
              copy all      update only the changed field
```

### Why controlled? (the payoff)
- **Live validation** — disable submit, show errors as they type.
- **Formatting** — force uppercase, trim, restrict characters.
- **One source of truth** — the data is always in state, ready to send to the backend.

## ⚠️ Common Mistakes
- Setting `value={...}` **without** `onChange` → a read-only input you can't type in (React warns).
- Forgetting `e.preventDefault()` → the page reloads on submit and you lose everything.
- Forgetting `name` attributes when using one shared handler → can't tell fields apart.
- Mutating the form object (`form.food = x`) instead of `setForm({ ...form, food: x })`.
- Forgetting that number inputs still give you **strings** (`"100"`) — convert with `Number()` when needed.

## 🏋️ Exercises
1. A single controlled input with a live preview below it.
2. A two-field form (name + city) using one state object and one handler.
3. Disable the submit button until both fields are non-empty.
4. On submit, `console.log` the form object and prevent reload.
5. Add a `<select>` for food type (Veg/Non-veg) as a controlled input.

## 🐞 Debugging Challenge
```jsx
function Form(){
  const [name, setName] = useState("");
  return <input value={name} placeholder="Name" />;
}
```
> **You can't type anything into the input. Why? Fix it.**
> *(Answer: `value` is bound to state but there's no `onChange` to update it, so it's locked. Add `onChange={e => setName(e.target.value)}`.)*

## 💬 Interview Questions
- What is a controlled component?
- Why must a controlled input have both `value` and `onChange`?
- How do you manage many form fields with one handler?
- Why call `e.preventDefault()` on submit?
- Controlled vs uncontrolled components — what's the difference?
- How do you do live validation in a controlled form?

---

# 🏆 FINAL MINI-PROJECT: Zero Hunger Donation Board (React)

> **Goal:** Build a complete, runnable React app that uses **every concept** in this module — components, JSX, lists & keys, styling, props, state, events, and a controlled form.

## 📋 Features
- **Donor form** (controlled) to add a donation
- **Live list** of donations rendered with `.map()` + keys
- **Claim** button on each card (child → parent via callback prop)
- **Filter** to show only available / all
- **Stats** bar (total donations, total units, claimed count)
- **Tailwind** styling, responsive grid

## 🗂️ Concepts → where they appear

| Concept | Used in |
|---------|---------|
| Functional components | `App`, `DonationForm`, `DonationCard`, `Stats` |
| JSX + `{ }` | everywhere |
| Lists & keys | `donations.map(... key={d.id})` |
| Props (+ destructuring) | `DonationCard`, `Stats` |
| Props as callbacks | `onClaim` passed to cards |
| State (`useState`) | donations array, form object, filter |
| Immutable updates | spread / `.map` on state |
| Events | `onClick`, `onChange`, `onSubmit` |
| Controlled form | `DonationForm` |
| Styling | Tailwind utilities |

## 💻 Full Code

Create these files inside `src/`. (Assumes a Vite React app with Tailwind set up — see Module 0 & 6.)

### `src/components/Stats.jsx`
```jsx
function Stats({ donations }) {
  const total = donations.length;
  const units = donations.reduce((sum, d) => sum + Number(d.qty), 0);
  const claimed = donations.filter(d => d.claimed).length;

  return (
    <div className="flex gap-4 justify-center my-6">
      <Stat label="Donations" value={total} />
      <Stat label="Total Units" value={units} />
      <Stat label="Claimed" value={claimed} />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-6 py-3 text-center shadow-sm">
      <div className="text-2xl font-bold text-green-700">{value}</div>
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
    </div>
  );
}

export default Stats;
```

### `src/components/DonationCard.jsx`
```jsx
function DonationCard({ id, donor, food, qty, city, claimed, onClaim }) {
  return (
    <div className={`rounded-xl border p-5 shadow-sm transition
      ${claimed ? "bg-gray-100 border-gray-200 opacity-70" : "bg-white border-green-200"}`}>
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold text-green-800">{food}</h3>
        <span className="text-sm text-gray-500">{qty} units</span>
      </div>
      <p className="text-gray-600 text-sm mt-1">{donor} · {city}</p>
      <button
        onClick={() => onClaim(id)}
        disabled={claimed}
        className={`mt-4 w-full py-2 rounded-lg text-white text-sm font-medium transition
          ${claimed ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}>
        {claimed ? "Claimed ✓" : "Claim Donation"}
      </button>
    </div>
  );
}

export default DonationCard;
```

### `src/components/DonationForm.jsx`
```jsx
import { useState } from "react";

function DonationForm({ onAdd }) {
  const [form, setForm] = useState({ donor: "", food: "", qty: "", city: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isValid = form.donor && form.food && form.qty && form.city;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);                              // send up to parent
    setForm({ donor: "", food: "", qty: "", city: "" }); // reset
  };

  return (
    <form onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm grid gap-3 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-green-800">Donate Food</h2>
      <input name="donor" value={form.donor} onChange={handleChange}
        placeholder="Donor name" className="border rounded-lg px-3 py-2" />
      <input name="food" value={form.food} onChange={handleChange}
        placeholder="Food item" className="border rounded-lg px-3 py-2" />
      <input name="qty" type="number" value={form.qty} onChange={handleChange}
        placeholder="Quantity" className="border rounded-lg px-3 py-2" />
      <input name="city" value={form.city} onChange={handleChange}
        placeholder="City" className="border rounded-lg px-3 py-2" />
      <button type="submit" disabled={!isValid}
        className={`py-2 rounded-lg text-white font-medium transition
          ${isValid ? "bg-green-600 hover:bg-green-700" : "bg-gray-300 cursor-not-allowed"}`}>
        Add Donation
      </button>
    </form>
  );
}

export default DonationForm;
```

### `src/App.jsx`
```jsx
import { useState } from "react";
import DonationForm from "./components/DonationForm";
import DonationCard from "./components/DonationCard";
import Stats from "./components/Stats";

function App() {
  const [donations, setDonations] = useState([
    { id: 1, donor: "ABC Restaurant", food: "Rice",  qty: 100, city: "Pune",   claimed: false },
    { id: 2, donor: "XYZ Hotel",      food: "Bread", qty: 20,  city: "Mumbai", claimed: false }
  ]);
  const [filter, setFilter] = useState("all");   // "all" | "available"

  // ADD (spread — immutable)
  const addDonation = (form) => {
    const newDonation = { ...form, id: Date.now(), claimed: false };
    setDonations([...donations, newDonation]);
  };

  // CLAIM (map — immutable update)
  const claimDonation = (id) => {
    setDonations(donations.map(d =>
      d.id === id ? { ...d, claimed: true } : d
    ));
  };

  // FILTER (derived during render)
  const visible = filter === "available"
    ? donations.filter(d => !d.claimed)
    : donations;

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-green-900">Zero Hunger</h1>
      <p className="text-center text-gray-600 mb-6">Donation Board</p>

      <DonationForm onAdd={addDonation} />
      <Stats donations={donations} />

      <div className="flex gap-2 justify-center mb-6">
        <button onClick={() => setFilter("all")}
          className={`px-4 py-1 rounded-full text-sm ${filter==="all" ? "bg-green-600 text-white" : "bg-white border"}`}>
          All
        </button>
        <button onClick={() => setFilter("available")}
          className={`px-4 py-1 rounded-full text-sm ${filter==="available" ? "bg-green-600 text-white" : "bg-white border"}`}>
          Available
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {visible.length === 0
          ? <p className="text-center text-gray-500 col-span-full">No donations to show.</p>
          : visible.map(d => (
              <DonationCard key={d.id} {...d} onClaim={claimDonation} />
            ))
        }
      </div>
    </div>
  );
}

export default App;
```

## ✅ Expected Behavior
- Page loads with 2 seed donations and a stats bar (2 donations, 120 units, 0 claimed).
- Fill the form → **Add Donation** appends a new card (button stays disabled until all fields filled).
- Click **Claim** on a card → it greys out, shows "Claimed ✓", and the claimed count rises.
- Toggle **Available** → claimed cards disappear from view.
- Resize the window → cards reflow 1 → 2 → 3 columns.

## ▶️ How to Run
```bash
npm create vite@latest zero-hunger-ui -- --template react
cd zero-hunger-ui
npm install
# set up Tailwind (Module 6), then add the files above into src/
npm run dev
```

## 🚀 Ship it with Git
```bash
git init
echo "node_modules/" > .gitignore
git add .
git commit -m "Zero Hunger Donation Board (React mini-project)"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

## 🧩 Stretch Challenges (optional)
1. Add a **delete** button to each card (`.filter` out by id).
2. Add a **search** input that filters by food name (another controlled input).
3. Add a **sort** dropdown (by quantity) — remember to copy before sorting.
4. Split into routes with React Router (`/donate`, `/board`).
5. Replace the seed array with a `fetch` from `/api/donations` inside `useEffect` (Week 3 preview).

---

## 🎓 Final Assessment Checklist

Students must demonstrate:

- [ ] Build multiple **functional components** in separate files
- [ ] Use **JSX** with embedded expressions
- [ ] Render a **list** with proper **keys**
- [ ] Pass and destructure **props**
- [ ] Pass a **function as a prop** (child → parent)
- [ ] Manage **state** with `useState`
- [ ] Update state **immutably** (spread / `.map`)
- [ ] Handle **events** (`onClick`, `onChange`, `onSubmit`)
- [ ] Build a **controlled form** with validation
- [ ] Style with **Tailwind** (responsive)
- [ ] **Push** to GitHub and **present** the project

## ➡️ Expected Outcome
You're ready to move on to:
**React Router → useEffect & data fetching → Backend (Node + Express) → MongoDB → Full MERN integration.**

---

*Training manual for the Zero Hunger Platform Bootcamp · Introduction to ReactJS. Ready to drop into `/Reading-Materials` or `/Trainer-Guide` in your GitHub repo.*

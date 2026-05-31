# MERN Stack Bootcamp · Week 1 Trainer Guide
## Project: Zero Hunger Platform

Welcome to the **Zero Hunger** MERN Stack Bootcamp Trainer Guide. This curriculum utilizes **Project-Based Learning (PBL)** where students do not learn programming concepts in isolation. Instead, every line of code, whiteboard diagram, and syntax rule is directly contextualized inside the production of a real-world social impact platform.

---

### 🌟 Project Vision: Zero Hunger
Every year, weddings, hotels, hostels, and major events throw away tons of fresh, edible food, while millions go undernourished. **Zero Hunger** is a platform designed to bridge this gap. 

The application connects:
*   **Donors**: Hotels, restaurants, wedding halls, and households wanting to upload active food surplus listings.
*   **NGOs**: Social relief networks registered to claim and distribute food.
*   **Volunteers**: Active community drivers who receive push notifications to manage pickup and delivery logistics.
*   **Vendors**: Commercial food suppliers providing discounted packaging/refrigeration tools.
*   **Admins**: Central operators monitoring metrics, dispatching volunteers, and resolving disputes.

---

### 🎨 Visualizing what we are building
The following architecture outline illustrates the flow of the Zero Hunger platform that students will build across the bootcamp. This diagram demonstrates how the Client, API server, and Database interact using the MERN Stack.

![Zero Hunger System Architecture](/C:/Users/Lenovo/.gemini/antigravity-ide/brain/4881beb8-d457-4a9e-b555-6292cf032742/zero_hunger_architecture_1780218133588.png)

---

### 📅 Week 1 Syllabus & Directory Index
Week 1 focus is **JavaScript Core, ES6+, Asynchronous Programming, and Git/GitHub Workflows**. By the end of this week, students will have written a operational backend mock module representing the donor validation and matching engine of the platform.

Choose a day below to access the full 16-section curriculum script, complete with timelines, talking points, live coding blocks, practice exercises, and checklists:

*   👉 **[Day 1 · Web Fundamentals & Client-Server Architecture](file:///c:/Users/Lenovo/Desktop/MERN%20STACK%20READING%20MATERIAL/Zero-Hunger-Trainer-Guide/Day1.md)**
    *   *Objective*: Formulate Zero Hunger specifications, trace network payloads, and configure project readmes.
*   👉 **[Day 2 · JavaScript Core & Donor Profiles](file:///c:/Users/Lenovo/Desktop/MERN%20STACK%20READING%20MATERIAL/Zero-Hunger-Trainer-Guide/Day2.md)**
    *   *Objective*: Declare local donor memory profiles, validate operational inputs, and execute state evaluations.
*   👉 **[Day 3 · ES6+ & Donation Allocation Matrix](file:///c:/Users/Lenovo/Desktop/MERN%20STACK%20READING%20MATERIAL/Zero-Hunger-Trainer-Guide/Day3.md)**
    *   *Objective*: Program arrays, destructure properties, utilize arrow mechanics, and build matching filters.
*   👉 **[Day 4 · Async JavaScript & Mock Server Engine](file:///c:/Users/Lenovo/Desktop/MERN%20STACK%20READING%20MATERIAL/Zero-Hunger-Trainer-Guide/Day4.md)**
    *   *Objective*: Resolve promises, fetch endpoints, handle latency using async/await, and fetch mock server states.
*   👉 **[Day 5 · Version Control & Project Handover](file:///c:/Users/Lenovo/Desktop/MERN%20STACK%20READING%20MATERIAL/Zero-Hunger-Trainer-Guide/Day5.md)**
    *   *Objective*: Structure `zero-hunger-week1` directories, configure branching tracks, commit progress, and push code.

---

### 🏗️ Technical Domain Entities Map
All curriculum examples, coding sessions, and practice challenges *must* exclusively reference these domain entities:
*   `Donor`: Represents the business donating the surplus (e.g. `{ id, name, location, rating }`).
*   `NGO`: Represents the registered charity network (e.g. `{ name, location, capacity }`).
*   `Volunteer`: Represents the courier handling pickups (e.g. `{ name, vehicle, status }`).
*   `Donation`: Represents the food package (e.g. `{ item, quantity, expiryHours, status }`).
*   `Pickup`: Represents the donor-to-volunteer transaction.
*   `Delivery`: Represents the volunteer-to-NGO transaction.

No other concepts (e.g., student grading, supermarket shopping carts, or banking transactions) are allowed.

Let's head over to **[Day 1](file:///c:/Users/Lenovo/Desktop/MERN%20STACK%20READING%20MATERIAL/Zero-Hunger-Trainer-Guide/Day1.md)** to start the curriculum!

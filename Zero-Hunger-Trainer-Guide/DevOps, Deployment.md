🚀 DevOps, Deployment & Career Launch
## Zero Hunger Platform · Bootcamp Training Manual (Deep Dive Edition)

> **Mode:** Live Coding + Hands-On Practice
> **Project Context:** *Zero Hunger* — connecting food donors, NGOs, volunteers & beneficiaries.
> **Prerequisite:** The full MERN build (React frontend, Express/Node backend, MongoDB) and the AI features. This module takes that working app and ships it to the world — reliably, automatically, and professionally.
> **How to read this:** Each concept is built up gently — a **real-life analogy**, the **theory**, the **syntax/commands**, and **working examples**. We go from "what even is DevOps" all the way to a live, auto-deploying, containerized app — then turn the whole journey into a resume and a portfolio.

---
Link : https://www.tutorialspoint.com/devops/devops-stakeholders.htm

## 🎯 Learning Objectives

By the end of this module you will be able to:

- Explain what DevOps is and why CI/CD matters
- Automate testing and builds with **GitHub Actions**
- Build a **deployment pipeline** triggered by your commits
- Understand and use **environment variables** in production
- Containerize the MERN app with **Docker** and **Docker Compose**
- Deploy frontend, backend, and database to the cloud (**Vercel / Netlify / Render / AWS / MongoDB Atlas**)
- Add basic **logging, monitoring, and Nginx** know-how
- Turn the capstone into a strong **resume, portfolio, and interview story**

---

## 🗺️ Module Map

| # | Module | Core Idea |
|---|--------|-----------|
| 0 | Setup & Mindset | What "shipping" means |
| 1 | DevOps Basics | Culture + the SDLC |
| 2 | CI/CD Concepts | Integrate & deliver continuously |
| 3 | Environment & Config | Secrets in production (12-factor) |
| 4 | The Build Step | Dev vs production builds |
| 5 | GitHub Actions — Basics | Workflows, jobs, steps |
| 6 | GitHub Actions — CI Pipeline | Test & build on every push |
| 7 | Docker — Basics | Containers vs "works on my machine" |
| 8 | Dockerizing the MERN App | Dockerfiles for front & back |
| 9 | Docker Compose | Orchestrate the whole stack |
| 10 | Deployment — Concepts | Where each piece lives |
| 11 | Deploying (Vercel/Netlify/Render/Atlas) | Going live |
| 12 | Nginx, Logging & Monitoring | Production hygiene |
| 13 | CD — Auto-Deploy Pipeline | Merge → live |
| 14 | Resume, Portfolio & Interviews | Land the job |
| 🏆 | **Capstone Delivery** | **Ship Zero Hunger** |

---

## 🧰 Module 0: Setup & Mindset

**Real-life analogy:** You've cooked an amazing meal (your MERN app). But a meal in your kitchen feeds no one. **DevOps is the restaurant** — the kitchen workflow, the delivery service, the quality checks — that gets your food to real customers, consistently, every day.

**What "done" really means.** A project isn't finished when it works on your laptop. It's finished when:
- anyone can reach it at a public URL,
- it stays up,
- new changes ship safely without breaking it,
- secrets are protected, and
- you can prove it all in an interview.

This module gets you there.

### Accounts you'll want (all have free tiers)
- **GitHub** (you have it) — code + Actions (CI/CD)
- **MongoDB Atlas** (you have it) — the production database
- **Vercel** or **Netlify** — host the React frontend
- **Render** (or Railway) — host the Node/Express backend
- **Docker** (Docker Desktop installed locally)

## 💬 Interview Questions
- When is a software project actually "done"?
- Why isn't "it works on my machine" good enough?
- What problems does DevOps solve?

---

# 📦 Module 1: DevOps Basics

## What is DevOps?

**Real-life analogy:** Imagine a kitchen (developers, "Dev") and a delivery fleet (operations, "Ops") that never talk to each other. The kitchen cooks dishes the fleet can't transport; the fleet has trucks for food the kitchen never makes. Chaos. **DevOps** is knocking down the wall between them so they work as one smooth pipeline from idea to customer.

**Theory:** DevOps is a **culture and set of practices** that unite software *development* (writing code) and *operations* (running it in production). The goal: ship changes **quickly, frequently, and reliably**. It's less a tool and more a way of working — supported by automation tools (Git, CI/CD, Docker, cloud).

## The software delivery lifecycle

**Real-life analogy:** A dish's journey: recipe → cook → taste-test → plate → deliver → get feedback → improve the recipe. Software has the same loop.

```
   PLAN → CODE → BUILD → TEST → RELEASE → DEPLOY → OPERATE → MONITOR
     ▲                                                          │
     └──────────────────── feedback ───────────────────────────┘
```
DevOps **automates** the middle (build/test/release/deploy) so the loop spins fast and safely.

## The core principles

| Principle | Plain meaning | Real-life analogy |
|-----------|---------------|-------------------|
| **Automation** | computers do the repetitive steps | a dishwasher, not hand-washing every plate |
| **Continuous integration** | merge & test small changes often | taste as you cook, not at the end |
| **Continuous delivery** | always ready to ship | a meal always plated and ready to go |
| **Infrastructure as code** | servers/config defined in files | a written recipe anyone can follow |
| **Monitoring & feedback** | watch it in production, learn, improve | listen to customer reviews |

## Why it matters for Zero Hunger

Without DevOps: you manually copy files to a server, hope nothing breaks, and find out it did when a user complains. With DevOps: you push code, it's automatically tested and deployed, and you're alerted if anything goes wrong — before users notice.

## 🧠 Whiteboard — breaking the wall

```
   OLD WAY                         DEVOPS WAY
   Dev ──┐  (throw code           Dev ⇄ Ops  (one pipeline)
          │   over the wall)            │
   Ops ──┘  → blame, delays       automate: build→test→deploy
            "works on my machine"  → fast, reliable, repeatable
```

## 🏋️ Practice
1. In your own words, define DevOps in 2 sentences.
2. List the 8 stages of the delivery lifecycle.
3. Match each DevOps principle to a real-life analogy.
4. Describe the "throw it over the wall" problem.
5. Explain how DevOps would change how you deploy Zero Hunger today.

## 💬 Interview Questions
- What is DevOps — a tool, a role, or a culture?
- What are the stages of the software delivery lifecycle?
- Name three core DevOps principles.
- What problem does "infrastructure as code" solve?
- How does DevOps improve reliability?

---
MDEOF
echo "Module 0-1 done. Lines:"; wc -l /home/claude/devops-manual.md
# 📦 Module 2: CI/CD Concepts

## The two halves

**Real-life analogy:** **CI (Continuous Integration)** is the *kitchen's quality control* — every time a cook adds an ingredient, the dish is immediately taste-tested so a bad ingredient is caught instantly. **CD (Continuous Delivery/Deployment)** is the *delivery service* — once a dish passes QC, it's automatically packaged and sent out.

**Theory:**
- **Continuous Integration:** developers merge small code changes frequently into a shared branch (`main`), and an automated pipeline **builds and tests** every change. Bugs are caught within minutes, not weeks.
- **Continuous Delivery:** every change that passes CI is automatically prepared and kept **ready to deploy** (a human clicks "go").
- **Continuous Deployment:** one step further — passing changes are **automatically deployed** to production, no human click.

```
   CI:  push code → install → lint → test → build      (is it good?)
   CD:  → deploy to staging → (approve) → deploy to production   (ship it!)
```

## Why "continuous"?

**Real-life analogy:** Cooking a 12-course meal and only tasting it at the very end is a disaster — if course 2 was wrong, everything after it is ruined and you can't tell where. Tasting *continuously* (after each course) catches problems immediately. Same with code: integrate and test **small, often**.

## A pipeline is just a sequence of automated stages

```
   ┌─────────┐ ┌──────────┐ ┌──────┐ ┌───────┐ ┌────────┐
   │ checkout│→│ install   │→│ lint │→│ test  │→│ build  │→ (deploy)
   └─────────┘ └──────────┘ └──────┘ └───────┘ └────────┘
   each stage must PASS for the next to run.
   any failure → pipeline stops → main stays safe.
```

## Delivery vs Deployment (the key distinction)

| | Continuous Delivery | Continuous Deployment |
|---|---|---|
| After tests pass | ready to deploy, **waits for a human** | **auto-deploys**, no human |
| Best for | regulated / cautious teams | fast-moving products with strong tests |

## 🧠 Whiteboard — CI/CD flow

```
   developer pushes  ──►  [ CI: build + test ]
                                │ pass?
                       ┌────────┴────────┐
                      NO                 YES
                       │                  │
                  block merge        [ CD: deploy ]
                  notify dev          → app is live
```

## 🏋️ Practice
1. Define CI and CD in one sentence each.
2. Explain the difference between continuous *delivery* and *deployment*.
3. List the stages of a typical CI pipeline.
4. Why does the pipeline stop on the first failing stage?
5. Use the "12-course meal" analogy to explain continuous integration.

## 💬 Interview Questions
- What does CI stand for and what does it do?
- Difference between continuous delivery and continuous deployment?
- What are typical stages in a CI pipeline?
- Why integrate small changes frequently?
- What happens when a pipeline stage fails?

---

# 📦 Module 3: Environment & Configuration (Secrets in Production)

**Real-life analogy:** Your house key works for your house. A hotel gives each guest a *different* key for *their* room. Your app needs different "keys" (config) in different places — your laptop, the test pipeline, the live server — and the **production secrets must never be written in the code** for anyone to find.

**Theory:** This is the **12-factor app** principle: *store configuration in the environment, not in code*. Things that change between environments — database URLs, API keys, ports — live in **environment variables**, not hardcoded.

## Local vs production config

```
LOCAL (.env on your laptop)        PRODUCTION (set in the host's dashboard)
MONGO_URI=mongodb://localhost...   MONGO_URI=mongodb+srv://...atlas...
OPENAI_API_KEY=sk-test...          OPENAI_API_KEY=sk-live...
PORT=5000                          PORT=(provided by the host)
```
Same code, different values — injected at runtime.

## Reading env vars (you already do this)

```javascript
import "dotenv/config";
const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI);
```

## The golden rules

```
1. .env is in .gitignore — NEVER committed.
2. Provide a .env.example (keys only, no values) so teammates know what's needed.
3. In production, set env vars in the HOST's dashboard (Render/Vercel/etc.), not in files.
4. Never log secrets. Never put them in the frontend.
```

**`.env.example`** (this one *is* committed — it's a template):
```
MONGO_URI=
JWT_SECRET=
OPENAI_API_KEY=
PORT=5000
```

## The frontend's special case

**Real-life analogy:** Anything you give a customer (the React bundle) is *public* — they can read it. So the frontend can only hold **non-secret** config, like the backend's public URL.

```
# frontend .env (Vite) — only PUBLIC values, prefixed VITE_
VITE_API_URL=https://zero-hunger-api.onrender.com/api
```
```javascript
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });
```
Real secrets (DB, AI key) stay on the backend — always.

## 🧠 Whiteboard — config flows in at runtime

```
   SAME CODE
      │   reads process.env.X
      ├── on laptop  → .env (local values)
      ├── in CI       → GitHub secrets
      └── in prod     → host dashboard (Render/Vercel)

   Secrets live in the ENVIRONMENT, never in the repo.
```

## 🏋️ Practice
1. Create a `.env.example` listing every variable (no values).
2. Confirm `.env` is in `.gitignore`.
3. Read `PORT` with a fallback in your server.
4. Add a `VITE_API_URL` to the frontend and use it in Axios.
5. List which secrets must stay backend-only and why.

## 💬 Interview Questions
- Why store config in the environment instead of code?
- What's the difference between `.env` and `.env.example`?
- Where do you set env vars in production?
- Why can't the frontend hold real secrets?
- What's the 12-factor principle for config?

---

# 📦 Module 4: The Build Step

**Real-life analogy:** A recipe draft has notes, crossed-out lines, and comments for the cook (your dev code). The *menu photo* sent to customers is clean, polished, and compressed (your production build). You don't serve customers your messy draft — you serve the optimized final version.

**Theory:** During development you run a dev server (`npm run dev`) with hot-reload and readable code. For production you create a **build** — a bundled, minified, optimized set of static files that load fast. React/Vite does this for you.

## Building the React frontend

```bash
npm run build
```
```
▶ vite build
▶ dist/index.html              0.45 kB
▶ dist/assets/index-x9f.css    8.20 kB
▶ dist/assets/index-a3k.js   142.00 kB
▶ ✓ built in 1.2s
```
This creates a `dist/` folder of **static files** (HTML, CSS, JS). That folder is what you deploy to Vercel/Netlify — no Node needed to *serve* it; it's just files on a CDN.

## Dev build vs production build

| | Dev (`npm run dev`) | Production (`npm run build`) |
|---|---|---|
| Speed | instant reload | optimized once |
| Code | readable, with source maps | minified, tiny |
| Use | while coding | what users actually get |
| Output | live server | a `dist/` folder |

## The backend doesn't "build" the same way

**Theory:** A Node/Express backend runs the JavaScript directly (`node server.js`) — there's no bundling needed (unless you use TypeScript, which compiles to JS). For the backend, "production-ready" means: env vars set, `NODE_ENV=production`, and started with `npm start`, ideally kept alive by the host or a process manager.

```json
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js"
}
```

## Preview your production build locally

```bash
npm run build
npm run preview        # serves the dist/ folder as it'll appear in production
```
Always preview before deploying — catch issues early.

## 🧠 Whiteboard — dev vs build

```
   CODING:    src/ ──► npm run dev ──► live server (readable, hot-reload)

   SHIPPING:  src/ ──► npm run build ──► dist/ (minified static files)
                                            │
                                     deploy to CDN/host
```

## 🏋️ Practice
1. Run `npm run build` on the React app; inspect the `dist/` folder.
2. Run `npm run preview` and open the production build locally.
3. Compare a file size in `dist/` vs the source.
4. Confirm your backend has a `start` script.
5. Explain why the frontend needs a build but the backend mostly doesn't.

## 💬 Interview Questions
- What does `npm run build` produce, and why?
- Difference between a dev build and a production build?
- Why can a built React app be served from a CDN without Node?
- How is "production-ready" different for the backend?
- What does `npm run preview` do?

---

# 📦 Module 5: GitHub Actions — Basics

**Real-life analogy:** A set of **standing instructions** pinned in the office: "Whenever a new order arrives, do these steps automatically." **GitHub Actions** is that automation system built right into GitHub — "whenever code is pushed, run these steps."

**Theory:** GitHub Actions runs your CI/CD automatically. You describe what to do in a **YAML file** inside `.github/workflows/`. GitHub spins up a fresh virtual machine (a **runner**), runs your steps, and reports pass/fail on every push and pull request.

## The vocabulary

| Term | Meaning | Analogy |
|------|---------|---------|
| **Workflow** | the whole automated process (a `.yml` file) | the full standing-instructions sheet |
| **Trigger** (`on`) | what starts it (push, PR) | "whenever an order arrives" |
| **Job** | a group of steps on one runner | one worker's task list |
| **Step** | a single command or action | one instruction |
| **Action** | a reusable pre-built step | a ready-made tool |
| **Runner** | the machine that executes it | the worker |

## Your first workflow

**`.github/workflows/hello.yml`:**
```yaml
name: Hello Pipeline

on: [push]                      # trigger: run on every push

jobs:
  greet:                        # a job named "greet"
    runs-on: ubuntu-latest      # the runner (a fresh Linux machine)
    steps:
      - name: Say hello
        run: echo "Zero Hunger pipeline is running!"
      - name: Show the date
        run: date
```
Commit this, push, and open the **Actions** tab on GitHub — you'll see it run live:
```
▶ greet
   ✓ Say hello   → Zero Hunger pipeline is running!
   ✓ Show the date
```

## Using pre-built actions

**Real-life analogy:** Instead of building a tool from scratch, you grab one off the shelf. `uses:` pulls in a ready-made action.

```yaml
steps:
  - uses: actions/checkout@v4        # ready-made: clones your repo onto the runner
  - uses: actions/setup-node@v4      # ready-made: installs Node
    with:
      node-version: 20
  - run: node -v                     # your own command
```

## 🧠 Whiteboard — anatomy of a workflow

```
   WORKFLOW (.yml file)
     on: push                  ← TRIGGER
     jobs:
       build:                  ← JOB (runs on a fresh runner)
         steps:                ← STEPS (run in order)
           - uses: checkout    ← ACTION (pre-built)
           - run: npm test     ← COMMAND (yours)

   push code → GitHub starts a runner → runs steps → ✓ or ✗ reported
```

## 🏋️ Practice
1. Create `.github/workflows/hello.yml` that echoes a message on push.
2. Push it and watch it run in the Actions tab.
3. Add a step using `actions/checkout@v4`.
4. Add `actions/setup-node@v4` and run `node -v`.
5. Add a second step that fails on purpose (`exit 1`) and see the ✗.

## 💬 Interview Questions
- What is GitHub Actions and where do workflow files live?
- Define workflow, job, step, and action.
- What does the `on:` key control?
- What is a runner?
- What does `uses:` vs `run:` do?

---

# 📦 Module 6: GitHub Actions — A Real CI Pipeline

Now we build a pipeline that actually protects Zero Hunger: on every push and pull request, it installs dependencies, lints, tests, and builds — for both frontend and backend. If anything fails, the PR is blocked.

**`.github/workflows/ci.yml`:**
```yaml
name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  frontend:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./zero-hunger-ui     # run commands in the frontend folder
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'                            # cache deps → faster runs
          cache-dependency-path: zero-hunger-ui/package-lock.json
      - run: npm ci                               # clean install from lock file
      - run: npm run lint --if-present            # check code style
      - run: npm run build                        # ensure it builds

  backend:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./zero-hunger-api
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
          cache-dependency-path: zero-hunger-api/package-lock.json
      - run: npm ci
      - run: npm test --if-present                # run backend tests
```

## `npm ci` vs `npm install`

**Real-life analogy:** `npm install` is shopping flexibly ("grab whatever's freshest"); `npm ci` follows the exact shopping list (`package-lock.json`) precisely. CI environments use `npm ci` for **reproducible** builds — the same versions every time.

## Storing secrets for CI

**Real-life analogy:** The pipeline sometimes needs a key (e.g., to run tests against a test DB). You don't write it in the YAML — you store it in GitHub's **encrypted secrets** (Settings → Secrets → Actions) and reference it:

```yaml
      - run: npm test
        env:
          MONGO_URI: ${{ secrets.TEST_MONGO_URI }}
          JWT_SECRET: ${{ secrets.JWT_SECRET }}
```

## Protecting `main` with the pipeline

**Theory:** In GitHub branch protection settings, require the CI checks to pass before a PR can merge. Now broken code **physically cannot** reach `main`. Add a status badge to your README:
```markdown
![CI](https://github.com/you/zero-hunger/actions/workflows/ci.yml/badge.svg)
```

## 🧠 Whiteboard — the CI gate

```
   open Pull Request
        │
   ┌────┴─────────────────────────────┐
   │ CI runs: frontend job + backend  │
   │ install → lint → test → build    │
   └────┬─────────────────────────────┘
        │ all green?
     ┌──┴──┐
    YES    NO
     │      │
  merge   blocked + ✗ shown
  allowed  fix and push again
```

## 🏋️ Practice
1. Create `ci.yml` with separate frontend and backend jobs.
2. Use `npm ci` and cache dependencies.
3. Open a PR and watch both jobs run.
4. Add a GitHub secret and reference it in a step's `env`.
5. Add a CI status badge to your README.

## 💬 Interview Questions
- What stages should a CI pipeline run for a MERN app?
- Difference between `npm ci` and `npm install`?
- How do you give a workflow access to a secret?
- How do you stop broken code from reaching `main`?
- Why cache dependencies in CI?

---

# 📦 Module 7: Docker — Basics (Containerization)

## The problem Docker solves

**Real-life analogy:** You cook a dish perfectly at home, but at a friend's kitchen it fails — different stove, missing spices, wrong pans. "It works in *my* kitchen!" **Docker packs your dish *with its entire kitchen*** — stove, pots, exact ingredients — into a sealed lunchbox (a **container**) that cooks identically anywhere.

**Theory:** A **container** bundles your app together with everything it needs to run — the right Node version, dependencies, files, and settings. It runs the same on your laptop, a teammate's machine, the CI runner, and the production server. This kills "works on my machine" forever.

## Images vs Containers

**Real-life analogy:** An **image** is the *recipe + boxed kit* (a blueprint). A **container** is the *actual meal cooked from it* (a running instance). One image → many identical containers.

```
   Dockerfile  ──build──►  Image  ──run──►  Container (running app)
   (instructions)          (blueprint)      (a live instance)
```

## Containers vs Virtual Machines (why containers win)

**Real-life analogy:** A VM is renting a whole separate house for each guest (heavy — its own everything). A container is a private room in a shared building (light — shares the building's foundation). Containers are smaller, faster to start, and you can run many on one machine.

```
   VM:        [App][Guest OS][App][Guest OS]  ← each carries a full OS (heavy)
   Container: [App][App][App] on one shared OS kernel  ← light & fast
```

## The essential Docker commands

```bash
docker --version                     # check it's installed
docker build -t zero-hunger-api .    # build an image from a Dockerfile (in this folder)
docker images                        # list your images
docker run -p 5000:5000 zero-hunger-api   # run a container, map port 5000→5000
docker ps                            # list running containers
docker stop <container_id>           # stop one
docker logs <container_id>           # see its output
```

**Real-life analogy for `-p 5000:5000`:** the lunchbox has a sealed lid; the port mapping is poking a straw through so the outside world (your browser) can reach the app inside (`host:container`).

## 🧠 Whiteboard — the Docker mental model

```
   Dockerfile (instructions)
        │  docker build
        ▼
   IMAGE (blueprint, shareable)
        │  docker run
        ▼
   CONTAINER (running app, identical everywhere)

   "Pack the app + its whole environment → runs the same anywhere."
```

## 🏋️ Practice
1. Install Docker Desktop and run `docker --version`.
2. Explain image vs container in your own words.
3. Run a public image: `docker run hello-world`.
4. Explain what `-p 3000:3000` does.
5. Describe why containers beat VMs for this use case.

## 💬 Interview Questions
- What problem does Docker solve?
- Difference between an image and a container?
- How do containers differ from virtual machines?
- What does `docker build` vs `docker run` do?
- What does port mapping (`-p`) accomplish?

---

# 📦 Module 8: Dockerizing the MERN App

A **Dockerfile** is the recipe Docker follows to build your image. We write one for the backend and one for the frontend.

## Backend Dockerfile

**`zero-hunger-api/Dockerfile`:**
```dockerfile
# 1. start from an official Node image (the "base kitchen")
FROM node:20-alpine

# 2. set the working folder inside the container
WORKDIR /app

# 3. copy dependency files first (for better caching)
COPY package*.json ./

# 4. install ONLY production dependencies
RUN npm ci --omit=dev

# 5. copy the rest of the source code
COPY . .

# 6. document the port the app uses
EXPOSE 5000

# 7. the command that starts the app
CMD ["node", "server.js"]
```

**Why copy `package*.json` before the code?** **Real-life analogy:** you stock the pantry (dependencies) before unpacking groceries (code) — Docker caches the pantry layer, so if only your code changes, it skips re-installing everything. Faster builds.

**`zero-hunger-api/.dockerignore`** (don't pack junk into the lunchbox):
```
node_modules
.env
.git
npm-debug.log
```

## Frontend Dockerfile (multi-stage)

**Real-life analogy:** Use a big messy prep kitchen to cook (build), then plate the finished dish on a tiny clean serving tray (a lightweight web server). A **multi-stage build** throws away the heavy build tools, keeping the final image tiny.

**`zero-hunger-ui/Dockerfile`:**
```dockerfile
# --- Stage 1: build the static files ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build                       # produces dist/

# --- Stage 2: serve them with a tiny web server ---
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html   # copy ONLY the built files
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
The final image contains just Nginx + your static files — no Node, no source, no `node_modules`. Small and fast.

## Build and run

```bash
# backend
cd zero-hunger-api
docker build -t zero-hunger-api .
docker run -p 5000:5000 --env-file .env zero-hunger-api

# frontend
cd zero-hunger-ui
docker build -t zero-hunger-ui .
docker run -p 8080:80 zero-hunger-ui
```
Visit `http://localhost:8080` (frontend) and `http://localhost:5000` (backend).

## 🧠 Whiteboard — the two Dockerfiles

```
   BACKEND               FRONTEND (multi-stage)
   FROM node             Stage1 FROM node → npm build → dist/
   install deps          Stage2 FROM nginx → copy dist/ only
   copy code             (throws away build tools → tiny image)
   CMD node server.js    CMD nginx
```

## 🏋️ Practice
1. Write the backend Dockerfile and `.dockerignore`.
2. Build and run the backend container with `--env-file .env`.
3. Write the multi-stage frontend Dockerfile.
4. Build and run the frontend container; open it in the browser.
5. Explain why copying `package*.json` first speeds up rebuilds.

## 💬 Interview Questions
- What is a Dockerfile?
- Why copy `package*.json` before the rest of the code?
- What does a multi-stage build achieve?
- Why serve the React build with Nginx instead of Node?
- What belongs in `.dockerignore` and why?

---

# 📦 Module 9: Docker Compose (Orchestrate the Whole Stack)

**Real-life analogy:** Running each container by hand is like starting the oven, fridge, and dishwasher separately with three different remotes. **Docker Compose** is one master switch that starts the whole kitchen — frontend, backend, and database — together, already wired to talk to each other.

**Theory:** Compose defines your multi-container app in one `docker-compose.yml`. One command (`docker compose up`) builds and starts everything on a shared network so the services can find each other by name.

**`docker-compose.yml`** (in your project root):
```yaml
services:
  mongo:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db          # persist data even if the container restarts

  backend:
    build: ./zero-hunger-api
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/zerohunger   # "mongo" = the service name!
      - JWT_SECRET=${JWT_SECRET}
      - OPENAI_API_KEY=${OPENAI_API_KEY}
    depends_on:
      - mongo                        # start mongo first

  frontend:
    build: ./zero-hunger-ui
    ports:
      - "8080:80"
    depends_on:
      - backend

volumes:
  mongo-data:                        # named volume for database persistence
```

**The magic:** inside the Compose network, services reach each other by **service name**. The backend connects to `mongodb://mongo:27017` — `mongo` resolves to the database container automatically. No IP addresses needed.

## Run the whole stack

```bash
docker compose up --build      # build images + start everything
docker compose ps              # see what's running
docker compose logs -f         # follow logs from all services
docker compose down            # stop and remove everything
```
```
▶ ✔ mongo     Started
▶ ✔ backend   Started
▶ ✔ frontend  Started
```
Your entire Zero Hunger stack now runs with **one command** — identical for every teammate.

## Volumes — keeping data alive

**Real-life analogy:** A container is disposable like a paper cup; when you throw it away, what's inside is gone. A **volume** is a permanent jug — data poured into it survives even when the cup is replaced. That's why the database uses `mongo-data`.

## 🧠 Whiteboard — Compose network

```
   docker compose up
        │
   ┌────┴────────────────────────────────────┐
   │  shared network (services by name)        │
   │  [frontend:80] → [backend:5000] → [mongo] │
   │                              ▲            │
   │                         mongo-data volume │
   └───────────────────────────────────────────┘
   one command starts the whole stack, wired together.
```

## 🏋️ Practice
1. Write `docker-compose.yml` with mongo, backend, frontend.
2. Run `docker compose up --build` and open the app.
3. Confirm the backend reaches mongo by the service name.
4. Add a volume so DB data survives `docker compose down`.
5. Tail the logs of all services with `docker compose logs -f`.

## 💬 Interview Questions
- What does Docker Compose do that plain `docker run` doesn't?
- How do containers in a Compose network find each other?
- What is a volume and why does the database need one?
- What does `depends_on` control?
- How do you start and stop the whole stack?

---

# 📦 Module 10: Deployment — Concepts

**Real-life analogy:** Opening a restaurant to the public. The kitchen (backend), dining room (frontend), and pantry (database) each need a real address customers can reach — and they're often in different buildings, chosen for what each does best.

**Theory:** A MERN app isn't deployed as one blob. Each tier goes where it runs best:

```
   FRONTEND (React build)  →  a CDN/static host   (Vercel, Netlify)
   BACKEND  (Node/Express) →  a server host        (Render, Railway, AWS)
   DATABASE (MongoDB)      →  a managed DB          (MongoDB Atlas)
```

## Why split them?

| Tier | Best host type | Why |
|------|----------------|-----|
| React build | static/CDN | just files — cheap, global, blazing fast |
| Express API | always-on server | needs Node running to handle requests |
| MongoDB | managed database | backups, scaling, security handled for you |

## How they connect in production

**Real-life analogy:** Three separate shops that phone each other. Each must know the others' phone numbers (URLs), and each must allow calls from the others (CORS, network rules).

```
   Browser → frontend (vercel.app)
                 │  calls VITE_API_URL
                 ▼
            backend (onrender.com) ── MONGO_URI ──► Atlas
   CORS must allow the frontend's domain to call the backend.
```

## The production checklist (before you deploy)

```
□ Frontend uses VITE_API_URL (not localhost) for the API
□ Backend CORS allows the deployed frontend domain
□ All secrets set in each host's dashboard (not in code)
□ Database uses Atlas (cloud), with network access configured
□ NODE_ENV=production on the backend
□ npm run build succeeds locally (npm run preview looks right)
□ .env is gitignored; .env.example is committed
```

## 🧠 Whiteboard — the deployed architecture

```
   ┌──────────────┐     ┌──────────────────┐     ┌──────────────┐
   │  Vercel       │     │  Render           │     │ MongoDB Atlas │
   │  (frontend)   │ ──► │  (Express API)    │ ──► │ (database)    │
   │  static CDN   │     │  always-on server │     │ managed cloud │
   └──────────────┘     └──────────────────┘     └──────────────┘
        public URL          public URL              connection string
        VITE_API_URL ───────►  CORS allows it
```

## 🏋️ Practice
1. List which host you'll use for each of the three tiers.
2. Explain why the frontend can live on a CDN but the backend can't.
3. Write the production checklist from memory.
4. Identify every URL/secret that changes between local and production.
5. Diagram how the three deployed pieces connect.

## 💬 Interview Questions
- Why deploy frontend, backend, and database separately?
- Which host type suits each tier and why?
- What must the backend's CORS allow in production?
- What changes in config between local and production?
- What's on your pre-deploy checklist?

---

# 📦 Module 11: Deploying Zero Hunger (Vercel / Netlify / Render / Atlas)

Now we go live. These platforms deploy straight from your GitHub repo — push to `main`, they build and host automatically.

## Step 1 — Database: MongoDB Atlas

1. Create a free cluster (you did this in the Node module).
2. **Network Access** → allow connections (for learning, `0.0.0.0/0`; for production, restrict to your backend host's IPs).
3. Copy the connection string → it becomes the backend's `MONGO_URI`.

## Step 2 — Backend: Render

**Real-life analogy:** Renting an always-on kitchen that the public can call.

1. New → **Web Service** → connect your GitHub repo.
2. Root directory: `zero-hunger-api`
3. Build command: `npm ci`
4. Start command: `npm start`
5. **Environment** → add `MONGO_URI`, `JWT_SECRET`, `OPENAI_API_KEY` (from the dashboard — never in code).
6. Deploy → you get a URL like `https://zero-hunger-api.onrender.com`.

Test it: visit `https://zero-hunger-api.onrender.com/api/donations` → you should get JSON.

## Step 3 — Frontend: Vercel (or Netlify)

**Real-life analogy:** Putting your dining room on a busy street corner (a global CDN) so customers arrive instantly.

1. New Project → import your GitHub repo.
2. Root directory: `zero-hunger-ui`
3. Framework preset: **Vite** (auto-detected). Build: `npm run build`, output: `dist`.
4. **Environment Variables** → `VITE_API_URL=https://zero-hunger-api.onrender.com/api`
5. Deploy → you get a URL like `https://zero-hunger.vercel.app`.

## Step 4 — Wire them together (the crucial connection)

**Backend CORS** must allow the frontend's domain:
```javascript
app.use(cors({
  origin: ["https://zero-hunger.vercel.app", "http://localhost:5173"]
}));
```
Commit, push → Render redeploys. Now the live frontend can call the live backend.

## Step 5 — Verify the live app

```
□ Open the Vercel URL — the app loads
□ Register / log in — works against the live backend
□ Add a donation — it saves to Atlas
□ Refresh — data persists (it's in the cloud DB)
□ The AI chatbot / classifier responds
```

## Deploying with Docker instead (alternative)

If a host supports containers (Render, Railway, AWS ECS, Fly.io), you can deploy your **Docker images** directly instead of source — the host runs your Dockerfile. Same app, packaged as a container. AWS (ECS/EC2/Elastic Beanstalk) offers the most control and scale, at the cost of more setup.

## 🧠 Whiteboard — the go-live flow

```
   Atlas (DB) up ──► Render (backend, env vars set) ──► test /api
        │                                                   │
        └───────── MONGO_URI ───────────┘                   │
                                                            │
   Vercel (frontend, VITE_API_URL set) ──────► calls backend
        │
   backend CORS allows the Vercel domain ──► 🎉 live app
```

## 🏋️ Practice
1. Deploy the backend to Render with all env vars set.
2. Hit a backend endpoint in the browser and confirm JSON.
3. Deploy the frontend to Vercel/Netlify with `VITE_API_URL`.
4. Update backend CORS to allow the frontend domain; redeploy.
5. Run the full live verification checklist.

## 💬 Interview Questions
- Walk through deploying a MERN app end to end.
- Where do production secrets go on these platforms?
- Why must you set `VITE_API_URL` and update CORS?
- How do these hosts know when to redeploy?
- What's the difference between deploying source vs a Docker image?

---

# 📦 Module 12: Nginx, Logging & Monitoring

**Real-life analogy:** A restaurant needs a host at the door directing guests (**Nginx**), a logbook of everything that happens (**logging**), and a manager watching the floor for problems (**monitoring**). A live app needs the same.

## Nginx — the traffic director

**Theory:** **Nginx** is a high-performance web server often placed *in front* of your app. It serves static files fast, and acts as a **reverse proxy** — receiving public requests and forwarding them to the right service. (You already used it in the frontend Dockerfile to serve the React build.)

**Real-life analogy:** A reverse proxy is the **front-desk host** who greets every guest and walks them to the right table (service) — guests never wander into the kitchen directly.

```
   Browser ──► Nginx (port 80/443) ──┬──► serves React static files
                                     └──► /api/* → forwards to backend:5000
```
A minimal reverse-proxy config:
```nginx
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;       # the React build
    try_files $uri /index.html;       # SPA routing
  }
  location /api/ {
    proxy_pass http://backend:5000;   # forward API calls to the backend
  }
}
```

## Logging — the logbook

**Real-life analogy:** Write down what happens so that when something breaks, you can read back and find out *why*.

```javascript
// a simple request logger (you saw this in the Node module)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});
```
In production, logs go to the host's log viewer (Render/Vercel dashboards) or a service like Logtail/Datadog. **Rule:** log enough to debug, but **never log secrets or passwords**.

## Monitoring — the manager on the floor

**Real-life analogy:** A manager who notices the kitchen is slow *before* customers complain. **Monitoring** watches your app's health and alerts you to problems.

**Theory:** Two basics to add:
- A **health-check endpoint** the host pings to confirm the app is alive:
```javascript
app.get("/health", (req, res) => res.json({ status: "ok", uptime: process.uptime() }));
```
- **Uptime monitoring** (e.g., UptimeRobot, or the host's built-in checks) that alerts you if `/health` stops responding.

More advanced: track error rates, response times, and set alerts. Start simple — a health check and reading your logs covers most early needs.

## 🧠 Whiteboard — production hygiene

```
   Nginx       → directs traffic (static + /api proxy)
   Logging     → records what happened (debug later, no secrets)
   /health     → "am I alive?" endpoint
   Monitoring  → pings /health, alerts you on failure
```

## 🏋️ Practice
1. Add a `/health` endpoint returning status + uptime.
2. Add a request-logging middleware (no secrets logged).
3. Explain what a reverse proxy does, using the front-desk analogy.
4. Find your deployed app's logs in the host dashboard.
5. (Stretch) Set up free uptime monitoring on `/health`.

## 💬 Interview Questions
- What is Nginx and what is a reverse proxy?
- Why add a health-check endpoint?
- What should and shouldn't go in logs?
- What does monitoring do that logging doesn't?
- How would you get alerted if the app goes down?

---

# 📦 Module 13: Continuous Deployment — Merge → Live

We close the loop: combine CI (Module 6) with **automatic deployment**, so merging a passing PR to `main` ships it live with zero manual steps.

**Real-life analogy:** A conveyor belt from the kitchen straight to the customer's door — once a dish passes inspection, it travels all the way out on its own.

## The simplest CD: host auto-deploy

**Theory:** Vercel, Netlify, and Render watch your `main` branch. Every push to `main` triggers a rebuild and redeploy automatically. Combined with branch protection (CI must pass before merge), you already have safe continuous deployment:

```
   PR opened → CI runs (test+build) → review → merge to main
        → host detects the push → rebuilds → redeploys → LIVE
```
No extra config needed beyond connecting the repo. This is the recommended path.

## CD via GitHub Actions (more control)

If you want the pipeline itself to deploy (e.g., to AWS or a Docker registry), add a deploy job that runs **only after** CI passes and **only on** `main`:

```yaml
  deploy:
    needs: [frontend, backend]        # wait for CI jobs to pass
    if: github.ref == 'refs/heads/main'   # only deploy from main
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy
        run: echo "Trigger deploy here (e.g., call host deploy hook or push Docker image)"
        env:
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
```

`needs:` ensures deploy runs *after* tests pass; the `if:` guard ensures it never deploys from a feature branch.

## Rollbacks — the undo button

**Real-life analogy:** If a new recipe flops, you instantly switch back to last week's proven one. Hosts like Vercel/Render keep previous deployments — **rolling back is one click**. Always know where that button is before you need it.

## 🧠 Whiteboard — the full DevOps loop

```
   code → push → [CI: test+build] → PR review → merge to main
                                                    │
                                          [CD: auto-redeploy]
                                                    │
                                              LIVE app
                                                    │
                                   monitor → feedback → code (loop)
```

## 🏋️ Practice
1. Connect your repo to Vercel/Render so `main` auto-deploys.
2. Make a small change, PR it, watch CI pass, merge, and see it go live.
3. Add a guarded `deploy` job with `needs:` and `if: main`.
4. Find the rollback button on your host and note how to use it.
5. Describe the full loop from code to live and back to feedback.

## 💬 Interview Questions
- How does merging to `main` result in a live deploy?
- How do you ensure deploy only runs after tests pass?
- How do you prevent deploying from a feature branch?
- What is a rollback and why does it matter?
- Draw the full CI/CD + monitoring loop.

---

# 📦 Module 14: Resume, Portfolio & Mock Interview Tips

**Real-life analogy:** You've cooked an incredible meal and opened the restaurant. Now you need a **menu and reviews** that make people want to hire the chef. Your resume, portfolio, and interview answers are how you sell the skills you just built.

## Part A — The Portfolio

**Theory:** Your portfolio's job is to *prove* you can ship. The Zero Hunger capstone is the centerpiece because it shows the full stack, AI, and DevOps in one real, live project.

**A strong project README contains:**
```
1. Title + one-line description + LIVE DEMO link + repo link
2. Screenshots / a short GIF of it working
3. The problem it solves (the Zero Hunger mission)
4. Tech stack (React, Node, Express, MongoDB, JWT, OpenAI, Docker, GitHub Actions)
5. Key features (auth with 5 roles, AI classification, CI/CD, etc.)
6. Architecture diagram (frontend → backend → DB)
7. How to run locally (clone, install, env vars, start)
8. What you learned / what you'd improve next
```

**Real-life analogy:** A README is the **menu with photos** — a hiring manager decides in 30 seconds whether to "order." Make the live link and a screenshot the first things they see.

**Portfolio site:** a simple one-page site listing 2–3 projects, each with a live link, repo, and one-line impact. Host it free on Vercel/Netlify (you know how now!).

## Part B — The Resume

**Theory:** Bullets should show **impact and specifics**, not chores. Use the pattern: *Built [what] using [tech] to [result]*.

**Weak:** "Made a website with React and Node."

**Strong:**
- *Built a full-stack MERN food-donation platform with JWT auth and role-based access for 5 user types.*
- *Integrated AI food-image classification and a support chatbot via the OpenAI API, with retries, timeouts, and graceful fallbacks.*
- *Containerized the app with Docker Compose and set up a GitHub Actions CI/CD pipeline that auto-deploys to Render and Vercel.*

**Real-life analogy:** A resume bullet is a **headline, not a diary entry** — lead with the achievement and the numbers.

**Skills section to include after this bootcamp:**
```
Frontend: React, JSX, Hooks, Tailwind CSS, Axios
Backend:  Node.js, Express, REST APIs, JWT auth
Database: MongoDB, Mongoose
AI:       OpenAI API, prompt engineering, vision, structured output
DevOps:   Git/GitHub, GitHub Actions (CI/CD), Docker, Docker Compose, Vercel/Render
```

## Part C — Mock Interview Tips

**Real-life analogy:** Rehearsing the dish before the food critic arrives. You don't want the *first* time you explain your project to be in a real interview.

**Prepare a 2-minute project walkthrough** covering: the problem, your architecture, one hard decision you made, and the result (it's live). Practice it out loud until it's smooth.

**Be ready to explain your *decisions*, not just your code:**
- "Why JWT?" → stateless auth, scales without server-side sessions.
- "Why MongoDB?" → flexible document model fit the evolving donation data.
- "How does your AI fail gracefully?" → retries on 429, timeout, fallback message.
- "How do you deploy?" → CI tests on every PR, merge to main auto-deploys.

**The STAR method** for behavioral questions: **S**ituation → **T**ask → **A**ction → **R**esult. Keep answers concrete and short.

**Practice routines:**
- Do mock interviews with a peer — one asks, one answers, then swap.
- Re-implement a small feature from scratch, talking through it out loud.
- Rehearse explaining your architecture diagram from memory.
- Prepare 3 questions to ask *them* (shows genuine interest).

**Real-life analogy for confidence:** You've actually *built and shipped* this. You're not pretending — you're describing real work. That authenticity is your biggest advantage.

## 🧠 Whiteboard — your job-launch kit

```
   PORTFOLIO  → live project + great README + screenshots
   RESUME     → impact bullets (Built X with Y → result Z)
   INTERVIEW  → 2-min walkthrough + decision rationale + STAR stories
       │
   all three point at ONE thing: the live Zero Hunger app you shipped.
```

## 🏋️ Practice
1. Write a complete README for Zero Hunger using the 8-part structure.
2. Rewrite 3 resume bullets using "Built X with Y → result Z."
3. Record yourself giving a 2-minute project walkthrough; review it.
4. Write your answer to "Why did you choose this architecture?"
5. Do one mock interview with a peer (5 technical + 2 behavioral questions).

## 💬 Interview Questions (to rehearse)
- Walk me through your Zero Hunger project.
- Why did you choose this tech stack?
- What was the hardest bug and how did you solve it?
- How do you deploy and keep the app reliable?
- What would you build or improve next?

---

# 🏆 CAPSTONE DELIVERY: Ship Zero Hunger

> **Goal:** Take everything from all five modules and deliver one complete, live, professionally-shipped product — with CI/CD, containerization, cloud deployment, and a portfolio-ready presentation.

## 📦 What "delivered" means

| Layer | Requirement |
|-------|-------------|
| **Frontend** | React app deployed (Vercel/Netlify), responsive, uses `VITE_API_URL` |
| **Backend** | Express API deployed (Render), all secrets in dashboard, CORS set |
| **Database** | MongoDB Atlas, data persists |
| **Auth** | JWT register/login, 5 roles (admin/ngo/vendor/donor/volunteer) |
| **AI** | chatbot + food classification working in production |
| **Containers** | Dockerfiles + `docker-compose.yml` that run the full stack locally |
| **CI** | GitHub Actions pipeline (install → lint → test → build) on every PR |
| **CD** | merge to `main` auto-deploys |
| **Ops** | `/health` endpoint, request logging, README with architecture diagram |

## 🗂️ The complete repo structure

```
zero-hunger/
├── README.md                    ← portfolio centerpiece (8-part structure)
├── .github/workflows/ci.yml     ← CI/CD pipeline
├── docker-compose.yml           ← whole-stack orchestration
├── .env.example                 ← config template (committed)
├── zero-hunger-api/             ← backend
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── server.js
│   ├── config/ models/ controllers/ services/ middleware/ routes/
│   └── ...
└── zero-hunger-ui/              ← frontend
    ├── Dockerfile
    ├── src/ (components/, pages/, api.js)
    └── ...
```

## ✅ The final delivery checklist

```
DEPLOYMENT
□ Live frontend URL works on phone and desktop
□ Live backend URL returns JSON
□ Database is Atlas; data persists across restarts
□ All secrets in host dashboards; .env gitignored; .env.example committed
□ Backend CORS allows the deployed frontend

FUNCTIONALITY
□ Register/login works with roles
□ Full donation CRUD works against the live DB
□ AI chatbot responds; food classifier returns results
□ Protected & role-restricted routes behave correctly

DEVOPS
□ docker compose up runs the full stack locally
□ CI runs on every PR (install → lint → test → build)
□ Merge to main auto-deploys
□ /health endpoint live; logs visible in dashboard

PRESENTATION
□ README has demo link, screenshots, stack, features, architecture diagram, run steps
□ Repo is clean (no node_modules, no .env committed)
□ CI status badge in README
□ 2-minute walkthrough rehearsed
```

## 🚀 Final ship commands

```bash
# ensure everything is committed cleanly
git status
git add .
git commit -m "Zero Hunger: full MERN + AI, dockerized, CI/CD, deployed"
git push origin main
# → CI runs → on green, hosts auto-deploy → app is LIVE 🎉
```

## 🧩 Stretch goals (portfolio boosters)
1. Add a custom domain to the frontend.
2. Add the Nginx reverse-proxy setup for a single-domain deploy.
3. Add automated tests (Jest/Vitest) so CI runs real test suites.
4. Add uptime monitoring + alerting on `/health`.
5. Push Docker images to a registry and deploy the containers to AWS.

---

## 🎓 Final Assessment Checklist

Students must demonstrate:

- [ ] Explain DevOps and the CI/CD lifecycle
- [ ] Manage configuration with environment variables (12-factor)
- [ ] Produce a production **build**
- [ ] Write a **GitHub Actions** CI pipeline (install → lint → test → build)
- [ ] Protect `main` so broken code can't merge
- [ ] **Dockerize** frontend and backend (incl. a multi-stage build)
- [ ] Orchestrate the stack with **Docker Compose** + a volume
- [ ] **Deploy** frontend, backend, and DB to the cloud and wire them (CORS, env)
- [ ] Add a `/health` endpoint, logging, and know monitoring basics
- [ ] Set up **continuous deployment** (merge → live) with rollback awareness
- [ ] Produce a portfolio-ready **README**, **resume bullets**, and a **walkthrough**
- [ ] Deliver the **complete, live Zero Hunger capstone**

## ➡️ Expected Outcome
You are now a **full-stack MERN developer** who can build, integrate AI into, containerize, and deploy a real application — and present it convincingly to employers. You've taken Zero Hunger from an idea to a live product, the entire journey end to end. 🎉

---

*Training manual for the Zero Hunger Platform Bootcamp · DevOps, Deployment & Career Launch. Ready to drop into `/Reading-Materials`, `/DevOps`, or `/Interview-Preparation` in your GitHub repo.*

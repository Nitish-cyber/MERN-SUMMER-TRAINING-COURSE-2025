# Day 5 · Version Control & Project Handover
## 📅 MERN Stack Bootcamp · Week 1 Trainer Guide

---

### 1. Day Objective
Students will set up local version control tracking, configure project gitignores, stage files, execute commits, manage feature branch trees, resolve simulated merge conflicts, register a remote GitHub repository, and push the final `zero-hunger-week1` console application prototype.

---

### 2. Concepts Covered
*   **Version Control**: Tracking historical file edits and restoring system states.
*   **Git Lifecycle**: Managing `Working Directory`, `Staging Area` (Index), and `Local Repository` (Commits).
*   **Branching Workflows**: Isolated feature development tracks.
*   **Merging & Conflict Resolution**: Integrating branches and resolving line-by-line file collisions.
*   **Remote Repositories**: Linking local codebases to GitHub remotes (`push` and `pull`).

---

### 3. Project Feature Built
*   **Production-Ready Repository Structure**: Finalizing the complete console-based Zero Hunger backend simulation suite (specs, donor manager, donation allocation engine, and async API simulator) inside a fully tracked Git repository pushed to GitHub.

---

### 4. Why This Topic Matters in Zero Hunger
In commercial startups, you never build applications in isolation. In the Zero Hunger platform:
1.  Developer A writes code to validate donor certifications on the `feature/donor` branch.
2.  Developer B writes code to track volunteer GPS coordinates on the `feature/volunteer` branch.
3.  Developer C manages NGO capacity distributions.
Using Git and GitHub enables these team members to write code simultaneously in isolated branches, test features independently, and safely merge their contributions into the production server branch (`main`) without overwriting or breaking other features.

---

### 5. Detailed 2-Hour Session Breakdown

*   **00 - 15 Minutes | Day 4 Review & Day 5 Setup**
    *   *Activities*: Review Asynchronous JavaScript. Introduce the concept of a shared development environment. Explain how we gather our 4 days of files into a single repository for deployment.
    *   *Trainer Guidance*: Make sure students understand that they are transitioning their local work into a professional open-source profile on GitHub.
*   **15 - 30 Minutes | Whiteboard Session: Git Trees & Branching Logic**
    *   *Activities*: Draw a Git timeline. Illustrate a master branch (`main`), a feature branch branching off, commits as historical save points, and a merge line.
    *   *Trainer Guidance*: Explain how a commit is like a restore point in a video game – you can always roll back to it if a new feature breaks the code.
*   **30 - 45 Minutes | Git Lifecycle & Staging Area Mechanics**
    *   *Activities*: Trace the three Git states: untracked files (red), staged files in the index (green), and committed records in database history (commit hash).
    *   *Trainer Guidance*: Emphasize the importance of writing meaningful developer-grade commit messages (e.g. using conventional commits like `feat:`, `fix:`, `docs:`).
*   **45 - 60 Minutes | Remote Repositories and Remotes**
    *   *Activities*: Explain the difference between Git (local version tracking engine) and GitHub (cloud web host hosting your repositories). Map how `git push` uploads local history.
    *   *Trainer Guidance*: Demonstrate how to create a clean repository on GitHub without default READMEs to prevent initial pull conflicts.
*   **60 - 75 Minutes | Live Coding: Initializing `zero-hunger-week1`**
    *   *Activities*: Instructors walk students through `git init`, writing a robust `.gitignore` file, checking status, staging all files, and executing the initial commit.
    *   *Trainer Guidance*: Highlight why we ignore folders like `node_modules` or `.env` security files.
*   **75 - 90 Minutes | Student Practice: Feature Branch Development**
    *   *Activities*: Students create a branch named `feature/volunteer`, implement a small volunteer tracker script, and merge it back to the `main` branch.
    *   *Trainer Guidance*: Guide students who get stuck on branch checkout or merge command parameters.
*   **90 - 105 Minutes | Resolving a Simulated Merge Conflict**
    *   *Activities*: Deliberately trigger a merge conflict by editing the same line in `specs.md` on two branches. Live code resolving the conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`).
    *   *Trainer Guidance*: Demystify merge conflicts. Explain that a conflict is not an error – it's just Git asking the developer to decide which version of the code is correct.
*   **105 - 120 Minutes | Pushing to GitHub & Week 1 Graduation**
    *   *Activities*: Students create their public repository on GitHub named `zero-hunger-week1`, link their local folder to the remote, and execute `git push -u origin main`. Review all week 1 accomplishments.
    *   *Trainer Guidance*: Walk around to resolve any SSH or HTTPS authentication blocks (e.g. credential manager issues). Congratulate the class on finishing Week 1.

---

### 6. Trainer Talking Points
*   *"Think of Git as a time machine for your Zero Hunger codebase. If you write a new matching algorithm tomorrow that breaks your donor verification file, you don't need to press undo 500 times. You simply roll back your repository state to the last clean commit."*
*   *"Every employer looking for React/Node developers reviews their GitHub profile first. Pushing your daily bootcamp work to GitHub with structured documentation and clear commit histories is the single best way to prove you can write production-level code."*

---

### 7. Whiteboard Discussion Layout
Draw the Git Branching and Merging tree:
```
                                 [Commit 3: Volunteer GPS tracking added]
                                 /-------- feature/volunteer --------\
                                /                                     \ (git merge)
[Commit 1: Init] ----> [Commit 2: Donor file] --------------------> [Commit 4: Merged and clean]
                                 \                                     /
                                  \-------- feature/ngo --------------/
                                 [Commit 3b: NGO capacity filters added]
```

---

### 8. Live Coding Activities
Create the `.gitignore` configuration and coordinate the git commands. Instructors show students how to initialize, stage, commit, branch, and push.

**Target File**: `c:\Users\Lenovo\Desktop\MERN STACK READING MATERIAL\zero-hunger-week1\.gitignore`
```
# Dependency folders
node_modules/

# Local configuration files
.env
.env.local

# IDE settings
.vscode/
.idea/

# System logs
*.log
npm-debug.log*
```

**Local terminal commands pipeline**:
```bash
# 1. Initialize Git in the project directory
git init

# 2. Switch to default main branch
git checkout -b main

# 3. Check status of untracked files
git status

# 4. Stage all files including specifications and scripts
git add .

# 5. Commit with professional message
git commit -m "feat: complete week 1 zero hunger console prototype and specifications"

# 6. Verify commit history
git log --oneline
```

---

### 9. Student Practice Activities
*   **Task**: Branching and merging feature modules.
    1.  Create and switch to a new branch named `feature/vendor`:
        ```bash
        git checkout -b feature/vendor
        ```
    2.  Create a file `vendor_manager.js` in your directory. Declare a simple array of 3 vendors offering packaging materials (e.g. `{ name: "SafePack", location: "Noida", rate: 5 }`). Log the list to the console.
    3.  Stage and commit the new file on your branch:
        ```bash
        git add vendor_manager.js
        git commit -m "feat: add vendor manager array listing"
        ```
    4.  Switch back to the main branch:
        ```bash
        git checkout main
        ```
    5.  Merge the `feature/vendor` branch back to main:
        ```bash
        git merge feature/vendor
        ```
    6.  Verify that `vendor_manager.js` is now present in the main branch tree.

---

### 10. Assignment
*   **Problem**: Simulate and resolve a git merge conflict.
*   **Requirements**:
    *   On the main branch, edit line 4 of `specs.md` to say `* **Donor**: Registries for major 5-star hotels.`. Commit this change.
    *   Create and switch to a branch `conflict-test`. Edit the same line 4 of `specs.md` to say `* **Donor**: Registries for weddings and restaurants.`. Commit this change.
    *   Switch back to the main branch and merge `conflict-test`.
    *   Open `specs.md` in VS Code, find the conflict indicators (`<<<<<<<`, `=======`, `>>>>>>>`), select the best business definition, remove the conflict markers, save the file, and execute `git add specs.md` and `git commit` to resolve the conflict.

---

### 11. Homework
1.  Read the GitHub Onboarding Guide: *"Git Branching - Basic Branching and Merging"*.
2.  Set up a personal GitHub portfolio profile and add a custom bio showing you are a "Full Stack Developer in Training".

---

### 12. Git Commit Message
```bash
git commit -m "feat: finalize week 1 zero hunger console prototype and documentation"
```

---

### 13. Repository Structure After Class
```
zero-hunger-week1/
├── .gitignore
├── api_simulator.js
├── donation_manager.js
├── donor_manager.js
├── specs.md
└── vendor_manager.js
```

---

### 14. Interview Questions
1.  **Q**: *What is the difference between Git and GitHub?*
    *   **A**: **Git** is a local version control command-line software tool that tracks changes in your project files. **GitHub** is a cloud web hosting platform that securely hosts remote Git repositories, facilitating collaboration, issue tracking, and automated deployment pipelines.
2.  **Q**: *Explain what a merge conflict is and how a developer resolves it.*
    *   **A**: A merge conflict occurs when Git tries to merge two branches that contain different edits on the exact same line of the same file. Git halts the merge and inserts visual markers (`<<<<<<<`, `=======`, `>>>>>>>`). The developer must open the conflicting file, choose which block of code to keep, delete the conflict markers, save the file, stage it (`git add`), and execute `git commit` to complete the merge.
3.  **Q**: *What does the `-u` flag accomplish inside `git push -u origin main`?*
    *   **A**: The `-u` (or `--set-upstream`) flag links your local active branch to the remote branch on GitHub. Once this upstream tracking is established, you can run simple `git push` or `git pull` commands without specifying the remote and branch names every time.

---

### 15. Common Student Mistakes
*   **Staging Sensitive Configuration/System Files**: Staging and committing `node_modules` or `.env` files. Emphasize that adding these bloated or sensitive files to GitHub degrades repository performance and compromises API security. Remind them to always write the `.gitignore` *before* their initial `git add .` command.
*   **Merging Uncommitted Code**: Trying to switch branches or merge changes while having active uncommitted modifications in the working directory, leading to git errors. Remind them to always run `git status` and commit their work before switching branch tracks.

---

### 16. Trainer Checklist
*   [ ] Confirm every single student has successfully created a GitHub account.
*   [ ] Walk around the classroom to ensure every student has successfully created and linked their `zero-hunger-week1` remote repository.
*   [ ] Verify that no student has committed `node_modules` into their repository history.
*   [ ] Check that students can perform basic branch checkouts and merges without typing syntax errors.
*   [ ] Conduct a quick final wrap-up to congratulate students on completing Week 1 of the MERN bootcamp.

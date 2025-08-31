# Ayo Afolalu – Build & Test Technical Challenge

This repository contains the **Build & Test** technical challenge completed by **Ayo Afolalu**. 
The goal is to create a trivial web application with a button, write a test to verify its functionality, and configure **CircleCI** to automatically build and test the application.

---

## Challenge Requirements

The task was to:

1. Create a trivial web application with:
   - A **single page**.
   - A **button** that, when clicked, displays some new text.
2. Write an **automated test** to ensure that the new text appears when the button is clicked.
3. Push the project to a **public GitHub repo**.
4. Configure **CircleCI** to:
   - Build the application.
   - Run the tests automatically.
   - Show a green build with tests passing.
5. Provide the **CircleCI build URL** as proof of success.

---

##  Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (included with Node.js)

---

## The Application

The application is a single HTML page:

- Displays a button.
- When clicked, the button reveals new text on the page using simple **JavaScript DOM manipulation**.

You can open it directly in your browser:
ClickButton.html

---
## Testing
Testing is handled by Jest.

The test (app.test.js) verifies that:

Initially, the new text is not visible.

After simulating a button click, the new text appears in the DOM.

Run the test suite locally with:
npm install
npm test

---

## Continuous Integration (CircleCI)

This repo is integrated with CircleCI.
The .circleci/config.yml file defines a pipeline that:

Installs dependencies.

Runs the Jest test suite.

Passes the build if all tests succeed.

CircleCI Build URL: https://app.circleci.com/pipelines/circleci/DVucNYV7Ajvye366JDdrCG/7daceH8AsHxQHC2YyxmPM1/4/workflows/01c80323-cb87-426b-8169-fbab7ac59181/jobs/4/parallel-runs/0?invite=true#step-105-0_0 

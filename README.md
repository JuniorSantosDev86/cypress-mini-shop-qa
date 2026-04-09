# Cypress Mini Shop – QA Automation Project

This project is an end-to-end (E2E) testing suite built with **Cypress** for a sample React application called **Mini Shop**.

It demonstrates real-world QA practices including authentication testing, session handling, network interception, flaky test analysis, and professional reporting.

---

## Tech Stack

- Cypress
- JavaScript (ES6)
- Mochawesome Reporter
- Node.js

---

## Project Structure


cypress/
├── e2e/
│ ├── auth/
│ │ ├── login-fixture.cy.js
│ │ └── login-env.cy.js
│ ├── dashboard/
│ │ └── dashboard-intercept.cy.js
│ ├── session/
│ │ └── dashboard-session.cy.js
│ └── flaky/
│ ├── dashboard-flaky.cy.js
│ └── dashboard-flaky-fixed.cy.js
├── fixtures/
│ └── user.json
└── support/
├── commands.js
└── e2e.js


---

##  Features Implemented

###  Custom Commands
Reusable login command:
```js
cy.login(email, password)
✅ Fixture-Based Testing
Uses user.json for test data
Improves reusability and test readability
✅ Environment Variables
Credentials stored using Cypress.env()
Keeps sensitive data configurable
✅ Session Management
Uses cy.session() to cache authentication
Reduces test execution time and redundancy
✅ Network Interception
Uses cy.intercept() to spy/mock requests
Demonstrates API control and test isolation
✅ Flaky Test Simulation & Fix
Created intentionally unstable test
Fixed using proper Cypress retry logic (should())
✅ Test Reporting
Integrated Mochawesome
Generates HTML reports after test execution

Example report:

cypress/reports/html/index.html
▶Running the Project
1. Install dependencies
npm install
2. Start the React app
npm start
3. Run Cypress UI
npx cypress open
4. Run tests in headless mode with report
npm run cy:report
 Test Coverage Overview
Area	Covered
Login	✅
Dashboard	✅
Session	✅
API Intercept	✅
Flaky Handling	✅
🧠 Key QA Concepts Demonstrated
Test modularization
DRY principles with custom commands
Data-driven testing (fixtures)
Environment-based configuration
State management with sessions
Network control with intercept
Flaky test debugging and stabilization
Automated reporting
Project Purpose

This project was built as part of a QA learning journey to simulate real-world automation scenarios and demonstrate practical testing skills using Cypress.

👨‍💻 Author

Junior Santos
QA Engineer  | Cypress | Test Automation
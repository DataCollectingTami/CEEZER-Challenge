# Technical Challenge for QA: E2E Testing with Cypress

This repository contains my solution to the QA technical challenge with CEEZER. The challenge is to write and execute e2e tests for the signup flow in Ceezer's staging environment.  

## Getting Started
### Tech Stack
- **Javascript**
- **Cypress**: For E2E testing
- **Mochawesome**: For generating test reports
- **Cypress-axe**: For accessibility testing


### 1. Clone the Repository

Clone the repository to your local machine and install dependencies (package-lock.json and package.json included):

```bash
git clone https://github.com/DataCollectingTami/CEEZER-Challenge.git
cd your-repo
npm install
```

### 2. Run Tests
#### Using Cypress dashboard 
```bash
npx cypress open
```
#### From the command line &rarr; this also generate mochawesome reports
```bash
npx cypress run
```

## Test Structure Overview
### Test Files
Test files can be found in /cypress/e2e/
#### 1. SignupFlow.cy.js
Contains the complete flow &rarr; Happy path
#### 2. SignupPage.cy.js
Contains functionality tests for:
##### Valid actions
- Buyer/Supplier Toggle
- Navigation to Login page
- Back button
##### Invalid Actions / Validations
- Validates email field for wrong format
- Validates email field for personal emails
- Validates that fields cannot be empty
#### 3. SignupServerErrors.cy.js
- Handles 500 error on signup attempt
- Displays placeholder text when countries endpoint fails
- Checks loading state for slow signup request
#### 4. SignupAlly.cy.js
Logs all accessibility violations on Page 1 and Page 2 of signup process in a local report in the folder /Ally Reports/
### Other Important Files
#### SignupData.json 
It can be found in /fixtures/. It contain valid signup data used in the flow tests
#### Signup.js 
Contains the elements of the singup pages
### Reports
- Every test run generates reports in the folder /reports/
- The folder /mochawesome-report/ contains the merged-report.html which shows all test results in one file. To compiple a merged report:
```bash
npm run merge-reports
```

## Assumptions / Considerations
- I separated different types of tests in different files for simplicity
- I focused on showcasing different strategies and using as many cypress features are possible rather than writing consistent and most efficient tests
- I did not set up different viewport sizes but did write the tests to pass in all devices sizes
- I used text to select certain elements for simplicity (though it is bad practice)

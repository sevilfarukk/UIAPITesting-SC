## Installation

- Start by cloning this repository to your local machine
- Navigate to the project directory in your terminal
- Install dependencies by executing the command npm init playwright@latest

Alternatively, if you're using VS Code:

- Clone this repository into VS Code
- Install dependencies by executing the command npm init playwright@latest

## Running Tests Locally
To run tests locally, execute the following command in the VS Code terminal:

- npx playwright test

Note: This command executes all test cases, including both UI and API tests

For manual execution:

- Install the Playwright extension in VS Code
- Open the test file and click the Run button

## Test Report

- Upon each local test execution, a test report in HTML format will be automatically generated
- After each execution of the GitHub Action workflows, it will generate a test report as well

## CI/CD
This repository utilizes GitHub Actions for Continuous Integration (CI). Every push triggers the test suite to maintain codebase integrity. Additionally, tests run three times daily

To manually trigger the workflow:
- Navigate to the Actions tab
- Initiate the workflow from there
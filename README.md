# playwright-random-calendar-date-generator
Playwright tests for Random Calendar Date Generator

This repository contains an automated testing suite using [Playwright](https://playwright.dev/) for end-to-end (E2E) testing of web application [RANDON.ORG](https://www.random.org/calendar-dates). The tests are written in JavaScript following the Page Object Model (POM) design pattern to ensure scalability and maintainability.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Cloning the repository and running tests](#cloning-the-repository-and-running-tests)

## Project Overview

This project automates the testing of web applications by simulating user interactions and validating outcomes. It is designed to help developers and QA engineers verify that features behave as expected across different browsers and devices.

### Features
- Supports Chrome, Firefox, and WebKit browsers.
- Automated cross-browser testing.
- Parallel test execution.
- Page Object Model (POM) design pattern.
- Generates detailed test reports.

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js**: v22.7.0 or higher.
- **npm**: v10.8.2 or higher.
- **Playwright**: Installed as part of the dependencies.

### Browser Dependencies

Playwright installs the necessary [browser](https://playwright.dev/docs/browsers#configure-browsers) binaries automatically, so no additional browser setup is required.

## Cloning the repository and running tests

1. ### Clone repository
    ```bash
        git clone https://github.com/leoanjossantos/playwright-random-calendar-date-generator.git

2. ### Go to project folder
    ```bash
        cd playwright-random-calendar-date-generator
3. ### Install dependencies
    ```bash
        npm install
4.  ### Running tests:
    ```bash
        npm run e2e-tests // custom command from package.json
    ```
    Other possibilities:
    ```bash
        npx playwright test   // all tests
        npx playwright test --project=chromium  // chromium specific browser
        npx playwright test --project=firefox  // firefox specific browser
        npx playwright test --project=webkit  // webkit specific browser

        npx playwright test --headed  // open the browser
        npx playwright test tests/randomDatesGenerator.spec.js  // all tests in this file
5. ### Open report
    ```bash
        npx playwright show-report
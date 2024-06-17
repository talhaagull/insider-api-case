# Insider API Case

This project is an API automation framework using Cypress and Cypress Mochawesome Reporter. The framework is designed to test CRUD operations on the "pet" endpoints from [Swagger Petstore](https://petstore.swagger.io/) with both positive and negative scenarios.


## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/talhaagull/insider-api-case.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd insider-api-case
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

4. **Run the tests:**
    ```bash
    npm run test
    ```

5. **View the test report:**
    ```bash
    npm run open-report
    ```

## Services and Tests

### Services

All API services are written in the `PetApi.js` file located in the `cypress/e2e/services` directory. This file contains the methods to interact with the "pet" endpoints.

### Tests

Individual test files for each CRUD operation are located in the `cypress/e2e/tests` directory. Each test file includes both positive and negative test scenarios.

- **Create Pet Test (`createPet.cy.js`):** Tests the creation of a pet with both valid and invalid data.
- **Delete Pet Test (`deletePet.cy.js`):** Tests the deletion of a pet using valid and invalid IDs.
- **Get Pet By ID Test (`getPetById.cy.js`):** Tests the retrieval of pet information using valid and invalid IDs.
- **Get Pet By Status Test (`getPetByStatus.cy.js`):** Tests the retrieval of pets based on their status with valid and invalid statuses.
- **Post Image Test (`postImage.cy.js`):** Tests uploading an image to a pet with both valid and invalid data.
- **Update Pet Test (`updatePet.cy.js`):** Tests updating pet information with both valid and invalid data.

## Reporting

The project uses `cypress-mochawesome-reporter` for generating test reports. After running the tests, you can view the report by running:

```bash
npm run open-report

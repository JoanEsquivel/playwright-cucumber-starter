
# Playwright with Cucumber
The goal of this project is to setup a baseline project to start using Playwright with Cucumber. I will describe the steps to setup the project and the steps to run the tests. Also some guidelines to follow to make the project more maintainable.

## Prerequisites
- Node.js
- Visual Studio Code / Cursor / Webstorm / IntelliJ IDEA
- If using vscode install the extensions:
    - Cucumber
    - Playwright

## Setup the project

1. Create a new directory for the project.
2. Initialize a new Node.js project using ```npm init -f```.
3. Install Playwright using ```npm init playwright@latest```.
4. Install Cucumber using ```npm install -D @cucumber/cucumber```.
5. Install ts node using ```npm install -D ts-node```.
6. Create the folders to manage features and steps: 
    - Delete folder ``` playwright.config.ts, tests & tests-examples```
    - Create folder ```src/tests/features```
    - Create folder ```src/tests/step-definitions```
6. Let's create a new feature file:
    - Create file ```src/tests/features/login.feature```
    - Add the following content to the file:
    ```
    Feature: Login
     Feature Login page will work depending on the user credentials.

    Scenario: Sucess Login
    Given A web browser is at the saucelabs login page
    ```
7. Create a tsconfig.json file to configure the project:
    ```
        {
        "compilerOptions": {
            "target": "ES2020",
            "module": "CommonJS",
            "strict": true,
            "esModuleInterop": true,
            "outDir": "dist"
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules"]
        }
    ```
8. Create a cucumber.json file to configure the project:
    ```
    {
        "default": {
            "paths":[
                "src/tests/features"
            ], 
            "dry-run": false,
            "formatOptions": {
                "colorsEnabled": true,
                "snippetInterface": "async-await"
            },
            "require": [
                "src/tests/step-definitions/*.ts"
            ],
            "requireModule": [
                "ts-node/register"
            ]
        }
    }

9. Create a step definition file:
    - Create file ```src/tests/step-definitions/login.ts```
    - Add the following content to the file:
    ```
    import {
        Given,
        When,
        Then,
    } from "@cucumber/cucumber";

    Given('A web browser is at the saucelabs login page', async function () {
        console.log('Test')
    });
    ```
9. Create a script in the package.json file to run the tests:
    ```
    "cucumber": "cucumber-js test"
    ```

10. Run the tests using ```npm run cucumber```

11. The output should be:
    ```
    Test
    ``` 

12. Setup in your code editor the following settings (settings.json)
```
"cucumber.features": [
    "src/tests/features/*.feature",
],
"cucumber.glue": [
    "src/tests/step-definitions/*.ts"
]
```




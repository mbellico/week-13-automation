# "Become a QA Automation - Week-13: Automation"

## What is the Project about?
Using WebDriver IO to design automated UI tests for [Google](https://www.google.com/) and [Wikipedia](https://es.wikipedia.org/) web sites.-

## Author: 
[Melisa D. Bellico](https://www.linkedin.com/in/melisabellico/) 

## Technology stack
* [Node.js](https://nodejs.org/es/docs/).-
* [WebDriver IO](https://webdriver.io/docs/gettingstarted) for automated testing.-
* Google chrome is preferred.-
* [Visual Studio Code](https://code.visualstudio.com/) or any other code editor is required.-

## How to install?  (you should use the following commands, either on the git or on the VS console)
* $ npm install
* $ npm init to create a package.Json
* $npm install @wdio/cli
* $npx wdio config

    *The package.Json should contain the following script:*

      "scripts": {
        "test": "npx wdio run ./wdio.conf.js"
      },

## Running the tests:

To run the test, use the command **npm run test** 

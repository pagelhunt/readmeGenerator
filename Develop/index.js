const fs = require("fs");
const inquirer = require("inquirer");
const api = require('./utils/api');

inquirer.prompt(
    [
        {
            type: "input",
            name: "title",
            message: "Input title of project."
        },
        {
           type: "input",
           name: "description",
           message: "Enter project description."
        },
        {
            type: "input",
            name:
        }
    ]
)

function writeToFile(fileName, data) {
    fs.writeFile()
}

function init() {

}

init();

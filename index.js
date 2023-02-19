const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of objects containing type, name and question
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project Title?"
    },
    {
        type: "input",
        name: "description",
        message: "Project description?"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github username"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter email address",
        validate: function (email) {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: "input",
        name: "installCmd",
        message: "What command installs the project for the user?"
    },
    {
        type: "input",
        name: "runCmd",
        message: "What command runs the project for the user?"
    },
    {
        type: "input",
        name: "testCmd",
        message: "What command tests the project?"
    },
    {
        type: "input",
        name: "operate",
        message: "How does the user operate the application when it is running?"
    },
    {
        type: "list",
        name: "licence",
        message: "What licence is used for the application?",
        choices: ["Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The F*ck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License family", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License family", "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License", "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "PostgreSQL License", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"],
        filter(val) {
            return val;
        },
    },
    {
        type: "input",
        name: "contribution",
        message: "Who else has contributed and what did they do?"
    },
];

// function to write README file
function writeToFile(fileName = "ReadMe.md", text) {
    fs.writeFile(fileName, text, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markedDown = generateMarkdown(answers);
        const text = (Object.values(markedDown)).join("");
        console.log(text);
        let current = path.resolve();
        fs.mkdir(`./generated`, { recursive: true }, (err) => {
            if (err) throw err;
        });
        writeToFile(`./generated/README.md`, text);
    });
}
init();
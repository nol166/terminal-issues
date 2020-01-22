const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');


let questions = [{
    type: 'input',
    name: 'org',
    message: `What is the name of the Github organization? (Ex: https://github.com/${chalk.red("microsoft")}/vscode)`,
    default: 'microsoft'
},
{
    type: 'input',
    name: 'repo',
    message: `What is the name of the Github repository? (Ex: https://github.com/microsoft/${chalk.red("vscode")}`,
    default: 'vscode'
},
{
    type: 'checkbox',
    message: 'Would you like to save this repository?',
    name: 'save',
    choices: [
        {
            name: 'Yes'
        },
        {
            name: 'No'
        },
    ],
}]

module.exports = () => {
    console.log('Hi, welcome to Git Issues');
    inquirer
        .prompt(questions)
        .then(answers => {
            let queryURL = `https://api.github.com/repos/${answers.org}/${answers.repo}/issues`
            if (answers.save.length === 0) {
                answers.save = ['No']
            }

            if (answers.save[0] === 'Yes') {
                fs.readFile('repos.json', (data) => {
                    var json = JSON.parse(data)
                    if (json.includes(queryURL)) {
                        console.log("Repository is a duplicate, not saving")
                        return
                    }
                    json.push(queryURL)

                    fs.writeFile("repos.json", JSON.stringify(json), err => {
                        if (err) {
                            console.log("Save error", err)
                        }
                        console.log("Saved!")
                    })
                })
            }
        });
}
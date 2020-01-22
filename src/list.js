const inquirer = require('inquirer');
const fs = require('fs');
const grab = require('./grab');


let repos = []

module.exports = () => {
    fs.readFile('repos.json', (err, data) => {
        if (err) {
            console.log(err)
        }
        var json = JSON.parse(data)
        json.forEach(repo => {
            repos.push(repo.repo)
        });
        inquirer
            .prompt({ type: 'list', name: 'repoChoice', message: 'Choose saved repo', choices: repos })
            .then(function (choice) {
                console.log(choice)
                // grab.grabIssues(choice.repoChoice)
            })
    })
}


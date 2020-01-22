const inquirer = require('inquirer');
const fs = require('fs');

let repos = []


module.exports = () => {
    fs.readFile('repos.json', function (err, data) {
        var json = JSON.parse(data)
        json.forEach(repo => {
            repos.push("Name: " + repo)
        });
        inquirer
            .prompt({ type: 'list', name: 'repoChoice', message: 'Choose saved repo', choices: repos })
            .then(function (answers) {
                // call make API request
            })
    })
}


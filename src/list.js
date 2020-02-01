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
                let chosenRepo = choice.repoChoice

                for (let i = 0; i < json.length; i++) {
                    let repoName = json[i].repo
                    let repoOrg = json[i].organization
                    if (chosenRepo === repoName) {
                        grab.grabIssues(repoOrg, repoName)
                    }
                }
            })
    })
}


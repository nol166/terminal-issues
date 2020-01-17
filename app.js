const https = require('https');
const cli = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
// const queryURL = "https://api.github.com/repos/pi-hole/pi-hole/issues";

console.log('Hi, welcome to Git Issues');
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

]
inquirer
    .prompt(questions)
    .then(answers => {
        let queryURL = `https://api.github.com/repos/${answers.org}/${answers.repo}/issues`
        console.log(queryURL)
    });








// cli
//     .description('get issues for a specific repository')
//     .option('-a', '--add', 'add a repository')
//     .option('-l', '--list', 'list saved repositories')
//     .option('-f', '--format', 'modify formatting options')
//     .option('-g', '--get <organiztion> <repository>', 'get issues for a specific repository', 'github name', 'repository name')

// cli.parse(process.argv)

// if (cli.add) console.log(cli.add());
// if (cli.list) console.log('- list');
// if (cli.format) console.log(`- format`);
// if (cli.get) console.log(`- get issues`);


// https.get('https://encrypted.google.com/', (res) => {
//     console.log('statusCode:', res.statusCode);
//     console.log('headers:', res.headers);

//     res.on('data', (d) => {
//         process.stdout.write(d);
//     });

// }).on('error', (e) => {
//     console.error(e);
// });
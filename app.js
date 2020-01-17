const cli = require('commander');
const add = require('./src/add');


cli
    .command('add') // sub-command name
    .alias('a') // alternative sub-command is `al`
    .description('add a repository') // command description

    // function to execute when command is uses
    .action(function () {
        add();
    });

// .description('get issues for a specific repository')
// .option('-a', '--add', 'add a repository')
// .option('-l', '--list', 'list saved repositories')
// .option('-f', '--format', 'modify formatting options')
// .option('-g', '--get <organiztion> <repository>', 'get issues for a specific repository', 'github name', 'repository name')

cli.parse(process.argv)

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
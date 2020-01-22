const cli = require('commander');
const add = require('./src/add');
const list = require('./src/list');


cli
    .command('add') // sub-command name
    .alias('a') // alternative sub-command is `al`
    .description('add a repository') // command description
    .action(() => add());  // function to execute when command is uses

cli
    .command('list')
    .alias('l')
    .description('list saved repositories')
    .action(() => list())

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
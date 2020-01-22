const cli = require('commander');
const add = require('./src/add');
const list = require('./src/list');
const grab = require('./src/grab');


cli
    .command('add') // sub-command name
    .alias('a') // alternative sub-command is `a`
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



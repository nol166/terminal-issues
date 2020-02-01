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

cli
    .command('grab <organization> <repository>')
    .alias('g')
    .description('get issues for a specific repository')
    .action(() => grab.grabIssues(process.argv[3], process.argv[4]))

cli.parse(process.argv)



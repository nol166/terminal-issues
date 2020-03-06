const cli = require('commander');
const figlet = require('figlet')
const add = require('./src/add');
const list = require('./src/list');
const grab = require('./src/grab');
const pulls = require('./src/pulls');
var clear = require('clear');


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

// cli
//     .command('pulls')
//     .alias('p')
//     .description('list open pull requests for a specific repo')
//     .action(() => pulls())

cli
    .command('grab <organization> <repository>')
    .alias('g')
    .description('get issues for a specific repository')
    .action(() => grab.grabIssues(process.argv[3], process.argv[4]))

if (!process.argv[2]) {
    clear()
    figlet('Terminal Issues', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
        cli.help();
    });
}

cli.parse(process.argv)



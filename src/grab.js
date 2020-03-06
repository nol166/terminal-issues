const https = require('https');
const chalk = require('chalk');
const clear = require('clear')

function grabIssues(org, repo) {
    let options = {
        hostname: 'api.github.com',
        port: 443,
        headers: {
            'User-agent': 'terminal-isssues'
        },
        path: `/repos/${org}/${repo}/issues`,
        method: 'GET'
    }

    https.get(options, (res) => {
        let chunks = []

        res.on('data', (d) => {
            // push data into an array
            chunks.push(d)
        }).on('end', () => {
            clear()
            let data = Buffer.concat(chunks);
            let results = JSON.parse(data);
            for (let i = 0; i < results.length; i++) {
                let issue = results[i]
                let issueData = {
                    title: issue.title,
                    submitter: issue.user.login,
                    link: issue.html_url,
                    created: issue.created_at,
                    state: issue.state
                }
                let output = issueData.title + " (" + chalk.red(issueData.link) + ")"
                console.log(output)
            }
        }).on('error', (e) => {
            console.error(e);
        })
    })
}

module.exports = { grabIssues }

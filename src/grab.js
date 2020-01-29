const https = require('https');

function grabIssues(org, repo) {
    let options = {
        hostname: 'api.github.com',
        port: 443,
        headers: {
            'User-agent': 'terminal-isssues'
        },
        path: '/repos/' + org + '/' + repo + "/issues",
        method: 'GET'
    }

    https.get(options, (res) => {
        // console.log('statusCode:', res.statusCode);
        // console.log('headers:', res.headers);
        // console.log('headers:', res.data);
        let chunks = []

        res.on('data', (d) => {
            // push data into an array
            chunks.push(d)
        }).on('end', () => {
            let data = Buffer.concat(chunks);
            let results = JSON.parse(data);
            let issues = [];
            // console.log(results)
            for (let i = 0; i < results.length; i++) {
                let issue = results[i]
                let issueData = {
                    title: issue.title,
                    submitter: issue.user.login,
                    url: issue.html_url,
                    created: issue.created_at,
                    state: issue.state
                }
                newArr.push(issueData)
                console.log(issueData.title, issueData.state)
            }
        }).on('error', (e) => {
            console.error(e);
        })
    })
}

module.exports = { grabIssues }


let newArr = []


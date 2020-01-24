const https = require('https');



function grabIssues(org, repo) {
    let options = {
        hostname: 'api.github.com',
        port: 443,
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'User-agent': 'terminal isssues CLI'
        },
        path: '/repos/' + org + '/' + repo,
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
            console.log(results)
        }).on('error', (e) => {
            console.error(e);
        })
    })
}

module.exports = { grabIssues }
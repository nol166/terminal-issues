const https = require('https');
const moment = require('moment');
const chalk = require('chalk');
const clear = require('clear');

const pulls = (org, repo) => {
    let options = {
        hostname: 'api.github.com',
        port: 443,
        headers: {
            'User-agent': 'terminal-isssues'
        },
        path: '/repos/' + org + '/' + repo + "/pulls",
        method: 'GET'
    }

    https.get(options, (res) => {
        let chunks = []

        res.on('data', d => {
            chunks.push(d)
        }).on('end', () => {
            let data = Buffer.concat(chunks);
            let results = JSON.parse(data);

            for (let i = 0; i < results.length; i++) {
                const pullData = results[i];
                let pull = {
                    title: pullData.title,
                    number: pullData.number,
                    state: pullData.state,
                    user: pullData.user.login,
                    created: pullData.created_at,
                    updated: pullData.updated_at,
                    branch: pullData.base.ref
                }
                console.log(pull)
            }
        }).on('error', (e) => {
            console.error(e);
        })
    })
}

pulls("pi-hole", "pi-hole")

module.exports = { pulls: pulls }
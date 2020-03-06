const https = require('https');
const moment = require('moment');
const chalk = require('chalk');

const pulls = (org, repo) => {
    let options = {
        hostname: 'api.github.com',
        port: 443,
        headers: {
            'User-agent': 'terminal-isssues'
        },
        path: `/repos/${org}/${repo}/pulls`,
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
                    branch: pullData.base.ref
                }
                pull.created_at = moment(pullData.created_at).format('MMMM Do YYYY, h:mm:ss a')
                pull.updated_at = moment(pullData.updated_at).format('MMMM Do YYYY, h:mm:ss a')

                console.log(pull)
            }
        }).on('error', (e) => {
            console.error(e);
        })
    })
}


module.exports = { pulls }
const app = require('express')();
const semver = require('semver');
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
    const current_version = req.query['current_version'];
    const increment = req.query['increment'];
    if ( current_version === '' || increment === '' ) {
        res.status(400);
        res.end();
        return;
    }

    const version = semver.inc(current_version, increment);
    console.log(version, current_version, increment)

    res.send(version);
});

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

module.exports = app

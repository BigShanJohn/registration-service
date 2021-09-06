const express = require('express');
const bodyParser = require('body-parser');
const api = require('../api/route');

const start = (options) => {
    return new Promise((resolve, reject) => {
        if (!options.port) {
            reject(new Error('The server must be started with an available port'));
        }

        const app = express();

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use((err, req, res, next) => {
            reject(new Error('Something went wrong!, err:' + err));
            res.status(500).send('Something went wrong!');
        });

        app.set('client', options.client);

        api(app);

        const server = app.listen(options.port, () => resolve(server));
    })
}

module.exports = Object.assign({}, { start });
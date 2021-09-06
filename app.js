'use strict'
const { EventEmitter } = require('events');
const server = require('./server/server');
const config = require('./config/');
const bodyParser = require('body-parser');
const mediator = new EventEmitter();
require('dotenv').config({ path: __dirname + '/.env' });

console.log('--- Registration Service ---');
console.log('Connecting to Database...');

process.on('uncaughtException', (err) => {
    console.error('Unhandled Exception', err);
})

process.on('uncaughtRejection', (err, promise) => {
    console.error('Unhandled Rejection', err);
})


mediator.on('db.ready', (client) => {
    console.log(`Server started succesfully, running on port: ${config.serverSettings.port}.`);
    console.log('Connected. Starting Server');

    return server.start({
        port: config.serverSettings.port,
        client: client
    });
})

mediator.on('db.error', (err) => {
    console.error(err)
})

config.db.connect(config.dbSettings, mediator);

mediator.emit('boot.ready');
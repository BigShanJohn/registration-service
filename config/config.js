const ck = require('ckey');

const dbSettings = Object.freeze({
    port: ck.DB_PORT,
    host: ck.DB_SERVER,
});

const serverSettings = Object.freeze({
    port: ck.HOST_PORT
});

module.exports = Object.assign({}, { dbSettings, serverSettings })
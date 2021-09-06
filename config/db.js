const redis = require('redis');

const connect = (options, mediator) => {
    var client = redis.createClient(options.port, options.host);

    mediator.once('boot.ready', () => {
        client.on('connect', () => {
            mediator.emit('db.ready', client);
        });
        client.on("error", (err) => {
            mediator.emit('db.error', err);
        });
    })
}

module.exports = Object.assign({}, { connect });
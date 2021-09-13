const Redis = require("ioredis");

const connect = (options, mediator) => {
    const client = new Redis(options.port, options.host);
    mediator.once('boot.ready', () => {
        mediator.emit('db.ready', client);
    })
}

module.exports = Object.assign({}, { connect });
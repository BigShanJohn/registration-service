const { dbSettings, serverSettings } = require('./config')
const db = require('./db')

module.exports = Object.assign({}, { dbSettings, serverSettings, db })
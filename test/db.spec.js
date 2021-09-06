/* eslint-env mocha */
const { EventEmitter } = require('events');
const test = require('assert');
const db = require('../config/db');
const { dbSettings } = require('../config/config');

describe('Redis Connection', () => {
    it('should emit db Object with an EventEmitter', (done) => {
        const mediator = new EventEmitter();

        mediator.on('db.ready', (db) => {
            should.exist(db);
            done();
        })

        mediator.on('db.error', (err) => {
            console.log(err);
            done();
        })

        db.connect(dbSettings, mediator)

        mediator.emit('boot.ready')
    })
})
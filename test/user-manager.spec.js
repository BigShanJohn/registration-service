/* eslint-env mocha */
const should = require('should')
const Usermanager = require('../managers/user-manager')

describe('User Manager', () => {
    it('should connect with a promise', () => {
        Usermanager.add(null, null).should.be.a.Promise()
    })
})
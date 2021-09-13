/* eslint-env mocha */
const should = require('should')
const Redis = require("ioredis");
const client = new Redis();
const Usermanager = require('../managers/user-manager')

describe('User Manager', () => {
    it('should connect with a promise', () => {
        Usermanager.add(null, null).should.be.a.Promise()
    });

    it('should return a Promise that resolves the returned value', () => {
        let testUser = {
            email: 'segun.adeniji08@gmail.com',
            fullname: 'Adeniji Olusegun',
            password: '12345678',
            dateCreated: '2021-09-08 12:30:30'
        };
        Usermanager.add(testUser, client).then((reply) => expect(reply).toEqual(['OK']));
    });
})
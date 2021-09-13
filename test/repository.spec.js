const should = require('should');
const Redis = require("ioredis");
const client = new Redis();
const UserRepository = require('../repositories/user-repository');

describe('Repository', () => {
    it('should connect with a promise', () => {
        UserRepository.checkRecord(null, null).should.be.a.Promise();

    });
    it('should return a Promise that resolves the returned value', () => {
        testEmail = 'test@test.com';
        UserRepository.checkRecord(testEmail, client).then((reply) => expect(reply).toEqual(['OK']));
    });
});
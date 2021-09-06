const should = require('should')
const UserRepository = require('../repositories/user-repository')

describe('Repository', () => {
    it('should connect with a promise', () => {
        UserRepository.getOne(null, null).should.be.a.Promise()
    })
});
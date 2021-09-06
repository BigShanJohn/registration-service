const supertest = require("supertest");
const should = require("should");
const status = require('http-status');

var server = supertest.agent("http://127.0.0.1:9000");


describe("Registration API", function() {


    it("It should add or have record in db  when passing valid input data", function(done) {
        let userRequest = {
            email: 'segun.adeniji08@gmail.com',
            fullname: 'Adeniji Olusegun',
            password: '12345678'
        };
        server
            .post('/register')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(userRequest)
            .expect(200)
            .end((err, res) => {
                res.status.should.equal(200);
                done();
            });
    });


    it("It should throw validating error  when passing invalid input data", function(done) {
        let userRequest = {
            fullname: '',
            email: 'segun',
            password: ''
        };
        server
            .post('/register')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send(userRequest)
            .expect(412)
            .end((err, res) => {
                res.status.should.equal(412);
                res.body.success.should.equal(false);
                done();
            });
    });

});
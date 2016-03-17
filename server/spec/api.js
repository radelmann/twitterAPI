var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var app = require('../server.js');

describe("ingiegogo api - Server - REST API Routes", function() {

  describe('/api/get', function() {

    describe('GET', function() {

      it('responds with a 200 (successful) and the json array of returned data from the twitter api for the given user', function(done) {

        request(app)
          .get('/api/get/bobman10')
          .expect(function(res) {
            expect(res.body).to.exist;
            var body = JSON.parse(res.body);
            expect(body).to.be.array;
          })
          .expect(200, done);
      });

    });
  });
});
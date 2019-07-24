

import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../index';

import status from '../constants/StatusCode';

const { expect } = chai;

chai.use(chaiHttp);

// Test if the server is listening
describe('Server receiving and responding to the request', () => {
  it('it should have 200 as status code', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(status.REQUEST_SUCCEDED);
        done();
      });
  });
});

// Test for get all trips
describe('/GET Trips', () => {
  it('It should GET all trips', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .set('accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(status.REQUEST_SUCCEDED);
        expect(res.body).to.be.an('array');

        done();
      });
  });
});

import request from 'supertest';

describe('GET /', () => {
  it('should return 200 OK', done => {
    request('http://localhost:3000')
      .get('/')
      // .type('form')
      // .set('Accept', 'application/json')
      .send({ query: '{ Users{ id email } }' })
      .expect(200, done);
  });
});

const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');
var expect = require('chai').expect;

const query = {
  name: 'John',
  age: '31',
  city: 'New York'
};


describe('First Web Tests', () => {

// CONSUMIENDO EL PORTAL AIK  
  it('Consume GET Service', async () => {
    const response = await agent.get('http://localhost:3030/experience');
  
    expect(response.status).to.equal(statusCode.OK);
   
  });
  
// CONSUMIENDO LOS HEADERS DEL GET
  it('Consume GET Service with headers parameters', async () => {
    const response = await agent.get('http://localhost:3030/experience');
    
    expect(response.status).to.equal(statusCode.OK);
    expect(response.headers).to.have.property('x-powered-by');
    expect(response.headers).to.have.property('content-type');
    expect(response.headers).to.have.property('content-length');
    expect(response.headers).to.have.property('etag');
    expect(response.headers).to.have.property('date');
    expect(response.headers).to.have.property('connection');

  });
  
// CONSUMIENDO EL BODY, EL OBJETIVO DE ESTA PRUEBA ES VER LA INTEGRIDAD DE LOS DATOS
  it('Consume GET Service with body parameters', async () => {
    const response = await agent.get('http://localhost:3030/experience');
    
    expect(response.status).to.equal(statusCode.OK);
    expect(response.text).to.have.contains('Doctor Strange');


  });
});

import app from '../index';
import supertest from 'supertest';
const check = supertest(app);

describe('testing the main route ', (): void => {

  it('testing done sucessfully',
   async ()  => {
    const mainroute = await check.get('/');
    expect(mainroute.status).toBe(200);
  });
}); 


import app from '../index';
import supertest from 'supertest';
const check = supertest(app);
describe(' image  testing .... ', () => {
  it('there is no data ',
   async () => {
    const inputs = await check.get('/image');
    expect(inputs.status).toBe(400);
    expect(inputs.text).toBe('you should enter file name,width,height');
  });
});

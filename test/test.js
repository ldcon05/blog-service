import { script } from 'lab';
import { expect } from 'code';
import { server } from '../server';

const { describe, it } = exports.lab = script();

describe('inject requests with server.inject,', () => {
  it('GET /', async () => {
    const injectOptions = {
      method: 'GET',
      url: '/',
    };

    const response = await server.inject(injectOptions);
    expect(response.statusCode).to.equal(200);
  });

  it('GET /hello', async () => {
    const injectOptions = {
      method: 'GET',
      url: '/hello',
    };

    const response = await server.inject(injectOptions);
    expect(response.statusCode).to.equal(404);
  });
});

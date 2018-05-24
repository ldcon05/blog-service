import Hapi from 'hapi';
import mongoose from 'mongoose';

const server = Hapi.server({
  host: 'localhost',
  port: 8000,
});

mongoose.connect('mongodb://ldcon05:daniel123@ds129560.mlab.com:29560/ldconblog');
const db = mongoose.connection;

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => h.response('Hello World').state(200),
});


// Start the server
async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
}

db
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', () => {
    start();
  });

export default server;

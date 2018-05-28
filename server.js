import Hapi from 'hapi';
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi';
import { port } from './config/config';
import schema from './graphql/executableSchema';
import addPlugins from './routes/pluginsHapi';

const server = Hapi.server({
  host: 'localhost',
  port,
});

addPlugins(server, graphqlHapi, graphiqlHapi, schema);

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
}


export { server, start };

import { makeExecutableSchema } from 'graphql-tools';
import blog from './models/blog.graphql';
import rootQuery from './queries/rootQuery';
import rootMutation from './mutations/rootMutation';
import schema from './schema';
import resolvers from './resolvers/rootResolver';

export default makeExecutableSchema({
  typeDefs: [
    schema, rootQuery, rootMutation, ...blog,
  ],
  resolvers,
});

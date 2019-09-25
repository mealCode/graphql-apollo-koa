import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './typeDefs';
import resolvers from './resolvers';
import db from './db';

const schema = makeExecutableSchema({
    typeDefs, 
    resolvers
})
const server = new ApolloServer({ 
    schema, 
    context: {
        db
    }
});
 
const app = new Koa();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 || process.env.PORT }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`),
);
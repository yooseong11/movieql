import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { createGraphQLServer } from "graphql-yoga";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      ping: {
        type: GraphQLString,
        resolve: () => "pong",
      },
    }),
  }),
});
// Provide your schema
const server = createGraphQLServer({
  schema,
  isDev: process.env.NODE_ENV !== "production",
});
// Start the server and explore http://localhost:4000/graphql
server.start();
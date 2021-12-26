import { createGraphQLServer } from "graphql-yoga";
import { getMovies, getById, addMovie, deleteMovie } from "./db.js";

//schema
const typeDefs = `
type Movie {
  id: Int!
  name: String!
  score: Int!
}

type Query {
  movies: [Movie]!
  movie(id: Int!): Movie
}

type Mutation {
  addMovie(name: String!, score: Int!): Movie!
  deleteMovie(id: Int!): Boolean!
}
`;

//resolver
const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

// Provide your schema
const server = createGraphQLServer({
  typeDefs,
  resolvers,
});
// Start the server and explore http://localhost:4000/graphql
server.start(() => console.log("Graphql Server Running"));

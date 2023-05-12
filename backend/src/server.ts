import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define your GraphQL resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// Create the Express app
const app = express();

// Set the Mongoose options
mongoose.set('strictQuery', false);

// Add security middleware
app.use(helmet());

// Add CORS middleware
app.use(cors());

// Create the Apollo Server and start it
(async () => {
  try {
    await mongoose.connect('mongodb://localhost/easy-loop');
    console.log('Connected to MongoDB');

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    // Start the server
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}${server.graphqlPath}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
})();

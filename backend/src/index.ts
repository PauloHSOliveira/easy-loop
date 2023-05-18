import fastify from 'fastify';
import mercurius from 'mercurius';
import mongoose from 'mongoose';
import {resolvers} from './resolvers/auth'
import cors from '@fastify/cors'
// import helmet from 'fastify-helmet';

const app = fastify();

app.register(cors)

app.register(mercurius, {
  schema: `
  type Query {
    hello: String
  }
  
  type User {
    id: ID!
    email: String!
    password: String!
  }
  
  type AuthPayload {
    user: User
    token: String!
  }
  
  input RegisterInput {
    email: String!
    password: String!
  }
  
  input LoginInput {
    email: String!
    password: String!
  }
  
  type Mutation {
    register(input: RegisterInput!): AuthPayload!
    login(input: LoginInput!): AuthPayload!
  }
  
  `,
  resolvers,
  graphiql: true
});

mongoose.connect('mongodb://localhost:27017/my-db').then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// app.register(cors);

// app.register(helmet);

app.listen({
    port: 3333,
    host: '0.0.0.0',
  }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });

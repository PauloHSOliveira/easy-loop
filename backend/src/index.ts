import fastify from 'fastify';
import mercurius from 'mercurius';
import mongoose from 'mongoose';
// import cors from 'fastify-cors';
// import helmet from 'fastify-helmet';

const app = fastify();

app.register(mercurius, {
  schema: `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'world',
    },
  },
});

mongoose.connect('mongodb://localhost:27017/my-db').then(() => {
  console.log('MongoDB connected');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// app.register(cors);

// app.register(helmet);

app.listen({
    port: 3000,
    host: '0.0.0.0',
  }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });

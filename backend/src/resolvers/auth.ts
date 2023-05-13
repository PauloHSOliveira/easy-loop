import { UserModel } from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/*query example

  mutation {
    register(input: { email: "example@example.com", password: "password123" }) {
      token
    }
  }

*/

export const resolvers = {
  Query: {
    hello: () => 'world',
  },
  Mutation: {
    register: async (_, { input }) => {
      try {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        const user = await UserModel.create({
          email: input.email,
          password: hashedPassword,
        });
        return {
          token: jwt.sign({ id: user._id }, 'test'),
        };
      } catch (error) {
        console.error(error);
        throw new Error('Error registering user');
      }
    },
    login: async (_, { input }) => {
      try {
        const user = await UserModel.findOne({ email: input.email });
        if (!user) throw new Error('User not found');
        const isPasswordValid = await bcrypt.compare(input.password, user.password);
        if (!isPasswordValid) throw new Error('Invalid password');
        return {
          user,
          token: jwt.sign({ id: user._id }, 'test'),
        };
      } catch (error) {
        console.error(error);
        throw new Error('Error logging in user');
      }
    },
  },
};

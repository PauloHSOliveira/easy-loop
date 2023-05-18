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

        const userAlreadyExists = await UserModel.findOne({ email : input.email })

        if (userAlreadyExists) {
          throw new Error('User already exists')
        }

        const user = await UserModel.create({
          email: input.email,
          password: hashedPassword,
        });
        return {
          token: jwt.sign({ id: user._id }, 'test'),
        };
      } catch (error) {
        console.error(error);
        throw new Error();
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
        if (error.message === 'User not found') {
          throw new Error('The provided email address does not exist.');
        } else if (error.message === 'Invalid password') {
          throw new Error('The provided password is incorrect.');
        } else {
          throw new Error('An error occurred while logging in.');
        }
      }
    },
  },
};

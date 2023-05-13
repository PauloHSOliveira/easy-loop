import argon2 from 'argon2-browser';

export const hashPassword = async (password: string) => {
  return await argon2.hash({ pass: password, salt: '10' });
};

export const verifyPassword = async (password: string, hash: string) => {
  return await argon2.verify({ pass:password, encoded: hash });
};
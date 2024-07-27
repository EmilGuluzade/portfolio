require('dotenv').config();

module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    'no-unused-vars': process.env.CI ? 'error' : 'warn',
  },
};

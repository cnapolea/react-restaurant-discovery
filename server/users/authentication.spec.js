require('dotenv').config();
const app = require('../server');
const chai = require('chai');
const { mongoose } = require('mongoose');
const expect = chai.expect;
const agent = chai.request.agent(app);

describe('User Authentication', () => {
  before(async (done) => {
    try {
      // Connecting to YummiTestDB
      await mongoose.connect(process.env.MONGODB_URI);
      await mongoose.connection
        .once('open', () => {
          console.log('Connected to DB!!');
        })
        .on('error', (err) => {
          console.warn('Error:', err);
          done(err);
        });
    } catch (error) {
      done(error);
    }
  });
});

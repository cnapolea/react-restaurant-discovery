require('dotenv').config();
const app = require('../server');
const chai = require('chai');

const { mongoose } = require('mongoose');
const { faker } = require('@faker-js/faker');
const { User } = require('../users/model');

const expect = chai.expect;
chai.use(require('chai-http'));
const agent = chai.request.agent(app);
let newUser;

describe('User Authentication', () => {
  before(async (done) => {
    newUser = {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: faker.address.streetAddress(),
      role: 'commonUser'
    };

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

  describe('USER CRUD operations', () => {
    it('should sign up a user', (done) => {
      agent
        .post('/auth/users/sign')
        .send(newUser)
        .then((res) => {
          expect(res.status).to.be.equal(200);
          expect(res.body)
            .to.haveOwnProperty('message')
            .to.be.equal('Signing up a user!');
          return User.findOne({ username: newUser.username });
        })
        .then((user) => {
          expect(user.username).to.equal(newUser.username);
        })
        .catch((err) => {
          done(err);
        });
    });
  });

  after(async (done) => {
    try {
      mongoose.connection.close.once('close', () => {
        console.log('Connection closed!!');
        done();
      });
    } catch (error) {
      done(error);
    }
  });
});

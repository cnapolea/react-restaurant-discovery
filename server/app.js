require('dotenv').config();
const connectMongo = require('connect-mongo');
const session = require('express-session');
const cors = require('cors');
const serveFavicon = require('serve-favicon'); //todo - Implement
const createError = require('create-error');

const express = require('express');
const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true //todo - Read about this
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: false,
      secure: false
    },
    store: connectMongo.create({
      mongoUrl: process.env.MONGODB_URI,
      ttl: 60 * 60
    })
  })
);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ type: 'error', error: { message: error.message } });
});

module.exports = app;

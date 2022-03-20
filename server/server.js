require('config');

const app = require('./app');
const logger = require('morgan');
const mongoose = require('mongoose');

app.use(logger('dev'));

mongoose.connect(process.env.MONGODB_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
});

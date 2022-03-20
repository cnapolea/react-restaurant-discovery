const { Schema, model } = require('mongoose');

const ratingSchema = new Schema({
  price: {
    type: Number,
    maxValue: 4,
    minValue: 1
  },
  quality: {
    type: Number,
    maxValue: 5,
    minValue: 0
  },
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurants'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }
});

const rating = model('rating', ratingSchema);

module.exports = rating;

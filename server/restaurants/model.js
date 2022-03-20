const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      maxLength: 100
    },

    address: {
      type: string,
      default: ''
    },

    location: {
      type: String,
      default: 'Point',
      coordinates: {
        type: [Number],
        required: true
      }
    },

    reviews: {
      type: [Schema.Types.ObjectId],
      ref: 'Reviews',
      default: []
    },

    priceRating: {
      type: Number,
      default: 0
    },

    qualityRating: {
      type: Number,
      default: 0
    },

    schedule: {
      type: [[Strings]]
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Users'
    }
  },
  {
    timestamps: {
      createdAt: 'restaurantCreationDate',
      updatedAt: 'restaurantUpdateDate'
    }
  }
);

const restaurant = model('restaurant', restaurantSchema);

module.exports = restaurant;

const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    address: {
      type: String,
      default: null
    },

    location: {
      type: String,
      coordinates: {
        type: [Number]
      },
      default: 'Point'
    },

    avatar: String,

    facebookId: {
      type: String,
      unique: true,
      default: null
    },

    googleId: {
      type: String,
      unique: true,
      default: null
    },

    favorites: {
      type: [Schema.Types.objectId],
      ref: 'Restaurants',
      default: []
    },

    reviews: {
      type: [Schema.Types.objectId],
      ref: 'Reviews',
      default: []
    },
    role: {
      type: String,
      enum: ['representative, commonUser']
    }
  },
  {
    timestamps: {
      createdAt: 'profileCreationDate',
      updatedAt: 'profileUpdateDate'
    }
  }
);

const User = model('user', userSchema);

module.exports = User;

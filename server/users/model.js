const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: string,
      required: true,
      unique: true
    },

    email: {
      type: string,
      required: true,
      unique: true
    },

    password: {
      type: string,
      required: true
    },

    address: {
      type: string,
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
      type: string,
      unique: true,
      default: null
    },

    googleId: {
      type: string,
      unique: true,
      default: null
    },

    favorites: {
      type: Array[Schema.Types.objectId],
      ref: 'Restaurants',
      default: []
    },

    reviews: {
      type: Array[Schema.Types.objectId],
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

const user = model('user', userSchema);

module.exports = user;

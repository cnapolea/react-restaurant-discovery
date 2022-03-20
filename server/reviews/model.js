const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      maxLength: 30
    },
    context: {
      type: String,
      require: true
    },
    mediaUploads: {
      type: [String]
    },
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurants'
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

const review = model('review', reviewSchema);
module.exports = review;

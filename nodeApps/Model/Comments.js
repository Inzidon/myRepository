const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
  content: {
    type: String,
    required: 'Content is required',
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: 'Post is required Field',
  },
});

module.exports = mongoose.model('Comments', commentsSchema);

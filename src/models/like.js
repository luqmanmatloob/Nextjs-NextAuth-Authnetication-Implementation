const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment', 
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;

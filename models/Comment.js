const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    // Define comment model attributes (id, comment_text, user_id, post_id, etc.)
  },
  {
    sequelize,
    modelName: 'comment',
  }
);

module.exports = Comment;

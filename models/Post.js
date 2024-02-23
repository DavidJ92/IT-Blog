const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    // Define post model attributes (id, title, content, user_id, etc.)
  },
  {
    sequelize,
    modelName: 'post',
  }
);

module.exports = Post;

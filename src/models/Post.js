const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Post = sequelize.define('post', {
    post: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Post;
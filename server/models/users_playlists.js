'use strict';
const {
  Model, BelongsTo
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_playlists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Playlists,{
        foreignKey: 'playlistId'
      })
    }
  };
  users_playlists.init({
    userId: DataTypes.INTEGER,
    playlistId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_playlists',
    paranoid: true,
    tableName: 'Users_playlists'
  });
  return users_playlists;
};
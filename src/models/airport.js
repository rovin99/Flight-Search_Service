'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey: 'city_id',
        onDelete: 'CASCADE',
        
      });
      airport.hasMany(models.flights,{
        foreignKey: 'from',
       
        onDelete: 'CASCADE',
      });
      airport.hasMany(models.flights,{
        foreignKey: 'to',
        
        onDelete: 'CASCADE',
      });

    }
  }
  airport.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    
    }
  }, {
    sequelize,
    modelName: 'airport',
  });
  return airport;
};
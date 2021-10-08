'use strict'

  const dogs = (sequelize, DataTypes) => sequelize.define('Dogs', {
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      hasAllLimbs: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
      },
      color: {
          type: DataTypes.STRING,
      }
  });

  module.export = dogs;
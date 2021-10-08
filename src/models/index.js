'use strict';

require('dotenv').config();

  const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory' : process.env.DATABASE_URL;
  
  const { Sequelize, DataTypes } = require('sequelize');
  
  // import schemas & collection
  const Collection = require('../lib/collection.js');
  const catSchema = require('./cat.schema.js');
  const dogSchema = require('./dog.schema.js');
  
  const sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};

  // turn schema into sequelize model
  // instantiate sequelize
  const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
  const catModel = catSchema(sequelize, DataTypes);
  const dogModel = dogSchema(sequelize, DataTypes);
  
  // turns models into collections
  const catCollection = new Collection(catModel);
  const dogCollection = new Collection(dogModel);

  // export
  module.exports = {
      db: sequelize,
      // once create collection.js change to catCollection, dogCollection
      Cat: catCollection,
      Dog: dogCollection,
};
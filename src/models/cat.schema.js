'use strict'

const cats = (sequelize, DataTypes) => sequelize.define('Cats', {
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
    }
});

module.export = cats;
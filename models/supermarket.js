
// importacion de paquetes.
const { Model, Sequelize } = require('sequelize').Sequelize;
const sequelize = require('../utils/bd');
const {Product} = require('../models/product');

class Supermarket extends Model{ }

Supermarket.init({
    id_supermarket: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
    },
    address: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
    },
    phone: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        validate:{
            isNumeric: true
        }
    }

},
{ sequelize, modelName: 'supermarket' });

// Supermarket.hasMany(Product);
// Supermarket.sync();

module.exports = { Supermarket};



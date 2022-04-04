
// importacion de paquetes.
const { Model, Sequelize} = require('sequelize').Sequelize;
const sequelize = require('../utils/bd');
const { Supermarket } = require('../models/supermarket');


// class Product extends Model{ }
exports.Product = sequelize.define('product',{
    id_product: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false,
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
    },
    description: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
    },
    price: {
        allowNull: false,
        type: Sequelize.FLOAT,
        unique: false
    },
    available:{
        allowNull: false,
        type: Sequelize.BOOLEAN,
        unique: false      
    },
    size:{
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
    },
    quantity:{
        allowNull: false,
        type: Sequelize.INTEGER,
        unique: false
    },
    category:{
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
    },

    fk_product: {
        type: Sequelize.STRING,
        allowNull: false,
        references:{
            model: 'supermarkets',
            key: 'id_supermarket'
        }
    },

}, //{sequelize, modelName: 'product' }
)

// Supermarket.belongsTo(Product);
// Product.sync({force: true});

// module.exports = { Product };

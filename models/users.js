
// importacion de paquetes.
const Sequelize = require('sequelize');
const sequelize = require('../utils/bd');

exports.User = sequelize.define('users',{
    id_user: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false,
    },
    name_user: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    pasword: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    
    rol: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
    }

});


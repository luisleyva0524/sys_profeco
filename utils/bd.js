/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const Sequelize = require('sequelize').Sequelize;

function params(){
    const sequelize = new Sequelize(
        'test',
        'dev',
        '1a2b3c4d', {
            dialect: 'mysql',
            host: 'localhost'
        }
    );
    return sequelize;
}

module.exports = params();
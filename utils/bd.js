/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const Sequelize = require('sequelize').Sequelize;

function params(){
    return new Sequelize(
        'test',
        'dev',
        '1a2b3c4d', {
            dialect: 'mysql',
            host: 'localhost'
        }
    );
}

module.exports = params();
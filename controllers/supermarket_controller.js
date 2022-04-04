/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const model_supermarket = require('../models/supermarket');
const { Product } = require('../models/product');
const { Supermarket } = require('../models/supermarket');
const { query } = require('../utils/bd');

model_supermarket.Supermarket.create({
        id_supermarket: '3',
        name: 'supermercado 3',
        address: 'direccion del supermercado 3',
        phone: '438272739'
})
.then(supermarket => {
    console.log(supermarket.toJSON());
})
.catch(error => {
    console.log(error);
});

// Product.hasMany(Supermarket);
// Supermarket.belongsTo(Product);


// queryJoinModels = async() =>{
//   const find = await query(`SELECT * FROM supermarket INNER JOIN product ON supermarket.id_supermarket = product.id_supermarket`)
//   .then(results =>{
//       console.log(results);
//   })  
//   .catch(error =>{
//         console.log(error);
//    });
    
// };
// queryJoinModels();


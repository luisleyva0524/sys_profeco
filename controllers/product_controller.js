/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const model_product = require('../models/product');
const { Sequelize } = require('../utils/bd');


exports.productAdd = async (req, res) => {
    const results = await model_product.Product.create({
        id_product: req.body.id_product,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        available: req.body.available,
        size: req.body.size,
        quantity: req.body.quantity,
        category: req.body.category,
        fk_product: req.body.fk_product
    });
    res.status(201).json({
        status: 'product add succesfull',
        data: results
    });


};



exports.findProductById = async (req, res) => {
    try {
        const findProduct = await model_product.Product.findOne({
            where: {
                id_product: req.params.id_product
            }
        });
        res.status(200).json(findProduct);
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            msg: error
        });
    }

};


exports.productDelete = async(req, res) => {
  try{
    const results = await model_product.Product.destroy({
        where: {
            id_product: req.params.id_product
        }
    });
    res.status(201).json({
        status: 'product deleted id:' + req.params.id_product,
        data: results
    });
  } catch (error) {
    res.status(500).json({
        status: 'failed',
        msg: error
    });
  }

}


// exports.obtener() = async (req, res) => {
//  try {
//     const query = `SELECT * FROM products`;
//     res.status(200).json({
//         status: 'all products...',
//         data: await Sequelize.query(query, { type: Sequelize.QueryTypes.SELECT })
//     })
// }catch (error) {
//     res.status(500).json({
//         status: 'failed',
//         msg: error
//     })
//   }  
// }

exports.getProducts = async (req, res) => {
    try {
        const results = await model_product.Product.findAll({tags:'id_product'});
        // const filte = new Array(results[1].dataValues.id_product);
        res.status(201).json(results);
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            msg: error
        });
    }
}

// productDelete(3);
// findProductById(1);
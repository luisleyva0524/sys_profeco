const { raw } = require('express');
const model_product = require('../models/product');
const { Sequelize } = require('../utils/bd');


exports.productAdd = async (req, res) => {
    try {
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
        res.statusCode(201).json(results);
    } catch (error) {
        res.statusCode(500).json({
            status: 'failure when trying to add a new product',
            msg: error
        });
    }

};



exports.findProductById = async (req, res) => {
    try {
        const findProduct = await model_product.Product.findAll({
            where: {
                id_product: req.params.id
            },
            attributes: [
                'id_product',
                'name',
                'price',
                'fk_product'
            ]
        });        
        res.statusCode(201).json(findProduct);
    } catch (error) {
        res.statusCode(500).json({
            status: 'failed while try find the product',
            msg: error
        });
    }
};


exports.productDelete = async (req, res) => {
    try {
        const results = await model_product.Product.destroy({
            where: {
                id_product: req.params.id
            }
        });
        res.statusCode(200);
    } catch (error) {
        res.statusCode(500).json({
            status: 'failed while try delete the product',
            msg: error
        });
    }

}


exports.getProducts = async (req, res) => {
    try {
        const results = await model_product.Product.findAll();
        res.statusCode(201).json(results);
    } catch (error) {
        res.status(500).json({
            status: 'an error occurred when trying to obtain the products',
            msg: error
        });
    }
}

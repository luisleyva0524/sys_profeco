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
        res.status(201).json(results);
    } catch (error) {
        res.status(500).json({
            status: 'failed',
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
        res.status(201).json(findProduct);
    } catch (error) {
        res.send(console.log(error));
    }
};


exports.productDelete = async (req, res) => {
    try {
        const results = await model_product.Product.destroy({
            where: {
                id_product: req.params.id
            }
        });
        res.status(201).json(results);
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            msg: error
        });
    }

}


exports.getProducts = async (req, res) => {
    try {
        const results = await model_product.Product.findAll();
        res.status(201).json(results);
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            msg: error
        });
    }
}

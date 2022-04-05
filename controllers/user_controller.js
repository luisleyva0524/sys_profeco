
// importacion de modelos (base de datos)
const database = require('../utils/bd');
const model_user = require('../models/users');

exports.userAdd = async (req, res) => {
    try {
        const findUser = await model_user.User.create({
            id_user: req.body.id_user,
            name_user: req.body.name_user,
            email: req.body.email,
            pasword: req.body.pasword,
            rol: req.body.rol
        });
        res.status(201).json({
            status: "user add succesfull",
            data: findUser
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed to try add user',
            msg: error
        });
    }
}

exports.userUpdate = async (req, res) => {
    try {
        const results = await model_user.User.update(req.body, {
            where:
            {
                id_user: req.param.id_user
            }
        });
        res.status(201).json({
            status: "user update succesfull",
            data: results
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed to try update user',
            msg: error
        });
    }
}

exports.userDelete = async (req, res) => {
    try {
        const results = await model_user.User.destroy({
            where: {
                id_user: req.params.id_user
            }
        });
        res.status(201).json({
            status: 'User deleted id:' + req.params.id,
            data: results
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed!',
            msg: error
        });
    }
};


exports.getUsers = async (req, res) => {
    try {
        const results = await model_user.User.findAll();
        res.status(201).json({
            status: 'all users...',
            data:
                results
        });
    } catch (error) {
        res.status(500).json({
            status: 'failed',
            msg: error
        });
    }
};





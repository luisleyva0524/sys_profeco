/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const model_user = require('../controllers/user_controller');
const express = require('express');
const router = express.Router();

router
    //.route('/')  
    .get('/all',model_user.getUsers)
    .post('/add',model_user.userAdd);
router
    .route('/:id')  
    .put(model_user.userUpdate)
    .delete(model_user.userDelete);
      

module.exports = router;


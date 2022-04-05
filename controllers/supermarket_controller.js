
const model_supermarket = require('../models/supermarket');

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




const PORT = 3000;
const cors = require('cors');
const express = require('express');
const app = express();
const route_users = require('./routes/user_route');
const route_products = require('./routes/product_route');

app.use(cors());
app.use(express.json());
app.use('/sys/profeco/users',route_users);
app.use('/sys/profeco/products',route_products);


app.listen(PORT, () =>{
    console.log(`server running in port: ${PORT}`);
});

const express = require('express')
const routes = express.Router()

const ProductControler = require('./controllers/ProductsController')

routes.get('/products', ProductControler.index);
routes.post('/products', ProductControler.store);
routes.get('/products/:id', ProductControler.show);
routes.put('/products/:id', ProductControler.update);
routes.delete('/products/:id', ProductControler.destroy);
module.exports = routes;
const express = require('express')
const routes = express.Router()

const ProductControler = require('./controllers/ProductsController')


routes.get('/', (req, res) => {
    //Product.create({
     //   title: 'React Native',
     //   description:'Build a native',
     //   url:'www.hoo.com',
    //})
    return res.send('Rocket')
})

routes.get('/products', ProductControler.index)

module.exports = routes;
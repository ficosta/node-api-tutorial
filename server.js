const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
//Iniciano o App
const app = express()

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/node-api', 
    {useNewUrlParser: true, useUnifiedTopology: true }
)

requireDir('./src/models');
const Product = mongoose.model('Product')

app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description:'Build a native',
        url:'www.hoo.com',
    })
    res.send('Rocket')
})
app.listen(3001, () => console.log(`Example app listening on {port} port!`))
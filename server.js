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

//Modelos
const Product = mongoose.model('Product')

//Rotas
app.use('/', require('./src/routes'))

app.listen(3001, () => console.log(`Example app listening on {port} port!`))
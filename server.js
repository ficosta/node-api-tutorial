const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
//Iniciano o App
const app = express()
app.use(express.json())
//Iniciando o DB
mongoose.connect(
    //'mongodb://localhost:27017/node-api', 
    'mongodb://felipe:PX3rMPwxmYfkyvqD@cluster0-shard-00-00-twctd.mongodb.net:27017,cluster0-shard-00-01-twctd.mongodb.net:27017,cluster0-shard-00-02-twctd.mongodb.net:27017/node-api?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true }
)
requireDir('./src/models');

//Modelos
const Product = mongoose.model('Product')

//Rotas
app.use('/', require('./src/routes'))

app.listen(3001, () => console.log(`Example app listening on {port} port!`))
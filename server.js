const express = require('express')
const mongoose = require('mongoose')

//Iniciano o App
const app = express()

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/node-api', 
    {useNewUrlParser: true, useUnifiedTopology: true }
)


app.get('/', (req, res) => {
    res.send('Rocket')
})
app.listen(3001, () => console.log(`Example app listening on {port} port!`))
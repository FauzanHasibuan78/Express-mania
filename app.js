// const { error } = require('console');
const express = require('express');
const fs = require('fs');

const { userRoutes } = require('./routes/userRoutes');
const {productRoutes} = require('./routes/productRoutes')

const app = express();
const PORT = 3001;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("hello dari aplikasi Express")
})

app.get('/about', (req, res) => {
    console.log(__dirname)
    res.sendFile('./public/about.html', { root: __dirname})
})

app.use(userRoutes)

app.use("/products", productRoutes)

app.listen(PORT, () => {
    console.log(`aplikasi sudah berjalan pada http://localhost:${PORT}`)
})

const express = require('express');

// const fs = require('fs')

const productRoutes = express.Router();

productRoutes.get("/", (req, res) => {
    res.send("response dari endpoint product")
})

module.exports = { productRoutes}
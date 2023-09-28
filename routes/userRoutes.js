const express = require('express');
const fs = require('fs')

const userRoutes = express.Router()

userRoutes.get('/users', (req, res) => {
    fs.readFile('./db/users.json', 'utf8', (error, data) => {
        if (error) res.send("terjadi kesalahan pada pembacaan file")
        res.send(JSON.parse(data))
    })
})

userRoutes.get('/users/:userid', (req, res) => {
    console.log(req.params)
})

module.exports = {userRoutes}
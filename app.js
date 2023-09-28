const { error } = require('console');
const express = require('express');
const fs = require('fs');

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

app.get('/users', (req, res) => {
    fs.readFile('./db/fake_database.json', 'utf8', (error, data) => {
        if (error) res.send("terjadi kesalahan pada pembacaan file")
        res.send(JSON.parse(data))
    })
})

app.listen(PORT, () => {
    console.log(`aplikasi sudah berjalan pada http://localhost:${PORT}`)
})

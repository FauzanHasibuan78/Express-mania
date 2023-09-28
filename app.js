const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("hello dari aplikasi Express")
})

app.listen(PORT, () => {
    console.log(`aplikasi sudah berjalan pada http://localhost:${PORT}`)
})

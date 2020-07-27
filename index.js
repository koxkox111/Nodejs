const express = require('express')
const app = express()
const port = 3000

app.get('/book/:bookId', (req, res) => res.send('Pobranie ksiazki'))

app.put('/book', (req,res) => res.send('Dodanie ksiazki'))

app.post('/book/:bookId', (req,res) => res.send('Edycja ksiazki'))

app.delete('/book/:bookId', (req,res) => res.send('Usunięcie ksiazki'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
const express = require('express')
const app = express()

app.get('/', (req, res) => {

    const carros = [
        {
            "id": 1,
            "modelo": "Fusca",
            "marca": "Volkswagen",
            "ano": 1969
        },
        {
            "id": 2,
            "modelo": "Corolla",
            "marca": "Toyota",
            "ano": 2021
        }
    ]

    res.json(carros)
    
})

app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000: http://localhost:3000')
})

module.exports = app
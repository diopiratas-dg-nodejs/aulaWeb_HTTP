const express = require('express')

const app = express()



let cachorros = [
    {
        id: 1,
        nome: 'Astro',
        raca: 'SRD',
        porte: 'Pequeno'
    },
    {
        id: 2,
        nome: 'Ozzy',
        raca: 'Border Collie',
        porte: 'Medio'
    },
    {
        id: 3,
        nome: 'Pandora',
        raca: 'Cavalier',
        porte: 'Pequeno'
    }
]

app.use(express.json())
app.get('/cachorros', (req, res) => {
    res.send(cachorros)
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})
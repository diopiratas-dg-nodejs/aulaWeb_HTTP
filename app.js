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
    res.status(200).send(cachorros)
})

app.post('/cachorros', (req, res) => {
    cachorros.push(req.body)
    res.status(201).send(cachorros)
})

app.put('/cachorros/:id', (req, res) => {
    let cachorro = cachorros.find(cach => cach.id == req.params.id)

    if (!cachorro){
        return res.status(400).json({ error: 'Usuário não encontrado.' });
    }

    cachorro.nome = req.body.nome
    cachorro.raca = req.body.raca
    cachorro.porte = req.body.porte
    res.send(cachorros)
})

app.delete('/cachorros/:id', (req, res) => {
    let cachorro = cachorros.find(cach => cach.id == req.params.id)
    cachorros.splice(cachorros.indexOf(cachorro), 1)
    res.status(204).send(cachorros)
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})
const { createClient } = require('@supabase/supabase-js')
const express = require('express')

const app = express()

app.use(express.json())

const supabaseUrl = 'https://kjialgvzeyiumflpxgrv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqaWFsZ3Z6ZXlpdW1mbHB4Z3J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5NDk3NTEsImV4cCI6MjA0NzUyNTc1MX0.whvKZeHLM6KaU87dEHNOEyqYNKZB_ne3orjBiACDH-A'

const supabase = createClient(supabaseUrl, supabaseKey)

app.get('/', (req, res) => {
    res.send({ mensagem: 'Olá, mundo!' })
})

app.post('/adicionar', async (req, res) => {

    const marca = req.body.marca
    const nome = req.body.nome
    const ano = req.body.ano

    try {

        const carro = {
            marca: marca,
            nome: nome,
            ano: ano
        }

        const { error } = await supabase
            .from('carro')
            .insert(carro)

        if (error) {
            throw error
        }

        res.json({ mensagem: 'Carro inserido com sucesso!' })

    } catch (error) {

        res.json({ mensagem: 'Erro ao inserir o carro!', erro: error })

    }

})

app.get('/listar', async (req, res) => {
    try {

        const { data, error } = await supabase
            .from('carro')
            .select('*')

        if (error) {
            throw error
        }

        res.json(data)

    } catch (error) {
        console.log('Erro ao listar os carros:', error)
        res.json({ mensagem: 'Erro ao listar os carros!' })
    }
})

app.get('/remover/:id', async (req, res) => {

    const id = req.params.id

    try {

        const { error } = await supabase
            .from('carro')
            .delete()
            .eq('id', id)

        if (error) {
            throw error
        }

        res.json({ mensagem: 'Carro removido com sucesso!' })

    } catch (error) {

        res.json({ mensagem: 'Erro ao remover o carro!', erro: error })

    }
})


app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000: http://localhost:3000')
})

module.exports = app
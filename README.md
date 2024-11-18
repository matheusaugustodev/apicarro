# API Carros

- API simples que tem as rotas de listar, adicionar, remover, carros e carros2.

# Rotas
    - listar: retorna uma lista em json dos carros
    - adicionar: envia um objeto (marca, nome e ano) e adiciona um carro
    - remover: recebe como parâmetro o id do carro a ser removido e faz a remoção
    - carros: retorna um arquivo html, que em seguida busca os carros pela rota 'listar'
    - carros2: monta o html com os carros já inseridos no lado do servidor e retorna

# Tecnologias usadas:
    - Node.js
    - Express
    - Supabase (banco de dados PostgreSQL)
    - Vercel (plataforma de hospedagem)
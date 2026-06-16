//configuraçõs
const express = require('express');
const server = express();
const db = require('./config/db');
require('dotenv').config();
server.use(express.json());

//importação de rotas
const cadastroProduto = require("./routes/exercicio4.js")

//rotas
server.use('/cadastroProduto', cadastroProduto)

//conexão e autenticação
async function testDBConnection() {
    try {
        await db.authenticate();
        await db.sync();
        server.listen(process.env.PORT, () => {
            console.log(`Server rodando na porta ${process.env.PORT}`
        );});   
    } catch (error) {
        console.error('erro ao conectar:', error);
    }
} testDBConnection();


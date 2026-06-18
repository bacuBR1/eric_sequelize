//configuraçõs  
const express = require('express');
const server = express();
const db = require('./config/db');
require('dotenv').config();
server.use(express.json());

//importação de rotas
const cadastroProduto = require("./routes/exercicio4.js");
const procurarPorId = require("./routes/exercicio5.js");
const updateProduto = require("./routes/exercicio6.js");
const deletarProuduto = require("./routes/exercicio7.js");

//rotas
server.use('/cadastroProduto', cadastroProduto);
server.use('/procurarPorId', procurarPorId);
server.use('/updateProduto', updateProduto);
server.use('/deletarProduto', deletarProuduto);

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
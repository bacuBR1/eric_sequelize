const express = require("express");
const router = express.Router();
const Produto = require("../models/Produto.model.js")

router.get('/', async (req, res) => {
    try {
        const produto = await Produto.findAll()
        console.log({"sucesso": produto})
        res.status(200).json(produto)
    } catch (error) {
        res.status(500).json(error.message)
    }
});

router.post('/', async (req, res) => {
    try {
        const produto = await Produto.create({
            nome: req.body.nome,
            preco: req.body.preco
        });

        res.status(200).json(produto)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;
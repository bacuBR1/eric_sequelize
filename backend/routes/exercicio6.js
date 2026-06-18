const express = require("express");
const router = express.Router();
const Produto = require("../models/Produto.model.js")

router.patch("/", async (req, res) => {
    try {
        const produto = await Produto.findByPk(req.body.id)
        if (!produto) {
            res.send("não encontrado");
        }

        produto.preco = req.body.preco;
        await produto.save();

        res.status(200).json(produto)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router;
const express = require("express");
const router = express.Router();
const Produto = require("../models/Produto.model.js")

router.get('/', async (req, res) => {
    try {
        const produto = Produto.findByPk(req.body.id)
        await produto.destroy()
        res.send("feito com sucesso")
    } catch (error) {
        res.status(500).json(error.message)
    };
}); 

module.exports = router;
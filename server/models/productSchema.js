const mongoose = require("mongoose");

const product = new mongoose.Schema({
    nome: { type: String, required: [true, "É obrigatório informar o Nome do Produto"] },
    codigoBarras: { type: String, required: [true, "É obrigatório informar o Código do Produto"] },
    preco: {
        type: Number,
        required: [true, "É obrigatório informar o Valor do Produto"],
        min: [0, "Valor minimo é zero"]
    },
    criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", product);
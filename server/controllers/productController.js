const { json } = require("body-parser");
const productSchema = require("../models/productSchema");
const product = require("../models/productSchema");

class ProductControler {
    async store(req, res) {
        try {
            var exists = await product.exists({
                codigoBarras: req.body.codigoBarras
            })

            if (!exists) {
                var result = await product.create(req.body);
                res.status(201).json(result);
            } else {
                throw { erro: "Esse documento já existe" }
            }

        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }

    async get(req, res) {
        res.status(200).json(await product.find({}));
    }

    async getById(req, res) {
        try {
            res.status(200).json(await product.findOne({
                codigoBarras: req.params.codigoBarras
            }));
        } catch (error) {
            var jaspion = json(await error);
            res.status(500).json(await jaspion)
        }

    }

    async update(req, res) {
        res.status(200).json(await product.findOneAndUpdate({ nome: req.body.nome, codigoBarras: req.body.codigoBarras, preco: req.body.preco, criadoEm: req.body.criadoEm }, {
            nome: "DouglasGorgesUpdatedObj",
            codigoBarras: 1234599,
            preco: 999911,
            criadoEm: "2019-10-01T23:20:49.548Z"
        }));
    }

    async updateById(req, res) {
        res.status(200).json(await product.findOneAndUpdate({ codigoBarras: req.params.codigoBarras }, {
            nome: 'DouglasGorgesUpdated',
            preco: 9999
        }));
    }

    async delete(req, res) {
        res.status(200).json(await product.findOneAndDelete({
            codigoBarras: req.params.codigoBarras
        }));
    }
}

module.exports = new ProductControler();
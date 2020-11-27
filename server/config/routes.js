const express = require('express');
const router = express.Router();
const controller = require("../../server/controllers/productController");
const { get } = require('../models/productSchema');
const { update } = require('../models/productSchema');

router.get("/produto/listar", controller.get);
router.get("/produto/buscar/:codigoBarras", controller.getById);
router.get("/produto/alterar/:codigoBarras", controller.updateById);
router.get("/produto/alterar/", controller.update);
router.post("/produto/cadastrar", controller.store);
router.delete("/produto/remover/:codigoBarras", controller.delete);


module.exports = router;
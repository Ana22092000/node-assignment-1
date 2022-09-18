var express = require('express');
var app = express.Router();
const { getProduct, getProductById, addProduct, updateProduct, deleteProduct } = require('../services/product-service');

app.get('/', (req, res) => {
    res.send(getProduct());
})

app.get('/:id', (req, res) => {
    let record = getProductById(req.params.id);
    res.send(record);
})

app.post('/', (req, res) => {
    var record = req.body;
    addProduct(record);
    res.send({ result: "Success", msg: "Product added!" });
})

app.put('/', (req, res) => {
    var record = req.body;
    updateProduct(record);
    res.send({ result: "Success", msg: "Product updated!" });
})

app.delete('/', (req, res) => {
    deleteProduct(req.body);
    res.send({ result: "Success", msg: "Product deleted!" });
})

module.exports = app;

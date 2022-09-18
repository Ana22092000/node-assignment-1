var express = require('express');
var app = express.Router();
const { getCustomer, getCustomerById, addCustomer, updateCustomer, deleteCustomer } = require('../services/customer-service');

app.get('/', (req, res) => {
    res.send(getCustomer());
})

app.get('/:id', (req, res) => {
    let record = getCustomerById(req.params.id);
    res.send(record);
})

app.post('/', (req, res) => {
    var record = req.body;
    addCustomer(record);
    res.send({ result: "Success", msg: "Customer added!" });
})

app.put('/', (req, res) => {
    var record = req.body;
    updateCustomer(record);
    res.send({ result: "Success", msg: "Customer updated!" });
})

app.delete('/', (req, res) => {
    deleteCustomer(req.body);
    res.send({ result: "Success", msg: "Customer deleted!" });
})

module.exports = app;

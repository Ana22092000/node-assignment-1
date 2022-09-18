var express = require('express');
var router = express.Router();
const { getCustomer } = require('../services/customer-service');
const { getProduct } = require('../services/product-service');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Customer App' });
});

router.get('/dashboard', function (req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/about', function (req, res, next) {
  res.render('index', { title: 'About' });
});

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/customer', function (req, res, next) {
  res.render('customer', { title: 'Customer', data: getCustomer() });
});

router.get('/customer/add', function (req, res, next) {
  res.render('add-customer', { title: 'Customer' });
});

router.get('/product', function (req, res, next) {
  res.render('product', { title: 'Product', data: getProduct() });
});

router.get('/product/add', function (req, res, next) {
  res.render('add-product', { title: 'Product' });
});

module.exports = router;

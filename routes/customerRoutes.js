// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const Customer = require('../db/models/customerModel');

router.get('/customers', (req, res) => {
  Customer.getAllCustomers(customers => {
    res.json(customers);
  });
});

module.exports = router;

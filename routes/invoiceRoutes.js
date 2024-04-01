// routes/invoiceRoutes.js
const express = require('express');
const router = express.Router();
const Invoice = require('../db/models/invoiceModel');

router.post('/invoices', (req, res) => {
  const invoiceData = req.body;
  Invoice.addInvoice(invoiceData, invoiceId => {
    res.json({ success: true, invoiceId });
  });
});

module.exports = router;

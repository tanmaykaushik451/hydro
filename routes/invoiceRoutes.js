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

router.get('/invoices/customer/:customerId', (req, res) => {
    const customerId = req.params.customerId;
    Invoice.getInvoicesByCustomer(customerId, invoices => {
      res.json(invoices);
    });
  });
  

module.exports = router;

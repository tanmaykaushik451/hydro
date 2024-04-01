// routes/index.js
const express = require('express');
const customerRoutes = require('./customerRoutes');
const invoiceRoutes = require('./invoiceRoutes');

const router = express.Router();

router.use('/api', customerRoutes);
router.use('/api', invoiceRoutes);

module.exports = router;

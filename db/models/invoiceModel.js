// db/models/invoiceModel.js
const connection = require('../connection');

class Invoice {
  static addInvoice(invoiceData, callback) {
    connection.query('INSERT INTO invoices SET ?', invoiceData, (err, results) => {
      if (err) throw err;
      callback(results.insertId);
    });
  }
}

module.exports = Invoice;

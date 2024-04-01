// db/models/customerModel.js
const connection = require('../connection');

class Customer {
  static getAllCustomers(callback) {
    connection.query('SELECT * FROM customers', (err, results) => {
      if (err) throw err;
      callback(results);
    });
  }
}

module.exports = Customer;

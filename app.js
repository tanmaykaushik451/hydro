// app.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const connection = require('./db/connection'); // Import the connection
const cors = require('cors'); // Import the cors package

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Pass the database connection to routes
app.use((req, res, next) => {
    req.db = connection;
    console.log(connection)
    next();
  });

// Routes
app.use(routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//import the routes

const booksRoutes = require("./routes/books");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

//use routes
app.use("/books", booksRoutes);

// Test Route
app.get('/', (req, res) => {
     console.log(`Method: ${req.method}, Route: ${req.url}`);
  res.send('Server is running!');
});

// Test db connection
const db = require('./models/db');

db.query('SELECT 1 + 1 AS solution')
  .then(([rows]) => console.log('Database connected:', rows))
  .catch(err => console.error('Database connection error:', err));


// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


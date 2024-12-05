const db = require('../models/db');

exports.addBook = async (req, res) => {
  // Extract book details from the request body
  const { title, author, genre, publication_date, isbn } = req.body;

  // Log the received data for debugging
  console.log('Received Data:', req.body);

  // Validate required fields
  if (!title || !author || !isbn) {
    return res.status(400).send('Missing required fields: title, author, and isbn are mandatory.');
  }

  try {
    // Insert the book into the database
    const [result] = await db.query(
      'INSERT INTO book_inventory (title, author, genre, publication_date, isbn) VALUES (?, ?, ?, ?, ?)',
      [title, author, genre, publication_date, isbn]
    );

    // Respond with the ID of the newly added book
    res.status(201).send(`Book added successfully with ID: ${result.insertId}`);
  } catch (err) {
    // Log and handle database errors
    console.error('Error adding book to the database:', err);
    res.status(500).send('Error adding book. Please try again.');
  }
};

exports.filterBooks = async (req, res) => {
  const { id, title, author, genre, publication_date, isbn } = req.query;

  let query = "SELECT * FROM book_inventory WHERE 1=1";
  const params = [];

  // Filtros dinámicos
  if (id) {
    query += " AND id = ?";
    params.push(id);
  }

  if (title) {
    query += " AND title LIKE ?";
    params.push(`%${title}%`);
  }

  if (author) {
    query += " AND author LIKE ?";
    params.push(`%${author}%`);
  }

  if (genre) {
    query += " AND genre LIKE ?";
    params.push(`%${genre}%`);
  }

  if (publication_date) {
    query += " AND publication_date = ?";
    params.push(publication_date);
  }

  if (isbn) {
    query += " AND isbn = ?";
    params.push(isbn);
  }

  console.log("Generated Query:", query); 
  console.log("Query Parameters:", params);

  try {
    const [rows] = await db.query(query, params);
    res.status(200).json(rows);
  } catch (err) {
    console.error("Error filtering books:", err);
    res.status(500).send("Error filtering books.");
  }
};

const { Parser } = require('json2csv'); // Imports package for CSV

exports.exportBooks = async (req, res) => {
  try {
    // Brings the data
    const [rows] = await db.query('SELECT * FROM book_inventory');

    // Verifies the requested form
    if (req.query.format === 'json') {
      return res.status(200).json(rows); // Export as JSON
    }

    // Export as CSV
    const fields = ['id', 'title', 'author', 'genre', 'publication_date', 'isbn'];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(rows);

    // sends the csv
    res.header('Content-Type', 'text/csv');
    res.attachment('books.csv');
    res.status(200).send(csv);
  } catch (err) {
    console.error('Error exporting books:', err);
    res.status(500).send('Error exporting books.');
    }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  console.log("ID to update:", id);
  console.log("Request Body:", req.body);
  res.send(`Update request received for book ID: ${id}`);
};









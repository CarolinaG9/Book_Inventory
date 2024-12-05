const express = require('express');
const router = express.Router();
const bookscontroller = require("../controllers/bookscontrollers");

//Route to add a new book

router.post('/', bookscontroller.addBook);

//route filter books
router.get('/', bookscontroller.filterBooks);

//route to export the data
router.get('/export', bookscontroller.exportBooks);

//route to update data from a book
router.put('/:id', bookscontroller.updateBook);

//route to delete an existing book
//router.delete('/:id', bookscontroller.deleteBook);


module.exports = router;
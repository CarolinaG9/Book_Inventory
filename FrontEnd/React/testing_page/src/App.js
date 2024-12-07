import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewHome from "./components/Home";
import AboutMe from "./components/AboutMe";
import AddBookForm from "./components/sub-components/addBookForm";
import FilterBooksForm from "./components/sub-components/filterBooksForm";
import ExportButtons from "./components/sub-components/exportButtons";
import axios from "axios";

import "./styles2.css"; 

import Contact from "./components/Contact";

/**
 * This function fetches a list of books from the backend API based on the applied filters.
 * It dynamically builds a query string from the filters provided by the user, 
 * sends an HTTP GET request using Axios, and updates the `books` state with the response data.
 * If the request fails, it handles the error gracefully by displaying an alert message.
 */
const App = () => {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({});

  const loadBooks = async () => {
    try {
      const query = Object.keys(filters)
        .map((key) => `${key}=${filters[key]}`)
        .join("&");
      const response = await axios.get(`http://localhost:4000/books?${query}`);
      setBooks(response.data);
    } catch (err) {
      alert("Error loading books!");
    }
  };

  useEffect(() => {
    loadBooks();
  }, [filters]);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          {/* Define Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {/* Add Book Section */}
                  <div className="section add-book">
                   
                    <AddBookForm refreshBooks={loadBooks} />
                  </div>

                  {/* Filter Books Section */}
                  <div className="section filter-books">
                   
                    <FilterBooksForm setFilters={setFilters} />
                  </div>

                  {/* Books Table */}
                  <div className="table-container">
                    <div className="export-container">
                      <ExportButtons />
                    </div>
                    <h2 className="text-blue">Books Inventory</h2>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Genre</th>
                          <th>Publication Date</th>
                          <th>ISBN</th>
                        </tr>
                      </thead>
                      <tbody>
                        {books.map((book) => (
                          <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.genre || "N/A"}</td>
                            <td>{book.publication_date || "N/A"}</td>
                            <td>{book.isbn}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              }
            />
            <Route path="/new-home" element={<NewHome />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

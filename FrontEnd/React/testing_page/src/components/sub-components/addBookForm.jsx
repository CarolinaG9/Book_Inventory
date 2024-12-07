import React, { useState } from "react";
// Import necessary modules from React and axios library
import axios from "axios";

// Define a functional component AddBookForm that takes a refreshBooks function as a prop
const AddBookForm = ({ refreshBooks }) => {
  // useState hook is used to manage form data. Initially, all fields are empty
  const [formData, setFormData] = useState({ //stores the data
    title: "", 
    genre: "",
    publication_date: "",
    isbn: "",
  });

  // Function to handle input changes and update the formData state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/books", formData);
      alert("Book added successfully!");
      refreshBooks();  // Calls the function to refresh the list of books 
      // Reset the form fields to their initial empty values
      setFormData({
        title: "",
        author: "",
        genre: "",
        publication_date: "",
        isbn: "",
      });
    } catch (err) {
      alert("Error adding book!");
    }
  };

  // Return the JSX to render the form

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Book</h2>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
      <input name="genre" placeholder="Genre" value={formData.genre} onChange={handleChange} />
      <input name="publication_date" type="date" value={formData.publication_date} onChange={handleChange} />
      <input name="isbn" placeholder="ISBN" value={formData.isbn} onChange={handleChange} required />

      <button type="submit" className="add-filter-button">Add Book</button>
    </form>
  );
};

export default AddBookForm;

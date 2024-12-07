import React, { useState } from "react";

/* Define a functional component FilterBooksForm
  Receives `setFilters` as a prop to update filters in the parent component*/
const FilterBooksForm = ({ setFilters }) => {
  const [filters, setLocalFilters] = useState({
    title: "",
    author: "",
    genre: "",
  });

    // Function to handle changes in input fields  
  const handleChange = (e) => {
    setLocalFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters(filters); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Filter Books</h2>
      <input name="id" placeholder="ID" value={filters.id || ""} onChange={handleChange} />
      <input name="title" placeholder="Title" value={filters.title} onChange={handleChange} />
      <input name="author" placeholder="Author" value={filters.author} onChange={handleChange} />
      <input name="genre" placeholder="Genre" value={filters.genre} onChange={handleChange} />
      <input name="id" placeholder="ISBN" value={filters.isbn || ""} onChange={handleChange} />
      <button type="submit" className="add-filter-button">Filter</button>
    </form>
  );
};

export default FilterBooksForm;

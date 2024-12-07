import React from "react";


// Define a functional component ExportButtons
const ExportButtons = () => {
  // Function to handle export based on the selected format (JSON or CSV)
  const handleExport = (format) => {
    //opens a new window to download the file
    window.open(`http://localhost:4000/books/export?format=${format}`, "_blank");
  };

  return (
    <div>
      
      <button onClick={() => handleExport("json")}>Export as JSON</button>
      <button onClick={() => handleExport("csv")}>Export as CSV</button>
    </div>
  );
};

export default ExportButtons;

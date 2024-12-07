import React from 'react';
import '../styles.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <div className="contact-info-container">
        <p className="contact-info">
          <strong>Name:</strong> Carolina
        </p>
        <p className="contact-info">
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p className="contact-info">
          <strong>Email:</strong> carolina@example.com
        </p>
        <p className="contact-info">
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/your-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="contact-icon"
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

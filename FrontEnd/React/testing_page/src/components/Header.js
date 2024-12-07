import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBookSkull, faBookAtlas, faBook } from '@fortawesome/free-solid-svg-icons';

/*define header component and routes for each button from the header*/
const Header = () => {
    return (
        <header className="header">
             
            <div className="logo">
            
            <Link to="/new-home" style={{ textDecoration: "none", color: "inherit" }}>BookTory</Link>
            </div>

            <nav>
           
                <Link to="/" className="nav-button">
                    <FontAwesomeIcon icon={faBook} /> Inventory
                </Link>
               
                <Link to="/about" className="nav-button">
                    <FontAwesomeIcon icon={faUser} /> About
                </Link>
                <a
                     href="https://www.linkedin.com/in/carolina-garciab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                 >

                <img
                     src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                     alt="LinkedIn"
                className="contact-icon walking-icon"
                />
                </a>
            </nav>
        </header>
    );
};

export default Header;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookAtlas, faBookBible, faBookReader, faRocket } from '@fortawesome/free-solid-svg-icons';

import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 }); // Inicializa AOS
    }, []);

    return (
        <section className="hero">
            <h1 data-aos="fade-up">Welcome to BookTory</h1>
            <p data-aos="fade-up">The best tool to manage your book inventory online</p>
            <div className="hero-buttons">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button className="cta-button primary">
                    Get Started 
                    <FontAwesomeIcon icon={faBookReader} /> 
                </button>
            </Link>
            </div>
        </section>
    );
};

export default HeroSection;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * 
 * defines herosection (landing page)
 */
const HeroSection = () => {
    return (
        <section className="hero">
            <h1>Welcome to Innovate</h1>
            <p>The best tool to manage your book inventory online</p>
            <div className="hero-buttons">
                <button className="cta-button primary">
                    <FontAwesomeIcon icon={faRocket} /> Get Started
                </button>
               
            </div>
        </section>
    );
};

export default HeroSection;

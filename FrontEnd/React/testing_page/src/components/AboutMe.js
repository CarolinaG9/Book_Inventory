import React, { useState } from 'react';
import picture from '../assets/picture.jpg';
import '../styles.css';

// Define a functional component AboutMe
const AboutMe = () => {
    //track drag element
    const [isDragging, setIsDragging] = useState(false);

    //  called whtn the drag event starts
    const handleDragStart = (e) => {
        setIsDragging(true);
        e.dataTransfer.setData('text/plain', 'Thank you for taking the time to read my {About Me} section. It truly means a lot that you showed interest in learning more about who I am and what I’m passionate about. If you have any questions or would like to connect further, feel free to reach out. I’d love to keep the conversation going!');
    };

    // ends the drag event
    const handleDragEnd = () => {
        setIsDragging(false);
    };
 
    // Allow the drag-over event on the drop zone
    const handleDragOver = (e) => {
        e.preventDefault(); 
    };

     // Called when the draggable element is dropped onto the drop zone
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const data = e.dataTransfer.getData('text/plain');
        alert(`${data}`);
    };

    return (
        <div className="about-page">
            <h1>About Me</h1>
            <img
                src={picture}
                alt="Profile"
                className="profile-picture"
            />
            <div className="about-page-p">
                <p>
                    Hi, I'm Carolina! I'm a dedicated computer programming 
                    student at Lambton College, set to complete my studies 
                    in December. Throughout my program, I've developed skills in 
                    C#, Java, Python, .NET, SQL, and frontend technologies like 
                    React and JavaScript. I have a strong interest in data analysis 
                    and backend development, and I’m passionate about creating 
                    efficient, innovative solutions.

                    I’m eager to continue learning and growing in 
                    the tech industry, and I’m excited about the opportunity to 
                    contribute to impactful projects. I would love to bring my skills 
                    and enthusiasm to Second Bind while expanding my expertise and 
                    making meaningful contributions.
                </p>
            </div>

            {/* Draggable Element */}
            <div
                className="draggable"
                draggable="true"
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                style={{
                    backgroundColor: isDragging ? '#ff9505' : '#fb5607', // Cambia el color al arrastrar
                }}
            >
                Drag Me
            </div>

            {/* Drop Zone */}
            <div
                className="drop-zone"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                Drop Here
            </div>
        </div>
    );
};

export default AboutMe;

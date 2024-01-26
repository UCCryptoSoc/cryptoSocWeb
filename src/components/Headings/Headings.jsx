import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Headings.css';

const Headings = ({ title, text }) => {
    return (
        <div className="headings">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}
// Add PropTypes validation
Headings.propTypes = {
    title: PropTypes.string.isRequired, // Assuming 'title' should be a string and is required
    text: PropTypes.string.isRequired,  // Assuming 'text' should be a string and is required
};

export default Headings
import React from 'react';
import { Link } from 'react-router-dom';
import './UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <h1>Under Construction</h1>
      <p>This page is currently under construction. Check back later!</p>
      <Link to="/">
    <button className="btn-positivus">Return to Homepage</button>
    </Link>
    </div>
  );
};

export default UnderConstruction

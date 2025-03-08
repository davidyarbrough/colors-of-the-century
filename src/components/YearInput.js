import React, { useState } from 'react';
import '../styles/YearInput.css';

const YearInput = ({ year, onYearChange }) => {
  const [inputValue, setInputValue] = useState(year.toString());
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    const newYear = parseInt(inputValue, 10);
    if (isNaN(newYear) || newYear < 0 || newYear > 9999) {
      setError('Please enter a valid year (0-9999)');
      return;
    }
    
    onYearChange(newYear);
  };

  return (
    <div className="year-input-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="year-input">Enter Year:</label>
        <input
          id="year-input"
          type="number"
          min="0"
          max="9999"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Generate Calendar</button>
      </form>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default YearInput;

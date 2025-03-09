import React from 'react';
import '../styles/FormatSelector.css';

/**
 * Component for selecting the date format
 * @param {string} format - Current selected format ('normal', 'american', or 'lexical')
 * @param {function} onFormatChange - Function to handle format change
 */
const FormatSelector = ({ format, onFormatChange }) => {
  return (
    <div className="format-selector">
      <label htmlFor="format-select">Format:</label>
      <select 
        id="format-select" 
        value={format} 
        onChange={(e) => onFormatChange(e.target.value)}
        aria-label="Select date format"
      >
        <option value="normal">Normal (day-month-year)</option>
        <option value="lexical">Lexical (year-month-day)</option>
        <option value="american">American (month-day-year)</option>
      </select>
    </div>
  );
};

export default FormatSelector;

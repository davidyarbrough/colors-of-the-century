import React, { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import YearInput from './components/YearInput';
import FormatSelector from './components/FormatSelector';

/**
 * Main application component
 */
function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [format, setFormat] = useState('normal'); // 'normal' or 'american'

  const handleYearChange = (newYear) => {
    setYear(newYear);
    setSelectedDate(null);
  };

  const handleFormatChange = (newFormat) => {
    setFormat(newFormat);
    setSelectedDate(null);
  };

  const handleDateSelect = (day, month) => {
    setSelectedDate({ day, month, year });
  };

  /**
   * Generate color code based on date and selected format
   * @param {number} day - Day of the month
   * @param {number} month - Month number (1-12)
   * @param {number} year - Year
   * @returns {string} Hex color code
   */
  const getColorCode = (day, month, year) => {
    // Format day, month, and last two digits of year as two-digit numbers
    const dayStr = day.toString().padStart(2, '0');
    const monthStr = month.toString().padStart(2, '0');
    const yearStr = (year % 100).toString().padStart(2, '0');
    
    // Create hex color code based on format
    if (format === 'normal') {
      return `#${dayStr}${monthStr}${yearStr}`; // DDMMYY
    } else {
      return `#${monthStr}${dayStr}${yearStr}`; // MMDDYY for American format
    }
  };

  /**
   * Generate alternative color code for special days
   * @param {number} day - Day of the month
   * @param {number} month - Month number (1-12)
   * @param {number} year - Year
   * @returns {string|null} Alternative hex color code or null if not applicable
   */
  const getAltColorCode = (day, month, year) => {
    // Only first 9 days of February (2) and December (12) have alternative colors
    if ((month === 2 || month === 12) && day <= 9) {
      const monthCode = month === 2 ? 'FEB' : 'DEC';
      const yearStr = (year % 100).toString().padStart(2, '0');
      
      if (format === 'normal') {
        // For normal format, alt color is #DMONYR
        return `#${day}${monthCode}${yearStr}`;
      } else {
        // For American format, alt color is #MMMDYR
        return `#${monthCode}${day}${yearStr}`;
      }
    }
    return null;
  };
  
  // Function to check if a day has bicolor display
  const hasBicolorDisplay = (day, month) => {
    return (month === 2 || month === 12) && day <= 9;
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Colors of the Century</h1>
        <p className="app-description">
          Each day is colored with its hex code in {format === 'normal' ? '#DDMMYY' : '#MMDDYY'} format
          <br />
          <small>The first 9 days of February and December have two color representations!</small>
        </p>
      </header>

      <div className="controls">
        <FormatSelector format={format} onFormatChange={handleFormatChange} />
        <YearInput year={year} onYearChange={handleYearChange} />
      </div>

      <div className="color-info">
        {selectedDate ? (
          <>
            <div className="date-display">
              Date: {selectedDate.day.toString().padStart(2, '0')}/
              {selectedDate.month.toString().padStart(2, '0')}/
              {selectedDate.year}
            </div>
            <div className="color-display">
              Color: {getColorCode(selectedDate.day, selectedDate.month, selectedDate.year)}
              {hasBicolorDisplay(selectedDate.day, selectedDate.month) && (
                <div className="alt-color-display">
                  Alt Color: {getAltColorCode(selectedDate.day, selectedDate.month, selectedDate.year)}
                </div>
              )}
            </div>
            {hasBicolorDisplay(selectedDate.day, selectedDate.month) ? (
              <div className="bicolor-sample">
                <div 
                  className="alt-color-sample" 
                  style={{ backgroundColor: getAltColorCode(selectedDate.day, selectedDate.month, selectedDate.year) }}
                ></div>
                <div 
                  className="primary-color-sample" 
                  style={{ backgroundColor: getColorCode(selectedDate.day, selectedDate.month, selectedDate.year) }}
                ></div>
              </div>
            ) : (
              <div 
                className="color-sample" 
                style={{ backgroundColor: getColorCode(selectedDate.day, selectedDate.month, selectedDate.year) }}
              ></div>
            )}
          </>
        ) : (
          <div>Click on a day to see its color code</div>
        )}
      </div>

      <Calendar 
        year={year} 
        onDateSelect={handleDateSelect} 
        getColorCode={getColorCode}
        getAltColorCode={getAltColorCode}
        hasBicolorDisplay={hasBicolorDisplay}
      />

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Colors of the Century</p>
      </footer>
    </div>
  );
}

export default App;

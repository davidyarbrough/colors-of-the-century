import React from 'react';
import Month from './Month';
import '../styles/Calendar.css';

/**
 * Calendar component that displays all months of a year
 * @param {number} year - The year to display
 * @param {function} onDateSelect - Function to handle date selection
 * @param {function} getColorCode - Function to get the color code for a date
 * @param {function} getAltColorCode - Function to get the alternative color code for special dates
 * @param {function} hasBicolorDisplay - Function to check if a date has a bicolor display
 */
const Calendar = ({ year, onDateSelect, getColorCode, getAltColorCode, hasBicolorDisplay }) => {
  // Array of month names
  const monthNames = [
    'January', 'February', 'March', 'April', 
    'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'
  ];

  return (
    <div className="calendar">
      {monthNames.map((monthName, index) => (
        <Month 
          key={monthName}
          monthName={monthName}
          monthIndex={index + 1}
          year={year}
          onDateSelect={onDateSelect}
          getColorCode={getColorCode}
          getAltColorCode={getAltColorCode}
          hasBicolorDisplay={hasBicolorDisplay}
        />
      ))}
    </div>
  );
};

export default Calendar;

import React from 'react';
import Month from './Month';
import '../styles/Calendar.css';

/**
 * Calendar component that displays all months of a year
 * @param {number} year - The year to display
 * @param {function} onDateSelect - Function to handle date selection
 * @param {string} format - Current format ('normal', 'american', or 'lexical')
 * @param {Object|null} selectedDate - Currently selected date with day, month, year properties
 */
const Calendar = ({ year, onDateSelect, format, selectedDate }) => {
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
          format={format}
          selectedDate={selectedDate}
        />
      ))}
    </div>
  );
};

export default Calendar;

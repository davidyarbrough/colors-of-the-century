import React from 'react';
import '../styles/Month.css';
import { getColorCode, getAltColorCode, hasBicolorDisplay } from '../utils/colorUtils';

/**
 * Month component that displays a single month of a calendar
 * @param {string} monthName - The name of the month
 * @param {number} monthIndex - The index of the month (1-12)
 * @param {number} year - The year
 * @param {function} onDateSelect - Function to handle date selection
 * @param {string} format - Current format ('normal', 'american', or 'lexical')
 * @param {Object|null} selectedDate - Currently selected date with day, month, year properties
 */
const Month = ({ 
  monthName, 
  monthIndex, 
  year, 
  onDateSelect,
  format,
  selectedDate
}) => {
  // Function to get days in month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  // Function to get day of week (0-6, where 0 is Sunday)
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month - 1, 1).getDay();
  };

  // Get number of days in the month
  const daysInMonth = getDaysInMonth(monthIndex, year);
  
  // Get the day of the week for the first day (0-6)
  let firstDay = getFirstDayOfMonth(monthIndex, year);
  // Convert Sunday (0) to 7 to align with Monday (1) start
  firstDay = firstDay === 0 ? 7 : firstDay;

  // Create array for days
  const days = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 1; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="day empty"></div>);
  }
  
  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const colorCode = getColorCode(day, monthIndex, year, format);
    const isBicolorDay = hasBicolorDisplay(day, monthIndex);
    
    if (isBicolorDay) {
      const altColorCode = getAltColorCode(day, monthIndex, year, format);
      days.push(
        <div 
          key={`day-${day}`} 
          className="day bicolor-day" 
          onClick={() => onDateSelect(day, monthIndex)}
        >
          <div className="day-content">{day}</div>
          <div 
            className="primary-color" 
            style={{ backgroundColor: colorCode }}
          ></div>
          <div 
            className="alt-color" 
            style={{ backgroundColor: altColorCode }}
          ></div>
        </div>
      );
    } else {
      days.push(
        <div 
          key={`day-${day}`} 
          className="day" 
          style={{ backgroundColor: colorCode }}
          onClick={() => onDateSelect(day, monthIndex)}
        >
          {day}
        </div>
      );
    }
  }

  return (
    <div className="month">
      <h3 className="month-name">{monthName}</h3>
      <div className="weekdays">
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>Su</div>
      </div>
      <div className="days-grid">
        {days}
      </div>
    </div>
  );
};

export default Month;

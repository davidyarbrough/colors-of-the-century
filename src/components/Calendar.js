import React from 'react';
import Month from './Month';
import '../styles/Calendar.css';

const Calendar = ({ year, onDateSelect, getColorCode }) => {
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
        />
      ))}
    </div>
  );
};

export default Calendar;

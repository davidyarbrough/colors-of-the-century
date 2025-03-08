import React, { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import YearInput from './components/YearInput';

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleYearChange = (newYear) => {
    setYear(newYear);
    setSelectedDate(null);
  };

  const handleDateSelect = (day, month) => {
    setSelectedDate({ day, month, year });
  };

  const getColorCode = (day, month, year) => {
    // Format day, month, and last two digits of year as two-digit numbers
    const dayStr = day.toString().padStart(2, '0');
    const monthStr = month.toString().padStart(2, '0');
    const yearStr = (year % 100).toString().padStart(2, '0');
    
    // Create hex color code
    return `#${dayStr}${monthStr}${yearStr}`;
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Colors of the Century</h1>
        <p className="app-description">
          Each day is colored with its hex code in #DDMMYY format
        </p>
      </header>

      <YearInput year={year} onYearChange={handleYearChange} />

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
            </div>
            <div 
              className="color-sample" 
              style={{ backgroundColor: getColorCode(selectedDate.day, selectedDate.month, selectedDate.year) }}
            ></div>
          </>
        ) : (
          <div>Click on a day to see its color code</div>
        )}
      </div>

      <Calendar 
        year={year} 
        onDateSelect={handleDateSelect} 
        getColorCode={getColorCode} 
      />

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Colors of the Century</p>
      </footer>
    </div>
  );
}

export default App;

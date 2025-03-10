import React, { useState, useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import YearInput from './components/YearInput';
import FormatSelector from './components/FormatSelector';
import Popover from './components/Popover';
import getColorName from './utils/colorNameMapper';

/**
 * Main application component
 */
/**
 * Calculate the next bifecta (bicolor period with two weekends)
 * @returns {Object} The next bifecta details: month, year, and days included
 */
const calculateNextBifecta = () => {
  // Use the current local date
  const today = new Date();
  
  // Start searching from the current year
  let currentYear = today.getFullYear();
  
  // Check up to 10 years in the future
  for (let yearOffset = 0; yearOffset < 10; yearOffset++) {
    const year = currentYear + yearOffset;
    
    // Check February 1st and December 1st of each year
    const checkMonths = [1, 11]; // February (1) and December (11) in JS
    
    for (const month of checkMonths) {
      // Create date object for the 1st of the month
      const firstOfMonth = new Date(year, month, 1);
      
      // Skip past dates
      if (firstOfMonth < today) {
        continue;
      }
      
      // If the 1st falls on a Saturday (day 6), it's a bifecta
      // This guarantees two full weekends in the 9-day bicolor period
      if (firstOfMonth.getDay() === 6) {
        // Check if it's happening right now
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month, 9);
        const isNow = startDate <= today && today <= endDate;
        
        return {
          month: month + 1, // Convert from JS 0-based months
          year,
          inProgress: isNow,
          isUpcoming: !isNow
        };
      }
    }
  }
  
  // Default fallback (should never reach here with 10-year search)
  return { month: 2, year: currentYear + 10, isUpcoming: true };
};

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [format, setFormat] = useState('normal'); // 'normal' or 'american'
  const [nextBifecta, setNextBifecta] = useState(null);
  const [backgroundGradient, setBackgroundGradient] = useState('');
  const [headerBackground, setHeaderBackground] = useState('#f2f2f2');

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
    updateBackgroundGradient(day, month, year);
  };
  
  // Calculate next bifecta when component mounts or year changes
  useEffect(() => {
    setNextBifecta(calculateNextBifecta());
    
    // Set initial background gradient based on current date
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // JS months are 0-indexed
    const currentDay = today.getDate();
    
    if (currentYear === year) {
      updateBackgroundGradient(currentDay, currentMonth, currentYear);
    } else {
      // If showing a different year, use a default gradient based on first day of the year
      updateBackgroundGradient(1, 1, year);
    }
  }, [year, format]);

  /**
   * Calculate background gradient based on selected date context
   * @param {number} day - Day of the month
   * @param {number} month - Month number (1-12)
   * @param {number} year - Year
   */
  const updateBackgroundGradient = (day, month, year) => {
    let color1, color2;
    
    // Check if the current day is a bicolor day
    if (hasBicolorDisplay(day, month)) {
      // For bicolor days, use both colors of the day
      color1 = getColorCode(day, month, year);
      color2 = getAltColorCode(day, month, year);
      
      // Create a mixed color for the header by blending white (90%) with both colors (5% each)
      // Parse the hex values and create a blend
      const r1 = parseInt(color1.substring(1, 3), 16);
      const g1 = parseInt(color1.substring(3, 5), 16);
      const b1 = parseInt(color1.substring(5, 7), 16);
      
      const r2 = parseInt(color2.substring(1, 3), 16);
      const g2 = parseInt(color2.substring(3, 5), 16);
      const b2 = parseInt(color2.substring(5, 7), 16);
      
      // Calculate the blended color (90% white, 5% color1, 5% color2)
      const blendedR = Math.round(0.9 * 255 + 0.05 * r1 + 0.05 * r2);
      const blendedG = Math.round(0.9 * 255 + 0.05 * g1 + 0.05 * g2);
      const blendedB = Math.round(0.9 * 255 + 0.05 * b1 + 0.05 * b2);
      
      // Convert back to hex
      const blendedColor = `#${blendedR.toString(16).padStart(2, '0')}${blendedG.toString(16).padStart(2, '0')}${blendedB.toString(16).padStart(2, '0')}`;
      
      setHeaderBackground(blendedColor);
    } else {
      // Get date objects for previous, current, and next day
      const currentDate = new Date(year, month - 1, day); // JS months are 0-indexed
      
      // Get yesterday's date
      const prevDate = new Date(currentDate);
      prevDate.setDate(prevDate.getDate() - 1);
      
      // Get tomorrow's date
      const nextDate = new Date(currentDate);
      nextDate.setDate(nextDate.getDate() + 1);
      
      // Get color for previous day
      const prevDay = prevDate.getDate();
      const prevMonth = prevDate.getMonth() + 1;
      const prevYear = prevDate.getFullYear();
      
      // Get color for next day
      const nextDay = nextDate.getDate();
      const nextMonth = nextDate.getMonth() + 1;
      const nextYear = nextDate.getFullYear();
      
      // Use previous and next day colors for gradient
      color1 = getColorCode(prevDay, prevMonth, prevYear);
      color2 = getColorCode(nextDay, nextMonth, nextYear);
      
      // Get the current day's color for header accent
      const currentColor = getColorCode(day, month, year);
      
      // Parse the hex value and create a blend with 90% white and 10% of the current day's color
      const r = parseInt(currentColor.substring(1, 3), 16);
      const g = parseInt(currentColor.substring(3, 5), 16);
      const b = parseInt(currentColor.substring(5, 7), 16);
      
      // Calculate the blended color
      const blendedR = Math.round(0.9 * 255 + 0.1 * r);
      const blendedG = Math.round(0.9 * 255 + 0.1 * g);
      const blendedB = Math.round(0.9 * 255 + 0.1 * b);
      
      // Convert back to hex
      const blendedColor = `#${blendedR.toString(16).padStart(2, '0')}${blendedG.toString(16).padStart(2, '0')}${blendedB.toString(16).padStart(2, '0')}`;
      
      setHeaderBackground(blendedColor);
    }
    
    // Set the gradient CSS
    setBackgroundGradient(`linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`);
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
    } else if (format === 'american') {
      return `#${monthStr}${dayStr}${yearStr}`; // MMDDYY for American format
    } else { // lexical format
      return `#${yearStr}${monthStr}${dayStr}`; // YYMMDD for Lexical format
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
        // For normal format, bicolor is #DMONYR
        return `#${day}${monthCode}${yearStr}`;
      } else if (format === 'american') {
        // For American format, bicolor is #MMMDYR
        return `#${monthCode}${day}${yearStr}`;
      } else {
        // For Lexical format, bicolor is #YYMMMd
        return `#${yearStr}${monthCode}${day}`;
      }
    }
    return null;
  };
  
  // Function to check if a day has bicolor display
  const hasBicolorDisplay = (day, month) => {
    return (month === 2 || month === 12) && day <= 9;
  };

  return (
    <div className="app" style={{
      background: backgroundGradient,
      transition: 'background 0.5s ease'
    }}>
      <div className="sticky-header" style={{ background: headerBackground }}>
        <header className="app-header">
          <h1>Colors of the Century</h1>
          <p className="app-description">
            Each day is colored with its hex code in 
            {format === 'normal' ? '#DDMMYY' : format === 'american' ? '#MMDDYY' : '#YYMMDD'} format
            <br />
            <small>The first 9 days of February and December have two color representations! These periods are known as the winter bicolors.</small>
            <br/>
            <small>
              The next <Popover 
                content="A 'bifecta' occurs when a bicolor period (the first 9 days of February or December) contains two full weekends. This happens when the 1st of the month falls on a Saturday, creating a unique 9-day stretch with both weekends fully contained within the winter bicolors. According to Colors of the Century traditions, bifectas are periods of special celebration, creativity, and renewal."
                position="bottom"
              >
                bifecta
              </Popover> is {nextBifecta ? `${nextBifecta.month === 2 ? 'February' : 'December'} ${nextBifecta.year} ` : 'loading...'} 
              {nextBifecta?.inProgress ? '(happening now!)' : '(coming soon)'}
            </small>
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
                <div className="color-info-row">
                  <div>Color: {getColorCode(selectedDate.day, selectedDate.month, selectedDate.year)}</div>
                  <div className="color-name">{getColorName(getColorCode(selectedDate.day, selectedDate.month, selectedDate.year))}</div>
                </div>
                {hasBicolorDisplay(selectedDate.day, selectedDate.month) && (
                  <div className="color-info-row alt-color-display">
                    <div>Bi Color: {getAltColorCode(selectedDate.day, selectedDate.month, selectedDate.year)}</div>
                    <div className="color-name">{getColorName(getAltColorCode(selectedDate.day, selectedDate.month, selectedDate.year))}</div>
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

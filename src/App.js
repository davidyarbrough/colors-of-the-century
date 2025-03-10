import React, { useState, useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import YearInput from './components/YearInput';
import FormatSelector from './components/FormatSelector';
import ColorInfo from './components/ColorInfo';
import BifectaInfo from './components/BifectaInfo';
import BackgroundManager from './components/BackgroundManager';
import { calculateNextBifecta } from './utils/bifectaUtils';

/**
 * Main application component
 */

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [format, setFormat] = useState('normal'); // 'normal' or 'american'
  const [nextBifecta, setNextBifecta] = useState(null);
  const [backgroundGradient, setBackgroundGradient] = useState('');
  const [headerBackground, setHeaderBackground] = useState('#f2f2f2');
  
  const { updateBackgroundGradient } = BackgroundManager({ format });

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
    const { backgroundGradient, headerBackground } = updateBackgroundGradient(day, month, year);
    setBackgroundGradient(backgroundGradient);
    setHeaderBackground(headerBackground);
  };
  
  // Calculate next bifecta when component mounts or year changes
  useEffect(() => {
    setNextBifecta(calculateNextBifecta());
    
    // Set initial background gradient based on current date
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // JS months are 0-indexed
    const currentDay = today.getDate();
    
    const day = currentYear === year ? currentDay : 1;
    const month = currentYear === year ? currentMonth : 1;
    
    const { backgroundGradient, headerBackground } = updateBackgroundGradient(day, month, year);
    setBackgroundGradient(backgroundGradient);
    setHeaderBackground(headerBackground);
  }, [year, format, updateBackgroundGradient]);
  


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
            <BifectaInfo nextBifecta={nextBifecta} />
          </p>
        </header>

        <div className="controls">
          <FormatSelector format={format} onFormatChange={handleFormatChange} />
          <YearInput year={year} onYearChange={handleYearChange} />
        </div>

        <ColorInfo selectedDate={selectedDate} format={format} />
      </div>

      <Calendar 
        year={year} 
        onDateSelect={handleDateSelect} 
        format={format}
        selectedDate={selectedDate}
      />

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Colors of the Century</p>
      </footer>
    </div>
  );
}

export default App;

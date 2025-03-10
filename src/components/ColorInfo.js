import React from 'react';
import { getColorCode, getAltColorCode, hasBicolorDisplay } from '../utils/colorUtils';
import getColorName from '../utils/colorNameMapper';

/**
 * ColorInfo - Displays color information for the selected date
 * @param {Object} props - Component props
 * @param {Object|null} props.selectedDate - Selected date object with day, month, year
 * @param {string} props.format - Current format ('normal', 'american', or 'lexical')
 * @returns {JSX.Element|null} ColorInfo component or null if no date selected
 */
const ColorInfo = ({ selectedDate, format }) => {
  if (!selectedDate) return null;
  
  const { day, month, year } = selectedDate;
  const colorCode = getColorCode(day, month, year, format);
  const altColorCode = hasBicolorDisplay(day, month) ? 
    getAltColorCode(day, month, year, format) : null;
  
  return (
    <div className="color-info">
      <div className="color-info-layout">
        <div className="date-and-sample">
          <div className="date-display">
            {day.toString().padStart(2, '0')}/
            {month.toString().padStart(2, '0')}/
            {year}
          </div>
          {hasBicolorDisplay(day, month) ? (
            <div className="bicolor-sample">
              <div 
                className="alt-color-sample" 
                style={{ backgroundColor: altColorCode }}
              />
              <div 
                className="primary-color-sample" 
                style={{ backgroundColor: colorCode }}
              />
            </div>
          ) : (
            <div 
              className="color-sample" 
              style={{ backgroundColor: colorCode }}
            />
          )}
        </div>
        
        <div className="color-display">
          <div className="color-info-row">
            <div className="color-label">Color:</div>
            <div className="color-code">{colorCode}</div>
            <div className="color-name">{getColorName(colorCode)}</div>
          </div>
          {altColorCode && (
            <div className="color-info-row alt-color-display">
              <div className="color-label">Bi Color:</div>
              <div className="color-code">{altColorCode}</div>
              <div className="color-name">{getColorName(altColorCode)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorInfo;

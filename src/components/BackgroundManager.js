import { useCallback } from 'react';
import { getColorCode, getAltColorCode, hasBicolorDisplay, blendColors } from '../utils/colorUtils';

/**
 * BackgroundManager - Handles background gradient and header background color calculations
 * @param {Object} props - Component props 
 * @param {string} props.format - Current format ('normal', 'american', or 'lexical')
 * @returns {Object} Object containing updateBackgroundGradient function
 */
const BackgroundManager = ({ format }) => {
  /**
   * Calculate and update background gradient based on selected date context
   * @param {number} day - Day of the month
   * @param {number} month - Month number (1-12)
   * @param {number} year - Year
   * @returns {Object} Object containing backgroundGradient and headerBackground values
   */
  const updateBackgroundGradient = useCallback((day, month, year) => {
    let color1, color2;
    
    // Check if the current day is a bicolor day
    if (hasBicolorDisplay(day, month)) {
      // For bicolor days, use both colors of the day
      color1 = getColorCode(day, month, year, format);
      color2 = getAltColorCode(day, month, year, format);
      
      // Create a mixed color for the header by blending white (90%) with both colors (5% each)
      const headerBackground = blendColors(
        ['#FFFFFF', color1, color2],
        [0.9, 0.05, 0.05]
      );
      
      return {
        backgroundGradient: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
        headerBackground
      };
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
      color1 = getColorCode(prevDay, prevMonth, prevYear, format);
      color2 = getColorCode(nextDay, nextMonth, nextYear, format);
      
      // Get the current day's color for header accent
      const currentColor = getColorCode(day, month, year, format);
      
      // Blend with white for the header (90% white, 10% current day color)
      const headerBackground = blendColors(
        ['#FFFFFF', currentColor],
        [0.9, 0.1]
      );
      
      return {
        backgroundGradient: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`,
        headerBackground
      };
    }
  }, [format]);
  
  return { updateBackgroundGradient };
};

export default BackgroundManager;

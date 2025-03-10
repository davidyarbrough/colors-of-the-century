/**
 * Utility functions for color generation and manipulation
 */

/**
 * Generate color code based on date and selected format
 * @param {number} day - Day of the month
 * @param {number} month - Month number (1-12)
 * @param {number} year - Year
 * @param {string} format - Format type ('normal', 'american', or 'lexical')
 * @returns {string} Hex color code
 */
export const getColorCode = (day, month, year, format) => {
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
 * @param {string} format - Format type ('normal', 'american', or 'lexical')
 * @returns {string|null} Alternative hex color code or null if not applicable
 */
export const getAltColorCode = (day, month, year, format) => {
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

/**
 * Check if a day should have a bicolor display
 * @param {number} day - Day of the month
 * @param {number} month - Month number (1-12)
 * @returns {boolean} True if the day has a bicolor display
 */
export const hasBicolorDisplay = (day, month) => {
  return (month === 2 || month === 12) && day <= 9;
};

/**
 * Blend multiple colors with given weights
 * @param {Array<string>} colors - Array of hex color codes
 * @param {Array<number>} weights - Array of weights (should sum to 1)
 * @returns {string} Blended hex color code
 */
export const blendColors = (colors, weights) => {
  // Extract RGB components
  const rgbComponents = colors.map(color => ({
    r: parseInt(color.substring(1, 3), 16),
    g: parseInt(color.substring(3, 5), 16),
    b: parseInt(color.substring(5, 7), 16)
  }));
  
  // Blend the colors
  let r = 0, g = 0, b = 0;
  for (let i = 0; i < colors.length; i++) {
    r += rgbComponents[i].r * weights[i];
    g += rgbComponents[i].g * weights[i];
    b += rgbComponents[i].b * weights[i];
  }
  
  // Round and convert back to hex
  const blendedColor = `#${Math.round(r).toString(16).padStart(2, '0')}${
    Math.round(g).toString(16).padStart(2, '0')}${
    Math.round(b).toString(16).padStart(2, '0')}`;
    
  return blendedColor;
};

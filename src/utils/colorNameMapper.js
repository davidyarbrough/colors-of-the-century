/**
 * Utility to map hex color codes to descriptive color names
 * 
 * This module provides functions to convert hex color codes to human-readable
 * color names, enhancing the educational value of the application.
 */

// Helper function to convert hex to RGB
const hexToRgb = (hex) => {
  // Remove the hash if it exists
  hex = hex.replace(/^#/, '');
  
  // Parse the hex values
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  
  return { r, g, b };
};

// Helper function to calculate color distance (Euclidean distance in RGB space)
const colorDistance = (color1, color2) => {
  const rDiff = color1.r - color2.r;
  const gDiff = color1.g - color2.g;
  const bDiff = color1.b - color2.b;
  
  return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
};

// Color map with RGB values and names that can appear in our calendar
// We have four different format types:
// 1. Normal format: #DDMMYY (day-month-year)
// 2. American format: #MMDDYY (month-day-year)
// 3. Bicolor Normal format: #DMONYR (day-month abbreviation-year)
// 4. Bicolor American format: #MONDYR (month abbreviation-day-year)
const colorMap = [
  // Dark colors (majority of the palette)
  { name: 'Black', rgb: { r: 0, g: 0, b: 0 } },
  { name: 'Charcoal', rgb: { r: 20, g: 20, b: 20 } },
  { name: 'Midnight Blue', rgb: { r: 10, g: 10, b: 35 } },
  { name: 'Navy', rgb: { r: 0, g: 0, b: 31 } },
  { name: 'Forest Green', rgb: { r: 5, g: 31, b: 5 } },
  { name: 'Mahogany', rgb: { r: 31, g: 5, b: 5 } },
  { name: 'Burgundy', rgb: { r: 31, g: 0, b: 12 } },
  { name: 'Plum', rgb: { r: 25, g: 5, b: 25 } },
  { name: 'Chocolate', rgb: { r: 25, g: 12, b: 0 } },
  { name: 'Coffee', rgb: { r: 20, g: 10, b: 0 } },
  { name: 'Dark Teal', rgb: { r: 0, g: 25, b: 25 } },
  { name: 'Eggplant', rgb: { r: 25, g: 0, b: 25 } },
  { name: 'Walnut', rgb: { r: 25, g: 17, b: 10 } },
  { name: 'Slate', rgb: { r: 15, g: 20, b: 25 } },
  { name: 'Dark Olive', rgb: { r: 20, g: 25, b: 10 } },
  
  // Medium colors
  { name: 'Maroon', rgb: { r: 31, g: 0, b: 0 } },
  { name: 'Hunter Green', rgb: { r: 10, g: 31, b: 10 } },
  { name: 'Cobalt', rgb: { r: 10, g: 10, b: 31 } },
  { name: 'Rust', rgb: { r: 31, g: 15, b: 5 } },
  { name: 'Olive', rgb: { r: 31, g: 31, b: 0 } },
  { name: 'Purple', rgb: { r: 31, g: 0, b: 31 } },
  { name: 'Teal', rgb: { r: 0, g: 31, b: 31 } },
  { name: 'Brick', rgb: { r: 31, g: 10, b: 0 } },
  
  // Bright colors (smaller selection)
  { name: 'Scarlet', rgb: { r: 31, g: 0, b: 0 } },
  { name: 'Crimson', rgb: { r: 31, g: 0, b: 10 } },
  { name: 'Ruby', rgb: { r: 31, g: 0, b: 15 } },
  { name: 'Emerald', rgb: { r: 0, g: 31, b: 15 } },
  { name: 'Lime', rgb: { r: 10, g: 31, b: 0 } },
  { name: 'Kelly Green', rgb: { r: 5, g: 31, b: 5 } },
  { name: 'Gold', rgb: { r: 31, g: 25, b: 0 } },
  { name: 'Amber', rgb: { r: 31, g: 20, b: 0 } },
  { name: 'Sapphire', rgb: { r: 0, g: 10, b: 31 } },
  
  // Special bicolor day colors
  // { name: 'February Green', rgb: { r: 3, g: 235, b: 37 } },  // #3FEB25
  // { name: 'February Sky', rgb: { r: 1, g: 235, b: 37 } },     // #1FEB25
  // { name: 'February Lime', rgb: { r: 5, g: 235, b: 37 } },     // #5FEB25
  // { name: 'February Mint', rgb: { r: 7, g: 235, b: 37 } },     // #7FEB25
  // { name: 'February Twilight', rgb: { r: 9, g: 235, b: 37 } }, // #9FEB25
  
  // { name: 'December Red', rgb: { r: 1, g: 236, b: 37 } },      // #1DEC25
  // { name: 'December Crimson', rgb: { r: 3, g: 236, b: 37 } },  // #3DEC25
  // { name: 'December Rose', rgb: { r: 5, g: 236, b: 37 } },     // #5DEC25
  // { name: 'December Ruby', rgb: { r: 7, g: 236, b: 37 } },     // #7DEC25
  // { name: 'December Garnet', rgb: { r: 9, g: 236, b: 37 } }    // #9DEC25
];

// Extended color descriptions for more specific naming
const colorDescriptors = {
  light: (name) => `Light ${name}`,
  dark: (name) => `Dark ${name}`,
  pale: (name) => `Pale ${name}`,
  deep: (name) => `Deep ${name}`,
  bright: (name) => `Bright ${name}`,
  dull: (name) => `Dull ${name}`
};



/**
 * Get the name of a color based on its hex code
 * @param {string} hexCode - The hex color code to name
 * @returns {string} A descriptive name for the color
 */
const getColorName = (hexCode) => {
  // Convert the hex code to RGB
  const rgb = hexToRgb(hexCode);
  
  // Calculate the brightness (simple formula)
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  
  // Calculate the saturation (simple approximation)
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const saturation = max === 0 ? 0 : (max - min) / max;
  
  // Find the closest base color
  let closestColor = colorMap[0];
  let minDistance = colorDistance(rgb, colorMap[0].rgb);
  
  for (let i = 1; i < colorMap.length; i++) {
    const distance = colorDistance(rgb, colorMap[i].rgb);
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = colorMap[i];
    }
  }
  
  // Return the name without any descriptors
  return closestColor.name;
};

export default getColorName;

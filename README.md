# Colors of the Century

A calendar visualization application that displays each day colored with a hex code derived from its date, supporting multiple date formats.

**[View Live Demo](https://davidyarbrough.github.io/colors-of-the-century)**

## Description

This application allows users to:
- Input a year number
- Select from multiple date formats
- View a calendar for that year
- See each day colored with its unique hex color code based on the date format
- Click on days to see the exact color code and color name
- Experience special bicolor days for the first 9 days of February and December (the winter bicolors)
- Learn about special 'bifecta' periods when bicolor days include two full weekends

## Date Formats and Color Mapping

The application supports three different date formats, each generating unique colors:

### 1. Normal Format (DDMMYY)
- Day followed by month followed by year
- Example: February 1, 2025 would be colored `#010225`
- Bicolor format for special days: `#DMMMYY` (e.g., February 1, 2025 would have an alternate color of `#1FEB25`)

### 2. American Format (MMDDYY)
- Month followed by day followed by year
- Example: February 1, 2025 would be colored `#020125`
- Bicolor format for special days: `#MMMDYY` (e.g., February 1, 2025 would have an alternate color of `#FEB125`)

### 3. Lexical Format (YYMMDD)
- Year followed by month followed by day
- Example: February 1, 2025 would be colored `#250201`
- Bicolor format for special days: `#YYMMMD` (e.g., February 1, 2025 would have an alternate color of `#25FEB1`)

## Special Bicolor Days

The first 9 days of February and December have two color representations:

1. **Standard Format**: Based on the selected date format (DDMMYY, MMDDYY, or YYMMDD)
2. **Alternative Format**: Using a special format that includes the month name abbreviation

These special days are displayed with a diagonal split showing both colors, enhancing the visual experience and educational value of the application.

### Bifectas

A 'bifecta' occurs when a bicolor period (the first 9 days of February or December) contains two full weekends. This happens when the 1st of the month falls on a Saturday, creating a unique 9-day stretch with both weekends fully contained within the winter bicolors. According to Colors of the Century traditions, bifectas are periods of special celebration, creativity, and renewal.

## Color Naming System

Each hex color code is mapped to a descriptive color name to help users understand the relationship between the hex values and actual colors. The color naming system:

- Uses AI-generated color names specifically designed for date-based colors
- Groups colors by decade themes with each having its own color palette
- Names reflect thematic elements rather than temporal references
- Automatically assigns the most appropriate name for any date-generated hex code
- Enhances the educational value by helping users understand the relationship between dates and colors
- Provides intuitive, descriptive names like "Shadow," "Charcoal," "Forest," and "Emerald"

## Requirements

- Node.js and npm (for development)
- Any modern web browser (for usage)

## Installation

### For Development

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### For Production

1. Build the application:
   ```bash
   npm run build
   ```
2. The build files will be in the `build` directory, which can be deployed to any static web server

## Usage

- Enter a year in the input field (between 0 and 9999)
- Click "Go" to display the calendar for that year
- Click on any day to see its date and corresponding color code
- The color sample will update to show the exact color

## Features

- Full year calendar view with all 12 months
- Interactive day selection to display color information
- Responsive design that works on desktop and mobile devices
- Simple and intuitive interface
- No server-side processing required - runs entirely in the browser

## Project Structure

```
colors-of-the-century/
├── public/             # Static files
│   ├── index.html      # HTML template
│   └── 404.html        # Custom 404 page for GitHub Pages
├── src/                # Source code
│   ├── components/     # React components
│   │   ├── Calendar.js # Main calendar component
│   │   ├── Month.js    # Individual month component
│   │   ├── FormatSelector.js # Date format selection component
│   │   ├── Popover.js  # Reusable popover component for additional information
│   │   └── YearInput.js# Year input form
│   ├── styles/         # CSS styles
│   │   ├── FormatSelector.css # Format selector styles
│   │   ├── Popover.css # Popover component styles
│   │   └── YearInput.css # Year input styles
│   ├── utils/          # Utility functions
│   │   └── colorNameMapper.js # Maps hex codes to color names
│   ├── App.js          # Main application component
│   ├── App.css         # Main application styles
│   ├── index.js        # Application entry point
│   └── index.css       # Global styles
├── .github/workflows/  # GitHub Actions workflows
│   └── deploy.yml      # Automatic deployment to GitHub Pages
├── constitution.md     # Project principles and guidelines
└── package.json        # Project dependencies and scripts
```

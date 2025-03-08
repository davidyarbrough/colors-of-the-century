# Colors of the Century

A simple calendar display application that shows a calendar view where each day is colored with a hex code derived from its date in the format DDMMYY.

## Description

This application allows users to:
- Input a year number
- View a calendar for that year
- See each day colored with its unique hex color code based on the date
- Click on days to see the exact color code

## How It Works

- Each day's color is determined by its date in the format #DDMMYY
- For example, January 1, 2025 would be colored #010125
- The application displays all 12 months of the selected year
- The app is built as a static React webpage, making it accessible from any browser

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
- Click "Generate Calendar" to display the calendar for that year
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
│   └── index.html      # HTML template
├── src/                # Source code
│   ├── components/     # React components
│   │   ├── Calendar.js # Main calendar component
│   │   ├── Month.js    # Individual month component
│   │   └── YearInput.js# Year input form
│   ├── styles/         # CSS styles
│   ├── App.js          # Main application component
│   ├── App.css         # Main application styles
│   ├── index.js        # Application entry point
│   └── index.css       # Global styles
└── package.json        # Project dependencies and scripts
```

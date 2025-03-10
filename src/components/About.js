import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/About.css';

/**
 * About page component with detailed information about the app
 * @returns {JSX.Element} About page component
 */
const About = () => {
  const location = useLocation();

  useEffect(() => {
    // Check for section query parameter
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get('section');

    if (section) {
      // Find the section element by ID
      const sectionElement = document.getElementById(section.charAt(0).toUpperCase() + section.slice(1));
      if (sectionElement) {
        // Scroll to the section with a slight delay to ensure rendering is complete
        setTimeout(() => {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Colors of the Century</h1>
        <a href="/" className="back-link">← Back to Calendar</a>
      </div>

      <div className="about-content">
        <section>
          <h2>Colors from Dates</h2>
          <p>
            Colors of the Century transforms dates into colors using their hexadecimal representation.
            Each day's date format is converted directly into a hex color code. For example,
            December 31, 2049 becomes <span className="color-code">#311249</span> in the DDMMYY format.
          </p>
          <p>
            This creates a unique visual pattern across the calendar, where days, months, and years
            influence the resulting colors in different ways. The application lets you explore these
            patterns and discover how time can be represented visually.
          </p>
        </section>

        <section>
          <h2>Date Formats</h2>
          <p>
            The application supports multiple date formats, each producing different color patterns:
          </p>
          <ul className="format-list">
            <li>
              <strong>Normal Format (DDMMYY)</strong>: The European-style day-month-year format.
              Example: December 31, 2049 becomes <span className="color-code">#311249</span>
            </li>
            <li>
              <strong>Lexicographic Format (YYMMDD)</strong>: The lexicographic order of year, month, and day.
              Example: December 31, 2049 becomes <span className="color-code">#491231</span>
            </li>
            <li>
              <strong>American Format (MMDDYY)</strong>: The US-style month-day-year format.
              Example: December 31, 2049 becomes <span className="color-code">#123149</span>
            </li>
          </ul>
          <p>
            You can switch between these formats using the selector at the top of the page.
            This allows you to explore how different date representations create entirely
            different color patterns throughout the year.
          </p>
        </section>

        <section>
          <h2>Bicolor Days</h2>
          <p>
            The first 9 days of February and December are special "bicolor days." These days have
            two different color interpretations:
          </p>
          <ul>
            <li>
              <strong>Standard Format</strong>: The normal #DDMMYY (day-month-year), lexical #YYMMDD (year-month-day), or American #MMDDYY (month-day-year) format
            </li>
            <li>
              <strong>Alternative Format</strong>: #DMMMYY, #YYMMMD, or #MMMDYY where D is the day (single digit), MMM is the first 3 letters
              of the month (FEB/DEC), and YY is the last 2 digits of the year
            </li>
          </ul>
          <p>
            These days are displayed with a diagonal split showing both color formats -
            the alternative color in the top-left and the standard color in the bottom-right.
            When you click on these days, the color information panel will show both color codes.
          </p>
          <p>
            The bicolor periods were chosen for February and December as they have three-letter abbreviations
            that are still valid hexadecimal characters.
          </p>
        </section>

        <section id="Bifecta">
          <h2>Bifecta Periods</h2>
          <p>
            A "Bifecta" is a special period that occurs when the first day of February or December
            falls on a Saturday. This means that the bicolor period (the first 9 days of these months)
            includes two full weekends.
          </p>
          <p>
            During a Bifecta, you'll see a total of 4 weekend days (2 Saturdays and 2 Sundays) all
            displaying bicolor representations. This creates a particularly colorful visual pattern
            in the calendar.
          </p>
          <p>
            The application automatically calculates and notifies you of the next upcoming Bifecta,
            so you can look forward to these special color periods.
          </p>
        </section>

        <section>
          <h2>Color Names</h2>
          <p>
            Each color in the application has a descriptive name, helping you understand and
            identify the colors beyond their hex codes. The naming system uses a comprehensive
            database of color names to find the closest recognizable color.
          </p>
          <p>
            Names include modifiers like "Light," "Dark," "Bright," etc., based on the color
            properties, providing an intuitive description of each shade. This feature enhances
            the educational value of the application by connecting technical hex codes with
            human-readable color names.
          </p>
        </section>

        <section>
          <h2>Background Gradients</h2>
          <p>
            The application features dynamic background gradients that change based on the
            selected date:
          </p>
          <ul>
            <li>
              <strong>Standard Days</strong>: The gradient transitions between the previous and next day's colors
            </li>
            <li>
              <strong>Bicolor Days</strong>: The gradient transitions between the day's two color interpretations
            </li>
          </ul>
          <p>
            These gradients create a more immersive experience, helping you visualize the
            relationships between adjacent days and between different color interpretations
            of the same date.
          </p>
        </section>
      </div>

      <footer className="about-footer">
        <p>© {new Date().getFullYear()} Colors of the Century</p>
      </footer>
    </div>
  );
};

export default About;

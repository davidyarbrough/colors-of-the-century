import React from 'react';
import Popover from './Popover';

/**
 * BifectaInfo - Displays information about the next bifecta
 * @param {Object} props - Component props
 * @param {Object|null} props.nextBifecta - Information about the next bifecta
 * @returns {JSX.Element} BifectaInfo component
 */
const BifectaInfo = ({ nextBifecta }) => {
  return (
    <small>
      The next <a href="#/about#Bifecta" style={{ color: 'inherit', textDecoration: 'underline', fontWeight: 'bold' }}>
        bifecta
      </a> is {nextBifecta ? `${nextBifecta.month === 2 ? 'February' : 'December'} ${nextBifecta.year} ` : 'loading...'} 
      {nextBifecta?.inProgress ? '(happening now!)' : '(coming soon)'}
    </small>
  );
};

export default BifectaInfo;

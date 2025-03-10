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
      The next <Popover 
        content="A 'bifecta' occurs when a bicolor period (the first 9 days of February or December) contains two full weekends. This happens when the 1st of the month falls on a Saturday, creating a unique 9-day stretch with both weekends fully contained within the winter bicolors. According to Colors of the Century traditions, bifectas are periods of special celebration, creativity, and renewal."
        position="bottom"
      >
        bifecta
      </Popover> is {nextBifecta ? `${nextBifecta.month === 2 ? 'February' : 'December'} ${nextBifecta.year} ` : 'loading...'} 
      {nextBifecta?.inProgress ? '(happening now!)' : '(coming soon)'}
    </small>
  );
};

export default BifectaInfo;

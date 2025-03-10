/**
 * Utility functions for bifecta calculations
 */

/**
 * Calculate the next bifecta (bicolor period with two weekends)
 * @returns {Object} The next bifecta details: month, year, and days included
 */
export const calculateNextBifecta = () => {
  // Use the current local date
  const today = new Date();
  
  // Start searching from the current year
  let currentYear = today.getFullYear();
  
  // Check up to 10 years in the future
  for (let yearOffset = 0; yearOffset < 10; yearOffset++) {
    const year = currentYear + yearOffset;
    
    // Check February 1st and December 1st of each year
    const checkMonths = [1, 11]; // February (1) and December (11) in JS
    
    for (const month of checkMonths) {
      // Create date object for the 1st of the month
      const firstOfMonth = new Date(year, month, 1);
      
      // Skip past dates
      if (firstOfMonth < today) {
        continue;
      }
      
      // If the 1st falls on a Saturday (day 6), it's a bifecta
      // This guarantees two full weekends in the 9-day bicolor period
      if (firstOfMonth.getDay() === 6) {
        // Check if it's happening right now
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month, 9);
        const isNow = startDate <= today && today <= endDate;
        
        return {
          month: month + 1, // Convert from JS 0-based months
          year,
          inProgress: isNow,
          isUpcoming: !isNow
        };
      }
    }
  }
  
  // Default fallback (should never reach here with 10-year search)
  return { month: 2, year: currentYear + 10, isUpcoming: true };
};

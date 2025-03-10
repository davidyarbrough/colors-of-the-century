import React, { useState, useRef, useEffect } from 'react';
import '../styles/Popover.css';

/**
 * Popover component for displaying additional information
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - The trigger element
 * @param {string} props.content - The content to display in the popover
 * @param {string} props.position - Position of the popover (top, bottom, left, right)
 */
const Popover = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef(null);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <span className="popover-container" ref={popoverRef}>
      <span 
        className="popover-trigger" 
        onClick={handleToggle}
        onKeyPress={(e) => e.key === 'Enter' && handleToggle()}
        tabIndex={0}
        role="button"
        aria-expanded={isVisible}
      >
        {children}
      </span>
      {isVisible && (
        <span className={`popover-content popover-${position}`}>
          {content}
          <span className={`popover-arrow popover-arrow-${position}`}></span>
        </span>
      )}
    </span>
  );
};

export default Popover;

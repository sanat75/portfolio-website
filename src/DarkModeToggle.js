// components/DarkModeToggle.js
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useDarkMode from './useDarkMode';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="theme-toggle"
      onClick={toggleDarkMode}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? (
        <FaSun className="sun-icon" />
      ) : (
        <FaMoon className="moon-icon" />
      )}
    </button>
  );
};

export default DarkModeToggle;
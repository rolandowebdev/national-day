import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className='transition-all duration-1000 ease-in-out rounded-full p-2'>
      {theme === 'dark' ? (
        <FaSun
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='text-slate-700 dark:text-white text-2xl cursor-pointer'
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='text-slate-700 dark:text-white text-2xl cursor-pointer'
        />
      )}
    </div>
  );
};

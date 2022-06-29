import React from 'react';
import { Toggle } from '../services/ThemeToggle';

export function Navbar() {
  return (
    <div className='sticky top-0 transition-all duration-700 shadow-lg bg-white/20 backdrop-blur-lg dark:bg-slate-700/20 dark:shadow-none shadow-slate-200'>
      <nav className='flex items-center justify-between h-16 max-w-4xl mx-auto'>
        <a className='flex items-center gap-2' href='/'>
          <svg
            width='48'
            height='48'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              className='stroke-slate-700 dark:stroke-white'
              d='M6 4C7.67 2.75 9.75 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.19 2.47999 8.48999 3.32999 7.01999L12 12'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              className='stroke-slate-700 dark:stroke-white'
              d='M6.82999 8.95999C6.29999 9.84999 6 10.89 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C11.09 6 10.22 6.20001 9.45001 6.57001'
              strokeWidth='1.5'
              strokeMiterlimit='10'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='text-xl font-semibold text-slate-700 dark:text-white'>
            National Day!
          </span>
        </a>
        <Toggle />
      </nav>
    </div>
  );
}

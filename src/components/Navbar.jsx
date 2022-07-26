import React from 'react';
import { Toggle } from '../services/ThemeToggle';
import { AiFillFlag } from 'react-icons/ai';

export function Navbar() {
  return (
    <div className='sticky top-0 px-8 duration-700 shadow-xl transition- bg-white/20 backdrop-blur-lg dark:bg-[#313d4d]/20 dark:shadow-none shadow-slate-200'>
      <nav className='flex items-center justify-between h-16 max-w-4xl mx-auto'>
        <a className='flex items-center gap-2' href='/'>
          <AiFillFlag className='text-4xl cursor-pointer text-slate-700 dark:text-white' />
          <span className='text-xl font-semibold text-slate-700 dark:text-white'>
            National Day
          </span>
        </a>
        <Toggle />
      </nav>
    </div>
  );
}

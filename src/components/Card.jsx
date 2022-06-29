import React from 'react';

export function Card({ search, holiday }) {
  return (
    <div className='flex flex-col gap-4 mt-6'>
      {search(holiday).map((day, index) => (
        <div
          className='p-4 rounded-md transition-all bg-red-500 dark:bg-slate-700'
          key={index}>
          <div className='flex gap-3 items-center'>
            <h3>{day.holiday_name}</h3>
            <span>{day.holiday_date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

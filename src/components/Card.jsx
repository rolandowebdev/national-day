import React from 'react';

export function Card({ search, holiday }) {
  return (
    <div className='flex flex-col gap-4 mt-6'>
      {search(holiday).map((day, index) => (
        <div className='bg-slate-600 p-4 rounded-md' key={index}>
          <div className='flex gap-3 items-center text-white'>
            <h3>{day.holiday_name}</h3>
            <span>{day.holiday_date}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

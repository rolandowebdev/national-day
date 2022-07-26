import React from 'react';
import { showFormattedDate } from '../utils/formatDate';

export function Card({ search, holiday }) {
  console.log(holiday);
  return (
    <>
      {search(holiday).length === 0 ? (
        <div className='flex flex-col gap-4 mr-2'>
          <div className='p-4 text-white rounded-md bg-rose-600'>
            <h3 className='text-center'>
              Opppsss... <span>National day is not defined!</span>
            </h3>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-4 mr-2'>
          {search(holiday)?.map((day, index) => (
            <div className='p-4 text-white rounded-md bg-[#313d4d]' key={index}>
              <h3 className='text-xl'>{day.holiday_name}</h3>
              <span className='inline-block px-2 py-1 mt-1 text-xs rounded-sm bg-rose-600'>
                {showFormattedDate(day.holiday_date)}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

import React from 'react';

export function Card({ search, holiday }) {
  console.log(holiday);
  return (
    <>
      {search(holiday).length === 0 ? (
        <div className='flex flex-col gap-4 mt-6'>
          <div className='p-4 text-white rounded-md bg-rose-600'>
            <h3 className='text-center'>
              Opppsss... <span>National day is not defined!</span>
            </h3>
          </div>
        </div>
      ) : (
        <div className='flex flex-col gap-4 mt-6'>
          {search(holiday)?.map((day, index) => (
            <div className='p-4 text-white rounded-md bg-slate-700' key={index}>
              <div className='flex items-center gap-3'>
                <h3>{day.holiday_name}</h3>
                <span>{day.holiday_date}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

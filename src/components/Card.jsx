import React from 'react';

export default function Card({ search, holiday }) {
  return (
    <div>
      <ul>
        {search(holiday).map((day, index) => (
          <li key={index}>{`${day.holiday_name} ${day.holiday_date}`}</li>
        ))}
      </ul>
    </div>
  );
}

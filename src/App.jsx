/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';

import { getList } from './services/listHoliday';

function App() {
  const [error, setError] = useState(null); // Set error if data is not defined
  const [isLoaded, setIsLoaded] = useState(false); // Set loading while load data
  const [holiday, setHoliday] = useState([]); // Set data holidays name

  const [query, setQuery] = useState(''); // Set query for searching data
  const [searchParam] = useState(['holiday_name']); // Set parameter for searching data

  /**
   * Get data holidays
   */
  useEffect(() => {
    getList().then(
      (holidays) => {
        setIsLoaded(true);
        setHoliday(holidays);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  /**
   * Function for search items holiday
   */
  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    });
  }

  // Check if fetch data is error
  if (error) {
    return <div>{`Error: ${error.message}`}</div>;
  }

  // Check data while is loading..
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='App'>
      <h1>Hello React</h1>
      <div>
        <span style={{ display: 'block' }} className='sr-only'>
          Search holiday name here!
        </span>
        <label htmlFor='search-form'>
          <input
            type='search'
            name='search-form'
            id='search-form'
            placeholder='Search...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <ul>
        {search(holiday).map((day, index) => (
          <li key={index}>{`${day.holiday_name} ${day.holiday_date}`}</li>
        ))}
      </ul>
      ;
    </div>
  );
}
export default App;

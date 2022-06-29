import React, { useState, useEffect } from 'react';
import { getList } from './services/listHoliday';

import { Search } from './components/Search';
import { Card } from './components/Card';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

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
    <div className='bg-slate-900'>
      <Navbar />
      <div className='grid place-items-center min-h-screen py-10 max-w-4xl my-0 mx-auto'>
        <div className='flex gap-10'>
          <div>
            <Search query={query} setQuery={setQuery} />
          </div>
          <div>
            <Card search={search} holiday={holiday} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;

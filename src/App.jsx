import React, { useState, useEffect } from 'react';
import { getList } from './services/listHoliday';

import { Search } from './components/Search';
import { Card } from './components/Card';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import IndonesiaFlag from './assets/indonesia.png';

function App() {
  const [error, setError] = useState(null); // Set error if data is not defined
  const [holiday, setHoliday] = useState([]); // Set data holidays name

  const [query, setQuery] = useState(''); // Set query for searching data
  const [searchParam] = useState(['holiday_name']); // Set parameter for searching data

  /**
   * Get data holidays
   */
  useEffect(() => {
    getList().then(
      (holidays) => {
        setHoliday(holidays);
      },
      (error) => {
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

  return (
    <div className='transition-all duration-700 bg-gray-100 dark:bg-slate-900 dark:from-slate-700 dark:to-slate-900'>
      <div className='min-h-screen'>
        <Navbar />
        <div className='grid max-w-4xl py-10 mx-auto place-items-center'>
          <div className='flex flex-col items-start gap-10 mx-8 lg:flex-row'>
            <div className='flex flex-col gap-8 basis-1/2'>
              <div className='flex items-center gap-7'>
                <img
                  className='block w-1/2'
                  src={IndonesiaFlag}
                  alt='Indonesia Flag'
                />
                <p className='text-xl font-semibold transition-all duration-700 text-slate-700 dark:text-white'>
                  Search Indonesia National day here!
                </p>
              </div>
              <Search query={query} setQuery={setQuery} />
            </div>
            <div className='basis-1/2 overflow-y-auto max-h-[31.25rem] w-full'>
              <Card search={search} holiday={holiday} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;

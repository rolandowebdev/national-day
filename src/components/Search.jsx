import React from 'react';

export function Search({ query, setQuery }) {
  return (
    <div>
      <label
        className='inline-block w-full mb-3 text-center text-slate-700 dark:text-white'
        htmlFor='search-form'>
        Search by national day name:
      </label>
      <input
        className='w-full px-3 py-2 bg-transparent border-2 rounded-md text-slate-700 dark:text-white border-slate-700 dark:border-white dark:placeholder:text-white placeholder:text-slate-700'
        type='text'
        name='search-form'
        id='search-form'
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

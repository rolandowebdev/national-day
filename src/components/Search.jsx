import React from 'react';

export function Search({ query, setQuery }) {
  return (
    <div className='search-wrapper'>
      <label htmlFor='search-form'>
        <input
          type='text'
          name='search-form'
          id='search-form'
          placeholder='Search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
    </div>
  );
}

import React, { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState(''); // Set query for searching data
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

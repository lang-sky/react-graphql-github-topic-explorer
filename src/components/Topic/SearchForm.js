import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get('name'));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name to Search</label>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get('name'));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name });
  };

  useEffect(() => {
    setName(searchParams.get('name'));
  }, [searchParams]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name to Search: </label>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

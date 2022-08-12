import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from './SearchForm';
import List from './List';

const Topic = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name');

  return (
    <>
      <SearchForm />
      {!!name && <List name={name} />}
    </>
  );
};

export default Topic;

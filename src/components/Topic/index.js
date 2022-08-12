import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from './SearchForm';
import List from './List';
import './index.css';

const Topic = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get('name');

  return (
    <div className="container">
      <SearchForm />
      {!!name && <List name={name} />}
    </div>
  );
};

export default Topic;

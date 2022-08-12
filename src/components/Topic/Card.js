import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, stargazerCount }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>Stargazer Count: {stargazerCount}</p>
      <Link to={`/topic?name=${name}`}>Search Related Topics</Link>
    </div>
  );
};

export default Card;

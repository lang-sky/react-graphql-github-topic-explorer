import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Card from './Card';

const List = ({ name }) => {
  const { loading, error, data } = useQuery(GET_TOPIC, {
    variables: { name },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div className="list">
      {data.topic.relatedTopics.map(({ id, name, stargazerCount }) => (
        <Card key={id} name={name} stargazerCount={stargazerCount} />
      ))}
    </div>
  );
};

const GET_TOPIC = gql`
  query Topic($name: String!) {
    topic(name: $name) {
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
    }
  }
`;

export default List;

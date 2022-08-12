import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GRAPHQL_URI, GITHUB_API_TOKEN } from './config';

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = GITHUB_API_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  uri: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

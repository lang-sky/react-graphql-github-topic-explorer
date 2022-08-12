# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth. There should also be Search capability to search/query on any term or topic. You should implement best practices with the UI.

To interact with the Github GraphQL API you'll need to have

- a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

- We will pay particular attention to the way the code is organized, and to the overall readability
- Unit tests will be greatly appreciated
- Design will be ignored, however usability and accessibility will be taken into consideration
- Remember to update this README with instructions on how to install, run and test your application
- Your first goal is to have a working app, but feel free to improve the application however you see fit
- We hope that you can complete the assignment within 2 hours but don't set any time constraints
- Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

- I have chosen @apollo/client to run graphql query against github

### How to run app & test

- Copy `.env.template` to `.env` and use your token for `REACT_APP_GITHUB_API_TOKEN`
- Run `npm install`
- Run `npm run start` to run the app on your local
- You will be automatically redirected to `/topic?name=react`
- Whenever you update search, or click `View details`, you will be redirected to a new query path, something like, `/topic?name=angular`
- Enjoy

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- I have to add testing for the graphql and components
- Code structuring is fine for now
- I will need to use other css framework or separate `.css` to support each `.js` component, and update styling

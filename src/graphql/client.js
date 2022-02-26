import {
    ApolloClient,
    InMemoryCache,
    HttpLink} from '@apollo/client'
  
   const client = new ApolloClient({
      link: new HttpLink({
        uri:'https://music-share-graphql.hasura.app/v1/graphql',
        headers: {
          'content-type': 'application/json',
          'x-hasura-admin-secret': process.env.REACT_APP_HASURA_ADMIN_KEY
        }
      }),
      cache: new InMemoryCache()
    });
export default client
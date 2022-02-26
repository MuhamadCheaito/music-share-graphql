import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client'
import { WebSocketLink } from "@apollo/client/link/ws";

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss://music-share-graphql.hasura.app/v1/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          'content-type': 'application/json',
          'x-hasura-admin-secret': process.env.REACT_APP_HASURA_ADMIN_KEY
        },
      }
    },
  }),
  cache: new InMemoryCache()
});
export default client
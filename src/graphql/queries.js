import { gql } from '@apollo/client'

export const GET_QUEUED_SONGS = gql`
query getQueuedSongs{
  queue @client {
    id
    duration
    title
    artist
    thumbnail
    url
  }
}`
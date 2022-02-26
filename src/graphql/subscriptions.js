import {gql} from '@apollo/client'

export const GET_SONGS = gql`
subscription getSongs {
    song(order_by: {create_at: desc}) {
      artist
      duration
      id
      thumbnail
      title
      url
    }
  }
  
`
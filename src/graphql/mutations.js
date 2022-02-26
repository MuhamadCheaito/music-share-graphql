import { gql } from '@apollo/client'

export const ADD_SONG = gql`
mutation addSong($title: String!, $artist: String!, $thumbnail: String!, $duration: Float!, $url: String!) {
    insert_song(objects: {title: $title, artist: $artist, thumbnail: $thumbnail, duration: $duration, url: $url}) {
      affected_rows
    }
  }
  `
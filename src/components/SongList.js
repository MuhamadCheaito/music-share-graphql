import { useSubscription } from '@apollo/client'
import { PlayArrow, Save } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardMedia, CircularProgress, IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { GET_SONGS } from '../graphql/subscriptions'

const useStyles = makeStyles(theme => ({
  container:{
    margin: theme.spacing(3)
  },
  songInfoContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  songInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  thumbnail:{
    objectFit: 'cover',
    width: 140,
    height: 140
  },
}))


const SongList = () => {
  const {data, loading, error} = useSubscription(GET_SONGS)

  if(loading){
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50
      }}>
        <CircularProgress />
      </div>
    )
  }
  if(error) return <div>Error fetching songs</div>
  return (
    <div>{data.song.map((song, i) => (
      <Song key={song.id} song={song}/> 
    ))}</div>
  )
}

function Song({song}) {
  const {title,artist,thumbnail} = song
  const classes = useStyles()
  return <Card className={classes.container}>
    <div className={classes.songInfoContainer}>
      <CardMedia image={thumbnail} className={classes.thumbnail}/>
      <div className={classes.songInfo}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography  variant="body1" component="p" color="textSecondary">
            {artist}
          </Typography>
        </CardContent>
        <CardActions>
            <IconButton size="small" color="primary">
              <PlayArrow/>
            </IconButton>
            <IconButton size="small">
              <Save color="info"/>
            </IconButton>
        </CardActions>
      </div>
    </div>
  </Card>
}
export default SongList
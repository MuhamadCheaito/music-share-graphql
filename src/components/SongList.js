import { PlayArrow, Save } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardMedia, CircularProgress, IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

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
  let loading = false
  const song = {
    title: "Cartoon ON & ON",
    artist:"NCS",
    thumbnail:"https://i.ytimg.com/vi/K4DyBUG242c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVDGZSQEPvPuF1QyELmT2FV6vdaQ"
  }
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
  return (
    <div>{Array.from({length: 10}, () => song).map((song, i) => (
      <Song key={i} song={song}/> 
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
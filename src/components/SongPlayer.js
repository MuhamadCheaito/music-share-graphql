import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material'
import { Card, CardContent, CardMedia, IconButton, Slider, Typography } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import QueuedSongList from './QueuedSongList'
import { makeStyles } from '@mui/styles'
import { SongContext } from '../App'
import { GET_QUEUED_SONGS } from '../graphql/queries'
import { useQuery } from '@apollo/react-hooks'
import ReactPlayer from 'react-player'


const useStyles = makeStyles(theme => ({
  container:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    padding:'0px 15px'
  },
  content: {
    flex: '1 0 auto'
  },
  thumbnail:{
    width:150
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}))

const SongPlayer = () => {
  const { data } = useQuery(GET_QUEUED_SONGS)
  const { state, dispatch } = useContext(SongContext)
  const [played,setPlayed] = useState(0)
  const [seeking,setSeeking] = useState(false)
  const [playedSeconds,setPlayedSeconds] = useState(0)
  const reactPlayerRef = useRef()
  const classes = useStyles()
  function handleTogglePlay(){
    dispatch(state.isPlaying ? {type: "PAUSE_SONG"} : {type: "PLAY_SONG"})
  }
  function handleProgressChange(event, newValue) {
    setPlayed(newValue)
  }
  function handleSeekMouseDown() {
    setSeeking(true)
  }
  function handleSeekMouseUp() {
    setSeeking(false)
    reactPlayerRef.current.seekTo(played)
  }
  function formatDuration(seconds){
    return new Date(seconds * 1000).toISOString().substring(11,19)
  }
  return (
    <>
      <Card variant='outlined' className={classes.container}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h5" component="h3">
              {state.song.title}
            </Typography>
            <Typography variant="subtitle1" component="p" color="textSecondary">
              {state.song.artist}
            </Typography>
          </CardContent>
        <div className={classes.controls}>
          <IconButton>
            <SkipPrevious/>
          </IconButton>
          <IconButton onClick={handleTogglePlay}>
           { state.isPlaying ? <Pause className={classes.playIcon}/> : <PlayArrow className={classes.playIcon}/>}
          </IconButton>
          <IconButton>
            <SkipNext/>
          </IconButton>
          <Typography variant="subtitle1" component="p" color="textSecondary">
              {formatDuration(playedSeconds)}
            </Typography>
        </div>

        <Slider 
        type="range"
        onMouseDown={handleSeekMouseDown}
        onMouseUp={handleSeekMouseUp}
        onChange={handleProgressChange}
        value={played}
        min={0}
        max={1}
        step={0.01}/>
        </div>
        <ReactPlayer
         onProgress={({played,playedSeconds}) => {
          if(!seeking){
            setPlayed(played)
            setPlayedSeconds(playedSeconds)
          }
         }}
         ref={reactPlayerRef}
         url={state.song.url} playing={state.isPlaying} hidden/>
        <CardMedia 
        className={classes.thumbnail}
        image={state.song.thumbnail}
        />
      </Card>
      <QueuedSongList queue={data.queue}/>
    </>
  )
}

export default SongPlayer
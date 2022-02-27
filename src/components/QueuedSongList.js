import { Typography,Avatar,IconButton,useMediaQuery } from '@mui/material'
import { Delete } from '@mui/icons-material';
import {makeStyles} from '@mui/styles';
import React from 'react'

const useStyles = makeStyles({
  avatar:{
    width: 44,
    height: 44,
  },
  text:{
    textOverflow: 'ellipsis',
    overflow:'hidden'
  },
  container:{
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: '50px auto 50px',
    gridGap: 12,
    alignItems:'center',
    marginTop: 10
  },
  songInfoContainer:{
    overflow:'hidden',
    whiteSpace: 'nowrap'
  }
})
const QueuedSongList = ({ queue }) => {
  console.log({queue})
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'))

  return greaterThanMd && (
    <div style={{margin: '10px 0'}}>
      <Typography color="textSecondary" variant="button">
        QUEUE ({queue.length})
      </Typography>
      {queue.map((song,i) => (
        <QueuedSong key={i} song={song}/>
      ))}
    </div>
  )
}
function QueuedSong({ song }){
  const {thumbnail, artist, title} = song
  const classes = useStyles();
  return <div className={classes.container}>
    <Avatar src={thumbnail} alt="Song thumbnail" className={classes.avatar} />
    <div className={classes.songInfoContainer}>
        <Typography variant="subtitle2" className={classes.text}>
          {title}
        </Typography>
        <Typography color="textSecondary" className={classes.text} variant="body2">
          {artist}
        </Typography>
    </div>
    <IconButton>
      <Delete color="error"/>
    </IconButton>
  </div>
}
export default QueuedSongList
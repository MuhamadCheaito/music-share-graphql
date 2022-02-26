import { AddBoxOutlined, Link} from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  contianer:{
    display: 'flex',
    alignItems:'center'
  },
  urlInput:{
    margin: theme.spacing(1)
  },
  addSongButton: {
    margin: theme.spacing(1)
  },
  dialog: {
    textAlign: 'center'
  },
  thumbnail:{
    width: '90%'
  }
}))

const AddSong = () => {
  const [dialog, setDialog] = useState(false);
  const classes = useStyles()
  function handleCloseDialog(){
    setDialog(false);
  }
  return (
    <div className={classes.contianer}>
      <Dialog
        className={classes.dialog}
        open = {dialog}
        onClose ={handleCloseDialog}
      >
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <img
          className={classes.thumbnail} 
          src="https://i1.sndcdn.com/artworks-000139388775-58i47c-t500x500.jpg"
          alt="Song thumbnail"/>
          <TextField
            margin='dense'
            name='title'
            label="Title"
            variant='standard'
            fullWidth
          />
          <TextField
            margin='dense'
            name='artist'
            label="Artist"
            variant='standard'
            fullWidth
          />
          <TextField
            margin='dense'
            name='thumbnail'
            label="Thumbnail"
            variant='standard'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="info">Cancel</Button>
          <Button variant="outlined" color="primary">Add Song</Button>
        </DialogActions>
      </Dialog>
      <TextField
      className={classes.urlInput}
      placeholder='Add Youtube or Soundcloud Url'
      fullWidth
      margin='normal'
      variant="standard"
      type="url"
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Link/>
          </InputAdornment>
        )
      }}/>
      <Button 
      onClick={() => setDialog(true)}
      variant="contained"
      className={classes.addSongButton}
      color="primary"
      endIcon={<AddBoxOutlined/>}>Add</Button>
    </div>
  )
}

export default AddSong
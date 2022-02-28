import { AppBar,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { HeadsetTwoTone } from '@mui/icons-material'

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2)
  },
}))
const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar color='primary' position='fixed'>
        <Toolbar>
          <HeadsetTwoTone  />
          <Typography className={classes.title} variant="h6" component="h1">
             Music Share GraphQL
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
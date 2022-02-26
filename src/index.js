import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ThemeProvider} from '@mui/material/styles'
import theme from './theme'
import { CssBaseline } from '@mui/material'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <CssBaseline />
  </ThemeProvider>,
  document.getElementById('root')
);

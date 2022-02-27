import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ThemeProvider} from '@mui/material/styles'
import theme from './theme'
import { CssBaseline } from '@mui/material'
import client from './graphql/client'
import { ApolloProvider } from '@apollo/react-hooks'

ReactDOM.render(
  <ApolloProvider client={client}>
  <ThemeProvider theme={theme}>
    <App />
    <CssBaseline />
  </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

import Header from './components/Header'
import AddSong from './components/AddSong'
import SongList from './components/SongList'
import SongPlayer from './components/SongPlayer'
import { Grid, useMediaQuery, Hidden } from '@mui/material'
import { createContext, useContext, useReducer } from 'react'
import songReducer from './reducer'

export const SongContext = createContext({
    song: {
      id:"9e06f755-d8ad-4b0a-bc0a-93b6e8cefb96",
      title:"Cartoon - On & On (feat. Daniel Levi)",
      artist:"NCS Release",
      thumbnail:"http://img.youtube.com/vi/K4DyBUG242c/0.jpg",
      url:"https://www.youtube.com/watch?v=K4DyBUG242c",
      duration:208
    },
    isPlaying: false
})
function App() {
  const initialSongState = useContext(SongContext)
  const [state,dispatch] = useReducer(songReducer, initialSongState);
  const greaterThanSm = useMediaQuery(theme => theme.breakpoints.up('sm'))
  const greaterThanMd = useMediaQuery(theme => theme.breakpoints.up('md'))

  return (
    <SongContext.Provider value={{state,dispatch}}>
      <Hidden only="xs">
        <Header/>
      </Hidden>
      <Grid container spacing={3}>
        <Grid style={{
          paddingTop: greaterThanSm ?  100 :  20
        }}
        item xs={12} md={7}>
          <AddSong />
          <SongList />
        </Grid>
        <Grid style={
          greaterThanMd ? {
          position: 'fixed',
          width: '100%',
          right:0,
          top:70
         } : {
          position: 'fixed',
          width: '100%',
          left:0,
          bottom:0
         }} item xs={12} md={5}>
          <SongPlayer />
        </Grid>
    </Grid>
    </SongContext.Provider>
  )
}

export default App;

import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavbarHome } from './components'
import { ArtistDetails, Home, Login, PlaylistDetails, Recently, SearchDetails, Top, TrackDetails } from './pages'
import { useCurrentUser } from './hooks'
import getCurrentUser from './api/getCurrentUser'

function App() {
  const { setCurrentUser, currentUser } = useCurrentUser()

  useEffect(() => {
    const token = localStorage.getItem("spotify_token")
    if (token) fetchGetCurrentUser()
  }, [])

  async function fetchGetCurrentUser() {
    try {
      const response = await getCurrentUser()
      setCurrentUser(response)
    } catch (error) {
      console.error('Error fetching current user:', error)
    }
  }

  return (
    <>
      {currentUser && <NavbarHome />}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/top' element={<Top />} />
        <Route path='/recently' element={<Recently />} />

        <Route path='/track/:id' element={<TrackDetails />} />
        <Route path='/artist/:id' element={<ArtistDetails />} />
        <Route path='/playlist/:id' element={<PlaylistDetails />} />
        <Route path='/search/:query' element={<SearchDetails />} />

        <Route path='*' element={<Login />} />
      </Routes>
    </>
  )
}

export default App

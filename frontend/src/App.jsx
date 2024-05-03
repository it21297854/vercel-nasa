import HomePage from './components/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import APODCompenent from './Api/APODCompenent'
import AsteroidPage from './Api/AsteroidPage'
import DonkiPage from './Api/DonkiPage'
import Signup from './LoginSignup/Signup'
import Login from './LoginSignup/Login'
import EarthApi from './Api/EarthApi'
import EPICImagery from './Api/EpicImagery'
import NASALibraryPage from './Api/NASALibraryPage'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<HomePage />} />
          <Route exact path='/Apod' element={<APODCompenent />} />
          <Route exact path='/Asteroid' element={<AsteroidPage />} />
          <Route exact path='/Donki' element={<DonkiPage />} />
          <Route exact path='/Signup' element={<Signup />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Earth' element={<EarthApi />} />
          <Route exact path='/EPICImagery' element={<EPICImagery />} />
          <Route exact path='/NasaLibrary' element={<NASALibraryPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

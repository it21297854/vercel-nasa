import Navbar from '../components/Navbar'
import { Container } from 'react-bootstrap'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <Container className='py-5 text-center'>
          <h1 className='display-4 mb-4'>Welcome to NASA Explorer</h1>
          <p className='lead'>Explore the wonders of space with NASA APIs</p>
        </Container>
      </div>
    </>
  )
}

export default HomePage

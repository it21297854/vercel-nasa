import { Link } from 'react-router-dom' // Import Link from react-router-dom
import { Navbar, Container, Nav } from 'react-bootstrap' // Import Navbar, Container, Nav from react-bootstrap

const CustomNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand as={Link} to='/home'>
          NASA Explorer
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/home'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/Apod'>
            APOD
          </Nav.Link>
          <Nav.Link as={Link} to='/Asteroid'>
            Asteroid
          </Nav.Link>
          <Nav.Link as={Link} to='/Donki'>
            Donki
          </Nav.Link>
          <Nav.Link as={Link} to='/NasaLibrary'>
            NasaLibrary
          </Nav.Link>
          <Nav.Link as={Link} to='/Earth'>
            Earth
          </Nav.Link>
          <Nav.Link as={Link} to='/EPICImagery'>
            EPICImagery
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar

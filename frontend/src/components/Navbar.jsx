import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom' // Import Link from react-router-dom
import { Navbar, Container, Nav, Button } from 'react-bootstrap' // Import Navbar, Container, Nav from react-bootstrap

const CustomNavbar = () => {
  // const { isUserloggedIn, logout } = useContext(AuthContext)
  // const log = isUserloggedIn()
  const log = true
  const navigate = useNavigate()
  const log_out = () => {
    // logout()
    navigate('/login')
  }
  return (
    <>
      {' '}
      {log ? (
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand as={Link} to='/home'>
              NASA Explorer
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
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
              {/* <Nav>
                <Button variant='outline-light' onClick={log_out}>
                  Logout
                </Button>
              </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar>
          <Container>
            <Navbar.Brand as={Link} to='/home'>
              NASA Explorer
            </Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/home'>
                Home
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </>
  )
}

export default CustomNavbar

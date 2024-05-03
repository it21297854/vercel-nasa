import { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import signupImage from '../assets/signup-image.jpg' // Import the image

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/register', formData)
      .then((response) => {
        console.log('Signup successful:', response.data)
        navigate('/login')
      })
      .catch((error) => {
        console.error('Error signing up:', error)
      })
  }

  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>
      {/* Image */}
      <div className='mr-4' style={{ width: '82%' }}>
        <img
          src={signupImage}
          alt='Signup'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            border: '2px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </div>

      {/* Form */}
      <div className='border p-5 rounded' style={{ width: '50%' }}>
        <h2 className='text-center mb-4'>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Form.Text className='text-muted'>
              We will never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className='d-grid gap-2'>
            <Button variant='dark' type='submit' size='sm'>
              Sign Up
            </Button>
            <p className='text-center mt-2'>
              Already signed in? <Link to='/login'>Go to login</Link>
            </p>
          </div>
        </Form>
      </div>
    </Container>
  )
}

export default Signup

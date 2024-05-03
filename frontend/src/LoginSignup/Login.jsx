import { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import loginImage from '../assets/login-image.png' // Import the image

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [validated, setValidated] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.stopPropagation()
    }
    setValidated(true)

    axios
      .post('http://localhost:3001/login', formData)
      .then((result) => {
        console.log(result)
        if (result.data === 'Success') {
          navigate('/home')
        } else {
          setError(result.data)
        }
      })
      .catch((error) => setError(error.message))
  }

  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>
      {/* Image */}
      <div className='mr-4'>
        <img
          src={loginImage}
          alt='Login'
          style={{
            width: '100%',
            height: '100%',
            border: '2px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </div>
      <div className='border p-5 rounded'>
        {/* Form */}
        <h2 className='text-center mb-4'>Log In</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
            <Form.Control.Feedback type='invalid'>
              Please provide a valid email.
            </Form.Control.Feedback>
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
            <Form.Control.Feedback type='invalid'>
              Please provide a password.
            </Form.Control.Feedback>
          </Form.Group>

          <div className='d-grid gap-2'>
            <Button variant='dark' type='submit' size='sm'>
              Log In
            </Button>
            <p className='text-center mt-2'>
              Do not have an account?{' '}
              <Link to='/signup' variant='dark'>
                Sign up
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </Container>
  )
}

export default Login

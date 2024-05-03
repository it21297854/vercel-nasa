import { useState } from 'react'
import { Container, Form, Button, Image } from 'react-bootstrap'
import axios from 'axios'
import Navbar from '../components/Navbar'

const LandsatImagery = () => {
  const [formData, setFormData] = useState({
    lat: '',
    lon: '',
    date: '',
  })
  const [imageUrl, setImageUrl] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(
        'https://api.nasa.gov/planetary/earth/imagery',
        {
          params: {
            lat: formData.lat,
            lon: formData.lon,
            date: formData.date,
            api_key: 'BQFS7sTKkPG46CyI2MG5Uf3wxbeq4xSGnuZYlaHi',
          },
        }
      )
      console.log('Response:', response) // Log the response
      setImageUrl(response.data.url)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <Navbar />
      <Container className='py-4'>
        <h1 className='text-center mb-4'>Landsat 8 Imagery</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicLatitude' className='mb-3'>
            <Form.Label>Latitude</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter latitude'
              name='lat'
              value={formData.lat}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId='formBasicLongitude' className='mb-3'>
            <Form.Label>Longitude</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter longitude'
              name='lon'
              value={formData.lon}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId='formBasicDate' className='mb-3'>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type='date'
              placeholder='Select date'
              name='date'
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Get Imagery
          </Button>
        </Form>
        {error && <p className='text-danger mt-3'>{error}</p>}
        {imageUrl && (
          <div className='mt-4'>
            <h2 className='text-center mb-3'>Landsat 8 Imagery</h2>
            <Image
              src={`https://api.nasa.gov${imageUrl}`}
              alt='Landsat 8 Imagery'
              fluid
            />
          </div>
        )}
      </Container>
    </>
  )
}

export default LandsatImagery

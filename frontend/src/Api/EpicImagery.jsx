import { useState } from 'react'
import { Container, Form, Button, Image } from 'react-bootstrap'
import axios from 'axios'
import Navbar from '../components/Navbar'

const EpicPage = () => {
  const [date, setDate] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(
        `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=DEMO_KEY`
      )
      if (response.data && response.data[0]) {
        const imageName = response.data[0].image
        setImageUrl(
          `https://api.nasa.gov/EPIC/archive/natural/${date.slice(
            0,
            4
          )}/${date.slice(5, 7)}/${date.slice(
            8,
            10
          )}/png/${imageName}.png?api_key=DEMO_KEY`
        )
      } else {
        setError('No image available for the selected date.')
      }
    } catch (error) {
      setError('Error fetching image data.')
    }
  }

  return (
    <>
      <Navbar />
      <Container className='py-4'>
        <h1 className='text-center mb-4'>EPIC Imagery</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicDate' className='mb-3'>
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Get Image
          </Button>
        </Form>
        {error && <p className='text-danger mt-3'>{error}</p>}
        {imageUrl && (
          <div className='mt-4'>
            <h2 className='text-center mb-3'>EPIC Imagery</h2>
            <Image src={imageUrl} alt='EPIC Imagery' fluid />
          </div>
        )}
      </Container>
    </>
  )
}

export default EpicPage

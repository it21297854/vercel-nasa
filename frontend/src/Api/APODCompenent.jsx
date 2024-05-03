import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../components/Navbar'
const APODComponent = () => {
  const [apodData, setApodData] = useState(null)
  const apiKey = 'BQFS7sTKkPG46CyI2MG5Uf3wxbeq4xSGnuZYlaHi'

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setApodData(data))
      .catch((error) => console.error('Error fetching APOD data:', error))
  }, [apiKey])

  if (!apodData) {
    return <div>Loading...</div>
  }

  const isYouTubeVideo = apodData.url.includes('youtube.com')

  return (
    <>
      <Navbar />
      <h1 className='display-4 text-center mt-5 mb-4'>
        Astronomy Picture of the Day
      </h1>

      <Container className='my-4'>
        <div className='d-flex justify-content-center align-items-center mb-4'>
          {isYouTubeVideo ? (
            <iframe
              title={apodData.title}
              src={apodData.url}
              allowFullScreen
              className='img-fluid'
              style={{ maxWidth: '80vw' }} // Adjust maximum width of the iframe
            ></iframe>
          ) : (
            <img
              src={apodData.url}
              alt={apodData.title}
              className='img-fluid'
              style={{ maxWidth: '80vw' }} // Adjust maximum width of the image
            />
          )}
        </div>
        <h2 className='h4 text-center'>{apodData.title}</h2>
        <p className='text-center'>{apodData.explanation}</p>
      </Container>
    </>
  )
}

export default APODComponent

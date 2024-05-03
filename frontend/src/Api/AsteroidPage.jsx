import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../components/Navbar'

const AsteroidPage = () => {
  const [asteroids, setAsteroids] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const apiKey = 'BQFS7sTKkPG46CyI2MG5Uf3wxbeq4xSGnuZYlaHi'

  useEffect(() => {
    const fetchAsteroids = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-04-20&end_date=2024-04-21&api_key=${apiKey}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setAsteroids(data.near_earth_objects['2024-04-21'])
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchAsteroids()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <Navbar />
      <Container className='d-flex flex-column align-items-center justify-content-center mt-5'>
        <h1 className='asteroid-title text-center mb-4'>Asteroids - NeoWs</h1>
        <ul className='list-group text-center'>
          {asteroids.map((asteroid) => (
            <li key={asteroid.id} className='list-group-item'>
              <p>Name: {asteroid.name}</p>
              <p>
                Approach Date:{' '}
                {asteroid.close_approach_data[0].close_approach_date_full}
              </p>
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export default AsteroidPage

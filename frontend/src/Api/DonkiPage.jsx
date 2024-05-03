import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Navbar from '../components/Navbar'

const DonkiPage = () => {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const apiKey = 'BQFS7sTKkPG46CyI2MG5Uf3wxbeq4xSGnuZYlaHi'

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=${apiKey}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setNotifications(data)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchNotifications()
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
        <h1 className='text-center mb-4'>Space Weather Notifications</h1>
        <ul className='list-group text-center'>
          {notifications.map((notification, index) => (
            <li key={index} className='list-group-item'>
              <p>Type: {notification.messageType}</p>
              <p>Message: {notification.messageBody}</p>
              <p>Time: {notification.messageIssueTime}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export default DonkiPage

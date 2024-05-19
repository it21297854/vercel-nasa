/* eslint-disable no-undef */
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import axios from 'axios' // Mock axios for testing
import Signup from './Signup'

jest.mock('axios') // Mock axios

describe('Signup component', () => {
  test('should submit signup form successfully', async () => {
    const navigate = jest.fn() // Mock useNavigate function
    const mockResponse = { data: 'Signup successful' }

    // Mock axios post method to resolve with mock response
    axios.post.mockResolvedValueOnce(mockResponse)

    render(<Signup />)

    // Fill out form fields
    fireEvent.change(screen.getByLabelText('Username'), {
      target: { value: 'testuser' },
    })
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'test@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    })

    // Submit form
    fireEvent.submit(screen.getByRole('button', { name: 'Sign Up' }))

    // Wait for axios post request to resolve
    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1))

    // Check if navigate function was called with correct route
    expect(navigate).toHaveBeenCalledWith('/login')
  })
})

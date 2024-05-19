/* eslint-disable no-undef */
import { render, fireEvent } from '@testing-library/react'
import LoginForm from './LoginForm'

test('LoginForm renders correctly', () => {
  const { getByLabelText, getByText } = render(<LoginForm />)

  const emailInput = getByLabelText('Email address')
  const passwordInput = getByLabelText('Password')
  const submitButton = getByText('Log In')

  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()

  expect(submitButton).toBeInTheDocument()
})

test('Submitting the form with valid credentials', () => {
  const { getByLabelText, getByText } = render(<LoginForm />)

  const emailInput = getByLabelText('Email address')
  const passwordInput = getByLabelText('Password')
  const submitButton = getByText('Log In')

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
  fireEvent.change(passwordInput, { target: { value: 'password123' } })
  fireEvent.click(submitButton)

  // Assert that the form is submitted correctly
})

test('Submitting the form with invalid credentials', () => {
  const { getByLabelText, getByText } = render(<LoginForm />)

  const emailInput = getByLabelText('Email address')
  const passwordInput = getByLabelText('Password')
  const submitButton = getByText('Log In')

  fireEvent.change(emailInput, { target: { value: 'invalidemail' } })
  fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } })
  fireEvent.click(submitButton)

  // Assert that appropriate error message is displayed
})

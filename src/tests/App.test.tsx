import { render, screen } from '@testing-library/react'
import React from 'react'
import App from '../App'
import '@testing-library/jest-dom'

describe('Imgur app', () => {
  test('render app component', () => {
    render(<App />)
  })
})

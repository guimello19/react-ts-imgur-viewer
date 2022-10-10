import { render, screen } from '@testing-library/react'
import App from '../App'
import '@testing-library/jest-dom'

describe('Imgur app', () => {
  test('render app component', () => {
    render(<App />)
    const galleryList = screen.getByTestId('gallery-section')
    expect(galleryList).toBeTruthy()
  })
})

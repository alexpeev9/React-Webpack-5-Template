import { screen, render } from '@testing-library/react'
import App from '.'

describe('App Component', () => {
  test('Check if heading has correct value', () => {
    render(<App />)
    screen.getByText('React Webpack 5 Template')
  })
})

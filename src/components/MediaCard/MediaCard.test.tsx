import React from 'react'
import { render, screen } from '@testing-library/react'
import MediaCard from './index'

describe('MediaCard Component', () => {
  test('renders MediaCard with given heading and text', () => {
    const heading = 'Sample Heading'
    const text = 'Sample Text'

    render(<MediaCard heading={heading} text={text} />)

    const headingElement = screen.getByText(heading)
    const textElement = screen.getByText(text)
    const shareButton = screen.getByText('Share')
    const learnMoreButton = screen.getByText('Learn More')

    expect(headingElement).toBeInTheDocument()
    expect(textElement).toBeInTheDocument()
    expect(shareButton).toBeInTheDocument()
    expect(learnMoreButton).toBeInTheDocument()
  })

  test('renders image with alt text', () => {
    const heading = 'Sample Heading'
    const text = 'Sample Text'

    render(<MediaCard heading={heading} text={text} />)

    const imageElement = screen.getByAltText('Random image')

    expect(imageElement).toBeInTheDocument()
  })
})

import React from "react";
import { render, screen } from '@testing-library/react'
import EmojiResultRow from './EmojiResultRow'

beforeEach(() => {
  const titleT = 'Grinning'
  const src = `//cdn.jsdelivr.net/emojione/assets/png/1f600.png`;

  render(<EmojiResultRow title={titleT} symbol={src} />);
})

describe('Emoji Result Row', () => {
  test('renders Click to copy span and role', () => {
    const spanElement = screen.getByRole('contentinfo')
    
    expect(spanElement).toBeInTheDocument()
    expect(spanElement).toHaveTextContent('Click to copy emoji')
    expect(spanElement).toHaveAttribute('role', 'contentinfo')
  })

  test('renders emoji title', () => {
    const title = screen.getByTestId('test-span')

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent('Grinning')
  })

  test('renders image', () => {
  const imgElement = screen.getByAltText('Grinning')

  expect(imgElement).toBeInTheDocument()
  expect(imgElement).toHaveAttribute('src', `//cdn.jsdelivr.net/emojione/assets/png/2f.png`)
  })
})
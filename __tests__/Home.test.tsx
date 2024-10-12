import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

describe('Home', () => {
  it('renders the create new paste heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /create new paste/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the recent public pastes heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /recent public pastes/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the create paste form', () => {
    render(<Home />);
    const textarea = screen.getByPlaceholderText(/enter your code or text here/i);
    const createButton = screen.getByRole('button', { name: /create paste/i });
    expect(textarea).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
  });

  it('renders the list of recent pastes', () => {
    render(<Home />);
    const pasteLinks = screen.getAllByRole('link');
    expect(pasteLinks.length).toBeGreaterThan(0);
  });
});
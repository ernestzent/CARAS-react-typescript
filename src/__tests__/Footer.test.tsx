import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer';

describe('Footer Component', () => {
  it('should renders contact information and social media links', () => {
    render(<Footer />);
    expect(screen.getByText(/contacto@caras\.com\.mx/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Facebook CARAS/i)).toBeInTheDocument();
    expect(screen.getByAltText(/X CARAS/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Instagram CARAS/i)).toBeInTheDocument();
  });
});
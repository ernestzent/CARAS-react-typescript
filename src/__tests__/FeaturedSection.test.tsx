import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedSection from '../components/FeaturedSection/FeaturedSection';

describe('FeaturedSection Component', () => {
  it('should renders the benefits and featured image', () => {
    render(<FeaturedSection />);
    expect(screen.getByText(/Tu pase VIP al centro de la noticia\./i)).toBeInTheDocument();
    expect(screen.getByText(/Exclusividad:/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Evento exclusivo/i)).toBeInTheDocument();
  });
});
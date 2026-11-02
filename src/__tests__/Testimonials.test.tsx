import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from '../components/Testimonials/Testimonials';

describe('Testimonials Component', () => {
  it('should renders the section title and all 6 testimonials', () => {
    render(<Testimonials />);
    expect(screen.getByText(/Lo que dicen nuestros suscriptores/i)).toBeInTheDocument();
    expect(screen.getByText('Luz')).toBeInTheDocument();
    expect(screen.getByText('Karen')).toBeInTheDocument();
  });
});
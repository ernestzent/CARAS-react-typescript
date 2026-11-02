import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

describe('Header Component', () => {
  it('should renders the logo, title, and subtitle correctly', () => {
    render(<Header />);

    const logo = screen.getByAltText(/Logo CARAS/i);
    const title = screen.getByText(/La exclusividad llega directo a tu correo\./i);
    const subtitle = screen.getByText(/Únete a nuestro newsletter y entérate antes que nadie/i);

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
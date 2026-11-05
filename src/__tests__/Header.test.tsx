import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

describe('Header Component', () => {
  test('renders the logo, title, and subtitle correctly', () => {
    render(<Header />);

    const logo = screen.getByAltText(/Logo CARAS/i);
    const title = screen.getByText(/La exclusividad llega directo a tu correo\./i);
    const subtitle = screen.getByText(/entérate antes que nadie sobre lo mejor del estilo de vida/i);
    const englishTerm = screen.getByText('newsletter');

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(englishTerm).toHaveAttribute('lang', 'en');
  });
});
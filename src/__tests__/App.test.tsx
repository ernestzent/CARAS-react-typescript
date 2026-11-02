import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Integration', () => {
  it('should renders all main sections of the landing page', () => {
    render(<App />);

    expect(screen.getByAltText(/Logo CARAS/i)).toBeInTheDocument();
    expect(screen.getByText(/La exclusividad llega directo a tu correo\./i)).toBeInTheDocument();

    expect(screen.getByText(/Suscríbete al boletín/i)).toBeInTheDocument();

    expect(screen.getByText(/Tu pase VIP al centro de la noticia\./i)).toBeInTheDocument();

    expect(screen.getByText(/Lo que dicen nuestros suscriptores/i)).toBeInTheDocument();

    expect(screen.getByText(/EDITORIAL TELEVISA S\.A\. DE C\.V\./i)).toBeInTheDocument();
  });

  it('should completes a full user subscription flow from the main App', () => {
    render(<App />);

    const nameInput = screen.getByLabelText(/Nombre completo/i);
    const emailInput = screen.getByLabelText(/Correo electrónico/i);
    const submitButton = screen.getByRole('button', { name: /Enviar/i });

    fireEvent.change(nameInput, { target: { value: 'Ernesto Centeno' } });
    fireEvent.change(emailInput, { target: { value: 'ernesto@caras.com.mx' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('¡Suscripción exitosa!')).toBeInTheDocument();
  });
});
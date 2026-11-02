import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import SubscriptionForm from '../components/SubscriptionForm/SubscriptionForm';

describe('SubscriptionForm Component', () => {
  it('should renders the input fields and submit button', () => {
    render(<SubscriptionForm />);

    expect(screen.getByLabelText(/Nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar/i })).toBeInTheDocument();
  });

  it('should displays error messages when submitting an empty form', () => {
    render(<SubscriptionForm />);
    
    const submitButton = screen.getByRole('button', { name: /Enviar/i });
    fireEvent.click(submitButton);

    expect(screen.getByText('El nombre es obligatorio.')).toBeInTheDocument();
    expect(screen.getByText('Ingresa un correo válido.')).toBeInTheDocument();
  });

  it('should displays an error if the email format is invalid', () => {
    render(<SubscriptionForm />);

    const nameInput = screen.getByLabelText(/Nombre completo/i);
    const emailInput = screen.getByLabelText(/Correo electrónico/i);
    const submitButton = screen.getByRole('button', { name: /Enviar/i });

    fireEvent.change(nameInput, { target: { value: 'Ernesto Centeno' } });
    fireEvent.change(emailInput, { target: { value: 'correo-sin-formato' } });
    fireEvent.click(submitButton);

    expect(screen.queryByText('El nombre es obligatorio.')).not.toBeInTheDocument();
    expect(screen.getByText('Ingresa un correo válido.')).toBeInTheDocument();
  });

  it('should displays success message and clears fields when data is valid', () => {
    render(<SubscriptionForm />);

    const nameInput = screen.getByLabelText(/Nombre completo/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/Correo electrónico/i) as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /Enviar/i });

    fireEvent.change(nameInput, { target: { value: 'Ernesto Centeno' } });
    fireEvent.change(emailInput, { target: { value: 'ernesto@caras.com.mx' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('¡Suscripción exitosa!')).toBeInTheDocument();
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
  });

  it('should hides the success message after 5 seconds', () => {
    jest.useFakeTimers();
    render(<SubscriptionForm />);

    fireEvent.change(screen.getByLabelText(/Nombre completo/i), { target: { value: 'Ernesto Centeno' } });
    fireEvent.change(screen.getByLabelText(/Correo electrónico/i), { target: { value: 'ernesto@caras.com.mx' } });
    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));

    expect(screen.getByText('¡Suscripción exitosa!')).toBeInTheDocument();

    act(() => { jest.advanceTimersByTime(5000); });

    expect(screen.queryByText('¡Suscripción exitosa!')).not.toBeInTheDocument();
    jest.useRealTimers();
  });
});
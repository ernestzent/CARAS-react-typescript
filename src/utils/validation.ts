import { FormData, FormErrors } from '../types';

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const validateSubscriptionForm = (formData: FormData): { isValid: boolean; errors: FormErrors } => {
  let isValid = true;
  const errors: FormErrors = { name: '', email: '' };

  if (!formData.name.trim()) {
    errors.name = 'El nombre es obligatorio.';
    isValid = false;
  }

  if (!isValidEmail(formData.email)) {
    errors.email = 'Ingresa un correo válido.';
    isValid = false;
  }

  return { isValid, errors };
};
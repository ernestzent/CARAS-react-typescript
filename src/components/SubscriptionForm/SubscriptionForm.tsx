import React, { useState } from 'react';
import styled from 'styled-components';
import { FormData, FormErrors } from '../../types';
import { validateSubscriptionForm } from '../../utils/validation';

const FormSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 60px 20px;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 500px;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #C81010; /* Contraste 6.15:1 sobre blanco */
  margin-top: 0;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333333; /* Contraste 12.6:1 sobre blanco */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #767676; /* Borde con contraste mínimo 3:1 para UI */
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
`;

const ErrorMsg = styled.span`
  color: #C81010; /* Contraste 6.15:1 */
  font-size: 0.85rem;
  font-weight: bold;
  display: block;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #C81010;
  color: #ffffff;
  padding: 15px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;

  &:hover {
    background-color: #9E0B0B;
  }
`;

const SuccessMsg = styled.div`
  color: #196F3D; /* Contraste 6.08:1 sobre blanco */
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

const SubscriptionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [errors, setErrors] = useState<FormErrors>({ name: '', email: '' });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateSubscriptionForm(formData);
    setErrors(validationErrors);

    if (isValid) {
      setIsSuccess(true);
      setFormData({ name: '', email: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <FormSection aria-labelledby="form-heading">
      <Card>
        <FormTitle id="form-heading">Suscríbete al boletín</FormTitle>
        <form onSubmit={handleSubmit} aria-label="Formulario de suscripción al boletín" noValidate>
          <FormGroup>
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <ErrorMsg id="name-error" role="alert">
                {errors.name}
              </ErrorMsg>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <ErrorMsg id="email-error" role="alert">
                {errors.email}
              </ErrorMsg>
            )}
          </FormGroup>

          <SubmitButton type="submit">Enviar</SubmitButton>
          {isSuccess && (
            <SuccessMsg role="status" aria-live="polite">
              ¡Suscripción exitosa!
            </SuccessMsg>
          )}
        </form>
      </Card>
    </FormSection>
  );
};

export default SubscriptionForm;
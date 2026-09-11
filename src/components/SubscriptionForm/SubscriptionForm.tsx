import { useState } from "react";
import styled from "styled-components";
import { FormData, FormErrors } from "../../types";

const FormSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 60px 20px;
`;

const Card = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 500px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
`;

const ErrorMsg = styled.span`
  color: #ED1E1E;
  font-size: 0.85rem;
  font-weight: bold;
  display: block;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #ED1E1E;
  color: white;
  padding: 15px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c81919;
  }
`;

const SuccessMsg = styled.div`
  color: #28a745;
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

  const validate = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = { name: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Ingresa un correo válido.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      setFormData({ name: '', email: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <FormSection>
      <Card>
        <h2 style={{ textAlign: 'center', color: '#ED1E1E' }}>Suscríbete al boletín</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
          </FormGroup>

          <SubmitButton type="submit">Enviar</SubmitButton>
          {isSuccess && <SuccessMsg>¡Suscripción exitosa!</SuccessMsg>}
        </form>
      </Card>
    </FormSection>
  );
};

export default SubscriptionForm;
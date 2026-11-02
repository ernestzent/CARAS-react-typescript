import { isValidEmail, validateSubscriptionForm } from "../utils/validation"

describe('Validation utility functions unit tests', () => {
    it('isValidEmail correctly validates email formates', () => {
        expect(isValidEmail('usuario@caras.com.mx')).toBe(true);
        expect(isValidEmail('correo_invalido')).toBe(false);
        expect(isValidEmail('usuario@dominio')).toBe(false);
        expect(isValidEmail('')).toBe(false);
    });

    it('should validateSubscriptionForm returns errors when fields are empty', () => {
        const result = validateSubscriptionForm({ name: '   ', email: '' });
        expect(result.isValid).toBe(false);
        expect(result.errors.name).toBe('El nombre es obligatorio.');
        expect(result.errors.email).toBe('Ingresa un correo válido.');
    });

    it('should validateSubscriptionForm approves valid data without errors', () => {
        const results = validateSubscriptionForm({ name: 'Ernesto', email: 'ernesto@ejemplo.com'});
        expect(results.isValid).toBe(true);
        expect(results.errors.name).toBe('');
        expect(results.errors.email).toBe('');
    });
});
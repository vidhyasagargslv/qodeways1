
import { jest } from '@jest/globals';

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  secondName?: string;
  phoneNumber?: string;
  role?: string;
  orgName?: string;
  orgAddress?: string;
  orgPhone?: string;
}

test('should return true when all form data is valid', () => {
  const formData = {
    username: 'testuser',
    email: 'test@example.com',
    password: 'Password123',
    confirmPassword: 'Password123',
    firstName: 'John',
    secondName: 'Doe',
    phoneNumber: '1234567890',
    role: 'Developer',
    orgName: 'Test Org',
    orgAddress: '123 Test St',
    orgPhone: '9876543210',
  };
  const setErrors = jest.fn();
  const validateForm = function (this: any) {
    let tempErrors: FormErrors = {};
    if (!this.formData.username || this.formData.username.trim() === '')
      tempErrors.username = 'Username is required';
    if (!this.formData.email || !/\S+@\S+\.\S+/.test(this.formData.email))
      tempErrors.email = 'Valid email is required';
    if (!this.formData.password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(this.formData.password))
      tempErrors.password = 'Password must be 8+ chars with uppercase, lowercase, and number';
    if (!this.formData.confirmPassword || this.formData.password !== this.formData.confirmPassword)
      tempErrors.confirmPassword = 'Passwords must match';
    if (!this.formData.firstName || this.formData.firstName.trim() === '')
      tempErrors.firstName = 'First name is required';
    if (!this.formData.secondName || this.formData.secondName.trim() === '')
      tempErrors.secondName = 'Second name is required';
    if (!this.formData.phoneNumber || !/^\d{10}$/.test(this.formData.phoneNumber))
      tempErrors.phoneNumber = 'Phone number must be 10 digits';
    if (!this.formData.role || this.formData.role.trim() === '') tempErrors.role = 'Role is required';
    if (!this.formData.orgName || this.formData.orgName.trim() === '')
      tempErrors.orgName = 'Organisation name is required';
    if (!this.formData.orgAddress || this.formData.orgAddress.trim() === '')
      tempErrors.orgAddress = 'Organisation address is required';
    if (this.formData.orgPhone && !/^\d{10}$/.test(this.formData.orgPhone)) {
      tempErrors.orgPhone = 'Organisation phone must be 10 digits';
    }

    this.setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const code_under_test = validateForm.bind({ formData, setErrors });
  const result = code_under_test();
  expect(result).toBe(true);
  expect(setErrors).toHaveBeenCalledWith({});
});

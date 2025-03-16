import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from '@/app/Profile/page';
import { Provider, useSelector } from 'react-redux';
import { makeStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import { RootState } from '@/lib/store';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();

beforeEach(() => {
  (useRouter as jest.Mock).mockReturnValue({
    push: mockPush,
  });
});

// Mock the useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const mockState: RootState = {
  auth: {
    token: 'valid-token',
    user: {
      username: 'testuser',
      email: 'test@example.com',
      firstName: 'Test',
      secondName: 'User',
      phoneNumber: '1234567890',
      role: 'tester',
      organisation: {
        name: 'Test Org',
        phone: '0987654321',
        address: '123 Test St',
      },
      hashedPassword: ''
    },
    error: null
  },
};

describe('Profile Component', () => {
  test('should render user profile information when token and user are valid', () => {
    // Mock the useSelector hook to return the mock state
    (useSelector as unknown as jest.Mock).mockImplementation((selector) => selector(mockState));

    render(
      <Provider store={makeStore()}>
        <Profile />
      </Provider>
    );

    expect(screen.getByRole('username_data')).toHaveTextContent('Username: testuser');
    expect(screen.getByRole('emaildata')).toHaveTextContent('Email: test@example.com');
    expect(screen.getByRole('firstname')).toHaveTextContent('First Name: Test');
    expect(screen.getByRole('secondname')).toHaveTextContent('Second Name: User');
    expect(screen.getByRole('phonenumber')).toHaveTextContent('Phone Number: 1234567890');
    expect(screen.getByRole('role')).toHaveTextContent('Role: User');
    expect(screen.getByRole('organisationname')).toHaveTextContent('Organisation Name: Test Org');
    expect(screen.getByRole('organisationphone')).toHaveTextContent('Organisation Phone: 0987654321');
    expect(screen.getByRole('organisationaddress')).toHaveTextContent('Organisation Address: 123 Test St');
    expect(screen.getByRole('token')).toHaveTextContent('Access Token: valid-token');
  });
});
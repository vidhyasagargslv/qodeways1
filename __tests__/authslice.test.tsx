import {AuthState}  from '@/lib/features/authSlice';
import  authSlice  from '@/lib/features/authSlice';
// registerSuccess action updates state with token and user data
    it('should update state with token and user data when registerSuccess action is dispatched', () => {
        // Arrange
        const initialState: AuthState = {
          token: null,
          user: null,
          error: 'Previous error'
        };
    
        const user = {
          username: 'testuser',
          email: 'test@example.com',
          firstName: 'Test',
          secondName: 'User',
          phoneNumber: '1234567890',
          role: 'user',
          organisation: {
            name: 'Test Org',
            phone: '0987654321',
            address: '123 Test St'
          },
          hashedPassword: 'hashedpassword123'
        };
    
        const action = {
          type: 'auth/registerSuccess',
          payload: {
            token: 'test-token-123',
            user
          }
        };
    
        // Act
        const nextState = authSlice(initialState, action);
    
        // Assert
        expect(nextState.token).toBe('test-token-123');
        expect(nextState.user).toEqual(user);
        expect(nextState.error).toBeNull();
      });
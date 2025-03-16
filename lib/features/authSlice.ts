import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  token: string | null;
  user: {
    username: string;
    email: string;
    firstName: string;
    secondName: string;
    phoneNumber: string;
    role: string;
    organisation: {
      name: string;
      phone: string;
      address: string;
    };
    hashedPassword: string;
  } | null;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  error: null,
}

// The authSlice handles authentication state, including user registration success and failure.
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess: (state, action: PayloadAction<{ token: string; user: AuthState['user']; }>) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
      },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.token = null;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { registerSuccess, registerFailure } = authSlice.actions;
export default authSlice.reducer;
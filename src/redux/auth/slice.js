import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
      [register.pending](state) {
        state.isLoading = true;
      },

      [register.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      },

      [register.rejected](state) {
        state.isLoading = false;
      },

      [logIn.pending](state) {
        state.isLoading = true;
      },

      [logIn.fulfilled](state, action) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      },

      [logIn.rejected](state) {
        state.isLoading = false;
      },

      [logOut.pending](state) {
        state.isLoading = true;
      },

      [logOut.fulfilled](state) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      },

      [logOut.rejected](state) {
        state.isLoading = false;
      },

      [refreshUser.pending](state) {
        state.isRefreshing = true;
        state.isLoading = true;
      },
      [refreshUser.fulfilled](state, action) {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      },
      [refreshUser.rejected](state) {
        state.isRefreshing = false;
        state.isLoading = false;
      },
    },
  });
  
  export const authReducer = authSlice.reducer;
  
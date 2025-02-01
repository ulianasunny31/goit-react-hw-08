import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    console.log(credentials);

    try {
      const { data } = await api.post('users/signup', credentials);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await api.post('users/logout');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    console.log(savedToken);

    if (!savedToken) {
      return thunkAPI.rejectWithValue('No saved authentication token found');
    }

    try {
      setAuthHeader(savedToken);
      const { data } = await api.get('users/current');
      console.log(data);

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

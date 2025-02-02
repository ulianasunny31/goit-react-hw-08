import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../auth/operations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await api.get('contacts');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const res = await api.post('contacts', contact);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await api.delete(`contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async (editedContact, thunkAPI) => {
    console.log(editedContact);

    try {
      await api.patch(`contacts/${editedContact.id}`, {
        name: editedContact.name,
        number: editedContact.number,
      });
      return editedContact;
    } catch (error) {
      console.error('Error details:', error.response.data);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

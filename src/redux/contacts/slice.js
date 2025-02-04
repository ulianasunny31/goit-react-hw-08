import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  deleteContact,
  addContact,
  changeContact,
} from './operations';
import { logoutUser } from '../auth/operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

function handlePending(state) {
  state.loading = true;
}

function handleRejected(state, action) {
  state.loading = false;
  state.error = action.payload;
}

const slice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log();

        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(changeContact.fulfilled, (state, action) => {
        const contact = state.items.find(
          (contact) => contact.id === action.payload.id
        );

        if (!contact) {
          console.error('Contact not found');
        }
        contact.name = action.payload.name;
        contact.number = action.payload.number;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default slice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContacts, addNewContact} from './operations';

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    filterContact(state, action) {
      state.contacts = state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(action.payload)
      );
    },

    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    },

    [fetchContacts.rejected]: setError,
    [deleteContacts.rejected]: setError,
    [addNewContact.rejected]: setError,
  },
});

export const { addContact, filterContact, removeContact } =
  contactSlice.actions;
export default contactSlice.reducer;


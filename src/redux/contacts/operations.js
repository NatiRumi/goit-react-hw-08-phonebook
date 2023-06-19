import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, removeContact } from '../contacts/slice';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const responce = await axios.get('/contacts');

      if (responce.status !== 200) {
        throw new Error('Status error');
      }
      return responce.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const responce = await axios.delete(`/contacts/${id}`);

      if (responce.status !== 200) {
        throw new Error('Can not delete contact. Server error');
      }
      dispatch(removeContact({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContacts',
  async function (contact, { rejectWithValue, dispatch, getState }) {
    try {
      const item = {
        name: contact.name,
        number: contact.number,
      };

      const currentState = getState();
      const searchArray = currentState.contacts.contacts.filter(
        contact => contact.name.toLowerCase() === item.name
      );

      if (searchArray.length !== 0) {
        alert(`${item.name} is already in contacts`);
        return;
      } else {
        const responce = await axios.post('/contacts', item);
        if (responce.statusText !== 'Created') {
          throw new Error('Can not add contact. Server error');
        }

        dispatch(addContact(responce.data));
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

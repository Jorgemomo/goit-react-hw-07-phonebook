import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://649f34e8245f077f3e9d6d56.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    const { data } = await axios.post('/contacts', { name, phone });
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  }
);

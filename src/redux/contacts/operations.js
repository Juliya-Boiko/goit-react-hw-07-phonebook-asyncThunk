import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllContacts, fetchAddContact, fetchDeleteContact } from "api/contactsApi";

export const getAllContacts = createAsyncThunk(
  'contacts/requestStatus',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNewContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const data = fetchAddContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCurrentContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await fetchDeleteContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
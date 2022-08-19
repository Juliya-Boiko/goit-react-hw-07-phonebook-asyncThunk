import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllContacts } from "api/getContacts";

export const getContacts = createAsyncThunk(
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
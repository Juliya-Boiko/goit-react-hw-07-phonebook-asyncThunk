import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts } from "api/getContacts";

export const fetchContacts = createAsyncThunk(
  'contacts/requestStatus',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
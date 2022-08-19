import { createSlice } from '@reduxjs/toolkit';
import { getContacts } from "./operations";

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  extraReducers: {
    [getContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
      } 
    },
    [getContacts.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    },
    [getContacts.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    },
  },
  reducers: {
    addItem: (state, action) => {
      return { ...state, items: [...state.items, action.payload] };
    },
    deleteItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
      };
    },
    filterItems: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
});

export const { addItem, deleteItem, filterItems } = contactsSlice.actions;

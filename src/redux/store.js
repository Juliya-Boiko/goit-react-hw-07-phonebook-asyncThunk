import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  }
});

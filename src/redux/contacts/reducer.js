import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { getAllContacts, addNewContacts, deleteCurrentContact } from './operations';
import { filterContacts } from "./actions";

const itemsReducer = createReducer([], {
  [getAllContacts.fulfilled]: (_, action) => action.payload,
  [addNewContacts.fulfilled]: (_, action) => action.payload,
  [deleteCurrentContact.fulfilled]: (_, action) => action.payload,
});

const isLoadingReducer = createReducer(false, {
  [getAllContacts.pending]: () => true,
  [getAllContacts.fulfilled]: () => false,
  [getAllContacts.rejected]: () => false,
  [addNewContacts.pending]: () => true,
  [addNewContacts.fulfilled]: () => false,
  [addNewContacts.rejected]: () => false,
  [deleteCurrentContact.pending]: () => true,
  [deleteCurrentContact.fulfilled]: () => false,
  [deleteCurrentContact.rejected]: () => false,
});

const filterReducer = createReducer('', {
   [filterContacts]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  filter: filterReducer,
});
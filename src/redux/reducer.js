import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { getAllContacts, addNewContacts, deleteCurrentContact } from './operations';
import { filterContacts } from "./actions";

const itemsReducer = createReducer([], {
  [getAllContacts.fulfilled]: (_, action) => action.payload,
  [addNewContacts.fulfilled]: (state, action) => [...state, action.payload],
  [deleteCurrentContact.fulfilled]: (state, action) => state.filter(item => item.id !== action.payload),
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

const errorReducer = createReducer(null, {
  [getAllContacts.pending]: () => null,
  [getAllContacts.rejected]: (_, action) => action.payload,
  [addNewContacts.pending]: () => null,
  [addNewContacts.rejected]: (_, action) => action.payload,
  [deleteCurrentContact.pending]: () => null,
  [deleteCurrentContact.rejected]: (_, action) => action.payload,
});

const filterReducer = createReducer('', {
   [filterContacts]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  filter: filterReducer,
});
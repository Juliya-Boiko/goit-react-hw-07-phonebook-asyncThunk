import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllContacts, fetchAddContact, fetchDeleteContact } from "api/contactsApi";
import { toast } from "react-toastify";

export const getAllContacts = createAsyncThunk(
  'contacts/requestStatus',
  async () => {
    try {
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      return toast.error(error);
    }
  }
);

export const addNewContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact) => {
    try {
      await fetchAddContact(contact);
      toast.success('Contact added!');
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      return toast.error(error);
    }
  }
);

export const deleteCurrentContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    try {
      await fetchDeleteContact(id);
      toast.success('Contact deleted!');
      const data = await fetchAllContacts();
      return data;
    } catch (error) {
      return toast.error(error);
    }
  }
);
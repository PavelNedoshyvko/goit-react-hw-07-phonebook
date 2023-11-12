import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	serviceAddContact,
	serviceDeleteContact,
	serviceFetchContacts
} from "contacts-api";


export const fetchContacts = createAsyncThunk(
	'contacts/fetchAll',
	async (_, { rejectWithValue }) => {
		try {
			const response = await serviceFetchContacts();
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (contact, { rejectWithValue }) => {
		try {
			const response = await serviceAddContact(contact);
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (id, { rejectWithValue }) => {
		try {
			const response = await serviceDeleteContact(id);
			return response;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
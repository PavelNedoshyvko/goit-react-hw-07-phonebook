import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: [],
	reducers: {
		addContact: (state, action) => {
			const contactInput = { id: nanoid(), ...action.payload };
			state.push(contactInput);
		},
		deleteContact: (state, action) => {
			return state.filter(contact => contact.id !== action.payload);
		},
	},
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
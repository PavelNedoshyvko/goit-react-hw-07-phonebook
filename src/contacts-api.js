import axios from "axios";

axios.defaults.baseURL = "https://654b58a75b38a59f28eee925.mockapi.io";

export const serviceFetchContacts = async () => {
	const { data } = await axios.get('/contacts');
	return data;
};

export const serviceAddContact = async (contact) => {
	const { data } = await axios.post('/contacts', contact);
	return data;
};

export const serviceDeleteContact = async (id) => {
	const { data } = await axios.delete(`/contacts/${id}`);
	return data;
};


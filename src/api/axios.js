import axios from "axios";

const BASE_URL = 'https://62f2281a25d9e8a2e7d8156d.mockapi.io/contacts/contacts';

const customAxios = axios.create({
    baseURL: BASE_URL,
});

export const getContacts = async () => {
    const response = await customAxios.get('');
    return response.data;
}
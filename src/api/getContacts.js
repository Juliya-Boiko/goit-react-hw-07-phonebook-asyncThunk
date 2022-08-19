import { customAxios } from "./axios";

export const fetchAllContacts = async () => {
    const response = await customAxios.get('');
    return response.data;
};
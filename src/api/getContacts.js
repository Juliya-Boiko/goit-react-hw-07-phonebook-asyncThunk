import { customAxios } from "./axios";

export const getContacts = async () => {
    const response = await customAxios.get('');
    return response.data;
}
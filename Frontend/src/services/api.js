import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export const fetchMessages = async () => {
  try {
    const response = await axios.get(`${URL}/messages`);
    return response.data;
  }
  catch(err) {
    console.error(err);
    return [];
  }
}
import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  maxBodyLength: Infinity,
  headers: {},
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

export const getArticles = async () => {
  try {
    const response = await axios.get('/notes', config);
    console.log(response.data);
    if (Array.isArray(response?.data?.notes)) {
      return response.data.notes;
    }
    return [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getArticleById = async (id: string) => {
  try {
    const response = await axios.get(`/notes/${id}`, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createArticle = async (title: string, content: string) => {
  try {
    const response = await axios.post('/notes', { title, content }, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

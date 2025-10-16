import axios from 'axios';

export const fetchHTML = async (url: string): Promise<string> => {
  const { data } = await axios.get(url);
  return data;
};

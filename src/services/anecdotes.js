import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const addNew = async content => {
  const response = await axios.post(baseUrl, { content, votes: 0 });
  return response.data;
};

export const addVote = async (id, votes) => {
  const data = { votes };
  const url = `${baseUrl}/${id}`;
  const response = await axios.patch(url, data);
  return response.data;
};

export default { getAll, addNew, addVote };

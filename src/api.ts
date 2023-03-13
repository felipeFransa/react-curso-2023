import axios from "axios"

const httpBaseJsonTest = 'https://jsonplaceholder.typicode.com'

export const api = {
  getAllPosts: async () => {
    let response = await axios.get(`${httpBaseJsonTest}/posts`);
    return response.data;
  },
}
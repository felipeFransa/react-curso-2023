import axios from "axios"

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const api = {
  getAllPosts: async () => {
    let response = await http.get('/posts')
    return response.data;
  },
}
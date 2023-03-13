const httpBaseJsonTest = 'https://jsonplaceholder.typicode.com/posts'

export const api = {
  getAllPosts: async () => {
    let response = await fetch(httpBaseJsonTest)
    let json = await response.json()
    return json;
  },
}
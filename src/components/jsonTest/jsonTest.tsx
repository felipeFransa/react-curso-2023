import { useEffect, useState } from 'react';
import { Posts } from '../../types/types';

const httpBaseJsonTest = 'https://jsonplaceholder.typicode.com/posts'

export const JsonTest = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Posts[]>([])

  useEffect(() => {
    loadingPosts()
  },[])

  const loadingPosts = async () => {
  try {
    setLoading(true)
    let response = await fetch(httpBaseJsonTest)
    let json = await response.json()
    setLoading(false)
    setPosts(json)
  }catch(err) {
    console.log(err)
  }
}

  return (
    <div>
      {!loading &&
        <div>
          {posts.map((item, index) =>(
            <div key={index}>
              <h1 >{item.title}</h1>
              <br />
              <p>{item.body}</p>
              <br />
            </div>
            ))} 
        </div>
      }
    </div>
  )
}
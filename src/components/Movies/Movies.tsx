import { useEffect, useState } from 'react';
import { Movie } from '../../types/types';
import * as C from './style';

const httpFilme = 'https://api.b7web.com.br/cinema/'

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadMovies();
  },[])

  const loadMovies = async () => {
    try {
      setLoading(true)
      let response = await fetch(httpFilme)
      let json = await response.json()
      setLoading(false)
      setMovies(json);
    } catch(error) {
      alert('Erro tente mais tarde!')
      console.log(error)
    }
  }

  return (
    <C.Container>
      <C.ContainerMovies>
        {/* <C.Button onClick={loadMovies}>Carregar filmes</C.Button> */}
        {loading && <h1>Carregando...</h1>}
        
        {!loading && 
          <>
            <h1>Total de Filmes: {movies.length}</h1>
            <C.Movies>
              {movies.map((item, index) =>(
                <div>
                  <C.MoviesAvatar src={item.avatar} />
                </div>
              ))}
            </C.Movies>
          </>
        }
        
      </C.ContainerMovies>
    </C.Container>
  )
}
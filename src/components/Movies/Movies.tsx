import { useEffect, useState } from 'react';
import { Movie } from '../../types/moviesTypes';
import * as C from './style';

const httpFilme = 'https://api.b7web.com.br/cinema/'

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    loadMovies();
  },[])

  const loadMovies = async () => {
    let response = await fetch(httpFilme)
    let json = await response.json()

    setMovies(json);
  }

  return (
    <C.Container>
      <C.ContainerMovies>
        <C.Button onClick={loadMovies}>Carregar filmes</C.Button>
        <h1>Total de Filmes: {movies.length}</h1>
        <C.Movies>
          {movies.map((item, index) =>(
            <div>
              <C.MoviesAvatar src={item.avatar} />
            </div>
          ))}
        </C.Movies>
      </C.ContainerMovies>
    </C.Container>
  )
}
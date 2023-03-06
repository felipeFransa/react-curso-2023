import { useEffect, useState } from 'react';
import * as C from './style';

const httpFilme = 'https://api.b7web.com.br/cinema/'

export const Movies = () => {
  const [movies, setMovies] = useState([])

  const loadMovies = () => {
    fetch(httpFilme).then((response) => {
      return response.json()
    })
    .then((json)=>{
      setMovies(json);
    })
  }

  return (
    <C.Container>
      <C.ContainerMovies>
        <C.Button onClick={loadMovies}>Carregar filmes</C.Button>
        <h1>Total de Filmes: {movies.length}</h1>
      </C.ContainerMovies>
    </C.Container>
  )
}
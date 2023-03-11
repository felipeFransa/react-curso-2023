import { useEffect, useState } from 'react';
import { PokemonTypes } from '../../types/types';

const httpPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'


export const Pokemon = () => {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonTypes[]>([])

  useEffect(() => {
    loadingPosts()
  },[])

  const loadingPosts = async () => {
  try {
    setLoading(true)
    let response = await fetch(httpPokemon)
    let json = await response.json()
    setLoading(false)
    setPokemon(json)
  }catch(err) {
    console.log(err)
    alert('Error!')
  }
}

  return (
    <div>
      {!loading &&
        <div>
          {pokemon.map((item, index) =>(
            <div key={index}>
              <h1>{item.results}</h1>
              <div>{}</div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}
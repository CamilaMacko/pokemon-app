import { useState, useEffect } from 'react';
import { NextPage } from 'next';

import { Layout } from '../../components/layouts';

import { SmallPokemon } from '../../interfaces';
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

// interface Props {
//   pokemons: SmallPokemon[]
// }


const FavoritesPage: NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemon())
  }, [])


  return (
    <Layout title="Pokémons - Favorites">
      {favoritePokemons.length === 0 ? ( <NoFavorites /> ):( <FavoritePokemons pokemons={favoritePokemons}/> )}
    </Layout>
  )
}

export default FavoritesPage

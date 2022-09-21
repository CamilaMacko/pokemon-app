const getPokemon = (): number[] => {
    if (typeof window === 'undefined') {
        return []
    }
    return JSON.parse( localStorage.getItem('favorites') || '[]');
}

const existInFavorites = ( id: number ): boolean => {
    const favorites = getPokemon()
    return favorites.includes( id )
}

const toggleFavorite = ( id: number ) => {

    console.log('toggleFavorite llamado')

    let favorites = getPokemon()

    if( existInFavorites( id )) {
        favorites = favorites.filter( pokeId => pokeId !== id)
    } else {
        favorites.push( id );
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))

}



export default{
    toggleFavorite,
    existInFavorites,
    getPokemon
}
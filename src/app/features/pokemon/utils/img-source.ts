export const getImgSourceFromPokemonUrl = (imgUrl: string) => {
  const pokemonId = getIdFromPokemonUrl(imgUrl);
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
};

export const getIdFromPokemonUrl = (imgUrl: string) => {
  const parts = imgUrl.split('/');
  const pokemonId = parts[parts.length - 2];

  return pokemonId;
};

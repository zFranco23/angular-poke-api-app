import { PokemonDetail, PokemonDetailDto } from '../models/pokemon.model';
import { getImgSourceFromPokemonUrl } from '../utils/img-source';

export const mapPokemonDetailToModel = (
  pokemon: PokemonDetailDto
): PokemonDetail => ({
  id: pokemon.id,
  name: pokemon.name,
  imgUrl:
    pokemon.sprites?.other?.['official-artwork']?.front_default ??
    getImgSourceFromPokemonUrl(pokemon.id.toString()),
  types: pokemon.types.map((type) => type.type.name),
  stats: pokemon.stats.map((stat) => ({
    stat: stat.stat.name,
    baseStat: stat.base_stat,
  })),
  height: pokemon.height,
  weight: pokemon.weight,
  baseExperience: pokemon.base_experience,
  abilities: pokemon.abilities
    .map((ability) => ability.ability?.name ?? '')
    .filter((el) => !!el),
});

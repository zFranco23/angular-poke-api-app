import { Pokemon, PokemonDto } from '../models/pokemon.model';
import {
  getIdFromPokemonUrl,
  getImgSourceFromPokemonUrl,
} from '../utils/img-source';

export const mapPokemonToModel = (pokemon: PokemonDto): Pokemon => ({
  id: getIdFromPokemonUrl(pokemon.url),
  name: pokemon.name,
  imgUrl: getImgSourceFromPokemonUrl(pokemon.url),
});

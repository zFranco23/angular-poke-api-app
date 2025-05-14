import { Pokemon } from '../models/pokemon.model';

export const getPokemonsFromStorage = (): Pokemon[] => {
  const pokemons = localStorage.getItem('pokemons');

  if (!pokemons) return [];

  const parsed = JSON.parse(pokemons);

  if (Array.isArray(parsed)) {
    return parsed;
  }

  return [];
};

export const savePokemonsToStorage = (pokemons: Pokemon[]) => {
  localStorage.setItem('pokemons', JSON.stringify(pokemons));
};

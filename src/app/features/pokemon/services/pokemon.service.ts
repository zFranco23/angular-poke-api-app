import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon, PokemonDto } from '../models/pokemon.model';
import { mapPokemonToModel } from '../mappers/user.mapper';
import {
  getPokemonsFromStorage,
  savePokemonsToStorage,
} from '../utils/storage';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  getPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<{ results: PokemonDto[] }>('https://pokeapi.co/api/v2/pokemon/')
      .pipe(map(({ results }) => results.map(mapPokemonToModel)));
  }

  savePokemonToFavorites(pokemon: Pokemon) {
    const pokemons = getPokemonsFromStorage();
    pokemons.push(pokemon);
    savePokemonsToStorage(pokemons);
  }
}

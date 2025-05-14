import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  Pokemon,
  PokemonDetail,
  PokemonDetailDto,
  PokemonDto,
} from '../models/pokemon.model';

import { mapPokemonToModel } from '../mappers/pokemon.mapper';
import { mapPokemonDetailToModel } from '../mappers/pokemon-detail.mapper';

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

  getPokemonDetail: (name: string) => Observable<PokemonDetail> = (name) => {
    return this.http
      .get<PokemonDetailDto>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(map(mapPokemonDetailToModel));
  };
}

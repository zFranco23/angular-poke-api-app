import { Component, input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  imports: [PokemonCardComponent],
})
export class PokemonListComponent {
  pokemons = input.required<Pokemon[]>();
}

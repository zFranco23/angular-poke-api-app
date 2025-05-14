import { Component, inject, signal } from '@angular/core';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [ContainerComponent, PokemonListComponent],
})
export class HomeViewComponent {
  pokemons = signal<Pokemon[]>([]);

  pokemonService = inject(PokemonService);

  constructor() {
    this.pokemonService
      .getPokemons()
      .subscribe((pokemons) => this.pokemons.set(pokemons));
  }
}

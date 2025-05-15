import { Component, computed, inject, input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { FavoritesService } from '../../services/favorites.service';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'pokemon-card',
  imports: [RouterLink, NgClass],
  templateUrl: './pokemon-card.component.html',
})
export class PokemonCardComponent {
  pokemon = input.required<Pokemon>();

  pokemonService = inject(PokemonService);
  favoritesService = inject(FavoritesService);

  isFavorite = computed(() =>
    this.favoritesService
      .favorites()
      .find((pokemon) => pokemon.id === this.pokemon().id)
  );
}

import { Component, computed, inject, input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'pokemon-card',
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

  toggleFavorite() {
    if (this.isFavorite()) {
      this.favoritesService.removeFromFavorites(this.pokemon());
    } else {
      this.favoritesService.addToFavorites(this.pokemon());
    }
  }
}

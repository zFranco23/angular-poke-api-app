import { Component, computed, inject, input } from '@angular/core';
import { PokemonDetail } from '../../models/pokemon.model';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  imports: [NgClass, RouterLink],
})
export class PokemonDetailComponent {
  pokemon = input.required<PokemonDetail>();

  favoritesService = inject(FavoritesService);

  isFavorite = computed(
    () =>
      !!this.favoritesService
        .favorites()
        .find((pokemon) => pokemon.id === this.pokemon().id)
  );

  getTypeColor(type: string) {
    return {
      'bg-blue-500': type === 'water',
      'bg-red-500': type === 'fire',
      'bg-green-500': type === 'grass',
      'bg-yellow-500': type === 'electric',
      'bg-gray-500': type === 'normal',
    };
  }
}

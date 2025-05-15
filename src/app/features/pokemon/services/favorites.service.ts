import { effect, Injectable, signal } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { getPokemonsFromStorage } from '../utils/storage';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  favorites = signal<Pokemon[]>(getPokemonsFromStorage());

  saveToLocalStorageEfffect = effect(() => {
    localStorage.setItem('pokemons', JSON.stringify(this.favorites()));
  });

  addToFavorites(pokemon: Pokemon) {
    this.favorites.update((favorites) => [...favorites, pokemon]);
  }

  removeFromFavorites(id: number) {
    this.favorites.update((favorites) => favorites.filter((p) => p.id !== id));
  }

  toggleFavorite(pokemon: Pokemon) {
    const id = pokemon.id;
    const isInFavorites = this.favorites().find((p) => p.id === id);
    if (isInFavorites) {
      this.removeFromFavorites(id);
    } else {
      this.addToFavorites(pokemon);
    }
  }
}

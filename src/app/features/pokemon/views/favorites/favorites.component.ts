import { Component, computed, inject } from '@angular/core';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { FavoritesService } from '../../services/favorites.service';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  imports: [ContainerComponent, PokemonListComponent, RouterLink],
})
export class FavoritesViewComponent {
  favoritesService = inject(FavoritesService);

  favorites = computed(() => this.favoritesService.favorites());
}

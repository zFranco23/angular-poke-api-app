import { Routes } from '@angular/router';
import { HomeViewComponent } from './features/pokemon/views/home/home';
import { PokemonViewComponent } from './features/pokemon/views/pokemon/pokemon.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeViewComponent,
  },
  {
    path: 'pokemon/:name',
    component: PokemonViewComponent,
  },
];

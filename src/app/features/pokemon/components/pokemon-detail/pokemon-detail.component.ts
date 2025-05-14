import { Component, input } from '@angular/core';
import { PokemonDetail } from '../../models/pokemon.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  imports: [NgClass],
})
export class PokemonDetailComponent {
  pokemon = input.required<PokemonDetail>();

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

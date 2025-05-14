import { Component, inject, OnInit, signal } from '@angular/core';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { ActivatedRoute } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetail } from '../../models/pokemon.model';
import { PokemonDetailComponent } from '../../components/pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  imports: [ContainerComponent, PokemonDetailComponent],
})
export class PokemonViewComponent implements OnInit {
  private route = inject(ActivatedRoute);

  private pokemonName = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('name')!))
  );

  pokemon = signal<PokemonDetail | undefined>(undefined);

  pokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.pokemonService
      .getPokemonDetail(this.pokemonName()!)
      .subscribe(this.pokemon.set);
  }
}

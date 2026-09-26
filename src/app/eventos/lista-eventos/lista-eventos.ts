import { Component, input } from '@angular/core';
import { CardEvento } from '../card-evento/card-evento';
import type { Evento } from '../evento';

@Component({
  imports: [CardEvento],
  selector: 'app-lista-eventos',
  styleUrl: './lista-eventos.css',
  templateUrl: './lista-eventos.html',
})
export class ListaEventos {
  // readonly Evento[]: a lista não pode mexer no array de quem mandou.
  readonly eventos = input.required<readonly Evento[]>();
}

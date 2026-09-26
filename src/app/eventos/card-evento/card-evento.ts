import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import type { Evento } from '../evento';

@Component({
  imports: [DatePipe],
  selector: 'app-card-evento',
  styleUrl: './card-evento.css',
  templateUrl: './card-evento.html',
})
export class CardEvento {
  // required: sem evento não existe card. O TypeScript cobra de quem usa.
  readonly evento = input.required<Evento>();
}

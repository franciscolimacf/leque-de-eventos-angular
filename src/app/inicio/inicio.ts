import { Component } from '@angular/core';
import { Catalogo } from '../eventos/catalogo/catalogo';
import { EVENTOS } from '../eventos/eventos.data';
import { ListaEventos } from '../eventos/lista-eventos/lista-eventos';

@Component({
  imports: [ListaEventos, Catalogo],
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {
  // Dado que não muda não precisa de signal: é só uma constante.
  protected readonly destaques = EVENTOS.toSorted((a, b) =>
    a.inicioEm.localeCompare(b.inicioEm),
  ).slice(0, 3);
}

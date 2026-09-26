import { Component, signal } from '@angular/core';
import { Aviso } from '../../compartilhado/aviso/aviso';
import type { Evento, Formato } from '../evento';
import { EVENTOS } from '../eventos.data';
import { aplicarFiltros } from '../filtros';
import { FiltrosEventos } from '../filtros-eventos/filtros-eventos';
import { ListaEventos } from '../lista-eventos/lista-eventos';

@Component({
  imports: [FiltrosEventos, ListaEventos, Aviso],
  selector: 'app-catalogo',
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  // O estado dos filtros mora AQUI. O FiltrosEventos só edita, via model().
  protected readonly busca = signal('');
  protected readonly formato = signal<Formato | 'todos'>('todos');
  protected readonly soGratuitos = signal(false);

  // PROVISÓRIO: é o redesenhar() da entrega 1. Na aula 05 vira computed().
  protected visiveis(): Evento[] {
    return aplicarFiltros(EVENTOS, {
      busca: this.busca(),
      formato: this.formato(),
      soGratuitos: this.soGratuitos(),
    });
  }

  protected limparFiltros(): void {
    this.busca.set('');
    this.formato.set('todos');
    this.soGratuitos.set(false);
  }
}

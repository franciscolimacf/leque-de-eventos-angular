import { Component, model } from '@angular/core';
import type { Formato } from '../evento';

const OPCOES_FORMATO = ['todos', 'Presencial', 'Online', 'Híbrido'] as const;

@Component({
  imports: [],
  selector: 'app-filtros-eventos',
  styleUrl: './filtros-eventos.css',
  templateUrl: './filtros-eventos.html',
})
export class FiltrosEventos {
  // model(): o pai passa o valor E recebe de volta o que a pessoa mudar aqui.
  readonly busca = model('');
  readonly formato = model<Formato | 'todos'>('todos');
  readonly soGratuitos = model(false);

  protected readonly opcoesFormato = OPCOES_FORMATO;

  // O <select> devolve string. O find() devolve Formato | 'todos' — sem cast.
  protected escolherFormato(valor: string): void {
    const opcao = OPCOES_FORMATO.find((o) => o === valor);
    if (opcao) this.formato.set(opcao);
  }

  protected limpar(): void {
    this.busca.set('');
    this.formato.set('todos');
    this.soGratuitos.set(false);
  }
}

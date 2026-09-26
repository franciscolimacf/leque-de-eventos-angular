// O src/filtros.ts da entrega 1, sem mudar uma vírgula.
import type { Evento, Formato } from './evento';

export type Filtros = {
  busca: string;
  formato: Formato | 'todos';
  soGratuitos: boolean;
};

export function aplicarFiltros(eventos: readonly Evento[], f: Filtros): Evento[] {
  const busca = f.busca.trim().toLowerCase();
  return eventos
    .filter((e) => !f.soGratuitos || e.gratuito)
    .filter((e) => f.formato === 'todos' || e.formato === f.formato)
    .filter(
      (e) =>
        busca === '' ||
        e.titulo.toLowerCase().includes(busca) ||
        e.organizador.toLowerCase().includes(busca),
    )
    .toSorted((a, b) => a.inicioEm.localeCompare(b.inicioEm));
}

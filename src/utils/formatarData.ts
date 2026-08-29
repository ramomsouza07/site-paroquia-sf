export function formatarData(dataIso: string): string {
  return new Date(dataIso).toLocaleDateString('pt-BR');
}
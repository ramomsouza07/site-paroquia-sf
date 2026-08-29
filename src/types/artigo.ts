// Versão resumida — usada na listagem (GET /api/artigos)
export interface ArtigoResumo {
  id: string;
  titulo: string;
  slug: string;
  resumo: string | null;
  imagemCapa: string | null;
  categoria: string;
  dataPublicacao: string; // ISO date string
}

// Artigo completo — usado na página individual (GET /api/artigos/:slug)
export interface Artigo extends ArtigoResumo {
  conteudo: string;
}

export interface ListaArtigosResponse {
  artigos: ArtigoResumo[];
  total: number;
  pagina: number;
  porPagina: number;
}
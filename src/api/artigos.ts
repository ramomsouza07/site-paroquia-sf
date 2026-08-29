import type { Artigo, CriarArtigoInput, ListaArtigosResponse } from '../types/artigo';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3333/api';

export async function listarArtigos(
  pagina = 1,
  porPagina = 9
): Promise<ListaArtigosResponse> {
  const res = await fetch(`${API_URL}/artigos?pagina=${pagina}&porPagina=${porPagina}`);

  if (!res.ok) {
    throw new Error('Não foi possível carregar os artigos.');
  }

  return res.json();
}

export async function buscarArtigoPorSlug(slug: string): Promise<Artigo> {
  const res = await fetch(`${API_URL}/artigos/${slug}`);

  if (res.status === 404) {
    throw new Error('Artigo não encontrado.');
  }

  if (!res.ok) {
    throw new Error('Não foi possível carregar o artigo.');
  }

  return res.json();
}

// ---------- Rota de admin (exige token) ----------

export async function criarArtigo(dados: CriarArtigoInput, token: string): Promise<Artigo> {
  const res = await fetch(`${API_URL}/artigos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });

  if (res.status === 401) {
    throw new Error('Não autorizado');
  }

  if (!res.ok) {
    const corpo = await res.json().catch(() => null);
    throw new Error(corpo?.erro ?? 'Não foi possível salvar o artigo.');
  }

  return res.json();
}
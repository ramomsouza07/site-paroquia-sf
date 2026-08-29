const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3333/api';

export async function enviarImagem(arquivo: File, token: string): Promise<string> {
  const formData = new FormData();
  formData.append('file', arquivo);

  const res = await fetch(`${API_URL}/upload/imagem`, {
    method: 'POST',
    headers: {
      // Não define Content-Type manualmente — o navegador precisa gerar
      // o boundary do multipart/form-data sozinho.
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (res.status === 401) {
    throw new Error('Não autorizado');
  }

  if (!res.ok) {
    throw new Error('Não foi possível enviar a imagem.');
  }

  const data = await res.json();
  return data.url as string;
}
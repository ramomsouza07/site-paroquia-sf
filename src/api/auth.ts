import type { LoginResponse } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3333/api';

export async function login(email: string, senha: string): Promise<LoginResponse> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha }),
  });

  if (res.status === 401) {
    throw new Error('Email ou senha inválidos.');
  }

  if (!res.ok) {
    throw new Error('Não foi possível fazer login.');
  }

  return res.json();
}
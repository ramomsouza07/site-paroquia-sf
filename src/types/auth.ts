export interface AdminInfo {
  id: string;
  nome: string;
  email: string;
}

export interface LoginResponse {
  token: string;
  admin: AdminInfo;
}
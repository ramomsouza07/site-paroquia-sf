import { createContext, useContext, useState, type ReactNode } from "react";
import type { AdminInfo } from "../types/auth";

interface AuthContextValue {
    token: string | null;
    admin: AdminInfo | null;
    autenticado: boolean;
    login: (token: string, admin: AdminInfo) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const CHAVE_TOKEN = "paroquia_admin_token";
const CHAVE_ADMIN = "paroquia_admin_info";

export function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(() =>
        localStorage.getItem(CHAVE_TOKEN)
    );
    const [admin, setAdmin] = useState<AdminInfo | null>(() => {
        const salvo = localStorage.getItem(CHAVE_ADMIN);
        return salvo ? JSON.parse(salvo) : null;
    });

    function login(novoToken: string, novoAdmin: AdminInfo) {
        localStorage.setItem(CHAVE_TOKEN, novoToken);
        localStorage.setItem(CHAVE_ADMIN, JSON.stringify(novoAdmin));
        setToken(novoToken);
        setAdmin(novoAdmin);
    }

    function logout() {
        localStorage.removeItem(CHAVE_TOKEN);
        localStorage.removeItem(CHAVE_ADMIN);
        setToken(null);
        setAdmin(null);
    }

    return (
        <AuthContext.Provider value={{ token, admin, autenticado: !!token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const contexto = useContext(AuthContext);
    if (!contexto) {
        throw new Error("useAuth precisa ser usado dentro de <AuthProvider>");
    }
    return contexto;
}
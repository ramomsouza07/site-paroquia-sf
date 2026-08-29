import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login as loginRequest } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";

// IMPORTAÇÃO DAS LOGOS (Altere o nome dos arquivos para os nomes reais que estão na sua pasta)
import logoParoquia from "../../assets/logo.png";
import logoPascom from "../../assets/logo-pascom.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setCarregando(true);
        setErro(null);

        try {
            const resposta = await loginRequest(email, senha);
            login(resposta.token, resposta.admin);
            navigate("/admin/artigos/novo");
        } catch (err) {
            setErro(err instanceof Error ? err.message : "Erro ao fazer login.");
        } finally {
            setCarregando(false);
        }
    }

    return (
        <main className="bg-branco-amarelado min-h-screen flex items-center justify-center px-[20px] py-[40px]">
            
            <div className="w-full max-w-[450px]">
                
                {/* CABEÇALHO DO LOGIN COM AS LOGOS */}
                <div className="text-center mb-[30px]">
                    
                    {/* Container das Logos */}
                    <div className="flex items-center justify-center gap-[20px] mb-[20px]">
                        <img 
                            src={logoParoquia} 
                            alt="Logo da Paróquia" 
                            className="h-[70px] md:h-[90px] object-contain drop-shadow-sm" 
                        />
                        
                        {/* Linha divisória charmosa entre as logos */}
                        <div className="w-[2px] h-[50px] bg-marrom-claro/30 rounded-full"></div>
                        
                        <img 
                            src={logoPascom} 
                            alt="Logo da Pastoral da Comunicação" 
                            className="h-[70px] md:h-[90px] object-contain drop-shadow-sm" 
                        />
                    </div>

                    <h1 className="text-marrom-escuro text-[32px] font-bold mt-[10px]">
                        Acesso Restrito
                    </h1>
                    <p className="text-cinza-escuro text-[16px] mt-1">
                        Painel administrativo da paróquia.
                    </p>
                </div>

                {/* FORMULÁRIO */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-branco p-[30px] md:p-[40px] rounded-[10px] shadow-[0_10px_25px_rgba(0,0,0,0.05)] border-t-[5px] border-mostarda flex flex-col gap-[20px]"
                >
                    <label className="flex flex-col gap-[8px]">
                        <span className="text-marrom-escuro font-bold text-[15px]">E-mail</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="username"
                            placeholder="seu@email.com"
                            className="w-full px-[15px] py-[14px] rounded-[8px] border border-cinza-escuro/20 bg-branco-amarelado/30 focus:outline-none focus:border-mostarda focus:ring-2 focus:ring-mostarda/20 transition-all text-marrom-escuro placeholder:text-cinza-escuro/50"
                        />
                    </label>

                    <label className="flex flex-col gap-[8px]">
                        <span className="text-marrom-escuro font-bold text-[15px]">Senha</span>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                            autoComplete="current-password"
                            placeholder="••••••••"
                            className="w-full px-[15px] py-[14px] rounded-[8px] border border-cinza-escuro/20 bg-branco-amarelado/30 focus:outline-none focus:border-mostarda focus:ring-2 focus:ring-mostarda/20 transition-all text-marrom-escuro placeholder:text-cinza-escuro/50"
                        />
                    </label>

                    {/* MENSAGEM DE ERRO ESTILIZADA */}
                    {erro && (
                        <div className="bg-red-50 border-l-[4px] border-red-500 text-red-700 p-[12px] rounded-[5px] text-[14px] flex items-center gap-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>{erro}</p>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={carregando}
                        className="mt-[10px] py-[14px] rounded-[8px] bg-marrom-escuro text-branco font-bold text-[16px] transition-all duration-300 hover:bg-marrom-claro hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {carregando ? (
                            <>
                                {/* Spinner de carregamento do Tailwind */}
                                <svg className="animate-spin h-5 w-5 text-branco" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Entrando...
                            </>
                        ) : (
                            "Entrar no Painel"
                        )}
                    </button>
                </form>

                {/* VOLTAR PARA O SITE */}
                <div className="text-center mt-[30px]">
                    <Link to="/" className="text-marrom-claro hover:text-mostarda transition-colors font-semibold flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Voltar para o site principal
                    </Link>
                </div>

            </div>
        </main>
    );
}
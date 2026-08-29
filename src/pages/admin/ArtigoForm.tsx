import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { criarArtigo } from "../../api/artigos";
import { enviarImagem } from "../../api/upload";

export default function ArtigoForm() {
    const { token, logout } = useAuth();
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [conteudo, setConteudo] = useState("");
    const [categoria, setCategoria] = useState("Noticias");
    const [publicado, setPublicado] = useState(false);

    const [arquivoImagem, setArquivoImagem] = useState<File | null>(null);
    const [previewImagem, setPreviewImagem] = useState<string | null>(null);

    const [enviando, setEnviando] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    function handleArquivoSelecionado(e: ChangeEvent<HTMLInputElement>) {
        const arquivo = e.target.files?.[0] ?? null;
        setArquivoImagem(arquivo);
        setPreviewImagem(arquivo ? URL.createObjectURL(arquivo) : null);
    }

    function redirecionarParaLogin() {
        logout();
        navigate("/admin/login");
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!token) return redirecionarParaLogin();

        setEnviando(true);
        setErro(null);

        try {
            // 1. Se selecionou uma imagem, sobe ela primeiro e pega a URL
            let imagemCapa: string | undefined;
            if (arquivoImagem) {
                imagemCapa = await enviarImagem(arquivoImagem, token);
            }

            // 2. Cria o artigo já com a URL da imagem (se houver)
            await criarArtigo(
                {
                    titulo,
                    resumo: resumo || undefined,
                    conteudo,
                    categoria,
                    publicado,
                    imagemCapa,
                },
                token
            );

            navigate("/artigos");
        } catch (err) {
            if (err instanceof Error && err.message === "Não autorizado") {
                redirecionarParaLogin();
                return;
            }
            setErro(err instanceof Error ? err.message : "Erro ao salvar artigo.");
        } finally {
            setEnviando(false);
        }
    }

    return (
        <main className="bg-branco-amarelado min-h-screen py-[60px] px-[20px]">
            <form
                onSubmit={handleSubmit}
                className="max-w-[700px] mx-auto bg-branco p-[40px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex flex-col gap-[22px]"
            >
                <h1 className="text-marrom-escuro text-[28px] font-bold mb-[10px]">
                    Novo artigo
                </h1>

                <label className="flex flex-col gap-[8px]">
                    <span className="text-marrom-escuro font-bold">Título</span>
                    <input
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                        className="px-[15px] py-[12px] rounded-[8px] border border-gray-300 focus:outline-none focus:border-mostarda"
                    />
                </label>

                <label className="flex flex-col gap-[8px]">
                    <span className="text-marrom-escuro font-bold">
                        Resumo <span className="font-normal text-gray-500">(aparece na listagem)</span>
                    </span>
                    <textarea
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                        rows={3}
                        maxLength={500}
                        className="px-[15px] py-[12px] rounded-[8px] border border-gray-300 focus:outline-none focus:border-mostarda"
                    />
                </label>

                <label className="flex flex-col gap-[8px]">
                    <span className="text-marrom-escuro font-bold">Conteúdo completo</span>
                    <textarea
                        value={conteudo}
                        onChange={(e) => setConteudo(e.target.value)}
                        rows={10}
                        required
                        className="px-[15px] py-[12px] rounded-[8px] border border-gray-300 focus:outline-none focus:border-mostarda font-mono text-[14px]"
                    />
                    <span className="text-[13px] text-gray-500">
                        Aceita HTML simples (ex: &lt;p&gt;, &lt;strong&gt;, &lt;a&gt;). Um editor rico
                        pode substituir este campo depois.
                    </span>
                </label>

                <label className="flex flex-col gap-[8px]">
                    <span className="text-marrom-escuro font-bold">Imagem de capa</span>
                    <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/gif"
                        onChange={handleArquivoSelecionado}
                    />
                    {previewImagem && (
                        <img
                            src={previewImagem}
                            alt="Pré-visualização"
                            className="w-full h-[200px] object-cover rounded-[8px] mt-[10px]"
                        />
                    )}
                </label>

                <label className="flex flex-col gap-[8px]">
                    <span className="text-marrom-escuro font-bold">Categoria</span>
                    <input
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        className="px-[15px] py-[12px] rounded-[8px] border border-gray-300 focus:outline-none focus:border-mostarda"
                    />
                </label>

                <label className="flex items-center gap-[10px]">
                    <input
                        type="checkbox"
                        checked={publicado}
                        onChange={(e) => setPublicado(e.target.checked)}
                    />
                    <span className="text-marrom-escuro font-bold">Publicar imediatamente</span>
                </label>

                {erro && <p className="text-red-600 text-[14px]">{erro}</p>}

                <button
                    type="submit"
                    disabled={enviando}
                    className="py-[14px] rounded-[8px] bg-marrom-escuro text-branco font-bold transition-colors duration-300 hover:bg-marrom-claro disabled:opacity-60"
                >
                    {enviando ? "Salvando..." : "Salvar artigo"}
                </button>
            </form>
        </main>
    );
}
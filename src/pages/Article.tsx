import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import { listarArtigos } from "../api/artigos";
import { formatarData } from "../utils/formatarData";
import type { ArtigoResumo } from "../types/artigo";

export default function Article() {
    const [artigos, setArtigos] = useState<ArtigoResumo[]>([]);
    const [pagina, setPagina] = useState(1);
    const [total, setTotal] = useState(0);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        setCarregando(true);
        setErro(null);

        listarArtigos(pagina)
            .then((data) => {
                setArtigos((atuais) => (pagina === 1 ? data.artigos : [...atuais, ...data.artigos]));
                setTotal(data.total);
            })
            .catch((err) => setErro(err.message))
            .finally(() => setCarregando(false));
    }, [pagina]);

    const temMaisParaCarregar = artigos.length < total;

    return (
        <>
            <Header />

            <main className="bg-branco-amarelado min-h-screen pb-[80px]">

                {/* CABEÇALHO DA PÁGINA */}
                <section className="bg-gradient-to-b from-marrom-escuro to-marrom-claro text-branco text-center py-[80px] px-[20px]">
                    <div className="max-w-[800px] mx-auto">
                        <h1 className="text-[40px] md:text-[48px] font-bold mb-[15px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
                            Artigos e Reflexões
                        </h1>
                        <p className="text-[20px] text-branco/90">
                            Textos, formações e mensagens inspiradoras para fortalecer a sua fé e aproximar você de Deus.
                        </p>
                    </div>
                </section>

                {/* LISTA DE ARTIGOS */}
                <section className="max-w-[800px] mx-auto mt-[50px] px-[20px] flex flex-col gap-[30px]">

                    {erro && (
                        <p className="text-center text-marrom-escuro">{erro}</p>
                    )}

                    {!erro && carregando && artigos.length === 0 && (
                        <p className="text-center text-marrom-escuro">Carregando artigos...</p>
                    )}

                    {!erro && !carregando && artigos.length === 0 && (
                        <p className="text-center text-marrom-escuro">Nenhum artigo publicado ainda.</p>
                    )}

                    {artigos.map((artigo) => (
                        <ArticleCard
                            key={artigo.id}
                            titulo={artigo.titulo}
                            descricao={artigo.resumo ?? ""}
                            data={formatarData(artigo.dataPublicacao)}
                            linkUrl={`/artigos/${artigo.slug}`}
                            imagem={artigo.imagemCapa}
                        />
                    ))}

                    {temMaisParaCarregar && !carregando && (
                        <button
                            onClick={() => setPagina((p) => p + 1)}
                            className="self-center mt-[10px] px-[35px] py-[14px] rounded-[8px] bg-marrom-escuro text-branco font-bold transition-colors duration-300 hover:bg-marrom-claro"
                        >
                            Carregar mais artigos
                        </button>
                    )}

                    {carregando && artigos.length > 0 && (
                        <p className="text-center text-marrom-claro">Carregando mais...</p>
                    )}
                </section>
            </main>

            <Footer />
        </>
    );
}
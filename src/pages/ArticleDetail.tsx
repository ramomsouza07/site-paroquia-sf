import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { buscarArtigoPorSlug } from "../api/artigos";
import { formatarData } from "../utils/formatarData";
import type { Artigo } from "../types/artigo";

export default function ArticleDetail() {
    const { slug } = useParams<{ slug: string }>();
    const [artigo, setArtigo] = useState<Artigo | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        if (!slug) return;

        setCarregando(true);
        setErro(null);
        setArtigo(null);

        buscarArtigoPorSlug(slug)
            .then(setArtigo)
            .catch((err) => setErro(err.message))
            .finally(() => setCarregando(false));
    }, [slug]);

    return (
        <>
            <Header />

            <main className="bg-branco-amarelado min-h-screen pb-[80px]">
                <section className="max-w-[800px] mx-auto pt-[50px] px-[20px]">

                    <nav className="text-marrom-claro text-[14px] mb-[30px]">
                        <Link to="/" className="hover:text-mostarda">Início</Link>
                        {" / "}
                        <Link to="/artigos" className="hover:text-mostarda">Artigos</Link>
                        {artigo && (
                            <>
                                {" / "}
                                <span className="text-marrom-escuro">{artigo.titulo}</span>
                            </>
                        )}
                    </nav>

                    {carregando && (
                        <p className="text-center text-marrom-escuro py-[60px]">Carregando artigo...</p>
                    )}

                    {erro && !carregando && (
                        <div className="text-center py-[60px]">
                            <p className="text-marrom-escuro mb-[20px]">{erro}</p>
                            <Link to="/artigos" className="text-mostarda font-bold underline">
                                Voltar para artigos
                            </Link>
                        </div>
                    )}

                    {artigo && !carregando && (
                        <article className="bg-branco p-[30px] md:p-[50px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] mb-[50px]">

                            <span className="text-marrom-claro text-[14px] font-bold uppercase tracking-widest mb-[15px] block">
                                {artigo.categoria} · Publicado em {formatarData(artigo.dataPublicacao)}
                            </span>

                            <h1 className="text-marrom-escuro text-[32px] md:text-[42px] font-bold mb-[25px] leading-tight">
                                {artigo.titulo}
                            </h1>

                            {artigo.imagemCapa && (
                                <img
                                    src={artigo.imagemCapa}
                                    alt={artigo.titulo}
                                    className="w-full max-h-[420px] object-cover rounded-[8px] mb-[35px]"
                                />
                            )}

                            {/*
                              O conteúdo vem em HTML (editor rico do admin).
                              IMPORTANTE: sanitizar esse HTML no backend antes de salvar
                              (lib "sanitize-html"), já que ele é injetado direto no DOM aqui.
                            */}
                            <div
                                className="text-cinza-escuro text-[18px] leading-relaxed [&_p]:mb-[20px] [&_h2]:text-marrom-escuro [&_h2]:text-[26px] [&_h2]:font-bold [&_h2]:mb-[15px] [&_h2]:mt-[30px] [&_a]:text-mostarda [&_a]:underline"
                                dangerouslySetInnerHTML={{ __html: artigo.conteudo }}
                            />
                        </article>
                    )}
                </section>
            </main>

            <Footer />
        </>
    );
}
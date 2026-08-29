import { Link } from "react-router-dom";

interface ArticleCardProps {
    titulo: string;
    descricao: string;
    data: string;
    linkUrl: string;
    imagem?: string | null;
}

export default function ArticleCard({ titulo, descricao, data, linkUrl, imagem }: ArticleCardProps) {
    return (
        <article className="bg-branco p-[30px] md:p-[40px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border-l-[6px] border-mostarda transition-transform duration-300 hover:-translate-y-1">

            {imagem && (
                <img
                    src={imagem}
                    alt={titulo}
                    className="w-full h-[220px] object-cover rounded-[8px] mb-[25px]"
                />
            )}

            <span className="text-marrom-claro text-[14px] font-bold uppercase tracking-widest mb-[10px] block flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Publicado em {data}
            </span>

            <h2 className="text-marrom-escuro text-[26px] md:text-[32px] font-bold mb-[15px]">
                {titulo}
            </h2>

            <p className="text-cinza-escuro text-[18px] mb-[25px] leading-relaxed">
                {descricao}
            </p>

            <Link
                to={linkUrl}
                className="inline-flex items-center gap-2 text-marrom-escuro font-bold text-[16px] transition-colors duration-300 hover:text-mostarda"
            >
                Continuar lendo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </Link>

        </article>
    );
}
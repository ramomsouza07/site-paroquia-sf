import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Teste() {
    return (
        <>
            <Header />
            
            <main className="bg-branco-amarelado min-h-screen pb-[80px]">
                
                {/* CABEÇALHO DO ARTIGO */}
                <section className="bg-gradient-to-b from-marrom-escuro to-marrom-claro py-[60px] px-[20px] text-center">
                    <div className="max-w-[800px] mx-auto">
                        <span className="text-mostarda text-[14px] font-bold uppercase tracking-widest mb-[15px] block">
                            Publicado em 23/06/2026
                        </span>
                        <h1 className="text-branco text-[36px] md:text-[48px] font-bold leading-tight mb-[20px]">
                            Artigo de Teste
                        </h1>
                        <p className="text-branco/80 text-[18px] italic">
                            Por Administrador
                        </p>
                    </div>
                </section>

                {/* CONTEÚDO DO ARTIGO */}
                <section className="max-w-[800px] mx-auto mt-[40px] px-[20px]">
                    
                    <div className="bg-branco p-[30px] md:p-[50px] rounded-[10px] shadow-sm text-cinza-escuro text-[18px] leading-loose">
                        
                        {/* A classe text-justify deixa o texto alinhado nas duas margens */}
                        <p className="mb-[20px] text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <p className="mb-[20px] text-justify">
                            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.
                        </p>

                        <p className="mb-[20px] text-justify">
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                        </p>

                        {/* BOTÃO DE VOLTAR */}
                        <div className="mt-[50px] pt-[30px] border-t border-cinza-escuro/20 flex justify-between items-center">
                            <Link to="/artigos" className="text-marrom-claro font-bold hover:text-mostarda transition-colors flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Voltar para todos os artigos
                            </Link>
                        </div>

                    </div>

                </section>
            </main>

            <Footer />
        </>
    );
}
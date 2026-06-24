import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard"; // Importe o componente!

export default function Article() {
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
                    
                    <ArticleCard 
                        titulo="A Família como Igreja Doméstica"
                        descricao="Uma reflexão sobre como o ambiente familiar é o primeiro e mais importante espaço para a vivência da fé cristã, o ensino dos valores do Evangelho e o amor ao próximo."
                        data="15/06/2026"
                        linkUrl="/artigos/familia-igreja-domestica"
                    />

                    <ArticleCard 
                        titulo="TESTE"
                        descricao="TESTE"
                        data="15/06/2026"
                        linkUrl="/artigos/TESTE"
                    />
                </section>
            </main>

            <Footer />
        </>
    );
}
import Header from "../components/Header";
import Footer from "../components/Footer";

// Você importará as fotos dos padres aqui
import imgPadreAtual from '../assets/outras/pe_gilberto.jpg'; 
import imgPadreAntigo1 from '../assets/outras/temp.png'; 
import imgPadreAntigo2 from '../assets/outras/temp.png'; 

export default function Padres() {
    
    // Lista com os dados de todos os padres
    const listaDePadres = [
        {
            id: 1,
            nome: "Pe. Gilberto Alvim",
            periodo: "Pároco Atual", // Pode ser o ano, ex: "2020 - Atual"
            descricao: "À frente do Santuário de São Fidélis de Sigmaringa, o Padre Gilberto Alvim conduz nossa comunidade com zelo pastoral, dedicação e espírito de serviço. Seu ministério é marcado pelo acolhimento fraterno, pelo cuidado com as famílias e pelo compromisso em fortalecer a fé e a vivência cristã em nossas comunidades.",
            citacao: '"A serviço de Deus e do povo de São Fidélis."',
            informacaoExtra: "Atendimento: Procure a secretaria para agendar um horário com o pároco.",
            imagem: imgPadreAtual
        },
        {
            id: 2,
            nome: "Pe. ",
            periodo: "2015 - 2020",
            descricao: "teste",
            citacao: '"teste"',
            informacaoExtra: "teste",
            imagem: imgPadreAntigo1
        },
        {
            id: 3,
            nome: "Pe. ",
            periodo: "2015 - 2020",
            descricao: "teste",
            citacao: '"teste"',
            informacaoExtra: "teste",
            imagem: imgPadreAntigo2
        }
    ];

    return (
        <>
            <Header />

            <main className="bg-branco-amarelado min-h-screen pb-[80px]">
                
                {/* CABEÇALHO DA PÁGINA (Hero) */}
                <section className="bg-gradient-to-b from-marrom-escuro to-marrom-claro py-[80px] px-[20px] text-center shadow-md">
                    <h1 className="text-branco text-[36px] md:text-[48px] font-bold mb-[15px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
                        Nossos Párocos
                    </h1>
                    <p className="text-branco-amarelado text-[18px] md:text-[22px] max-w-[800px] mx-auto">
                        Conheça os sacerdotes que dedicaram suas vidas para guiar, pastorear e fortalecer a fé da nossa comunidade ao longo da história do Santuário.
                    </p>
                </section>

                {/* LISTA DE CARDS DOS PADRES */}
                <section className="py-[60px] px-[20px] max-w-[1000px] mx-auto flex flex-col gap-[50px]">
                    
                    {listaDePadres.map((padre) => (
                        <div 
                            key={padre.id} 
                            className="bg-branco rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row items-center border-l-[6px] border-mostarda transition-transform duration-300 hover:-translate-y-1"
                        >
                            {/* Foto do Padre */}
                            <div className="w-full md:w-[350px] h-[400px] flex-shrink-0 p-[10px] md:p-0 md:pl-[10px] py-[10px]">
                                <img 
                                    src={padre.imagem} 
                                    alt={padre.nome} 
                                    className="w-full h-full object-cover rounded-[15px] md:rounded-[22px]"
                                />
                            </div>

                            {/* Texto sobre o Padre */}
                            <div className="p-[30px] md:p-[40px] text-center md:text-left w-full">
                                <span className="text-marrom-claro font-bold text-[14px] uppercase tracking-wider mb-2 block">
                                    {padre.periodo}
                                </span>
                                <h2 className="text-marrom-escuro text-[32px] font-bold mb-[15px]">
                                    {padre.nome}
                                </h2>
                                
                                <div className="w-[60px] h-[3px] bg-mostarda mb-[20px] mx-auto md:mx-0"></div>
                                
                                <p className="text-cinza-escuro text-[18px] leading-relaxed mb-[20px]">
                                    {padre.descricao}
                                </p>
                                
                                {padre.citacao && (
                                    <p className="text-marrom-escuro font-bold italic">
                                        {padre.citacao}
                                    </p>
                                )}
                                
                                {/* Contato rápido ou Informação Extra */}
                                {padre.informacaoExtra && (
                                    <div className="mt-[30px] pt-[20px] border-t border-marrom-claro/20">
                                        <p className="text-cinza-escuro text-[16px]">
                                            {padre.informacaoExtra}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                </section>
            </main>

            <Footer />
        </>
    );
}
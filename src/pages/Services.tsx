import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Servicos() {
    
    // Classe padrão para os cartões
    const cardClass = "w-full md:w-[calc(50%-15px)] lg:w-[calc(33.333%-20px)] bg-branco p-[30px] rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-[5px] flex flex-col items-center";

    return (
        <>
            <Header />

            <main className="bg-branco-amarelado min-h-screen pb-[80px]">
                
                {/* 1. CABEÇALHO (Hero) */}
                <section className="bg-gradient-to-b from-marrom-escuro to-marrom-claro py-[80px] px-[20px] text-center shadow-md">
                    <h1 className="text-branco text-[36px] md:text-[48px] font-bold mb-[15px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
                        Serviços Paroquiais
                    </h1>
                    <p className="text-branco-amarelado text-[18px] md:text-[22px] max-w-[700px] mx-auto">
                        Informações sobre sacramentos, formações, pastorais e atendimentos em nossa paróquia.
                    </p>
                </section>

                <div className="max-w-[1200px] mx-auto px-[20px] mt-[80px]">
                    
                    {/* =========================================
                        SEÇÃO 1: SACRAMENTOS E LITURGIA 
                    ========================================= */}
                    <section className="mb-[80px]">
                        <div className="flex flex-col items-center mb-[40px] text-center">
                            <h2 className="text-marrom-escuro text-[32px] md:text-[36px] font-bold flex items-center justify-center gap-[12px] mb-[10px]">
                                <i className="fa-solid fa-cross text-marrom-claro text-[26px]"></i>
                                Sacramentos e Liturgia
                            </h2>
                            <div className="w-[80px] h-[4px] bg-mostarda rounded-full"></div>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-[30px]">
                            
                            {/* CONFISSÕES */}
                            <div className={`${cardClass} border-t-[4px] border-marrom-claro`}>
                                <div className="text-marrom-claro text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-hands-praying"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Confissões
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    O Sacramento da Reconciliação nos devolve a graça e a amizade com Deus. O atendimento com o padre ocorre semanalmente na Matriz.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto">
                                    <p className="text-cinza-escuro text-[14px]">
                                        <strong className="text-marrom-escuro">Quintas-feiras:</strong> 14h às 16h<br/>
                                        <strong className="text-marrom-escuro">Sextas-feiras:</strong> 9h às 11h30
                                    </p>
                                </div>
                            </div>

                            {/* BATISMO - COM BOTÃO DO WHATSAPP */}
                            <div className={`${cardClass} border-t-[4px] border-marrom-claro`}>
                                <div className="text-marrom-claro text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-droplet"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Batismo
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    A porta de entrada para a vida cristã. Para batizar o seu filho(a), os pais e padrinhos devem participar do Encontro de Preparação.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto flex flex-col gap-[10px]">
                                    <p className="text-cinza-escuro text-[14px]">
                                        Verifique na Secretaria o calendário de cursos e celebrações.
                                    </p>
                                    <a 
                                        href="https://wa.me/552227581146?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Batismo." 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="bg-[#25D366] text-white py-[8px] px-[10px] rounded-[5px] text-[14px] font-bold transition-colors duration-300 hover:bg-[#128C7E] flex items-center justify-center gap-[8px]"
                                    >
                                        <i className="fa-brands fa-whatsapp text-[18px]"></i>
                                        Informações do Batismo
                                    </a>
                                </div>
                            </div>

                            {/* MATRIMÔNIO - COM BOTÃO DO WHATSAPP */}
                            <div className={`${cardClass} border-t-[4px] border-marrom-claro`}>
                                <div className="text-marrom-claro text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-ring"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Matrimônio
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    Vai casar-se? O Sacramento do Matrimônio exige preparação espiritual e organização documental rigorosa.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto flex flex-col gap-[10px]">
                                    <p className="text-cinza-escuro text-[14px]">
                                        Agende com no mínimo <strong>3 meses de antecedência</strong>.
                                    </p>
                                    <a 
                                        href="https://wa.me/552227581146?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20marca%C3%A7%C3%A3o%20de%20Casamento." 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="bg-[#25D366] text-white py-[8px] px-[10px] rounded-[5px] text-[14px] font-bold transition-colors duration-300 hover:bg-[#128C7E] flex items-center justify-center gap-[8px]"
                                    >
                                        <i className="fa-brands fa-whatsapp text-[18px]"></i>
                                        Agendar Matrimônio
                                    </a>
                                </div>
                            </div>

                            {/* UNÇÃO DOS ENFERMOS */}
                            <div className={`${cardClass} border-t-[4px] border-marrom-claro`}>
                                <div className="text-marrom-claro text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-hand-holding-heart"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Unção dos Enfermos
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    Conforto e graça para os irmãos doentes ou idosos. O padre realiza visitas domiciliares e hospitalares para ministrar o sacramento.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto">
                                    <p className="text-cinza-escuro text-[14px]">
                                        Em caso de necessidade, entre em contato imediatamente com a Secretaria Paroquial.
                                    </p>
                                </div>
                            </div>

                            {/* INTENÇÕES DE MISSA */}
                            <div className={`${cardClass} border-t-[4px] border-marrom-claro`}>
                                <div className="text-marrom-claro text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-scroll"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Intenções de Missa
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    Reze pelos seus entes queridos falecidos, em ação de graças por aniversários ou pedidos de saúde e libertação.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto">
                                    <p className="text-cinza-escuro text-[14px]">
                                        Marque suas intenções presencialmente na Secretaria ou antes do início das missas.
                                    </p>
                                </div>
                            </div>

                            <div className={`${cardClass} border-t-[4px] border-marrom-claro`}>
                                <div className="text-marrom-claro text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-dove"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Crisma
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    O sacramento da Crisma confirma o Batismo e nos fortalece com os dons do Espírito Santo para sermos verdadeiras testemunhas de Cristo.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto">
                                    <p className="text-cinza-escuro text-[14px]">
                                        As turmas de preparação para jovens e adultos abrem anualmente. Procure a Secretaria para mais informações.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* =========================================
                        SEÇÃO 2: PASTORAIS
                    ========================================= */}
                    <section className="mb-[80px]">
                        <div className="flex flex-col items-center mb-[40px] text-center">
                            <h2 className="text-marrom-escuro text-[32px] md:text-[36px] font-bold flex items-center justify-center gap-[12px] mb-[10px]">
                                <i className="fa-solid fa-leaf text-mostarda text-[26px]"></i>
                                Pastorais
                            </h2>
                            <div className="w-[80px] h-[4px] bg-mostarda rounded-full"></div>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-[30px]">
                            
                            {/* CATEQUESE */}
                            <div className={`${cardClass} border-t-[4px] border-mostarda`}>
                                <div className="text-mostarda text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-book-bible"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Catequese
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    Preparação para a Primeira Eucaristia e Crisma, formando crianças, jovens e adultos no amor de Cristo e nos ensinamentos da Igreja.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto">
                                    <p className="text-cinza-escuro text-[14px]">
                                        As inscrições para novas turmas ocorrem anualmente. Fique atento aos avisos!
                                    </p>
                                </div>
                            </div>

                            {/* PASTORAL DA SOBRIEDADE */}
                            <div className={`${cardClass} border-t-[4px] border-mostarda`}>
                                <div className="text-mostarda text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-hands-holding-circle"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Pastoral da Sobriedade
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    Ação concreta da Igreja que atua na prevenção, recuperação e inserção familiar de dependentes químicos, promovendo a vida.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto">
                                    <p className="text-cinza-escuro text-[14px]">
                                        Venha conhecer nossos encontros de apoio. Procure a Secretaria para mais informações.
                                    </p>
                                </div>
                            </div>

                            {/* PASTORAL DA SAÚDE */}
                            <div className={`${cardClass} border-t-[4px] border-mostarda`}>
                                <div className="text-mostarda text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-kit-medical"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Pastoral da Saúde
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    Agentes que levam a presença de Cristo e da comunidade aos irmãos enfermos nos hospitais e em suas casas, promovendo conforto.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto">
                                    <p className="text-cinza-escuro text-[14px]">
                                        Se você tem um familiar acamado que deseja receber visita, entre em contato.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* =========================================
                        SEÇÃO 3: MOVIMENTOS E GRUPOS
                    ========================================= */}
                    <section className="mb-[20px]">
                        <div className="flex flex-col items-center mb-[40px] text-center">
                            <h2 className="text-marrom-escuro text-[32px] md:text-[36px] font-bold flex items-center justify-center gap-[12px] mb-[10px]">
                                <i className="fa-solid fa-fire text-marrom-claro text-[26px]"></i>
                                Movimentos e Grupos
                            </h2>
                            <div className="w-[80px] h-[4px] bg-mostarda rounded-full"></div>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-[30px]">
                            
                            {/* APOSTOLADO DA ORAÇÃO */}
                            <div className={`${cardClass} border-t-[4px] border-marrom-claro`}>
                                <div className="text-marrom-claro text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Apostolado da Oração
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    Rede mundial de oração do Papa e movimento de devoção ao Sagrado Coração de Jesus. Unimos nossas preces diárias.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto">
                                    <p className="text-cinza-escuro text-[14px]">
                                        As reuniões ocorrem na <strong>1ª Sexta-feira</strong> e no <strong>1º Domingo</strong> do mês.
                                    </p>
                                </div>
                            </div>

                            {/* FORMAÇÃO DE COROINHAS */}
                            <div className={`${cardClass} border-t-[4px] border-marrom-claro`}>
                                <div className="text-marrom-claro text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-bell"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Coroinhas e Acólitos
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    Preparação litúrgica e espiritual para crianças e jovens que sentem o chamado para servir ao altar com dedicação e amor.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto">
                                    <p className="text-cinza-escuro text-[14px]">
                                        Os encontros ocorrem periodicamente. Procure a coordenação após as missas.
                                    </p>
                                </div>
                            </div>

                            {/* FORMAÇÃO DE SERVOS */}
                            <div className={`${cardClass} border-t-[4px] border-marrom-claro`}>
                                <div className="text-marrom-claro text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-people-group"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Formação de Servos
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    Encontros de espiritualidade e capacitação para ministros, leitores, equipes de liturgia, grupos de oração e agentes.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto">
                                    <p className="text-cinza-escuro text-[14px]">
                                        Acompanhe nossa Agenda Paroquial para saber as datas dos retiros formativos.
                                    </p>
                                </div>
                            </div>

                            {/* IGREJA EM AÇÃO */}
                            <div className={`${cardClass} border-t-[4px] border-marrom-claro`}>
                                <div className="text-marrom-claro text-[40px] mb-[15px]">
                                    <i className="fa-solid fa-house-chimney-user"></i>
                                </div>
                                <h3 className="text-marrom-escuro text-[24px] font-bold mb-[15px] text-center">
                                    Igreja em Ação
                                </h3>
                                <p className="text-cinza-escuro text-[16px] text-center mb-[20px] flex-grow">
                                    Uma Igreja em saída! Missionários e voluntários que realizam visitas domiciliares, levando a Palavra de Deus e acolhimento.
                                </p>
                                <div className="bg-branco-amarelado p-[15px] rounded-[5px] text-center w-full mt-auto">
                                    <p className="text-cinza-escuro text-[14px]">
                                        Deseja receber a visita do nosso grupo em sua casa? Agende através da Secretaria.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>

                {/* 3. CALL TO ACTION (CHAMADA PARA A SECRETARIA) */}
                <section className="max-w-[800px] mx-auto px-[20px] mt-[80px]">
                    <div className="bg-marrom-escuro text-branco p-[40px] rounded-[10px] text-center shadow-lg flex flex-col items-center">
                        <h2 className="text-[28px] font-bold mb-[15px]">Precisa de mais informações?</h2>
                        <p className="text-[18px] mb-[30px] max-w-[650px]">
                            Para agendamentos de batizados, casamentos, intenções de missa, participação nas pastorais e dúvidas em geral, nossa Secretaria Paroquial está pronta para atender você.
                        </p>
                        <Link 
                            to="/contatos" 
                            className="bg-mostarda text-marrom-escuro py-[14px] px-[35px] text-[18px] font-bold rounded-[8px] inline-flex items-center justify-center gap-[10px] transition-all duration-300 hover:bg-marrom-claro hover:text-branco shadow-md hover:-translate-y-1"
                        >
                            <i className="fa-brands fa-whatsapp text-[22px]"></i>
                            Falar com a Secretaria
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}
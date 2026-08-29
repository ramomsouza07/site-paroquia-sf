import Footer from "../../components/Footer";
import Header from "../../components/Header";

// Importações das imagens (substitua pelos arquivos reais quando tiver)
import imgFachada from '../../assets/santo_amaro/fachada-st-amaro-2.jpg'; 
import imgInterior from '../../assets/santo_amaro/santo-amaro-interior.jpeg'; 
import imgExtra from '../../assets/santo_amaro/santo_amaro_imagem.jpg'; 

export default function Amaro() {
    return (
        <>
            <Header />

            <main className="bg-branco-amarelado min-h-screen pb-[80px]">
                
                {/* 1. CABEÇALHO DA CAPELA (Hero) */}
                <section className="bg-gradient-to-b from-marrom-escuro to-marrom-claro py-[80px] px-[20px] text-center shadow-md">
                    <h1 className="text-branco text-[36px] md:text-[48px] font-bold mb-[15px] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
                        Capela Santo Amaro
                    </h1>
                    <p className="text-branco-amarelado text-[18px] md:text-[22px] max-w-[800px] mx-auto">
                        Hoje queremos te apresentar a Capela Santo Amaro, mais uma comunidade ativa de nossa paróquia, lugar de fé, oração e encontro com Deus.
                    </p>
                </section>

                {/* 2. INFORMAÇÕES, HORÁRIOS E MAPA */}
                <section className="max-w-[900px] mx-auto px-[20px] mt-[60px]">
                    
                    {/* Grid de Horários e Localização */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        
                        {/* Card de Horários */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-t-[4px] border-mostarda flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-[5px]">
                            <i className="fa-solid fa-clock text-[40px] text-mostarda mb-[15px]"></i>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[10px]">
                                Horário de Missa
                            </h2>
                            <p className="text-cinza-escuro text-[18px] mb-[15px]">
                                A capela conta atualmente com missa semanal aos:
                            </p>
                            <p className="text-marrom-escuro text-[22px] font-bold bg-mostarda/20 py-[10px] px-[20px] rounded-[5px] w-full mb-[15px] border border-mostarda/30">
                                Verificar na Agenda Semanal
                            </p>
                            <p className="text-cinza-escuro text-[14px]">
                                📲 Fique atento à agenda semanal do Santuário para possíveis alterações.
                            </p>
                        </div>

                        {/* Card de Localização */}
                        <div className="bg-branco p-[30px] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-t-[4px] border-mostarda flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-[5px]">
                            <i className="fa-solid fa-location-dot text-[40px] text-mostarda mb-[15px]"></i>
                            <h2 className="text-marrom-escuro text-[24px] font-bold mb-[10px]">
                                Onde Estamos
                            </h2>
                            <p className="text-cinza-escuro text-[18px] mb-[15px]">
                                Venha nos visitar e viver esse momento de graça conosco!
                            </p>
                            <p className="text-marrom-escuro font-bold text-[16px] bg-branco-amarelado py-[10px] px-[20px] rounded-[5px] w-full border border-marrom-claro/20">
                                R. Santo Amaro, Cristo Rei <br/>
                                São Fidélis, RJ, 28400-000
                            </p>
                            <p className="text-marrom-claro text-[15px] mt-[15px] font-bold">
                                📍 A apenas 1.3 km do Santuário.
                            </p>
                        </div>

                    </div>

                    {/* Mapa do Google embutido */}
                    <div className="mt-[30px] w-full bg-branco rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro overflow-hidden">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.1879990994216!2d-41.748523220177546!3d-21.640248013608083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb2117354b23d%3A0x4fcf955e1c8efd33!2sRJ-194%2C%20372%20-%20Ipuca%2C%20S%C3%A3o%20Fid%C3%A9lis%20-%20RJ%2C%2028400-000!5e0!3m2!1spt-BR!2sbr!4v1774265644525!5m2!1spt-BR!2sbr" 
                            className="w-full h-[350px] md:h-[450px]" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de localização da Capela Santo Amaro"
                        ></iframe>
                    </div>

                </section>

                {/* 3. GALERIA DE FOTOS E ORAÇÃO FINAL */}
                <section className="max-w-[1000px] mx-auto px-[20px] mt-[40px] mb-[40px]">
                    <div className="bg-branco p-[30px] md:p-[40px] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.05)] border-t-[4px] border-marrom-claro text-center">
                        
                        {/* Grid de Fotos: 2 colunas, mas a primeira foto ocupa as 2 (quebra de linha) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-[40px]">
                            
                            {/* Fachada: Ocupa a largura total (md:col-span-2) */}
                            <img 
                                src={imgFachada} 
                                alt="Fachada da Capela Santo Amaro" 
                                className="w-full h-[450px] md:h-[500px] object-cover object-[70%_30%] rounded-[8px] shadow-sm transition-transform duration-300 hover:scale-[1.02] object-center md:col-span-2"
                            />
                            
                            {/* Interior e Imagem: Ficam lado a lado embaixo da fachada */}
                            <img 
                                src={imgInterior} 
                                alt="Interior da Capela Santo Amaro" 
                                className="w-full h-[450px] md:h-[500px] object-cover rounded-[8px] shadow-sm transition-transform duration-300 hover:scale-[1.02] object-center"
                            />
                            <img 
                                src={imgExtra} 
                                alt="Imagem de Santo Amaro" 
                                className="w-full h-[450px] md:h-[500px] object-cover rounded-[8px] shadow-sm transition-transform duration-300 hover:scale-[1.02] object-center"
                            />
                            
                        </div>

                        {/* Mensagem Final */}
                        <div className="border-t border-marrom-claro/30 pt-[30px]">
                            <h2 className="text-marrom-escuro text-[24px] md:text-[28px] font-bold italic font-serif leading-relaxed">
                                "Santo Amaro, rogai por nós!" <br/>
                                "São Fidélis de Sigmaringa, rogai por nós!"
                            </h2>
                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}
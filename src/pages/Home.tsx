import { Link } from "react-router-dom";
import temp from "../assets/outras/temp.png"
import imgMatriz from "../assets/matriz/foto-matriz.jpg"
import imgSeb from "../assets/sao_sebastiao/sao_sebastiao.png"
import imgVic from "../assets/sao_vicente/sao_vicente_2.png"
import imgMilagres from "../assets/nsmilagres/igreja-valao-1.jpeg"
import imgFamilia from "../assets/sagrada_familia/sagrada_familia.png"
import imgFatima from "../assets/nsfatima/nsfatima-card.jpeg"
import imgRita from "../assets/outras/temp.png"
import imgRosario from "../assets/rosario/rosario_2.png"
import imgAparecida from "../assets/nsaparecida/nsaparecida-fachada.jpeg"
import imgAmaro from "../assets/santo_amaro/fachada-st-amaro-2.jpg"
import imgCristo from "../assets/cristo_rei/fachada-cristo-rei-1.jpg"



// Importe a foto do Padre aqui (ajuste o caminho conforme sua pasta)
import imgPadre from "../assets/outras/pe_gilberto.jpg" 

import Footer from "../components/Footer";
import Header from "../components/Header";
import ChurchCard from "../components/ChurchCards";

export default function Home(){
    
    const scrollToComunidades = () => {
        const element = document.getElementById('comunidades');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToDizimo = () => {
        const element = document.getElementById('dizimo');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <>
            <Header/>
        
        <main className="bg-branco-amarelado min-h-screen">
            
            {/* SEÇÃO HERO */}
            <section className="bg-gradient-to-b from-marrom-escuro to-marrom-claro text-branco text-center py-[100px] px-[20px]">
                <div className="max-w-[1200px] mx-auto">
                    <h1 className="text-[40px] md:text-[56px] mb-[20px] text-branco [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)] leading-tight">
                        Paróquia Santuário de São Fidélis de Sigmaringa
                    </h1>
                    <p className="text-[20px] mb-[40px]">
                        Um marco de fé, história e devoção às margens do Rio Paraíba do Sul.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button 
                            onClick={scrollToComunidades}
                            className="bg-mostarda text-marrom-escuro py-[12px] px-[30px] text-[18px] font-bold rounded-[5px] inline-block transition-colors duration-300 hover:bg-marrom-claro hover:text-branco cursor-pointer"
                        >
                            Conheça Nossas Comunidades
                        </button>
                        <button 
                            onClick={scrollToDizimo}
                            className="bg-mostarda text-marrom-escuro py-[12px] px-[30px] text-[18px] font-bold rounded-[5px] inline-block transition-colors duration-300 hover:bg-marrom-claro hover:text-branco cursor-pointer"
                        >
                            Faça Sua Devolução
                        </button>
                        <Link 
                            to="/intencoes" 
                            className="bg-mostarda text-marrom-escuro py-[12px] px-[30px] text-[18px] font-bold rounded-[5px] inline-block transition-colors duration-300 hover:bg-marrom-claro hover:text-branco"
                        >
                            Enviar Intenções
                        </Link>
                    </div>
                </div>
            </section>            

            {/* SEÇÃO AGENDA PAROQUIAL (Google Calendar) */}
            <section className="py-[60px] px-[20px] max-w-[900px] mx-auto text-center">
                <h2 className="text-marrom-escuro text-[32px] mb-[30px]">
                    Agenda Paroquial
                </h2>
                <div className="w-full overflow-hidden rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.1)] bg-branco mb-[40px]">
                    <iframe 
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FSao_Paulo&showPrint=0&title=Par%C3%B3quia%20Santu%C3%A1rio%20S%C3%A3o%20Fid%C3%A9lis%20de%20Sigmaringa&mode=AGENDA&showNav=0&showTz=0&showCalendars=0&showTabs=0&src=YjhmMDc0ZjQ0MzE4MmU2NWYzYzBiNzM4ZDViYWQ3MzRiNGU4NDdmM2U3NDM4Zjk2NjMxZTJhYjA2MmNlMGZkN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23795548" 
                        className="w-full border-0 h-[400px] md:h-[600px]" 
                        frameBorder="0" 
                        scrolling="no"
                        title="Calendário da Paróquia"
                    ></iframe>
                </div>
            </section>

            {/* SEÇÃO NOSSA HISTÓRIA E DEVOÇÃO */}
            <section className="bg-branco py-[60px] px-[20px] text-center max-w-[900px] my-[40px] mx-auto rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                <div className="flex flex-col items-center">
                    <h2 className="text-marrom-escuro text-[32px] mb-[20px]">
                        Nossa História e Devoção
                    </h2>
                    <p className="text-cinza-escuro text-[18px] mb-[15px]">
                        A Igreja Matriz de São Fidélis de Sigmaringa teve sua construção iniciada em 1799 e foi concluída em 1809 pelos frades capuchinhos. Com linhas arquitetônicas de reflexo italiano e gosto toscano em sua construção em cruz, o monumental templo chama a atenção pela grandiosidade de sua cúpula e carrega mais de dois séculos de fé em nossa cidade.
                    </p>
                    <div className="w-full max-w-[700px] mt-[30px] rounded-[10px] overflow-hidden shadow-md">
                        <iframe 
                            className="w-full aspect-video"
                            src="https://www.youtube-nocookie.com/embed/LrU9ixrYcHw?si=GetzsE__RAL8xNg3" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* SEÇÃO NOSSO PÁROCO (Novo Card) */}
            <section className="py-[60px] px-[20px] max-w-[900px] mx-auto">
                <div className="bg-branco rounded-[10px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col md:flex-row items-center border-l-[6px] border-mostarda">
                    
                    {/* Foto do Padre */}
                    <div className="w-full md:w-[350px] h-[400px] flex-shrink-0">
                        <img 
                            src={imgPadre} 
                            alt="Pe. Gilberto Alvim" 
                            className="pl-[10px] w-full h-full object-cover rounded-[22px]"
                        />
                    </div>

                    {/* Texto sobre o Padre */}
                    <div className="p-[30px] md:p-[40px] text-center md:text-left">
                        <span className="text-marrom-claro font-bold text-[14px] uppercase tracking-wider mb-2 block">
                            Liderança Espiritual
                        </span>
                        <h2 className="text-marrom-escuro text-[32px] font-bold mb-[15px]">
                            Pe. Gilberto Alvim
                        </h2>
                        <div className="w-[60px] h-[3px] bg-mostarda mb-[20px] mx-auto md:mx-0"></div>
                        <p className="text-cinza-escuro text-[18px] leading-relaxed mb-[20px]">
                            À frente do Santuário de São Fidélis de Sigmaringa, o Padre Gilberto Alvim conduz nossa comunidade com zelo pastoral, dedicação e espírito de serviço. Seu ministério é marcado pelo acolhimento fraterno, pelo cuidado com as famílias e pelo compromisso em fortalecer a fé e a vivência cristã em nossas comunidades.
                        </p>
                        <p className="text-marrom-escuro font-bold italic">
                            "A serviço de Deus e do povo de São Fidélis."
                        </p>
                        
                        {/* Contato rápido se quiser adicionar */}
                        <div className="mt-[30px] pt-[20px] border-t border-marrom-claro/20">
                           <p className="text-cinza-escuro text-[16px]">
                             <strong className="text-marrom-escuro">Atendimento:</strong> Procure a secretaria para agendar um horário com o pároco.
                           </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO COMUNIDADES */}
            <section id="comunidades" className="py-[60px] px-[20px] max-w-[1200px] mx-auto text-center">
                <h2 className="text-marrom-escuro text-[32px] mb-[40px]">
                    Nossas Igrejas
                </h2>
                <div className="flex justify-center gap-[30px] flex-wrap">
                    <ChurchCard 
                        imageUrl={imgMatriz} 
                        imageText="Foto da fachada da Igreja Matriz"
                        title="Matriz São Fidélis"
                        description="Santuário histórico e coração de nossa paróquia."
                        linkUrl="/matriz"
                    />
                    <ChurchCard 
                        imageUrl={imgSeb} 
                        imageText="Foto da Igreja"
                        title="Capela São Sebastião"
                        description="Comunidade localizada no bairro Ipuca."
                        linkUrl="/capela-sao-sebastiao"
                    />
                    <ChurchCard 
                        imageUrl={imgVic} 
                        imageText="Foto da Igreja"
                        title="Capela São Vicente"
                        description="Comunidade localizada no bairro São Vicente."
                        linkUrl="/capela-sao-vicente"
                    />
                    <ChurchCard 
                        imageUrl={imgCristo} 
                        imageText="Foto da Igreja"
                        title="Capela Cristo Rei"
                        description="Comunidade localizada no bairro Cristo Rei."
                        linkUrl="/capela-cristo-rei"
                    />
                    <ChurchCard 
                        imageUrl={imgAmaro} 
                        imageText="Foto da Igreja"
                        title="Capela Santo Amaro"
                        description="Comunidade localizada no bairro Cristo Rei."
                        linkUrl="/capela-santo-amaro"
                    />
                    <ChurchCard 
                        imageUrl={imgMilagres} 
                        imageText="Foto da Igreja"
                        title="Capela Nossa Senhora dos Milagres"
                        description="Comunidade localizada no distrito de Valão dos Milagres"
                        linkUrl="/capela-nossa-senhora-dos-milagres"
                    />
                    <ChurchCard 
                        imageUrl={imgFamilia} 
                        imageText="Foto da Igreja"
                        title="Capela Sagrada Família"
                        description="Comunidade localizada no bairro Nova Divinéia."
                        linkUrl="/capela-sagrada-familia"
                    />
                    <ChurchCard 
                        imageUrl={imgFatima} 
                        imageText="Foto da Igreja"
                        title="Capela Nossa Senhora de Fátima"
                        description="Comunidade localizada em Santa Catarina."
                        linkUrl="/capela-nossa-senhora-de-fatima"
                    />
                     <ChurchCard 
                        imageUrl={imgRita} 
                        imageText="Foto da Igreja"
                        title="Capela Santa Rita De Cássia"
                        description="Comunidade localizada em Grumarim."
                        linkUrl="/capela-santa-rita-de-cassia"
                    />
                    <ChurchCard 
                        imageUrl={imgAparecida} 
                        imageText="Foto da Igreja"
                        title="Capela Nossa Senhora Aparecida"
                        description="Comunidade localizada na Chatuba."
                        linkUrl="/capela-nossa-senhora-aparecida"
                    />
                    <ChurchCard 
                        imageUrl={imgRosario} 
                        imageText="Foto da Igreja"
                        title="Capela Nossa Senhora do Rosário"
                        description="Comunidade localizada no Centro."
                        linkUrl="/capela-nossa-senhora-do-rosario"
                    />
                    <ChurchCard 
                        imageUrl={temp} 
                        imageText="Foto da Igreja"
                        title="Capela Santa Ana"
                        description="Comunidade localizada na Fazenda da Pedra."
                        linkUrl="/capela-santa-ana"
                    />
                </div>
            </section>

            {/* SEÇÃO DÍZIMO */}
            <section id="dizimo" className="py-[60px] px-[20px] text-center">
                <div className="max-w-[800px] mx-auto bg-branco p-[40px] rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                    <h2 className="text-marrom-claro text-[32px] mb-[20px]">Devolução do Dízimo</h2>
                    <p className="text-cinza-escuro text-[18px]">
                        Sua contribuição ajuda a manter nossa igreja e nossos projetos sociais vivos. Seja um dizimista fiel!
                    </p>
                    <div className="mt-[30px] bg-branco-amarelado p-[20px] rounded-[5px] border-l-[5px] border-mostarda">
                        <p className="text-[18px] text-cinza-escuro mb-[10px]">
                            <strong className="text-marrom-escuro">PIX (CNPJ):</strong> 30.408.116/0024-11
                        </p>
                        <p className="text-[18px] text-cinza-escuro">
                            <strong className="text-marrom-escuro">Banco:</strong> Banco do Brasil <span className="text-marrom-claro mx-[5px]">|</span> 
                            <strong className="text-marrom-escuro"> Ag:</strong> 0454 <span className="text-marrom-claro mx-[5px]">|</span> 
                            <strong className="text-marrom-escuro"> Cc:</strong> 32573-0
                        </p>
                    </div>
                </div>
            </section>
        </main>

        <Footer></Footer>
        </>
    )
}
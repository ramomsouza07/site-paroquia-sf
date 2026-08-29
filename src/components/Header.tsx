import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Função para rolar suavemente até a seção correta na Home
    const handleScrollToSection = (sectionId: string) => {
        setIsMenuOpen(false); // Fecha o menu mobile se estiver aberto
        
        // Dá um tempinho mínimo para o React carregar a página Home antes de rolar
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <header className="bg-[#331905] text-white p-0 sticky top-0 z-[1000] w-full">
            
            <div className="max-w-[1400px] h-[100px] mx-auto px-5 grid grid-cols-[1fr_auto] min-[768px]:grid-cols-[1fr_auto_1fr] items-center">
                
                {/* 1. Logo */}
                <div className="flex items-center justify-self-start">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                        <img
                            src={logo}
                            alt="Logo Paróquia São Fidélis"
                            className="h-[80px] w-auto rounded-full bg-white"
                        />
                    </Link>
                </div>
                
                {/* 2. Menu Central */}
                <nav className="hidden min-[768px]:flex items-center justify-self-center">
                    <ul className="list-none flex items-center gap-[30px] m-0 p-0">
                        <li><Link to="/" className="text-[16px] font-medium text-white transition-all duration-300 py-[5px] hover:[text-shadow:0px_4px_12px_rgba(255,255,255,0.6)]">Home</Link></li>
                        {/* Links com rolagem suave */}
                        <li><Link to="/" onClick={() => handleScrollToSection('comunidades')} className="text-[16px] font-medium text-white transition-all duration-300 py-[5px] hover:[text-shadow:0px_4px_12px_rgba(255,255,255,0.6)]">Nossas Igrejas</Link></li>
                        <li><Link to="/" onClick={() => handleScrollToSection('dizimo')} className="text-[16px] font-medium text-white transition-all duration-300 py-[5px] hover:[text-shadow:0px_4px_12px_rgba(255,255,255,0.6)]">Dízimo</Link></li>
                        {/* Novos links de navegação */}
                        <li><Link to="/servicos" className="text-[16px] font-medium text-white transition-all duration-300 py-[5px] hover:[text-shadow:0px_4px_12px_rgba(255,255,255,0.6)]">Serviços</Link></li>
                        <li><Link to="/padres" className="text-[16px] font-medium text-white transition-all duration-300 py-[5px] hover:[text-shadow:0px_4px_12px_rgba(255,255,255,0.6)]">Padres</Link></li>
                        <li><Link to="/artigos" className="text-[16px] font-medium text-white transition-all duration-300 py-[5px] hover:[text-shadow:0px_4px_12px_rgba(255,255,255,0.6)]">Artigos</Link></li>
                        <li><Link to="/intencoes" className="text-[16px] font-medium text-white transition-all duration-300 py-[5px] hover:[text-shadow:0px_4px_12px_rgba(255,255,255,0.6)]">Intenções</Link></li>
                        <li><Link to="/contatos" className="text-[16px] font-medium text-white transition-all duration-300 py-[5px] hover:[text-shadow:0px_4px_12px_rgba(255,255,255,0.6)]">Contato</Link></li>
                    </ul>
                </nav>

                {/* 3. Redes Sociais */}
                <div className="hidden min-[768px]:flex items-center gap-[15px] justify-self-end">
                    <a href="https://www.facebook.com/paroquiasantuariosaofidelis/" target="_blank" rel="noreferrer" className="text-[20px] text-white transition-all duration-300 hover:[text-shadow:0px_4px_12px_rgba(255,255,255,0.6)]"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/paroquiasantuariosaofidelis/" target="_blank" rel="noreferrer" className="text-[20px] text-white transition-all duration-300 hover:[text-shadow:0px_4px_12px_rgba(255,255,255,0.6)]"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@ParoquiaSantuarioSaoFidelis" target="_blank" rel="noreferrer" className="text-[20px] text-white transition-all duration-300 hover:[text-shadow:0px_4px_12px_rgba(255,255,255,0.6)]"><i className="fa-brands fa-youtube"></i></a>
                </div>

                {/* 4. Botão Mobile */}
                <div className="min-[768px]:hidden text-[24px] cursor-pointer justify-self-end" onClick={toggleMenu}>
                    <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-white`}></i>
                </div>
            </div>

            {/* 5. MENU MOBILE DROPDOWN */}
            <div className={`min-[768px]:hidden w-full bg-[#331905] border-t border-[#A48267] overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[450px] py-5' : 'max-h-0'}`}>
                <ul className="flex flex-col items-center gap-5 m-0 p-0 list-none">
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-medium text-white">Home</Link></li>
                    <li><Link to="/" onClick={() => handleScrollToSection('comunidades')} className="text-[18px] font-medium text-white">Nossas Igrejas</Link></li>
                    <li><Link to="/" onClick={() => handleScrollToSection('dizimo')} className="text-[18px] font-medium text-white">Dízimo</Link></li>
                    <li><Link to="/servicos" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-medium text-white">Serviços</Link></li>
                    <li><Link to="/intencoes" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-medium text-white">Intenções</Link></li>
                    <li><Link to="/contatos" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-medium text-white">Contato</Link></li>
                    
                    <li className="flex gap-[20px] mt-2 pt-4 border-t border-[#A48267] w-[60%] justify-center">
                        <a href="https://www.facebook.com/paroquiasantuariosaofidelis/" target="_blank" rel="noreferrer" className="text-[22px] text-white"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/paroquiasantuariosaofidelis/" target="_blank" rel="noreferrer" className="text-[22px] text-white"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@ParoquiaSantuarioSaoFidelis" target="_blank" rel="noreferrer" className="text-[22px] text-white"><i className="fa-brands fa-youtube"></i></a>
                    </li>
                </ul>
            </div>
            
        </header>
    );
}
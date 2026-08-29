import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext";

import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import Intencoes from './pages/Intencoes';
import NotFound from './pages/NotFound';

import Padres from './pages/Padres';


import Matriz from './pages/churchs/Matriz'
import Sebastiao from './pages/churchs/Sebastiao';
import Vicente from './pages/churchs/Vicente'
import CristoRei from './pages/churchs/CristoRei';
import Amaro from './pages/churchs/Amaro';
import NSMilagres from './pages/churchs/NSMilagres';
import SagradaFamilia from './pages/churchs/SagradaFamilia';
import NSFatima from './pages/churchs/NSFatima';
import RitaCassia from './pages/churchs/RitaCassia';


import NSRosario from './pages/churchs/NSRosario';
import NSAparecida from './pages/churchs/NSAparecida';
import SantaAna from './pages/churchs/SantaAna';

import ArticleDetail from './pages/ArticleDetail';
import Article from './pages/Article';

import Login from "./pages/admin/Login";
import ArtigoForm from "./pages/admin/ArtigoForm";
import RotaProtegida from "./components/admin/RotaProtegida";

export default function RoutesApp(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={ <Home/> }/>
                    <Route path="/intencoes" element={<Intencoes />} />
                    <Route path="/servicos" element={<Services />} />
                    <Route path='/contatos' element={<Contacts/>} />
                    <Route path='/padres' element={<Padres/>} />
                    <Route path="*" element={<NotFound />} />                
                    
                    <Route path='/matriz' element={<Matriz/>} />
                    <Route path="/capela-sao-vicente" element={<Vicente />} />
                    <Route path="/capela-sao-sebastiao" element={<Sebastiao />} />
                    <Route path="/capela-cristo-rei" element={<CristoRei />} />
                    <Route path="/capela-santo-amaro" element={<Amaro />} />
                    <Route path="/capela-nossa-senhora-dos-milagres" element={<NSMilagres />} />
                    <Route path="/capela-sagrada-familia" element={<SagradaFamilia />} />
                    <Route path="/capela-nossa-senhora-de-fatima" element={<NSFatima />} />
                    <Route path="/capela-santa-rita-de-cassia" element={<RitaCassia />} />
                    
                    <Route path="/capela-nossa-senhora-aparecida" element={<NSAparecida />} />
                    <Route path="/capela-nossa-senhora-do-rosario" element={<NSRosario />} />
                    <Route path="/capela-santa-ana" element={<SantaAna />} />

                    <Route path="/artigos" element={<Article />} />
                    <Route path="/artigos/:slug" element={<ArticleDetail />} />
                

                    <Route path="/admin/login" element={<Login />} />
                    <Route
                    path="/admin/artigos/novo"
                    element={
                        <RotaProtegida>
                        <ArtigoForm />
                        </RotaProtegida>
                    }
                    />
                    
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
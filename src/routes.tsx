import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import Intencoes from './pages/Intencoes';
import NotFound from './pages/NotFound';
import Articles from './pages/Article';

import Teste from './pages/articles/Teste';

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


export default function RoutesApp(){
    return(
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path="/intencoes" element={<Intencoes />} />
                <Route path="/servicos" element={<Services />} />
                <Route path='/contatos' element={<Contacts/>} />
                <Route path="*" element={<NotFound />} />
                <Route path="/artigos" element={<Articles />} />

                <Route path="/artigos/TESTE" element={<Teste />} />
                
                
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

            </Routes>
        </BrowserRouter>
    )
}
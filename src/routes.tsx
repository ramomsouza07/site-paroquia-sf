import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import Intencoes from './pages/Intencoes';
import Article from './pages/Article'
import NotFound from './pages/NotFound';


import Matriz from './pages/churchs/Matriz'
import Sebastiao from './pages/churchs/Sebastiao';
import Vicente from './pages/churchs/Vicente'
import CristoRei from './pages/churchs/CristoRei';
import Amaro from './pages/churchs/Amaro';
import NSMilagres from './pages/churchs/NSMilagres';
import SagradaFamilia from './pages/churchs/SagradaFamilia';
import NSFatima from './pages/churchs/NSFatima';
import RitaCassia from './pages/churchs/RitaCassia';


import Teste from './pages/articles/teste';


export default function RoutesApp(){
    return(
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path="/intencoes" element={<Intencoes />} />
                <Route path="/servicos" element={<Services />} />
                <Route path='/contatos' element={<Contacts/>} />
                <Route path='/artigos' element={<Article/>} />
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



                <Route path="/artigos/teste" element={<Teste />} />


            </Routes>
        </BrowserRouter>
    )
}
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // importa componentes para gerenciamento de rotas
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export default function App() {
  return (
    <div className='max-h-screen flex flex-col'>
    <BrowserRouter> {/* habilita o roteamento */}
      <Routes> {/* container com as rotas */}
        <Route path="/" element={<Login />} /> {/* define rota para login */}
        <Route path="/home" element={<Home />} /> {/* define rota para home */}        
      </Routes>
    </BrowserRouter>
    </div>
  );
};


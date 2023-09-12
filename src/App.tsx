import './estilo/estilo.css';
import { Route,Routes } from 'react-router-dom';

import Home from './paginas/home';
import Monitorar from './paginas/monitorar';
import NotFound from './paginas/notefound';
import Inicial from './paginas/login';
import CadastroUsuario from './paginas/cadusuario';
import CadastroFuncionario from './paginas/cadfuncionario';
import CadastroPatrimonio from './paginas/cadpatrimonio';


function App() {
  return (
    <div>   
      <div>
      <Routes>
        <Route path='/' element={<Inicial/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/home/usuario' element={<CadastroUsuario/>} />
        <Route path='/home/funcionario' element={<CadastroFuncionario/>} />
        <Route path='/home/patrimonio' element={<CadastroPatrimonio/>} />
        <Route path='/home/monitorar' element={<Monitorar/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

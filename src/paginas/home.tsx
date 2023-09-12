import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div>
      <Cabecalho
        cabTexto1={"Início"}
        cabTexto2={"Cad. Usuário"}
        cabTexto3={"Cad. Funcionário"}
        cabTexto4={"Cad. Patrimônio"}
        cabTexto5={"Monitorar"}
        cabTexto6={"Sair"}
      />

      <div className='home1'>

        <div className='cadPatrimonio'>
          <h3>Cadastro de Patrimônio</h3>
          <br />
          <p>Aqui você irá cadastrar os patrimônios de sua empresa.</p>
          <br />
          <Link to="/home/patrimonio"> <button className='btnHome'><strong>Clique aqui</strong> </button> </Link>
        </div>

        <div className='cadUsuario'>
          <h3>Cadastro de Usuário</h3>
          <br />
          <p>Aqui você irá cadastrar os usuários que terão acesso a modificações dentro do software.</p>
          <br />
          <Link to="/home/usuario"> <button className='btnHome'><strong>Clique aqui</strong></button> </Link>
        </div>



        <div className='cadFuncionarios'>
          <h3>Cadastro de Funcionários</h3>
          <br />
          <p>Aqui serão cadastrados todos os funcionários da sua empresa.</p>
          <br />
          <Link to="/home/funcionario"> <button className='btnHome'><strong>Clique aqui</strong></button> </Link>
        </div>

      </div>

      <div className='home2'>

        <div className='monitorar'>
          <h3>Monitorar</h3>
          <br />
          <p>O objetivo principal do monitoramento de patrimônio é garantir a segurança e a integridade dos ativos, prevenir perdas,
            identificar potenciais riscos e agir proativamente para evitar danos ou roubos.</p>
          <br />
          <Link to="/home/monitorar"> <button className='btnHome'><strong>Clique aqui</strong></button> </Link>
        </div>

      </div>

    </div>
  )
}

export default Home;
import '../../estilo/estilo.css';
import Botoes from '../menu';

type Props = {
    cabTexto1?: String;
    cabTexto2?: String;
    cabTexto3?: String;
    cabTexto4?: String;
    cabTexto5?: String;
    cabTexto6?: String;
  }

  function Cabecalho(cab: Props){

    return(
      <div>
        <header>
          <Botoes
            titInicio={cab.cabTexto1}
            titUsuario={cab.cabTexto2}
            titFuncionario={cab.cabTexto3}
            titPatrimonio={cab.cabTexto4}
            titmonitorar={cab.cabTexto5}
            titsair={cab.cabTexto6}
            />
        </header>
      </div>
    )
  }
  
  export default Cabecalho;
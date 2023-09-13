import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import { useState } from 'react';
import { api } from '../api';
import { Monitorando } from '../componentes/types/monitorar';
import Monitoramento from '../formpost/monitorarPost';

function Monitorar() {

  const [monit, setMonitorar] = useState<Monitorando[]>([]);


  const handleAddClick = async (idfuncionario: string,
    idpatrimonio: string,
  ) => {

    let json = await api.InserirMonitorar(idfuncionario, idpatrimonio);

    if (json.id) {
      alert('Movimentação realizada com sucesso!');
      setMonitorar((monit) => [...monit, json]);
    } else {
      alert(json.message)
    }
  }


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
      <Monitoramento onAdd={handleAddClick} />

      <br />
    </div>

    // {/* 
    // <div className='telamonitorar'>

    //   {!loading &&
    //     <div>
    //       {usuarios.map((item, index) => (
    //         <MonitorarItem data={item} />
    //       ))}
    //     </div>
    //   }
    // </div> */}

  )
}

export default Monitorar;
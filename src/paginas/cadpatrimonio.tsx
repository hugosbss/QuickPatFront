import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import { useState } from 'react';
import CadPatrimonio from '../formpost/patrimonioPost';
import { api } from '../api';
import { Patrimonio } from '../componentes/types/patrimonios';

function CadastroPatrimonio () {

  const [patrimonios, setPatrimonios] = useState<Patrimonio[]>([]);

  const handleAddClick = async (NOME: string,
    MODELO: string,
    TIPO: string,
    GRUPO: string,
    VALOR: string,
    DESCRICAO: string,
  ) => {

    let json = await api.InserirPatrimonios(NOME, MODELO, TIPO, GRUPO, parseFloat(VALOR), DESCRICAO);

    if (json.id) {
      alert('Patrimonios inserido com sucesso!');
      setPatrimonios((patrimonios) => [...patrimonios, json]);
    } else {
      alert(json.message + ' VALOR TIPO:'+VALOR)
    }
  }
    
    return(
      <div>
        <Cabecalho
          cabTexto1={"Início"}
          cabTexto2={"Cad. Usuário"}
          cabTexto3={"Cad. Funcionário"}
          cabTexto4={"Cad. Patrimônio"}
          cabTexto5={"Monitorar"}
          cabTexto6={"Sair"}
        />
        <CadPatrimonio onAdd={handleAddClick}/>

      </div>
      )
  }

export default CadastroPatrimonio;
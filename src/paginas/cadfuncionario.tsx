import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import { useState } from 'react';
import CadFuncionario from '../formpost/funcionarioPost';
import { api } from '../api';
import { Funcionarios } from '../componentes/types/funcionarios';


function CadastroFuncionario() {

  const [funcionarios, setFuncionarios] = useState<Funcionarios[]>([]);

  const handleAddClick = async (NOME_COMPLETO: string,
    CARGO: string,
    EMAIL: string,
    CONFIRMAEMAIL: string,
    TELEFONEUM: string,
    DEPARTAMENTO: string,
  ) => {

    let json = await api.InserirFuncionarios(NOME_COMPLETO, CARGO, EMAIL, CONFIRMAEMAIL, TELEFONEUM, DEPARTAMENTO);

    if (json.id) {
      alert('Funcionário inserido com sucesso!');
      setFuncionarios((funcionarios) => [...funcionarios, json]);
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
      <CadFuncionario onAdd={handleAddClick} />

    </div>
  )
}

export default CadastroFuncionario;
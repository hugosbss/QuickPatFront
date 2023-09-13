import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import { useState } from 'react';
import CadUsuario from '../formpost/usuarioPost';
import { api } from '../api';
import { Usuario } from '../componentes/types/usuario';



function CadastroUsuario() {
  
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const handleAddClick = async (NOME: string,
    SOBRENOME: string,
    EMAIL: string,
    CONFIRMAEMAIL: string,
    TELEFONEUM: string,
    TELEFONEDOIS: string,
    LOGIN: string,
    SENHA: string) => {
     
    let json = await api.InserirUsuarios(NOME, SOBRENOME, EMAIL, CONFIRMAEMAIL, TELEFONEUM, TELEFONEDOIS, LOGIN, SENHA );

    if (json.id) {
        alert('Usuario inserido com sucesso!');
        setUsuarios((usuarios) => [...usuarios, json]);
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
      <CadUsuario onAdd={handleAddClick}/>
      
    </div>
  )
}

export default CadastroUsuario;
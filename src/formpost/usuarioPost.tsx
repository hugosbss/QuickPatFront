import { ChangeEvent, useState } from "react";
import { Button, Input } from "reactstrap";
import { Usuario } from "../componentes/types/usuario";
import UsuarioItem from "../itensmap/usuariomap";

type Props =
  {
    onAdd: (
      NOME: string,
      SOBRENOME: string,
      EMAIL: string,
      CONFIRMAEMAIL: string,
      TELEFONEUM: string,
      TELEFONEDOIS: string,
      LOGIN: string,
      SENHA: string
    ) => void;
  }

function CadUsuario({ onAdd }: Props) {

  const [addNome, setaddNome] = useState('');
  const [addSobrenome, setaddSobrenome] = useState('');
  const [addEmail, setaddEmail] = useState('');
  const [addConfEmail, setaddConfEmail] = useState('');
  const [addTelum, setaddTelum] = useState('');
  const [addTeldois, setaddTeldois] = useState('');
  const [addLogin, setaddLogin] = useState('');
  const [addSenha, setaddSenha] = useState('');

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(false);


  const handleAddNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddNome(e.target.value)
  }

  const handleAddSobrenomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddSobrenome(e.target.value)
  }

  const handleAddEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddEmail(e.target.value)
  }

  const handleAddConfEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddConfEmail(e.target.value)
  }

  const handleAddTelumChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddTelum(e.target.value)
  }

  const handleAddTeldoisChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddTeldois(e.target.value)
  }

  const handleAddLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddLogin(e.target.value)
  }

  const handleAddSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddSenha(e.target.value)
  }


  function handleClickButton() {
    if (addNome && addSobrenome && addEmail && addConfEmail && addTelum && addTeldois && addLogin && addSenha) {
      onAdd(addNome, addSobrenome, addEmail, addConfEmail, addTelum, addTeldois, addLogin, addSenha);
    } else {
      alert("Preencha todos os campos");
    }
  }

  const carregarTodos = async () => {

    setLoading(true);
    try {
      let response = await fetch("https://quickpatbacksexta.onrender.com/usuarios")
      let json = await response.json();

      const dataArray = Array.isArray(json) ? json : [json];


      setLoading(false);
      setUsuarios(dataArray);

    } catch (e) {
      alert('Falha ao carregar os históricos de movimentação')
      setLoading(false);
      console.error(e);
    }
  }



  return (
    <div>
      <h1> Cadastro de Usuários </h1>
      <form action="">
        <div className='pai'>
          <div className='filha'>

            <label> Nome: </label>
            <Input value={addNome} onChange={handleAddNomeChange} type="text" placeholder='Digite o nome'></Input>
            <label> Sobrenome: </label>
            <Input value={addSobrenome} onChange={handleAddSobrenomeChange} type="text" placeholder='Digite o sobrenome'></Input>
            <label> E-mail: </label>
            <Input value={addEmail} onChange={handleAddEmailChange} type="email" placeholder='Digite o e-mail'></Input>
            <label> Confirmação E-mail: </label>
            <Input value={addConfEmail} onChange={handleAddConfEmailChange} type="email" placeholder='Confirme o e-mail'></Input>
          </div>

          <div className='filha'>
            <label> Telefone Celular 1: </label>
            <Input value={addTelum} onChange={handleAddTelumChange} type="text" placeholder='(xx) xxxxx-xxxx'></Input>
            <label> Telefone Celular 2: </label>
            <Input value={addTeldois} onChange={handleAddTeldoisChange} type="text" placeholder='(xx) xxxxx-xxxx'></Input>
            <label> Login: </label>
            <Input value={addLogin} onChange={handleAddLoginChange} type="text" placeholder='Digite o usuário'></Input>
            <label> Senha: </label>
            <Input value={addSenha} onChange={handleAddSenhaChange} type="password" placeholder='Digite a senha'></Input>
          </div>

          <div className='botaocad'>
            <Button value={addSenha} onClick={handleClickButton} color="success"> Cadastrar </Button>
          </div>

        </div>
      </form>

      <div className=''>
        <Button onClick={carregarTodos} color="light"> Todos Usuários </Button>
      </div>

      <div className='telamonitorar'>

        {!loading &&
          <div>
            {usuarios.map((item, index) => (
              <UsuarioItem data={item} />
            ))}
          </div>
        }
      </div>


    </div>
  )
}


export default CadUsuario;
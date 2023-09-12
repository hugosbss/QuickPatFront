import { ChangeEvent, useState } from "react";
import { Button, Input } from "reactstrap";
import PatrimonioItem from "../itensmap/patrimoniomap";
import { Patrimonio } from "../componentes/types/patrimonios";

type Props =
  {
    onAdd: (
      NOME: string,
      MODELO: string,
      TIPO: string,
      GRUPO: string,
      VALOR: string,
      DESCRICAO: string,
    ) => void;
  }

function CadPatrimonio({ onAdd }: Props) {

  const [addNome, setaddNome] = useState('');
  const [addModelo, setaddModelo] = useState('');
  const [addTipo, setaddTipo] = useState('');
  const [addGrupo, setaddGrupo] = useState('');
  const [addValor, setaddValor] = useState('');
  const [addDescricao, setaddDescricao] = useState('');

  const [patrimonios, setPatrimonios] = useState<Patrimonio[]>([]);
  const [loading, setLoading] = useState(false);


  const handleAddNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddNome(e.target.value)
  }

  const handleAddModeloChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddModelo(e.target.value)
  }

  const handleAddTipoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddTipo(e.target.value)
  }

  const handleAddGrupoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddGrupo(e.target.value)
  }

  const handleAddValorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddValor(e.target.value)
  }

  const handleAddDescricaoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddDescricao(e.target.value)
  }


  function handleClickButton() {
    if (addNome && addModelo && addTipo && addGrupo && addValor && addDescricao) {
      onAdd(addNome, addModelo, addTipo, addGrupo, addValor, addDescricao);
    } else {
      alert("Preencha todos os campos");
    }
  }

  const carregarTodos = async () => {

    setLoading(true);
    try {
      let response = await fetch("https://quickpatbacksexta.onrender.com/patrimonios")
      let json = await response.json();

      const dataArray = Array.isArray(json) ? json : [json];

      setLoading(false);
      setPatrimonios(dataArray);

    } catch (e) {
      alert('Falha ao carregar os históricos de movimentação')
      setLoading(false);
      console.error(e);
    }
  }


  return (
    <div>
      <h1> Cadastro de Patrimônio </h1>
      <form action="">
        <div className='pai'>
          <div className='filha'>
            <label> Nome do Patrimônio: </label>
            <Input value={addNome} onChange={handleAddNomeChange} type="text" placeholder='Digite o nome do item'></Input>
            <label> Modelo: </label>
            <Input value={addModelo} onChange={handleAddModeloChange} type="text" placeholder='Digite o modelo' ></Input>
            <label> Tipo: </label>
            <Input value={addTipo} onChange={handleAddTipoChange} type="text" placeholder='Digite o tipo' ></Input>
            <label> Grupo: </label>
            <Input value={addGrupo} onChange={handleAddGrupoChange} type="text" placeholder='Digite o Grupo' ></Input>
          </div>

          <div className='filha'>
            <label> Valor Real R$: </label>
            <Input value={addValor} onChange={handleAddValorChange} type="number" step="0.1" placeholder='Digite o valor da compra' ></Input>

            <label> Descrição: </label>
            <Input value={addDescricao} onChange={handleAddDescricaoChange} type="text" placeholder='Descreva do item'></Input>
          </div>
          <div className='botaocad'>
            <Button onClick={handleClickButton} color="success"> Cadastrar </Button>
          </div>

        </div>
      </form>

      <div className=''>
        <Button onClick={carregarTodos} color="light"> Todos Patrimônios </Button>
      </div>

      <div className='telamonitorar'>

        {!loading &&
          <div>
            {patrimonios.map((item, index) => (
              <PatrimonioItem data={item} />
            ))}
          </div>
        }
      </div>
    </div>
  )
}


export default CadPatrimonio;
import { ChangeEvent, useState } from "react";
import { Button, } from "reactstrap";
import { api } from "../api";
import { Funcionarios } from "../componentes/types/funcionarios";
import { Monitorando } from "../componentes/types/monitorar";
import { Patrimonio } from "../componentes/types/patrimonios";
import MonitorarItem from "../itensmap/monitorarmap";


type Props =
  {
    onAdd: (
      idfuncionario: string,
      idpatrimonio: string,
    ) => void;
  }

function Monitoramento({ onAdd }: Props) {

  const [addIdFuncionario, setaddFuncionario] = useState('');
  const [addIdPatrimonio, setaddPatrimonio] = useState('');

  const [monitorarFuncionario, setFuncionario] = useState<Funcionarios[]>([]);
  const [monitorarPatrimonio, setPatrimonio] = useState<Patrimonio[]>([]);
  const [loading, setLoading] = useState(false);


  const [monitorarMovimentacao, setMovimentacao] = useState<Monitorando[]>([]);

  const setSelectValueIdFuncionario = (e: ChangeEvent<HTMLSelectElement>) => {
    setaddFuncionario(e.target.value)
  }

  const setSelectValueIdPatrimonio = (e: ChangeEvent<HTMLSelectElement>) => {
    setaddPatrimonio(e.target.value)
  }


  const carregaFuncionario = async () => {
    const json = await api.CarregarFuncionarios();
    const dataArray = Array.isArray(json) ? json : [json];
    setFuncionario(dataArray);
  }

  const carregaPatrimonio = async () => {
    const json1 = await api.CarregarPatrimonios();
    const dataArray = Array.isArray(json1) ? json1 : [json1];
    setPatrimonio(dataArray);

  }



  const inserirMovimento = async () => {

    let json = await api.InserirMonitorar(addIdFuncionario, addIdPatrimonio);
    if (json.idpatrimonio) {
      alert("insiriu");
    } else {
      alert(json.message)
    }


  }


  function handleClickButton() {
    alert('Funcionário: ' + addIdFuncionario + ' | Patrimonio: ' + addIdPatrimonio);

    if (addIdFuncionario && addIdPatrimonio) {
      inserirMovimento();
    } else {
      alert("Preencha todos os campos");
    }
  }


  const carregarMovimentacoes = async () => {

    setLoading(true);
    try {
      let response = await fetch("https://quickpatbacksexta.onrender.com/movimentacao")
      let json = await response.json();

      const dataArray = Array.isArray(json) ? json : [json];

      /*      
      FUNCIONARIO
      PATRIMONIO
      */


      setLoading(false);
      setMovimentacao(dataArray);

    } catch (e) {
      alert('Falha ao carregar os históricos de movimentação')
      setLoading(false);
      console.error(e);
    }
  }


  return (
    <div>

      <form action="">
        <div className='divcima1'>
          <select name="FUNCIONARIO" id="" onClick={carregaFuncionario} onChange={(e) => { setSelectValueIdFuncionario(e) }}>
            <option key={0} value="" >Informe o Funcionário</option>
            {
              monitorarFuncionario.map(
                (item, chave) => <option key={chave} value={item.NOME_COMPLETO}>{item.NOME_COMPLETO}</option>
              )
            }
          </select>


          <select name="PATRIMONIO" id="" onClick={carregaPatrimonio} onChange={(e) => { setSelectValueIdPatrimonio(e) }}>
            <option key={0} value="" >Informe o Patrimônio</option>
            {
              monitorarPatrimonio.map(
                (item, chave) => <option key={chave} value={item.NOME}>{item.NOME}</option>
              )
            }
          </select>


        </div>
      </form>


      <div className='divcima2'>
        <Button onClick={handleClickButton} color="success"> Movimentar </Button>
      </div>

      <div className='divcima2'>
        <Button color="info" onClick={carregarMovimentacoes}> Lista de Movimentação </Button>
        <br />
      </div>


      <div className='telamonitorar'>

        {!loading &&
          <div>
            <table>
              <tr>
                <th>Nome do Fucionário </th>
                <th>Nome do Patrimônio </th>
              </tr>
            </table>
            {monitorarMovimentacao.map((item, index) => (
              <MonitorarItem data={item} />
            ))}
          </div>
        }
      </div>


    </div>
  )
}


export default Monitoramento;
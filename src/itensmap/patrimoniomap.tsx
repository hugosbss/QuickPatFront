import { Patrimonio } from '../componentes/types/patrimonios';


type Props = {
  data: Patrimonio
}


function PatrimonioItem({ data }: Props) {
  return (
    <div>
      <table>
        <tr>
          <th>Nome</th>
          <th>Modelo</th>
          <th>Tipo</th>
          <th>Grupo</th>
        </tr>
        <tr>
          <td>{data.NOME}</td>
          <td>{data.MODELO}</td>
          <td>{data.TIPO}</td>
          <td>{data.GRUPO}</td>
        </tr>
      </table>
    </div>
  )
}

export default PatrimonioItem;
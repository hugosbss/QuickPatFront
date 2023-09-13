import { Table } from 'reactstrap';
import { Monitorando } from '../componentes/types/monitorar';
import { Usuario } from '../componentes/types/usuario'

type Props = {
  // Aqui devemos colocar o que deverá aparecer no monitorar
  data: Monitorando
}


function MonitorarItem({ data }: Props) {
  return (
    <div>
      <table>
        <tr>
          <td>{data.FUNCIONARIO} </td>
          <td>{data.PATRIMONIO}</td>
        </tr>
      </table>
    </div>
  )
}

export default MonitorarItem;
import { Table } from 'reactstrap';
import { Usuario } from '../componentes/types/usuario'

type Props = {
  data: Usuario
}


function UsuarioItem({ data }: Props) {
  return (
    <div>
      <table>
        <tr>
          <th>Nome</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>{data.NOME} </td>
          <td>{data.EMAIL}</td>
        </tr>
      </table>
    </div>
  )
}

export default UsuarioItem;
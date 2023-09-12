import { Table } from 'reactstrap';
import { Usuario } from '../componentes/types/usuario'

type Props = {
    data: Usuario
}


function UsuarioItem({ data }: Props) {
    return (
        <div>
           <Table
                hover
                responsive
                size="">
                <tbody>
                  <tr className="table-light">
                    <th scope="row">
                      {data.NOME}
                    </th>
                    <td>
                      {data.SOBRENOME}
                    </td>
                    <td>
                      {data.EMAIL}
                    </td>
                    <td>
                      {data.CONFIRMAEMAIL}
                    </td>
                    <td>
                      {data.TELEFONEUM}
                    </td>
                  </tr>
                </tbody>
              </Table>
        </div>
    )
}

export default UsuarioItem;
import { Funcionarios } from '../componentes/types/funcionarios';

type Props = {
  data: Funcionarios
}


function FuncionarioItem({ data }: Props) {
  return (
    <div>
      <table>
        <tr>
          <th>Nome Completo</th>
          <th>Cargo</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Departamento</th>
        </tr>
        <tr>
          <td>{data.NOME_COMPLETO}</td>
          <td>{data.CARGO}</td>
          <td>{data.EMAIL}</td>
          <td>{data.TELEFONEUM}</td>
          <td>{data.DEPARTAMENTO}</td>
        </tr>
      </table>
    </div >
  )
}

export default FuncionarioItem;
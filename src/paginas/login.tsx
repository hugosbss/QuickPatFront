import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../estilo/estilo.css';
import { Button, Input, } from "reactstrap";
import { ChangeEvent, useState } from 'react';
import { api } from '../api';



function Inicial() {

    const navigate = useNavigate();

    const [fUser, setfUser] = useState('');
    const [fSenha, setfSenha] = useState('');

    const handlefUserChange = (e: ChangeEvent<HTMLInputElement>) => {
        setfUser(e.target.value);
    }

    const handlefSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
        setfSenha(e.target.value);
    }


    const RealizarLogin = async () => {

        let json = await api.Logar(fUser, fSenha);

        if (json.userID) {
            alert('Bem Vindo, ' + fUser);
            navigate('/home');
        } else {
            alert('Usuário/Senha não encontrado, tente novamente.')
        }

    }


    return (
        <div style={{
            backgroundImage: `url('/telafundo.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }} className="div_principal">

            <div className="div_logopai">
                <div className="div_logo">
                    <img className="logo1" src="logo.png" alt="logo" />
                </div>
            </div>

            <div className="div_elementos">
                <div className="space">
                    <Input onChange={handlefUserChange} placeholder="Usuário" />
                </div>

                <div className="space">
                    <Input onChange={handlefSenhaChange} type="password" placeholder="Senha" />
                </div>
                <br />

                <div className="entrar">
                    <Button onClick={RealizarLogin} color="success" size="lg"> Entrar </Button>
                </div>
            </div>

        </div>
    )
}

export default Inicial
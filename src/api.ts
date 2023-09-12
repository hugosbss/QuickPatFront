


export const api = {

    InserirUsuarios: async (nome: string, sobrenome: string, email: string, confemail: string, telum: string, teldois: string, login: string, senha: string) => {
        let response = await fetch("https://quickpatbacksexta.onrender.com/usuarios/",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        NOME: nome,
                        SOBRENOME: sobrenome,
                        EMAIL: email,
                        CONFIRMAEMAIL: confemail,
                        TELEFONEUM: telum,
                        TELEFONEDOIS: teldois,
                        LOGIN: login,
                        SENHA: senha,
                    }),
                headers: {
                    'Content-type': ' application/json'
                }
            }
        );
        let json = await response.json();
        console.log(json);

        return json;
    },

    InserirFuncionarios: async (nomecompleto: string, cargo: string, email: string, confemail: string, telefoneum: string, departamento: string) => {
        let response = await fetch("https://quickpatbacksexta.onrender.com/funcionarios/",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        NOME_COMPLETO: nomecompleto,
                        CARGO: cargo,
                        EMAIL: email,
                        CONFIRMAEMAIL: confemail,
                        TELEFONEUM: telefoneum,
                        DEPARTAMENTO: departamento
                    }),
                headers: {
                    'Content-type': ' application/json'
                }
            }
        );
        let json = await response.json();
        console.log(json);

        return json;
    },

    InserirPatrimonios: async (nome: string, modelo: string, tipo: string, grupo: string, valor: number, descricao: string) => {
        let response = await fetch("https://quickpatbacksexta.onrender.com/patrimonios/",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        NOME: nome,
                        MODELO: modelo,
                        TIPO: tipo,
                        GRUPO: grupo,
                        VALOR: valor,
                        DESCRICAO: descricao
                    }),
                headers: {
                    'Content-type': ' application/json'
                }
            }
        );
        let json = await response.json();
        console.log(json);

        return json;
    },

    AlterarPatrimonio: async () => {

    },

    CarregarUsuarioUnico: async (param: string) => {
        let response = await fetch("https://quickpatbacksexta.onrender.com/usuarios/" + param);
        let json = await response.json();
        return json;
    },

    CarregarTodosUsuarios: async () => {
        let response = await fetch("https://quickpatbacksexta.onrender.com/usuarios/")
        let json = await response.json();
        return json;
    },

    InserirMonitorar: async (FUNCIONARIO: string, PATRIMONIO: string,) => {
        let response = await fetch("https://quickpatbacksexta.onrender.com/movimentacao",
            {
                method: 'POST',
                body: JSON.stringify
                    ({
                        FUNCIONARIO: FUNCIONARIO,
                        PATRIMONIO: PATRIMONIO,
                    }),
                headers: {
                    'Content-type': ' application/json'
                }
            }
        );
        let json = await response.json();
        console.log(json);

        return json;
    },

    CarregarFuncionarios: async () => {
        let response = await fetch("https://quickpatbacksexta.onrender.com/funcionarios")
        let json = await response.json();
        return json;
    },

    CarregarPatrimonios: async () => {
        let response = await fetch("https://quickpatbacksexta.onrender.com/patrimonios")
        let json = await response.json();
        return json;
    },

    Logar: async (username: string, password: string) => {
        {
            let response = await fetch("https://quickpatbacksexta.onrender.com/auth/login",
                {
                    method: 'POST',
                    body: JSON.stringify
                        ({ username, password }),
                    headers: {
                        'Content-type': ' application/json; charset=utf-8'
                    }
                }
            );

            let json = await response.json();

            console.log(json);
            return json;
        }
    }

}


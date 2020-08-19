import React from "react";
import {validarCPF,validarEmail,validarSenha,validarNome} from '../models/cadastro'

const ValidacoesCadastro = React.createContext({
    cpf: validarCPF,
    senha: validarSenha,
    email: validarEmail,
    nome: validarNome,
  });

function semValidacao(dados){
    console.log(dados);
    return {valido: true , texto:""}
}

export default ValidacoesCadastro;

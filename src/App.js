import React, { Component, useContext} from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ValidacoesCadastro from  '../src/contexts/ValidacoesCadastro';
import 'fontsource-roboto';
import {validarCPF,validarSenha, validarEmail, validarNome} from './models/cadastro'

import {Container, Typography } from "@material-ui/core"
class App extends Component {

render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha,email:validarEmail,nome:validarNome}}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}



export default App;

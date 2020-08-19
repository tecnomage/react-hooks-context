import React, { useState,useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

export default function DadosUsuario({ aoEnviar}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({
    senha: { valido: true, texto: "" },
    email: { valido: true, texto: "" },
  });
  
  const validacoes = useContext(ValidacoesCadastro);
  
  function validarCampos(event) {
    const { name, value } = event.target;
    const ehValido = validacoes[name](value);
    const novoEstado = { ...erros };
    novoEstado[name] = ehValido;

    setErros(novoEstado);
    console.log(erros);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        console.log(!erros[campo].valido);
        return false;
      }
      return true;
    }
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("submit");
        console.log(possoEnviar());
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        id="email"
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.email.valido}
        helperText={erros.email.texto}
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="Senha"
        name="senha"
        type="password"
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

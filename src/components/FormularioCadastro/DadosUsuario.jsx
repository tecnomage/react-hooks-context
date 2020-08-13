import React from "react";
import { TextField, Button } from "@material-ui/core";

export default function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
        return;
    }}>
      <TextField
        id="Email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="Senha"
        type="text"
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

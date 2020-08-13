import React from "react";
import { TextField, Button } from "@material-ui/core";

export default function DadosEntrega({aoEnviar}) {
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
      }}>
      <TextField
        id="Cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="Estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        
      />
        <TextField
          id="Cidade"
          label="Cidade"
          type="text"
          variant="outlined"
          margin="normal"
        />
      <TextField
        id="Endereco"
        label="Endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="Numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro 
      </Button>
    </form>
  );
}

import React,{useState} from "react";
import { TextField, Button } from "@material-ui/core";

export default function DadosUsuario({aoEnviar, validacoes}) {

  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        validacoes(senha);
        console.log(senha);
        aoEnviar({email,senha});
        
    }}>
      <TextField
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(event)=>{ setEmail(event.target.value)}}
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="Senha"
        type="text"
        value={senha}
        onChange={(event)=>{ setSenha(event.target.value)}}
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

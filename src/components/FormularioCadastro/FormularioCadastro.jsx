import React, { useState } from "react";
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const atual = [
    <DadosUsuario aoEnviar={proximo} />,
    <DadosPessoais
      aoEnviar={aoEnviar}
      validarCPF={validarCPF}
      aoEnviar={proximo}
    />,
    <DadosEntrega aoEnviar={proximo} />,
  ];

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{atual[etapaAtual]}</>;
}

export default FormularioCadastro;

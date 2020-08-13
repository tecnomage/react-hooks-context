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

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={proximo} />;

      case 1:
        return (
          <DadosPessoais
            aoEnviar={aoEnviar}
            validarCPF={validarCPF}
            aoEnviar={proximo}
          />
        );
      case 2:
        return <DadosEntrega aoEnviar={aoEnviar}/>;
      default:
        return <Typography className="headline4"/>; 
    }
  }

  return <>{formularioAtual(etapaAtual)}</>;
}

export default FormularioCadastro;

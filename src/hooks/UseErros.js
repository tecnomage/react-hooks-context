import React, { useState } from "react";

function useErros(validacoes) {
  const estadoInicial = criaEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial)
  function validarCampos(event) {
    //console.log(validacoes);
    const { name, value } = event.target;
    console.log(name + "  " + value + " é " + erros[name].valido);
    const ehValido = validacoes[name](value);
    const novoEstado = { ...erros };
    novoEstado[name] = ehValido;

    setErros(novoEstado);
    //console.log(erros);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        console.log(erros[campo].valido);
        return false;
      }
      return true;
    }
  }

  return [erros, validarCampos,possoEnviar];
}

function criaEstadoInicial(validacoes){
  const estadoInicial = {};
  for (const campo in validacoes) {
    estadoInicial[campo]= {valido: true , texto: ""}    
  }
  return estadoInicial;
  }



export default useErros;

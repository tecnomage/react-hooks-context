function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }

  function validarEmail(email){
    if(email.length < 4 || email.length > 15){
      return {valido:false, texto:"Email deve ter 4 e 15 caracteres"}
    }else{
      return {valido:true, texto:""}
    }
  }


  function validarSenha(senha){
    if(senha.length < 4 || senha.length > 72){
      return {valido:false, texto:"Senha deve ter 4 e 72 digitos"}
    }else{
      return {valido:true, texto:""}
    }
  }

  export {validarCPF,validarEmail,validarSenha}
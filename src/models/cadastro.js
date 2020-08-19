function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 digitos."}
    }else{
      return {valido:true, texto:""}
    }
  }

  function validarEmail(email){
    if(email.length < 8 || email.length > 15){
      console.log('validou email');
      return {valido:false, texto:"Email deve ter 8 e 15 caracteres"}
    }else{
      return {valido:true, texto:""}
    }
  }


  function validarSenha(senha){
    if(senha.length < 4 || senha.length > 15){
      return {valido:false, texto:"Senha deve ter 4 e 72 digitos"}
    }else{
      return {valido:true, texto:""}
    }
  }

  function validarNome(nome){
    if(nome.length < 4 || nome.length > 72){
      return {valido:false, texto:"nome deve ter 4 e 72 digitos"}
    }else{
      return {valido:true, texto:""}
    }
  }

  export  {validarCPF,validarEmail,validarSenha,validarNome}
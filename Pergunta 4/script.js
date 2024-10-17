function validarForm(){
    // pegando referência dos campos a serem manipulados e dados
    var inNome = document.getElementById("inNome").value;
    var inEmail = document.getElementById("inEmail").value;
    var inSenha = document.getElementById("inSenha").value;

    //referênciando os campos de saída
    var outEmail = document.getElementById("outEmail");
    var outSenha = document.getElementById("outSenha");

    // Limpar mensagens de erro
    outEmail.textContent = "";
    outSenha.textContent = "";

    //expressão para verificar se o email é valido
    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //verificar se os campos foram preenchidos
    if (inNome.length == 0 || inEmail.length == 0 || inSenha.length == 0){
        alert("Preencha todos os campos!");
        //fazer o teste caso o email é valido ou não
    }else if(!emailValido.test(inEmail)){
        outEmail.textContent="EMAIL INVÁLIDO!";
        //confirmar se a senha tem pelo menos 8 caracteres
    }else if(inSenha.length < 8){
        outSenha.textContent="A SENHA PRECISA TER NO MÍNIMO 8 CARACTERES"
    }else{
        alert("Validação OK")
    }

}
//obter o botão 
var btEnviar = document.getElementById("btEnviar");
btEnviar.addEventListener("click", validarForm);


function mandarBoasVindas(){
    //pegar referencia dos campos
    var nome = document.getElementById("inNome");
    alert("Seja bem vindo(a) " + nome.value + " !");
}

var btEnviar = document.querySelector("#btEnviar");
btEnviar.addEventListener("click", mandarBoasVindas)
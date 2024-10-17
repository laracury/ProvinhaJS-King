function preencherCoracao(){
    //referenciar a imagem pelo ID
    var heart = document.getElementById("heart");
    var h2 = document.getElementById("h2");

    //verificar se a imagem inserida é a atual e substituir
    if(heart.src.includes("heart-regular.svg")){
        heart.src = "heart-solid.svg";
        h2.style.color = "rgb(136, 4, 4)";
    }else{
        heart.src = "heart-regular.svg";
        h2.style.color = "rgb(192, 190, 190)";
    }



}

var seta = document.getElementById("seta");
seta.addEventListener("click", preencherCoracao);


function dizOi(nome){
    console.log("oi " +nome);
    console.log('Bem-vindo ao Robotron 2000');
}

const robotron = document.querySelector("#robotron")

robotron.addEventListener("click",(evento) => {
    console.log(evento)
})

dizOi("lucas")

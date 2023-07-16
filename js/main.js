/*FUNÇÃO DE ALERTA DE OI */

const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", alertaOI);

function alertaOI() {
    alert("oi");
}

/* QUALQUER PONTO QUE TIVER UMA INTERAÇÃO DE CLICK, PEGARA AS INFORMAÇÕES DE ONDE FOI CLICADO, PASSARA COMO PARAMETRO E EXIBIRÁ ESSE PARAMETRO */
robotron.addEventListener("click", (evento) => {
    console.log(evento)
})


/*ARROW FUNCTION COM ALERT DE BEM VINDO */
window.addEventListener("load", () => {
    alert("Bem-vindo ao Robotron 2000");
});

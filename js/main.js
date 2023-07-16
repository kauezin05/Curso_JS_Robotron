/*querySelectorAll = busca todos os elementos com o mesmo parametro de busca*/

const robotron = document.querySelector("#robotron")
const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")
const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})


function manipulaDados(operacao) {
    if(operacao === "-") {
        braco.value = parseInt(braco.value) - 1;
    } else {
        braco.value = parseInt(braco.value) + 1;
    }
}

// /* QUALQUER PONTO QUE TIVER UMA INTERAÇÃO DE CLICK, PEGARA AS INFORMAÇÕES DE ONDE FOI CLICADO, PASSARA COMO PARAMETRO E EXIBIRÁ ESSE PARAMETRO */
// robotron.addEventListener("click", (evento) => {
//     console.log(evento)
// })


// /*ARROW FUNCTION COM ALERT DE BEM VINDO */
// window.addEventListener("load", () => {
//     alert("Bem-vindo ao Robotron 2000");
// });

// /*FUNÇÃO DE ALERTA DE OI */

// robotron.addEventListener("click", alertaOI);

// function alertaOI() {
//     alert("oi");
// }
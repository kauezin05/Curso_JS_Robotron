/*querySelectorAll = busca todos os elementos com o mesmo parametro de busca*/
const robotron = document.querySelector("#robotron")
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelector("[data-estatisticas]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}




controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataSet.controle, evento.target.parentNode)
    })
    atualizaEstatisticas(evento.target.dataSet.peca)
})


function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataSet.estatisticas]
    })
}

function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
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
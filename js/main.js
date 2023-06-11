/*FUNÇÃO DE ALERTA DE OI */

const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", alertaOI);

function alertaOI() {
    alert("oi");
}

/*ARROW FUNCTION COM ALERT DE BEM VINDO */
window.addEventListener("load", () => {
    alert("Bem-vindo ao Robotron 2000");
});

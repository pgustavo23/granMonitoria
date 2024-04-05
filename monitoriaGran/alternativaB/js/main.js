function trocarTema() {
    let trocarTema = document.getElementById('estilos');
    let textoBtn = document.getElementById('toggle-btn');

    if (trocarTema.getAttribute('href') === "css/styleLight.css"){
        textoBtn.innerText = "Alternar Modo Claro"
        trocarTema.setAttribute('href', "css/styleDark.css");
    } else {
        trocarTema.setAttribute('href', "css/styleLight.css");
        textoBtn.innerText = "Alternar Modo Escuro"
    }
}


function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // outra forma de fazer
    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }

    
    //pegar a tag img
    const img = document.querySelector("#profile img")

    //se tiver light mode adc a imagem light
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/perfil-luz.png')
    } 
    //se tiver sem light mode, manter a img normal
    else {
        img.setAttribute('src', './assets/perfil.png')
    }

}


function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#e5d1a9'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde!
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#a77264'
    } else {
        // Boa Noite!
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#0a456e'
    }
}

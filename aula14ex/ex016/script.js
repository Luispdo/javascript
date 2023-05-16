function contar()
    var c = 1
    var res = window.document.querySelector('div#res')
    while (c <= 10) {
        window.write(c)
        c++
    }
    res.innerHTML = `Contando: ${c}`
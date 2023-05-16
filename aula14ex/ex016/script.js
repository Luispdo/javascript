function contar() {
    var ini = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipasso')
    var res = window.document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        alert('TUDO OK!')
    }
    
    /*
    while (c <= 10) {
        window.write(c)
        c++
    }
    res.innerHTML = `Contando: ${c}`
    */
}

let num = document.querySelector('input#inum')
let lista = document.querySelector('select#ilista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        lista.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `Valor ${num} adicionado.`
            lista.appendChild(item)
        }


    } else {
        alert('[ERRO] Valor inválido ou já encontrado na lista.')

        /*
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `Valor ${num} adicionado.`
            tab.appendChild(item)
        }
        */
    }

}

/*
function finalizar() {

}*/
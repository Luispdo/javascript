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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('[ERRO] Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function contar() {

}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let cont = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores) {
            if (valores[pos] > maior)
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${cont} números cadastrados.</p>`
    }
    
    /*
    let cont = 

    cont.innerHTML = 
    maior.innerHTML = `O maior valor informado foi ${maior}.`
    menor.innerHTML = `O menor valor informado foi ${menor}.`
    soma.innerHTML = `Somando todos os valores, temos ${soma}.`
    media.innerHTML = `A média dos valores digitados é ${media}.`
*/



}
function calcular() {
    var num = document.getElementById('inum')
    var tab = document.getElementById('itabuada')
    
    if (num.value.length == 0) {
        alert('[ERRO] Insira um número para continuar!')
    } else {
        var n = Number(num.value)
        // var c = 1
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
        /*while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
        */

    }

   
}
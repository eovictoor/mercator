const produto = document.querySelector('#produto');
const preco = document.querySelector('#preco');
const enviar = document.querySelector('button');
const tabela = document.querySelector('table');

enviar.addEventListener('click', e => {
    e.preventDefault()

    if (preco.value == '' || produto.value == '') {
        return alert('DIGITE O PRODUTO E O PREÇO !!!')
    } else {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        tr.append(td1)
        tr.append(td2)
        tabela.append(tr)
        td1.innerHTML = produto.value
        td2.innerHTML = (`${preco.value} R$`)
    }
})
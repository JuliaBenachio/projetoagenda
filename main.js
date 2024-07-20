const form = document.getElementById('form-agenda');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaContato();
    atualizaTabela();
})

function adicionaContato () {
    const inputNome = document.getElementById('nome-cliente');
    const inputTelefone = document.getElementById('telefone-cliente');

    if (nomes.includes(inputNome.value)) {
        alert(`Esse nome já consta na lista`)
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTelefone);

        let linha ='<tr>';
        linha += `<td>${inputNome.value}`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
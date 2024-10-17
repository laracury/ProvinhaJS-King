// Seleciona os elementos do DOM
const input = document.getElementById('inItem');
const addButton = document.getElementById('btAdicionar');
const itemLista = document.getElementById('itemLista');

// Função para adicionar o item
addButton.addEventListener('click', function() {
    const itemTexto = input.value;

    if (itemTexto === '') {
        alert('Por favor, insira um item.');
        return;
    }

    // Criar um novo elemento <li>
    const novoItem = document.createElement('li');
    novoItem.textContent = itemTexto;

    // Criar o ícone de lixeira
    const lixeira = document.createElement('span');
    lixeira.innerHTML = '<i class="bi bi-trash3"></i>';
    lixeira.style.cursor = 'pointer';
    lixeira.style.marginLeft = '10px';
    
    // Função de clique para remover o item
    lixeira.addEventListener('click', function() {
        itemLista.removeChild(novoItem);
    });

    // Anexar a lixeira ao novo item
    novoItem.appendChild(lixeira);

    // Adicionar o item à lista
    itemLista.appendChild(novoItem);

    // Limpar o campo de entrada
    input.value = '';
});

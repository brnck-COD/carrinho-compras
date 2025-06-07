let totalGeral;

document.addEventListener('DOMContentLoaded', function(){
    totalGeral = 0;
    document.getElementById('valor-total').textContent = `R$${totalGeral}`;
    document.getElementById('lista-produtos').innerHTML = '';
});

function adicionar() {
    let produtoSelect = document.getElementById('produto');
    let quantidadeInput = document.getElementById('quantidade');
    let listaProdutos = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');

    let produtoSelecionado = produtoSelect.value;
    let quantidade = parseInt(quantidadeInput.value);

    if (isNaN(quantidade) || quantidade <= 0) {
            alert('Quantidade inválida. Por favor, insira um número maior que zero.');
            return; 
        }
    

    let nomeProduto = produtoSelecionado.split(' - ')[0];
    let precoUnitario = parseInt(produtoSelecionado.split(' - R$')[1]);

    let subtotal = quantidade * precoUnitario;

    listaProdutos.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>
    `;

          totalGeral += subtotal;
          valorTotal.textContent = `R$${totalGeral}`;

          quantidadeInput.value = 'R$0';
}

function limpar() {
    totalGeral = 0;
    document.getElementById('valor-total').textContent = 'R$0';
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('produto').selectedIndex = 0;
    document.getElementById('quantidade').value = '';
}
import { ProductCrud } from "./productCrud.js"

const productCrud = new ProductCrud()

console.log('MEUS PRODUTOS: ',productCrud.products);

function addProduct() {
    const productName = document.getElementById('productName').value
    const productPrice = document.getElementById('productPrice').value
    const productQtd = document.getElementById('productQtd').value

// Verifica se o nome do produto e o preço são válidos
if (productName && !isNaN(productPrice) && productQtd) {
    const newProduct = {
        id: productCrud.generateProductId(),
        name: productName,
        price: Number(productPrice),
        qtdEstoque: Number(productQtd),
    };

    // Adiciona o novo produto à lista
    productCrud.addProduct(newProduct);

    // Atualiza a tabela
    updateTable();

    //Limpa o formulário
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productQtd').value = '';  

    } else{
        alert('Por favor, preencha todos os campos!')
    }
}

function updateProduct() {
    console.log('Atualizar produto');
}

function deleteProduct() {
    console.log('Excluir produto');
}


//Função para atualizar e listar tabela com produtos.
function updateTable(){
    const tableBody = document.querySelector('#productTable tbody')

    //Garantir que a tabela esteja vazia
    tableBody.innerHTML = ''


    //Obter todos os produtos.
    const products = productCrud.getAllProducts()
    products.forEach(product => {
        const row = document.createElement('tr')

        //Formatar para unidade monetária BRL.
        const formatter = new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL'
        })


        row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${formatter.format(product.price)}</td>
        <td>${product.qtdEstoque}</td>
        <td id="actions">

            <button type ="button" onclick="updateProduct(${product.id})">Editar</button>
            <button type ="button" onclick="deleteProduct(${product.id})">Excluir</button>
        </td>
    `
    tableBody.appendChild(row)

    })
}

updateTable();

const btnForm = document.getElementById('productForm');
btnForm.addEventListener('submit', function (event) {
    // Previne o envio padrão do formulário
    event.preventDefault();
    // Chama a função addProduct diretamente do escopo do módulo
    addProduct();
});
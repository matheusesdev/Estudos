import { ProductCrud } from "./productCrud.js"

const productCrud = new ProductCrud()

console.log('MEUS PRODUTOS: ',productCrud.products);

function addProduct() {
    console.log('Criar produto');
}

function updateProduct() {
    console.log('Atualizar produto');
}

function deleteProduct() {
    console.log('Excluir produto');
}


//Função para atualizar e listar tabela com produtos.
function updateTable(){
    const tableBody = document.querySelector('#productTable')

    //Obter todos os produtos.
    const products = productCrud.getAllProducts()
    console.log(products);

    products.forEach(product => {
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.qtdEstoque}</td>
        <td id="actions">

            <button type = "button" onclick="updateProduct(${product.id})">Editar</button>
            <button type = "button" onclick="deleteProduct(${product.id})">Excluir</button>


        </td>
    `
    tableBody.appendChild(row)

    })
}

updateTable()
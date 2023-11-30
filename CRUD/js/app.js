import { ProductCrud } from "./productCrud.js"

const productCrud = new ProductCrud()

console.log('MEUS PRODUTOS: ',productCrud.products);

function addProduct() {
    const productName = document.getElementById('productName').value
    const productPrice = document.getElementById('productPrice').value
    const productQtd = document.getElementById('productQtd').value

    console.log('name', productName0);
    console.log('price', productPrice);
    console.log('Qtd', productQtd);
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

updateTable()

const btnForm = document.getElementById('productForm')
btnForm.addEventListener('submit', function(event){

    //Previne o envio padrão do formulário
    event.preventDefault()

    //Chamar função e adicionar produto

    addProduct()
})
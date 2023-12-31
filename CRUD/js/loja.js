import { ProductCrud } from './productCrud.js';

const productCrud = new ProductCrud()
const NUMBER_WHATSAPP = '5577988888888'

//Função para atualizar a e lsita tabela com produtos.

function updateTable(){
    const tableBody =  document.querySelector('#productTable tbody')
    //Garantir que a tabela esteja vazia
    tableBody.innerHTML = ""
    
 //Obter todos os produtos
 const products = productCrud.getAllProducts()
 products.forEach(product => {
     const row = document.createElement('tr')

     //Formatar para unidade monetária BRL
     const formatter = new Intl.NumberFormat('pt-BR', {
         style: 'currency',
         currency: 'BRL'
     })

     row.innerHTML = `
     <td>${product.id}</td>
     <td>${product.name}</td>
     <td>${formatter.format(product.price)}</td>
     <td>${product.qtdEstoque}</td>
     `

     row.innerHTML += product.qtdEstoque > 0 
     ? `<td id="btnZap"><a target="_blank" href="https://api.whatsapp.com/send?phone=${NUMBER_WHATSAPP}&text=Olá você gostaria de realizar o pedido do produto: ${product.name}">Realizar Pedido <i style="color: #75e901" class="fa-brands fa-whatsapp"></i></a></td>`
     : `<td id="btnZap"><a href="#">Realizar Pedido <i style="color: #75e901" class="fa-brands fa-whatsapp"></i></a></td>`
     
     tableBody.appendChild(row)
 })
}

updateTable()

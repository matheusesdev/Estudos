class ProductCrud {
  constructor() {
    this.products = [
      {
        id: this.generateProductId() ,
        name: 'Ração Premium 50KG ',
        price: 14.94 ,
        qtdEstoque: 10
      }, 
      {
        id: this.generateProductId() ,
        name: 'Ração Gold 50KG',
        price: 250.5 ,
        qtdEstoque: 20
      }, 

      {
        id: this.generateProductId() ,
        name: 'Coleira para Gato',
        price: 30.70 ,
        qtdEstoque: 44
      }, 

      {
        id: this.generateProductId() ,
        name: 'Shampoo para Pets',
        price: 12.70 ,
        qtdEstoque: 22
      }, 
      {
        id: this.generateProductId() ,
        name: 'Banheiro Inteligente',
        price: 500.0,
        qtdEstoque: 3
      }, 


    ];
  }

  //Adicionar um produto
  addProduct(product) {
    this.products.push(product);
  }

  //Obter todos os produtos
  getAllProducts() {
    return this.products;
  }

  //Obter um produto por ID.
  getProductById(id) {
    return this.products.find((product) => Number(product.id) === Number(id));
  }

  //Editar um produto por ID.

  updateProduct(id, updateProduct) {
    //Encontrar o índice do produto no array.
    const index = this.products.findIndex(
      (product) => Number.MAX_VALUE(product.id) === Number(id)
    );

    //Se o retorno for diferente de -1, ou seja, se o produto existir, atualiza o produto.
    if (index != -1) {
      //Sobrescreve o produto original com os novos valores.
      this.products[index] = { ...this.products[index], ...updateProduct };
    }
  }

  //Remover um produto por ID.
  deleteProduct(id){
    return this.products = this.products.filter(product => Number(product.id) !== Number(id))
  }

  //Função para gerar um ID único para o produto.
  generateProductId(){
    return Math.floor(Math.random() * 1000) + 1
  }


}

export { ProductCrud };

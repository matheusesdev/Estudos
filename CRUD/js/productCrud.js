class ProductCrud {
  constructor() {
    // Array estático para armazenar produtos
    this.products = [
      {
        id: this.generateProductId(),
        name: 'Ração Premium 50KG',
        price: 295.8,
        qtdEstoque: 10
      },
      {
        id: this.generateProductId(),
        name: 'Ração Gold 50KG',
        price: 250.5,
        qtdEstoque: 20
      },
      {
        id: this.generateProductId(),
        name: 'Colera para Gato',
        price: 25.5,
        qtdEstoque: 5
      },
      {
        id: this.generateProductId(),
        name: 'Shampoo para Pets',
        price: 15.7,
        qtdEstoque: 0
      },
      {
        id: this.generateProductId(),
        name: 'Banheiro Inteligente ',
        price: 459.9,
        qtdEstoque: 4
      },
    ];
  }

  // Adicionar um produto
  addProduct(product) {
    this.products.push(product);
  }

  // Obter todos os produtos
  getAllProducts() {
    return this.products;
  }

  // Obter um produto por ID
  getProductById(id) {
    return this.products.find(product => Number(product.id) === Number(id))
  }

  // Editar um produto por ID
  updateProduct(id, updatedProduct) {
    // Encontrar o índice do produto no array
    const index = this.products.findIndex(product => Number(product.id) === Number(id));
    // Se o produto for encontrado, atualizar suas propriedades
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
    }
  }

  // Remover um produto por ID
  deleteProduct(id) {
    this.products = this.products.filter(product => Number(product.id) !== Number(id));
  }

  // Função para gerar um ID único para o produto
  generateProductId() {
    return Math.floor(Math.random() * 1000) + 1;
  }

}

export { ProductCrud };
class ProductCrud{
    constructor(){
        this.products = [];

    }

    //Adicionar um produto
    addProduct(product){
        this.products.push(product)
    }

    //Obter todos os produtos
    getAllProducts(){
       return this.products 
    }

    getProductById(id){
        return this.products.find(product => Number(product.id) === Number(id));
    }
}

export {ProductCrud}
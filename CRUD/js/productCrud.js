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

    //Editar um produto por ID.
    
    updateProduct(id, updateProduct){
        //Encontrar o índice do produto no array.
        const index = this.products.findIndex(product => Number.MAX_VALUE(product.id) === Number(id));

        //Se o retorno for diferente de -1, ou seja, se o produto existir, atualiza o produto.
        if(index != -1){
            //Sobrescreve o produto original com os novos valores.
            this.products[index] = {...this.products[index], ...updateProduct}
        }

    }




}

export {ProductCrud}
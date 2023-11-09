import Product from '../dao/dbManagers/products.manager.js';

const productsManager = new Product();


const getProductsService = async(limit, page, sort, query) => {
    const products = await productsManager.getAll(limit, page, sort, query);
    return products
}

const getProductIdService = async(id) =>{

    const product = await productsManager.getById(id);
    return product;

}

const addProductService = async (title, description, price,stock) => {
    const result = await productsManager.save({
        title,
        description,
        price,
        stock
    });
    return result;
}

const updateProductService = async(id, title, description, price, stock ) =>{
    const result = await productsManager.update(id, {
        title,
        description,
        price,
        stock
    });
    return result;
}

export {
    getProductsService,
    getProductIdService,
    addProductService,
    updateProductService
}
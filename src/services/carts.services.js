import Carts from '../dao/dbManagers/carts.manager.js';

const cartsManager = new Carts();

const getCartService= async (cid) =>{
    const cart = await cartsManager.getArray(cid);
    return cart;

}

const addCartService = async() =>{
    const result = await cartsManager.save();
    return result;
}

const updateCartService =  async(cid, product) =>{

    const result = await cartsManager.update(cid, {products: product});
    return result;
}

export { getCartService,
        updateCartService,
        addCartService
    }
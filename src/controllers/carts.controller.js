import { getCartService, updateCartService, addCartService } from '../services/carts.services.js';
import { getProductIdService } from '../services/products.services.js';

const getCart = async (req, res) => {

    const {cid} = req.params;
    try{
        const carts = await getCartService(cid);
        res.send({status: 'sucess', payload: carts});
    }catch(error){
        res.status(500).send({status: 'error', error: error.message})
    }

};

const addCartProduct = async (req, res) => {
    try {
        const cid = req.params.cid;
        const pid = req.params.pid;
        const { quantity } = req.body;

        const cart = await getCartService(cid)
        const product = await getProductIdService(pid);

        if(cart){


            if (product) {
                const existingProduct = cart.products.find(item => item.id === pid);
                if (existingProduct) {

                    existingProduct.quantity += quantity || 1;
                } else {

                    cart.products.push({ product: pid, quantity: quantity || 1 });
                }
        }

     }


    const result = await updateCartService(cid, cart.products);
    
    res.status(201).send({status: 'sucess', payload: result}); 


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'ERROR AL AGREGAR EL PRODUCTO' });
    }
};


const updateCartProduct =  async (req, res) => {
    try {
        const cid = req.params.cid;
        const pid = req.params.pid;
        const { quantity } = req.body;

        const cart = await getCartService(cid)
        const product = await getProductIdService(pid);


        if(cart && product){

            const existingProduct = cart.products.find(item => item.id === pid);
            if (existingProduct) {

                existingProduct.quantity += quantity || 1;
            }

     }


    const result = await updateCartService(cid, cart.products);
    
    res.status(201).send({status: 'sucess', payload: result}); 


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'ERROR AL AGREGAR EL PRODUCTO' });
    }
};

const deleteCartProduct = async (req, res) => {
    try {
        const cid = req.params.cid;
        const pid = req.params.pid;

        const cart = await getCartService(cid)
        const product = await getProductIdService(pid);


        if(cart && product){

            cart.products = cart.products.filter(item => item.id !== pid);
            const result = await updateCartService(cid, cart.products);
            
            res.status(201).send({status: 'sucess', payload: result}); 
        }else{
            res.status(404).json({ error: 'NO SE ENCONTRO PRODUCTO O CARRITO' });
        }
        

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'ERROR AL ELIMINAR EL PRODUCTO' });
    }
};

const addCart = async (req, res) =>{
    
    try{
        const result = await addCartService();
        res.status(201).send({status: 'sucess', payload: result}); 

    }catch(error){
        res.status(500).send({status: 'error', error: error.message})
    }
};


const deleteCart = async (req, res) => {
    try {
        const cid = req.params.cid;

        const cart = await getCartService(cid)

        if(cart){

            cart.products = [];
            const result = await updateCartService(cid, cart.products);
            
            res.status(201).send({status: 'sucess', payload: result}); 
        }else{
            res.status(404).json({ error: 'NO SE ENCONTRO PRODUCTO O CARRITO' });
        }
        

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'ERROR AL ELIMINAR EL PRODUCTO' });
    }
};


export {
    getCart,
    addCartProduct,
    updateCartProduct,
    addCart,
    deleteCartProduct,
    deleteCart
}
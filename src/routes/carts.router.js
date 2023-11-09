import { Router } from "express";
import { getCart, addCart, addCartProduct, updateCartProduct, deleteCart, deleteCartProduct} from "../controllers/carts.controller.js";


const router = Router();



router.get('/:cid', getCart);

router.post('/', addCart);

router.post("/:cid/products/:pid", addCartProduct);


router.put("/:cid/products/:pid", updateCartProduct);

router.delete("/:cid/products/:pid", deleteCartProduct);
router.delete("/:cid", deleteCart);

export default router;
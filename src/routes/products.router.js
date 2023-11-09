import { Router } from "express";
import { getProducts, getProductId, addProduct, updateProduct } from "../controllers/products.controller.js";

const router = Router();


router.get('/', getProducts);

router.get('/:id',getProductId);

router.post('/', addProduct);

router.put('/:id', updateProduct);

export default router;
import express from 'express';
import { ShopController } from './shop.controller';

const router = express.Router();

router.post('/create-shop', ShopController.createShop);
router.get('/', ShopController.getShops);
router.get('/:id', ShopController.getSingleShop);
router.patch('/:id', ShopController.updateShop);
router.delete('/:id', ShopController.deleteShop);

export const shopRoutes = router;

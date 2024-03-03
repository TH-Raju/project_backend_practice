import express from 'express';
import { ShopController } from './shop.controller';

const router = express.Router();

router.post('/create-shop', ShopController.createShop);
router.get('/', ShopController.getShops);
router.patch('/:id', ShopController.updateShop);

export const shopRoutes = router;

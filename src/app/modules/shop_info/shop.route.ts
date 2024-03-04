import express from 'express';
import { ShopController } from './shop.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ShopValidation } from './shop.validation';

const router = express.Router();

router.post(
  '/create-shop',
  validateRequest(ShopValidation.shopZodSchema),
  ShopController.createShop,
);
router.get('/', ShopController.getShops);
router.get('/:id', ShopController.getSingleShop);
router.patch(
  '/:id',
  validateRequest(ShopValidation.updateShopZodSchema),
  ShopController.updateShop,
);
router.delete('/:id', ShopController.deleteShop);

export const shopRoutes = router;

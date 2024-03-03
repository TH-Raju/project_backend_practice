import httpStatus from 'http-status';
import { IShop } from './shop.interface';
import { Shop } from './shop.model';
import ApiError from '../../../errors/ApiError';

const createShopToDB = async (shop: IShop): Promise<IShop | null> => {
  const createShop = await Shop.create(shop);
  if (!createShop) {
    throw new ApiError(httpStatus.FAILED_DEPENDENCY, 'Failed to create shop');
  }
  return createShop;
};

export const ShopService = {
  createShopToDB,
};

import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { ShopService } from './shop.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createShop = catchAsync(async (req: Request, res: Response) => {
  const shop = req.body;
  const result = await ShopService.createShopToDB(shop);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Shop created successfully',
    data: result,
  });
});

const getShops = catchAsync(async (req: Request, res: Response) => {
  const result = await ShopService.getShopsFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Shops fetched successfully',
    data: result,
  });
});

const updateShop = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const shop = req.body;
  const result = await ShopService.updateShopFromDB(id, shop);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Shop updated successfully',
    data: result,
  });
});

export const ShopController = {
  createShop,
  getShops,
  updateShop,
};

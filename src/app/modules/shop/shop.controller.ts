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

export const ShopController = {
  createShop,
};

import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { SurpriseBagService } from './surprise.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSurprise = catchAsync(async (req: Request, res: Response) => {
  const surprise = req.body;
  const result = await SurpriseBagService.createSurpriseBagToDB(surprise);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Surprise Bag created successfully',
    data: result,
  });
});

export const SurpriseBagController = {
  createSurprise,
};

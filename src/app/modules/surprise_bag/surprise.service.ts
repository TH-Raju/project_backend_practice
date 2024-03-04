import ApiError from '../../../errors/ApiError';
import { ISurpriseBag } from './surprise.interface';
import { SurpriseBag } from './surprise.model';

const createSurpriseBagToDB = async (
  bag: ISurpriseBag,
): Promise<ISurpriseBag | null> => {
  const surpriseBag = await SurpriseBag.create(bag);
  if (!surpriseBag) {
    throw new ApiError(400, 'Failed to create surprise bag');
  }
  return surpriseBag;
};

export const SurpriseBagService = {
  createSurpriseBagToDB,
};

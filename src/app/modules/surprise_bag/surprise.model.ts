import { Schema, model } from 'mongoose';
import { ISurpriseBag } from './surprise.interface';

const surpriseBagSchema = new Schema({
  shopId: { type: Schema.Types.ObjectId, required: true },
  shop_categoryId: { type: Schema.Types.ObjectId },
  userId: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  bagNo: { type: String, required: true },
  validation: { type: String, required: true },
  pickUpHour: { type: String, required: true },
  pricing: { type: String, required: true },
  deliveryCharge: { type: String, required: true },
  description: { type: String, required: true },
  foodCategory: { type: String, required: true },
  orderStatus: { type: String, required: true },
  qrCode: { type: String, required: true },
});

export const SurpriseBag = model<ISurpriseBag>(
  'SurpriseBag',
  surpriseBagSchema,
);

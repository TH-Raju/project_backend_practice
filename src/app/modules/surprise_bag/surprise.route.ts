import express from 'express';
import { SurpriseBagController } from './surprise.controller';
import validateRequest from '../../middlewares/validateRequest';
import { SurpriseValidation } from './surprise.validation';

const router = express.Router();

router.post(
  '/create-surprise',
  validateRequest(SurpriseValidation.surpriseZodSchema),
  SurpriseBagController.createSurprise,
);

export const surpriseBagRoutes = router;

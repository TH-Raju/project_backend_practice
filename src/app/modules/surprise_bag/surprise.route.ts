import express from 'express';
import { SurpriseBagController } from './surprise.controller';

const router = express.Router();

router.post('/create-surprise', SurpriseBagController.createSurprise);

export const surpriseBagRoutes = router;

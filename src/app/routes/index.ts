import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { shopRoutes } from '../modules/shop/shop.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/shops',
    route: shopRoutes,
  },
];

// router.use('/users', userRoutes);
// router.use('/academic-semester', AcademicSemesterRoutes);
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;

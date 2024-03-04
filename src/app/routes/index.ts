import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { shopRoutes } from '../modules/shop_info/shop.route';
import { surpriseBagRoutes } from '../modules/surprise_bag/surprise.route';

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
  {
    path: '/surprise-bag',
    route: surpriseBagRoutes,
  },
];

// router.use('/users', userRoutes);
// router.use('/academic-semester', AcademicSemesterRoutes);
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;

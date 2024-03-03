import express from 'express';
import { userRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
];

// router.use('/users', userRoutes);
// router.use('/academic-semester', AcademicSemesterRoutes);
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;

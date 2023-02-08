import { Router } from 'express';
import * as homeController from '../controllers/homeController';

const router = Router();

// Home routes
router.get('/', homeController.index);

export default router;

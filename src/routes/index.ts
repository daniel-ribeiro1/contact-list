import { Router } from 'express';

import { home, contact } from '../controllers/PageController';

const router = Router();

router.get('/', home); 
router.get('/contact', contact);

export default router;
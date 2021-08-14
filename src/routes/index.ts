import { Router } from 'express';

import { home, contact, addContact } from '../controllers/PageController';

const router = Router();

router.get('/', home); 
router.get('/contact', contact);
router.get('/add-contact', addContact);

export default router;
import { Router } from 'express';
import { addContactAction } from '../controllers/ContactController';

import { home, contact, addContact } from '../controllers/PageController';

const router = Router();

router.get('/', home); 
router.get('/contact', contact);

router.get('/add-contact', addContact);
router.post('/add-contact', addContactAction);

export default router;
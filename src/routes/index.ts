import { Router } from 'express';

import { addContactAction, addContactToFavorites, removeContactAction, removeContactFromFavorites, updateContactAction } from '../controllers/ContactController';
import { home, contact, addContact } from '../controllers/PageController';

const router = Router();

router.get('/', home); 
router.get('/contact', contact);

router.get('/add-contact', addContact);
router.post('/add-contact', addContactAction);
router.get('/remove-contact', removeContactAction);
router.post('/contact', updateContactAction);

router.get('/add-to-favorites', addContactToFavorites);
router.get('/remove-from-favorites', removeContactFromFavorites);

export default router;
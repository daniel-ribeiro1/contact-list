import { Request, Response } from 'express';
import { Contact } from '../models/Contact';

export async function home(req: Request, res: Response) {
    const contacts = await Contact.findAll({
        order: [
            ['name', 'ASC'],
        ]
    });
    const favorites = [];

    for(let contact of contacts) {
        if(contact.favorite) {
            favorites.unshift(contact);
        }
    }

    res.render('home', { contacts, favorites });
};

export async function contact(req: Request, res: Response) {
    const id = req.query.id;

    const contact = await Contact.findOne({
        where: {
            id
        }
    });

    if(!contact) {
        res.redirect('/');
        return;
    }

    res.render('contact', { contact });
}

export function addContact(req: Request, res: Response) {
    res.render('addContact');
}

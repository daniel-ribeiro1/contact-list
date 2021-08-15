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

    res.render('home', { contacts, favorites});
};

export function contact(req: Request, res: Response) {
    res.render('contact');
}
export function addContact(req: Request, res: Response) {
    res.render('addContact');
}

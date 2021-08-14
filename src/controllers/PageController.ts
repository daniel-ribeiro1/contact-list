import { Request, Response } from 'express';

export function home(req: Request, res: Response) {
    res.render('home');
};

export function contact(req: Request, res: Response) {
    res.render('contact');
}

export function addContact(req: Request, res: Response) {
    res.render('addContact');
}

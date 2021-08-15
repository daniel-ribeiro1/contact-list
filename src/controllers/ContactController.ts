import { Request, Response } from "express";
import { Contact, ContactInstance } from "../models/Contact";

export async function addContactAction(req: Request, res: Response) {
    let name: string = req.body.name;
    let phone: string = req.body.phone;
    let avatar: string = req.body.avatar ?? '';

    if(!name || !phone) {
        return;
    }

    await Contact.create({
        name,
        phone,
        avatar
    });

    res.redirect('/');
}
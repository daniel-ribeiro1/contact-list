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

export async function updateContactAction(req: Request, res: Response) {
    const id = req.body.id;
    let newName = req.body.name;
    let newPhone = req.body.phone;

    const contact = await Contact.findOne({
        where: {
            id
        }
    })

    if(!contact) {
        res.redirect('/');
        return;
    }

    if(!newPhone || !newName) {
        res.redirect('/contact?id=' + id);
        return;
    }

    contact.name = newName;
    contact.phone = newPhone;
    await contact.save();

    res.redirect('/contact?id=' + id);
}

export async function removeContactAction(req: Request, res: Response) {
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

    await contact.destroy();
    res.redirect('/');
}

export async function addContactToFavorites(req: Request, res: Response) {
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

    contact.favorite = true;
    await contact.save();

    res.redirect('/');
}

export async function removeContactFromFavorites(req: Request, res: Response) {
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

    contact.favorite = false;
    await contact.save();

    res.redirect('/'); 
}
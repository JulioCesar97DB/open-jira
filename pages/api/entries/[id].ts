import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data =
    | { message: string }
    | IEntry;


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: 'El id no es valido' + id })
    }

    switch (req.method) {
        case 'GET':
            return getEntry(req, res);

        case 'DELETE':
            return deleteEntry(req, res);

        case 'PUT':
            return updateEntry(req, res);


        default:
            return res.status(400).json({ message: 'Metodo no existe' });
    }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query;

    await db.connect();
    const entryToReturn = await Entry.findById(id);
    await db.disconnect();

    if (!entryToReturn) {
        return res.status(400).json({ message: 'No hay entrada con ese ID: ' + id })
    } else {
        return res.status(200).json(entryToReturn);
    }
}

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query;

    await db.connect();
    const entryToDelete = await Entry.findByIdAndDelete(id);
    await db.disconnect();

    if (!entryToDelete) {
        return res.status(400).json({ message: 'No hay entrada con ese ID: ' + id })
    } else {
        return res.status(200).json({ message: 'Successfully removed' });
    }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query;

    await db.connect();

    const entryToUpdate = await Entry.findById(id);
    if (!entryToUpdate) {
        return res.status(400).json({ message: 'No hay entrada con ese ID: ' + id })
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status,
    } = req.body;

    try {
        const updateEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true })
        await db.disconnect();
        res.status(200).json(updateEntry!)
        // entryToUpdate.description = description;
        // entryToUpdate.status = status;
        // await entryToUpdate.save();
    } catch (error) {
        console.log({ error })
        await db.disconnect();
        res.status(400).json({ message: 'bad request' })
    }
}
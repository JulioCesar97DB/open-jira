<<<<<<< HEAD
import { isValidObjectId } from "mongoose"
import { db } from "./";
import { Entry, IEntry } from "../models";


export const getEntryById = async (id: string): Promise<IEntry | null> => {

    if (!isValidObjectId(id)) return null;

    await db.connect();
    const entry = await Entry.findById(id).lean();
    await db.disconnect();


    return JSON.parse(JSON.stringify(entry));
}
=======
// import { isValidObjectId } from "mongoose"
// import { db } from "./";
// import { Entry, IEntry } from "../models";


// export const getEntryById = async( id: string): Promise<IEntry | null> => {

//     if(!isValidObjectId(id)) return null;

//     await db.connect();
//     const entry = await Entry.findById(id).lean();
//     await db.disconnect();


//     return JSON.parse(JSON.stringify(entry));    
// }
>>>>>>> 3540f0b1bcf68cfbf0511f50b42b4f52a08aa6e4

import { FC, useReducer, PropsWithChildren } from 'react';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pending: Lorem ipsum dolor sit amet consectetur',
            status: 'pending',
            createdAt: Date.now(),
            
        },
        {
            _id: uuidv4(),
            description: 'In-Progress: Adipisicing elit. Eveniet maiores eius eos',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
            
        },
        {
            _id: uuidv4(),
            description: 'Eveniet maiores eius eos. Eligendi cupiditate dolorem modi quo reiciendis vel maiores tempora architecto odio non',
            status: 'finished',
            createdAt: Date.now() - 100000,
            
        },
    ],
}

export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    return (
        <EntriesContext.Provider value={{
            ...state,
        }}>
            { children }
        </EntriesContext.Provider>
    )
}